import { Router } from 'express';
import * as khoService from '../services/kho.service';

const router = Router();

// GET /api/kho — danh sách toàn bộ kho
router.get('/', async (_req, res, next) => {
  try {
    res.json({ data: await khoService.danhSachKho() });
  } catch (err) {
    next(err);
  }
});

// POST /api/kho/nhap — nhapKho(maKho, maSach, SL) (Hình 10, msg 1)
router.post('/nhap', async (req, res, next) => {
  try {
    const kq = await khoService.nhapKho(req.body);
    res.status(201).json({ message: 'Nhập sách vào kho thành công', data: kq });
  } catch (err) {
    next(err);
  }
});

// GET /api/kho/:maKho/ton-kho — theoDoiTonKho (msg 11)
router.get('/:maKho/ton-kho', async (req, res, next) => {
  try {
    const danhSach = await khoService.theoDoiTonKho(req.params.maKho);
    res.json({ data: danhSach });
  } catch (err) {
    next(err);
  }
});

export default router;
