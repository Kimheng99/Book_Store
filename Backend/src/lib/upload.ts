import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Thư mục lưu ảnh bìa sách. Nằm ở gốc Backend/ (cwd khi chạy npm run dev)
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    // Tên file duy nhất: thời gian + số ngẫu nhiên + đuôi gốc
    const ext = path.extname(file.originalname);
    const ten = `sach-${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, ten);
  },
});

// Chỉ chấp nhận file ảnh
export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // tối đa 5MB
  fileFilter: (_req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Chỉ chấp nhận file ảnh'));
  },
});
