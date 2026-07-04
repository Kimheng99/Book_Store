import { prisma } from '../lib/prisma';
import { TrangThaiSach } from '../../generated/prisma';

// ============================================================
// SERVICE: SÁCH — dịch từ Hình 9/10 (sequence) + Hình 8 (state)
// ============================================================

// Hình 10, msg 4: nhapSach(tenSach, tacGia, NXB, giaNhap, giaSach)
// State diagram: sách mới tạo ở trạng thái KHONG_BAN (chưa nhập về kho).
// ⭐ Cho phép nhập luôn tồn kho ban đầu (vd: tonKho = 20) + ảnh bìa.
//    Nếu có tồn kho > 0 → tự động chuyển trạng thái sang CON_HANG (state machine).
export async function nhapSach(data: {
  tenSach: string;
  tacGia: string;
  nxb: string;
  giaNhap: number;
  giaSach: number;
  anhBia?: string | null;
  tonKho?: number; // số lượng tồn kho ban đầu
}) {
  const { tonKho = 0, anhBia, ...thongTin } = data;

  return prisma.$transaction(async (tx) => {
    // Tính trạng thái ban đầu dựa trên tồn kho nhập vào (Hình 8)
    const trangThai =
      tonKho > 0 ? TrangThaiSach.CON_HANG : TrangThaiSach.KHONG_BAN;

    const sach = await tx.sach.create({
      data: { ...thongTin, anhBia: anhBia ?? null, trangThai },
    });

    // Nếu có tồn kho ban đầu → lưu vào một kho mặc định
    if (tonKho > 0) {
      // Tìm kho mặc định, chưa có thì tạo (TonKho cần khóa maKho + maSach)
      let kho = await tx.khoHang.findFirst({ orderBy: { tenKho: 'asc' } });
      if (!kho) {
        kho = await tx.khoHang.create({
          data: { tenKho: 'Kho mặc định', diaChi: 'N/A' },
        });
      }
      await tx.tonKho.create({
        data: { maKho: kho.maKho, maSach: sach.maSach, soLuong: tonKho },
      });
    }

    return sach;
  });
}

// Danh sách toàn bộ sách (cho trang Sách ở frontend)
// Kèm tồn kho để frontend tính tổng số lượng có sẵn
export async function danhSachSach() {
  return prisma.sach.findMany({
    orderBy: { tenSach: 'asc' },
    include: { tonKho: { select: { soLuong: true } } },
  });
}

// Hình 10, msg 13: xemThongTinSach(maSach)
export async function xemThongTinSach(maSach: string) {
  const sach = await prisma.sach.findUnique({
    where: { maSach },
    include: { tonKho: { include: { khoHang: true } } },
  });
  if (!sach) throw new Error('Không tìm thấy sách'); // msg 3: Không hợp lệ
  return sach;
}

// Hình 10, msg 15: chinhSuaThongTinSach(tenSach, tacGia, NXB, giaNhap, giaBan)
export async function chinhSuaThongTinSach(
  maSach: string,
  data: Partial<{
    tenSach: string;
    tacGia: string;
    nxb: string;
    giaNhap: number;
    giaSach: number;
  }>,
) {
  await xemThongTinSach(maSach); // kiemTra(maSach) trước khi sửa
  return prisma.sach.update({ where: { maSach }, data });
}

// Hình 10, msg 17: xoaSach()
// Nếu sách đã có giao dịch/đơn hàng thì KHÔNG xóa vật lý (mất dữ liệu
// thống kê UC3) mà chuyển sang NGUNG_BAN — đúng trạng thái kết thúc Hình 8
export async function xoaSach(maSach: string) {
  const soLienKet = await prisma.chiTietDonHang.count({ where: { maSach } });
  const soGiaoDich = await prisma.giaoDichKho.count({ where: { maSach } });

  if (soLienKet > 0 || soGiaoDich > 0) {
    return prisma.sach.update({
      where: { maSach },
      data: { trangThai: TrangThaiSach.NGUNG_BAN },
    });
  }
  // Xóa vật lý: gỡ các dòng tồn kho trước (khóa ngoại RESTRICT) rồi xóa sách.
  // Sách chưa từng bán/giao dịch nên tồn kho chỉ là số dư khởi tạo, xóa an toàn.
  return prisma.$transaction(async (tx) => {
    await tx.tonKho.deleteMany({ where: { maSach } });
    return tx.sach.delete({ where: { maSach } });
  });
}

// ============================================================
// STATE MACHINE (Hình 8): tính trạng thái mới của sách
// dựa trên tổng tồn kho và ngưỡng max
// ============================================================
export function tinhTrangThaiSach(
  tongTon: number,
  nguongMax: number,
): TrangThaiSach {
  if (tongTon <= 0) return TrangThaiSach.HET_HANG;          // [Bán hết]
  if (nguongMax > 0 && tongTon > nguongMax)
    return TrangThaiSach.TON_KHO_QUA_MUC;                    // [Nhập hàng khi không bán hết]
  return TrangThaiSach.CON_HANG;                             // Nhập về / còn hàng
}
