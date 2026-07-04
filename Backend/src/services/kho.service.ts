import { prisma } from '../lib/prisma';
import { LoaiGiaoDich } from '../../generated/prisma';
import { tinhTrangThaiSach } from './sach.service';

// ============================================================
// SERVICE: KHO — dịch trực tiếp từ Hình 10 (sequence nghiệp vụ)
// Thứ tự message trong sơ đồ = thứ tự lệnh trong transaction:
//   msg 2: kiemTra(maSach) → msg 7: kiemTra(maKho)
//   → msg 9: nhapKho(maKho, maSach, SL) → msg 10: Hoàn tất giao dịch
// ============================================================

export async function nhapKho(input: {
  maKho: string;
  maSach: string;
  maNV: string;
  soLuong: number;
  viTriKe?: string;
  ghiChu?: string;
}) {
  const { maKho, maSach, maNV, soLuong, viTriKe, ghiChu } = input;
  if (soLuong <= 0) throw new Error('Số lượng phải > 0');

  // $transaction = "Hoàn tất giao dịch" (msg 10): tất cả cùng thành công
  // hoặc tất cả cùng rollback — không có chuyện ghi giao dịch mà quên tồn kho
  return prisma.$transaction(async (tx) => {
    // msg 2: kiemTra(maSach) — alt [Không hợp lệ] → báo lỗi
    const sach = await tx.sach.findUnique({ where: { maSach } });
    if (!sach) throw new Error('Sách không hợp lệ');

    // msg 7: kiemTra(maKho)
    const kho = await tx.khoHang.findUnique({ where: { maKho } });
    if (!kho) throw new Error('Kho không hợp lệ');

    // msg 9: ghi giao dịch NHẬP
    const giaoDich = await tx.giaoDichKho.create({
      data: { maKho, maSach, maNV, soLuong, ghiChu, loaiGD: LoaiGiaoDich.NHAP },
    });

    // Cập nhật tồn kho: có rồi thì cộng dồn, chưa có thì tạo mới (upsert)
    // Lưu luôn vị trí kệ (viTriKe) — nếu người dùng nhập thì cập nhật
    const tonKho = await tx.tonKho.upsert({
      where: { maKho_maSach: { maKho, maSach } }, // khóa phức hợp!
      update: {
        soLuong: { increment: soLuong },
        ...(viTriKe ? { viTriKe } : {}),
      },
      create: { maKho, maSach, soLuong, viTriKe: viTriKe ?? null },
    });

    // Áp dụng state machine Hình 8: Không bán --Nhập về--> Còn hàng,
    // hoặc --[Nhập hàng]--> Tồn kho quá mức
    const tong = await tx.tonKho.aggregate({
      where: { maSach },
      _sum: { soLuong: true },
    });
    const trangThaiMoi = tinhTrangThaiSach(
      tong._sum.soLuong ?? 0,
      tonKho.nguongMax,
    );
    await tx.sach.update({
      where: { maSach },
      data: { trangThai: trangThaiMoi },
    });

    return { giaoDich, tonKho, trangThaiSach: trangThaiMoi };
  });
}

// Danh sách toàn bộ kho (cho trang Kho ở frontend)
// Kèm tồn kho để frontend tính tổng số lượng & trạng thái kho
export async function danhSachKho() {
  return prisma.khoHang.findMany({
    orderBy: { tenKho: 'asc' },
    include: { tonKho: { select: { soLuong: true } } },
  });
}

// Hình 10, msg 11: theoDoiTonKho() → msg 12: danh sách tồn kho
export async function theoDoiTonKho(maKho: string) {
  const danhSach = await prisma.tonKho.findMany({
    where: { maKho },
    include: { sach: { select: { tenSach: true, trangThai: true } } },
  });

  // Đánh dấu cảnh báo dưới ngưỡng min / vượt ngưỡng max
  return danhSach.map((t) => ({
    ...t,
    canhBao:
      t.soLuong < t.nguongMin
        ? 'DUOI_NGUONG_MIN'
        : t.nguongMax > 0 && t.soLuong > t.nguongMax
          ? 'VUOT_NGUONG_MAX'
          : null,
  }));
}
