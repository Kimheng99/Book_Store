import express, { Request, Response, NextFunction } from 'express';
import { UPLOAD_DIR } from './lib/upload';
import sachRoutes from './routes/sach.routes';
import khoRoutes from './routes/kho.routes';
import donHangRoutes from './routes/donHang.routes';
import doanhThuRoutes from './routes/doanhThu.routes';
import nhanVienRoutes from './routes/nhanVien.routes';

const app = express();
app.use(express.json());

// Phục vụ ảnh bìa đã upload: GET /uploads/<tên file>
app.use('/uploads', express.static(UPLOAD_DIR));

// ===== Kiến trúc phân tầng =====
// Routes (tầng giao tiếp) → Services (tầng nghiệp vụ) → Prisma (tầng dữ liệu)
app.use('/api/sach', sachRoutes);
app.use('/api/kho', khoRoutes);
app.use('/api/don-hang', donHangRoutes);
app.use('/api/doanh-thu', doanhThuRoutes);
app.use('/api/nhan-vien', nhanVienRoutes);

app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Error handler tập trung: mọi lỗi từ service đều đi qua đây
// (tương ứng nhánh alt [không hợp lệ] trong các sequence diagram)
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(400).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Bookstore API chạy tại http://localhost:${PORT}`);
});
