import { prisma } from '../lib/prisma';

// ============================================================
// SERVICE: NHÂN VIÊN
// Cung cấp danh sách nhân viên cho các dropdown ở frontend
// (chọn nhân viên khi nhập kho / tạo đơn hàng)
// ============================================================

// Không trả về matKhau — chỉ những trường frontend cần
export async function danhSachNhanVien() {
  return prisma.nhanVien.findMany({
    orderBy: { hoTen: 'asc' },
    select: { maNV: true, hoTen: true, chucVu: true },
  });
}
