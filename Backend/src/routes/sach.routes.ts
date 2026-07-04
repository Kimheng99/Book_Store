import { Router } from 'express';
import * as sachService from '../services/sach.service';
import { upload } from '../lib/upload';

const router = Router();

// GET /api/sach — danh sách toàn bộ sách
router.get('/', async (_req, res, next) => {
  try {
    res.json({ data: await sachService.danhSachSach() });
  } catch (err) {
    next(err);
  }
});

// POST /api/sach — nhapSach (Hình 10, msg 4)
// Nhận multipart/form-data: các trường text + 1 file ảnh bìa (field "anhBia").
// Vì multipart gửi mọi field dưới dạng chuỗi nên phải ép kiểu số ở đây.
router.post('/', upload.single('anhBia'), async (req, res, next) => {
  try {
    const b = req.body;
    const sach = await sachService.nhapSach({
      tenSach: b.tenSach,
      tacGia: b.tacGia,
      nxb: b.nxb,
      giaNhap: Number(b.giaNhap),
      giaSach: Number(b.giaSach),
      tonKho: b.tonKho ? Number(b.tonKho) : 0,
      // Đường dẫn public tới ảnh vừa upload (phục vụ qua /uploads)
      anhBia: req.file ? `/uploads/${req.file.filename}` : null,
    });
    res.status(201).json({ message: 'Nhập sách thành công', data: sach });
  } catch (err) {
    next(err);
  }
});

// GET /api/sach/:maSach — xemThongTinSach (msg 13)
router.get('/:maSach', async (req, res, next) => {
  try {
    const sach = await sachService.xemThongTinSach(req.params.maSach);
    res.json({ data: sach });
  } catch (err) {
    next(err);
  }
});

// PUT /api/sach/:maSach — chinhSuaThongTinSach (msg 15)
router.put('/:maSach', async (req, res, next) => {
  try {
    const sach = await sachService.chinhSuaThongTinSach(
      req.params.maSach,
      req.body,
    );
    res.json({ message: 'Chỉnh sửa thành công', data: sach });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/sach/:maSach — xoaSach (msg 17)
router.delete('/:maSach', async (req, res, next) => {
  try {
    const kq = await sachService.xoaSach(req.params.maSach);
    res.json({ message: 'Xóa thành công', data: kq });
  } catch (err) {
    next(err);
  }
});

export default router;
