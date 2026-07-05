# Hệ thống Quản lý Nhà sách

Một **Hệ thống Quản lý Nhà sách** đơn giản gồm **Backend REST API** và **Ứng dụng Web Frontend**.

Hệ thống cho phép người dùng quản lý:

- Sách
- Kho hàng
- Đơn hàng (Bán sách)
- Báo cáo Doanh thu (doanh số, thu nhập, chi phí, sách bán chạy, doanh số nhân viên)

---

# Công nghệ sử dụng

| Phần | Công nghệ |
|------|------------|
| **Backend** | Node.js, Express, TypeScript, Prisma ORM, PostgreSQL (Neon), Multer (Upload ảnh) |
| **Frontend** | React, TypeScript, Vite, Recharts |

Cấu trúc dự án:

```text
Book-Store/
├── Backend/      # REST API (Cổng 3000)
└── Frontend/     # Ứng dụng Web (Cổng 5173)
```

---

# Yêu cầu

Trước khi chạy dự án, hãy đảm bảo bạn có:

- **Node.js 18 trở lên** (khuyến nghị Node.js 20+)

Kiểm tra phiên bản:

```bash
node -v
```

- Một **cơ sở dữ liệu PostgreSQL trên Neon**

Dự án này sử dụng adapter serverless của Neon (`@prisma/adapter-neon`), vì vậy bạn cần một cơ sở dữ liệu Neon thay vì PostgreSQL cài đặt cục bộ.

Tạo cơ sở dữ liệu miễn phí tại:

https://neon.tech

Sau khi tạo project, sao chép chuỗi kết nối. Chuỗi kết nối có dạng như sau:

```text
postgresql://neondb_owner:npg_BO0Js9fKnSuR@ep-calm-hat-aobv7b4y-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

---

# Cách chạy dự án

Mở **hai cửa sổ terminal**.

Một terminal chạy backend.

Terminal còn lại chạy frontend.

---

## 1. Khởi động Backend

Di chuyển vào thư mục Backend:

```bash
cd Backend
```

Cài đặt các package:

```bash
npm install
```

Khởi động server ở chế độ development:

```bash
npm run dev
```

API sẽ chạy tại:

```
http://localhost:3000
```

---

## 2. Khởi động Frontend

Mở một terminal khác.

Di chuyển vào thư mục Frontend:

```bash
cd Frontend
```

Cài đặt các package:

```bash
npm install
```

Khởi động server ở chế độ development:

```bash
npm run dev
```

Mở trình duyệt:

```
http://localhost:5173
```

---

### Vite Proxy

Frontend đã được cấu hình sẵn để proxy:

- `/api`
- `/uploads`

đến

```
http://localhost:3000
```

Nhờ đó, bạn **không cần cấu hình CORS**.

---

# Tạo dữ liệu mẫu (Tùy chọn)

Cơ sở dữ liệu mới sẽ trống.

Bạn có thể thêm dữ liệu mẫu bằng cách chạy các lệnh sau trong thư mục **Backend**.

Tạo nhân viên mẫu:

```bash
npx tsx prisma/seed-nv.ts
```

Tạo dữ liệu kho mẫu:

```bash
npx tsx prisma/seed-kho.ts
```

Các script này có thể chạy nhiều lần một cách an toàn.

---

## Tạo dữ liệu thủ công

Bạn cũng có thể sử dụng giao diện web.

Thứ tự khuyến nghị:

1. **Sách**
   - Nhấn **Thêm sách**
   - Nhập thông tin sách
   - Tải lên ảnh bìa
   - Đặt số lượng tồn kho ban đầu

2. **Kho hàng**
   - Mở trang Kho hàng
   - Nhấn **Xem chi tiết**
   - Thêm hàng vào kho
   - Chọn vị trí kệ

3. **Đơn hàng**
   - Tạo đơn hàng mới
   - Chọn sách
   - Nhập số lượng
   - Chọn nhân viên
   - Xác nhận đơn hàng

4. **Doanh thu**
   - Chọn ngày bắt đầu
   - Chọn ngày kết thúc
   - Nhấn **Xác nhận**
   - Xem báo cáo

---

# Các lệnh hữu ích

## Backend

| Lệnh | Mô tả |
|----------|-------------|
| `npm run dev` | Khởi động server development |
| `npm run build` | Build dự án |
| `npm start` | Chạy bản build production |
| `npx prisma db push` | Cập nhật schema cơ sở dữ liệu |
| `npx prisma generate` | Tạo Prisma Client |
| `npx prisma studio` | Mở Prisma Studio |

---

## Frontend

| Lệnh | Mô tả |
|----------|-------------|
| `npm run dev` | Khởi động server development |
| `npm run build` | Build frontend |
| `npm run preview` | Xem trước bản build production |

---

# Xử lý sự cố

### Backend không chạy

Nếu bạn thấy:

- `ERR_CONNECTION_REFUSED`
- Lỗi API
- Không thể kết nối đến server

Hãy khởi động backend:

```bash
cd Backend
npm run dev
```

Frontend cần backend đang chạy để hoạt động.

---

### Lỗi cơ sở dữ liệu

Nếu bạn thấy lỗi cơ sở dữ liệu hoặc lỗi `DATABASE_URL`:

1. Kiểm tra file `Backend/.env`

2. Đảm bảo `DATABASE_URL` chứa chuỗi kết nối Neon của bạn.

3. Chạy:

```bash
npx prisma db push
```

Sau đó:

```bash
npx prisma generate
```

---

### Thay đổi cơ sở dữ liệu mới không hoạt động

Nếu bạn pull code mới hoặc thay đổi schema Prisma:

```bash
npx prisma generate
```

Sau đó khởi động lại backend:

```bash
npm run dev
```

---

### Danh sách nhân viên trống

Nếu bạn không thể tạo đơn hàng hoặc nhập kho vì không có nhân viên nào hiển thị:

```bash
npx tsx prisma/seed-nv.ts
```

---

### Doanh thu hoặc Đơn hàng không có dữ liệu

- Ở trang **Đơn hàng**, mở tab **Xem đơn hàng**.
- Ở trang **Doanh thu**, chọn khoảng ngày hợp lệ và nhấn **Xác nhận**.

---

# Lưu ý

- **Không** upload file `Backend/.env` lên GitHub.
- Thêm `.env` vào file `.gitignore`.
- Ảnh bìa sách được lưu tại:

```text
Backend/uploads/
```

Có thể truy cập ảnh qua đường dẫn:

```text
/uploads/filename
```

---

# Tác giả

Dự án này được tạo ra để học phát triển web full-stack với:

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL (Neon)
- React
- Vite