import { prisma } from '../src/lib/prisma';

// Seed vài kho mẫu ở các mức tồn kho khác nhau để 3 thẻ thống kê
// (Kho sắp hết / Kho ổn định / Kho dư thừa) trên KhoPage đều có dữ liệu.
// Chạy: npx tsx prisma/seed-kho.ts  (chạy lại nhiều lần cũng an toàn)

async function main() {
  const sach = await prisma.sach.findFirst();
  if (!sach) {
    console.log('⚠ Chưa có sách nào — hãy thêm sách trước khi seed kho.');
    return;
  }

  // tenKho: [tổng tồn kho mong muốn để rơi vào từng nhóm]
  const mau = [
    { tenKho: 'Kho Quận 1', diaChi: '12 Lê Lợi, Q1', soLuong: 5, viTriKe: 'A1' },   // < 10  → sắp hết
    { tenKho: 'Kho Quận 3', diaChi: '45 Cách Mạng, Q3', soLuong: 30, viTriKe: 'B2' }, // 10-50 → ổn định
    { tenKho: 'Kho Quận 7', diaChi: '9 Nguyễn Văn Linh, Q7', soLuong: 80, viTriKe: 'C3' }, // > 50 → dư thừa
  ];

  for (const k of mau) {
    // Bỏ qua nếu kho đã tồn tại (idempotent)
    const daCo = await prisma.khoHang.findFirst({ where: { tenKho: k.tenKho } });
    if (daCo) {
      console.log(`• ${k.tenKho} đã tồn tại — bỏ qua`);
      continue;
    }
    const kho = await prisma.khoHang.create({
      data: { tenKho: k.tenKho, diaChi: k.diaChi },
    });
    await prisma.tonKho.create({
      data: {
        maKho: kho.maKho,
        maSach: sach.maSach,
        soLuong: k.soLuong,
        viTriKe: k.viTriKe,
      },
    });
    console.log(`✓ Tạo ${k.tenKho} (tồn ${k.soLuong}, kệ ${k.viTriKe})`);
  }
  console.log('Xong.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
