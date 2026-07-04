import { Router } from 'express';
import * as nhanVienService from '../services/nhanVien.service';

const router = Router();

// GET /api/nhan-vien — danh sách toàn bộ nhân viên
router.get('/', async (_req, res, next) => {
  try {
    res.json({ data: await nhanVienService.danhSachNhanVien() });
  } catch (err) {
    next(err);
  }
});

export default router;
