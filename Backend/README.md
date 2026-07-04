# Bookstore API — Express + TypeScript + Prisma + PostgreSQL

Backend được "dịch" trực tiếp từ các sơ đồ UML (state, sequence, communication).

## Cấu trúc (kiến trúc phân tầng)
```
src/
├── index.ts              # Entry point, mount routes, error handler
├── lib/prisma.ts         # Prisma client singleton (tầng dữ liệu)
├── routes/               # Tầng giao tiếp (nhận request, trả response)
│   ├── sach.routes.ts
│   ├── kho.routes.ts
│   ├── donHang.routes.ts
│   └── doanhThu.routes.ts
└── services/             # Tầng nghiệp vụ (logic từ sequence diagram)
    ├── sach.service.ts    # + state machine Hình 8
    ├── kho.service.ts     # transaction nhập kho (Hình 10)
    ├── donHang.service.ts # loop lấy giá sách (Hình 13)
    └── doanhThu.service.ts# UC3: 4 báo cáo (Hình 18)
```

## Chạy project
```bash
npm install
cp .env.example .env       # sửa DATABASE_URL
npx prisma migrate dev --name init
npm run dev
```

## Test nhanh với curl
```bash
# Nhập sách mới
curl -X POST http://localhost:3000/api/sach -H "Content-Type: application/json" \
  -d '{"tenSach":"Doraemon","tacGia":"Fujiko","nxb":"Kim Dong","giaNhap":15000,"giaSach":25000}'

# Nhập kho
curl -X POST http://localhost:3000/api/kho/nhap -H "Content-Type: application/json" \
  -d '{"maKho":"...","maSach":"...","maNV":"...","soLuong":100}'

# Tạo đơn hàng
curl -X POST http://localhost:3000/api/don-hang -H "Content-Type: application/json" \
  -d '{"maNV":"...","chiTiet":[{"maSach":"...","soLuong":2}]}'

# Doanh số bán hàng (UC3)
curl "http://localhost:3000/api/doanh-thu/ban-hang?fromDate=2026-06-01&toDate=2026-07-04"
```
