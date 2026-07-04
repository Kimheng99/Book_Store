import { prisma } from '../lib/prisma';
import { TrangThaiSach, TrangThaiDonHang } from '../../generated/prisma';

// ============================================================
// SERVICE: ĐƠN HÀNG — dịch từ Hình 13 (sequence tạo đơn hàng)
// ============================================================

type ChiTietInput = { maSach: string; soLuong: number };

// Hình 13: tạo đơn hàng(chiTietDonHang)
export async function taoDonHang(maNV: string, chiTiet: ChiTietInput[]) {
  // "kiểm tra thông tin và điều kiện đơn hàng()"
  // alt [Thông tin đơn hàng không hợp lệ] → "Yêu cầu nhập lại đơn hàng"
  if (!chiTiet || chiTiet.length === 0)
    throw new Error('Đơn hàng phải có ít nhất 1 sách. Yêu cầu nhập lại.');
  if (chiTiet.some((c) => c.soLuong <= 0))
    throw new Error('Số lượng mỗi sách phải > 0. Yêu cầu nhập lại.');

  return prisma.$transaction(async (tx) => {
    let tongTien = 0;
    const items: { maSach: string; soLuong: number; donGia: number }[] = [];

    // "Loop: mã sách trong chiTietDonHang" (Hình 13)
    for (const ct of chiTiet) {
      // msg: "lấy giá sách(mã sách)" → trả về "giá sách"
      const sach = await tx.sach.findUnique({ where: { maSach: ct.maSach } });
      if (!sach) throw new Error(`Sách ${ct.maSach} không tồn tại`);
      if (
        sach.trangThai === TrangThaiSach.NGUNG_BAN ||
        sach.trangThai === TrangThaiSach.HET_HANG ||
        sach.trangThai === TrangThaiSach.KHONG_BAN
      )
        throw new Error(`Sách "${sach.tenSach}" hiện không bán được`);

      const donGia = Number(sach.giaSach); // ⭐ chốt giá tại thời điểm bán
      items.push({ maSach: ct.maSach, soLuong: ct.soLuong, donGia });

      // msg: "Tính tổng đơn hàng()" — cộng dồn trong loop
      tongTien += donGia * ct.soLuong;
    }

    // msg: "Lưu đơn hàng()" — lưu đơn + chi tiết trong 1 lệnh lồng nhau
    const donHang = await tx.donHang.create({
      data: {
        maNV,
        tongTien,
        trangThai: TrangThaiDonHang.HOAN_THANH,
        chiTiet: { create: items },
      },
      include: { chiTiet: true },
    });

    // msg: "Thông tin đơn hàng" trả về actor
    return donHang;
  });
}

// Danh sách toàn bộ đơn hàng (cho trang Đơn hàng ở frontend)
// Kèm tên nhân viên & số loại sách trong đơn (_count) để hiển thị trên card
export async function danhSachDonHang() {
  return prisma.donHang.findMany({
    orderBy: { ngayTao: 'desc' },
    include: {
      nhanVien: { select: { hoTen: true } },
      _count: { select: { chiTiet: true } },
    },
  });
}

// ============================================================
// Hình 15/16: Xem chi tiết đơn hàng
//   1. Kiểm tra mã đơn hàng
//   2. Lấy thông tin chi tiết đơn hàng
//   3. Lấy thông tin sách (cho từng chi tiết)
//   4. Tổng hợp thông tin đơn hàng
// → Prisma làm cả 4 bước bằng 1 query include lồng nhau
// ============================================================
export async function xemChiTietDonHang(maDH: string) {
  const donHang = await prisma.donHang.findUnique({
    where: { maDH },
    include: {
      nhanVien: { select: { hoTen: true } },
      chiTiet: {
        include: {
          sach: { select: { tenSach: true, tacGia: true, nxb: true } },
        },
      },
    },
  });
  if (!donHang) throw new Error('Mã đơn hàng không tồn tại');
  return donHang;
}
