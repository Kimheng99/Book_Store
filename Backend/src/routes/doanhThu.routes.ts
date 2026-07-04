import { Router } from 'express';
import * as doanhThuService from '../services/doanhThu.service';

const router = Router();

// Helper: đọc fromDate/toDate từ query string, ví dụ:
// GET /api/doanh-thu/ban-hang?fromDate=2026-06-01&toDate=2026-06-30
function docKhoangNgay(req: any): [Date, Date] {
  const { fromDate, toDate } = req.query;
  if (!fromDate || !toDate)
    throw new Error('Thiếu fromDate hoặc toDate (định dạng YYYY-MM-DD)');
  const from = new Date(String(fromDate));
  const to = new Date(String(toDate));
  // "Đến ngày" tính hết cả ngày đó (23:59:59.999) — nếu không, đơn hàng
  // tạo trong ngày cuối sẽ bị loại vì mốc mặc định là 00:00
  to.setUTCHours(23, 59, 59, 999);
  return [from, to];
}

// Hình 17/18, msg 1: xemDoanhSoBanHang(fromDate, toDate)
router.get('/ban-hang', async (req, res, next) => {
  try {
    const [from, to] = docKhoangNgay(req);
    res.json({ data: await doanhThuService.xemDoanhSoBanHang(from, to) });
  } catch (err) {
    next(err);
  }
});

// msg 7: xemThuChi(fromDate, toDate)
router.get('/thu-chi', async (req, res, next) => {
  try {
    const [from, to] = docKhoangNgay(req);
    res.json({ data: await doanhThuService.xemThuChi(from, to) });
  } catch (err) {
    next(err);
  }
});

// msg 9: xemSachBanChay(fromDate, toDate)
router.get('/sach-ban-chay', async (req, res, next) => {
  try {
    const [from, to] = docKhoangNgay(req);
    res.json({ data: await doanhThuService.xemSachBanChay(from, to) });
  } catch (err) {
    next(err);
  }
});

// msg 12: xemDoanhSoTheoNV(fromDate, toDate)
router.get('/theo-nhan-vien', async (req, res, next) => {
  try {
    const [from, to] = docKhoangNgay(req);
    res.json({ data: await doanhThuService.xemDoanhSoTheoNV(from, to) });
  } catch (err) {
    next(err);
  }
});

export default router;
