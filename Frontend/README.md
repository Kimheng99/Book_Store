# Bookstore Frontend — React + TypeScript + Vite

Giao diện bám theo mockup navigation diagram: Kho hàng, Sách, Đơn hàng, Doanh thu (UC3).

## Chạy project (cần backend chạy trước ở cổng 3000)
```bash
npm install
npm run dev        # mở http://localhost:5173
```

Vite đã cấu hình proxy: mọi request `/api/...` tự chuyển sang `http://localhost:3000`
→ KHÔNG cần cấu hình CORS ở backend.

## Cấu trúc
```
src/
├── main.tsx, App.tsx      # Entry + thanh điều hướng 4 tab
├── api.ts                 # Tầng gọi API (fetch + xử lý lỗi tập trung)
├── types.ts               # Kiểu dữ liệu khớp response backend
├── styles.css             # Design tokens theo mockup
├── components/            # StatusBadge (5 trạng thái Hình 8), Modal, DateFilter
└── pages/
    ├── KhoPage.tsx        # Mockup 1-2: tổng quan + chi tiết kho + nhập kho
    ├── SachPage.tsx       # Mockup 2: tìm kiếm, lọc, badge Đủ/Cần nhập
    ├── DonHangPage.tsx    # Mockup 3-4: giỏ hàng + modal + xem đơn
    └── DoanhThuPage.tsx   # Mockup 5-8: 4 tab báo cáo UC3
```

## Thứ tự thao tác để có dữ liệu
1. Chạy seed backend (NV001, KHO01, SACH01...)
2. Tab Kho hàng → Xem chi tiết KHO01 → Nhập kho (sách chuyển sang "Còn hàng")
3. Tab Đơn hàng → Tạo đơn → chọn sách, số lượng, nhân viên
4. Tab Doanh thu → chọn khoảng ngày → Xác nhận
