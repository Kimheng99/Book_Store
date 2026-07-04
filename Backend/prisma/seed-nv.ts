import { prisma } from '../src/lib/prisma';
import { ChucVu } from '../generated/prisma';

// Seed vài nhân viên để dropdown "Nhân viên" ở form Nhập kho / Đơn hàng có dữ liệu.
// Chạy: npx tsx prisma/seed-nv.ts  (chạy lại nhiều lần cũng an toàn)

async function main() {
  const mau = [
    { hoTen: 'Nguyễn Văn An', chucVu: ChucVu.THU_KHO },
    { hoTen: 'Trần Thị Bình', chucVu: ChucVu.THU_NGAN },
    { hoTen: 'Lê Quản Lý', chucVu: ChucVu.QUAN_LY },
  ];

  for (const nv of mau) {
    const daCo = await prisma.nhanVien.findFirst({ where: { hoTen: nv.hoTen } });
    if (daCo) {
      console.log(`• ${nv.hoTen} đã tồn tại — bỏ qua`);
      continue;
    }
    await prisma.nhanVien.create({
      data: { hoTen: nv.hoTen, chucVu: nv.chucVu, matKhau: '123456' },
    });
    console.log(`✓ Tạo nhân viên ${nv.hoTen} (${nv.chucVu})`);
  }
  console.log('Xong.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
