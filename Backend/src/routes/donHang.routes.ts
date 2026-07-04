import { Router } from 'express';
import * as donHangService from '../services/donHang.service';

const router = Router();

// GET /api/don-hang — danh sách toàn bộ đơn hàng
router.get('/', async (_req, res, next) => {
  try {
    res.json({ data: await donHangService.danhSachDonHang() });
  } catch (err) {
    next(err);
  }
});

// POST /api/don-hang — tạo đơn hàng(chiTietDonHang) (Hình 13)
// Body: { "maNV": "...", "chiTiet": [{ "maSach": "...", "soLuong": 2 }] }
router.post('/', async (req, res, next) => {
  try {
    const { maNV, chiTiet } = req.body;
    const donHang = await donHangService.taoDonHang(maNV, chiTiet);
    res.status(201).json({ message: 'Tạo đơn hàng thành công', data: donHang });
  } catch (err) {
    next(err);
  }
});

// GET /api/don-hang/:maDH — xem chi tiết đơn hàng (Hình 15/16)
router.get('/:maDH', async (req, res, next) => {
  try {
    const donHang = await donHangService.xemChiTietDonHang(req.params.maDH);
    res.json({ data: donHang });
  } catch (err) {
    next(err);
  }
});

export default router;
