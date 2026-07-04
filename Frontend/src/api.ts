// Tầng gọi API: mọi request đi qua hàm req() để xử lý lỗi tập trung
import type {
  Sach, KhoHang, TonKho, NhanVien, DonHang,
  BaoCaoDoanhSo, BaoCaoThuChi, SachBanChay, DoanhSoNV,
} from './types';

async function req<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`/api${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Lỗi không xác định');
  return json.data as T;
}

// Gửi multipart/form-data (dùng cho upload ảnh). KHÔNG tự đặt Content-Type
// để trình duyệt tự thêm boundary cho FormData.
async function reqForm<T>(path: string, form: FormData): Promise<T> {
  const res = await fetch(`/api${path}`, { method: 'POST', body: form });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Lỗi không xác định');
  return json.data as T;
}

const ngay = (from: string, to: string) => `fromDate=${from}&toDate=${to}`;

export const api = {
  // Sách
  danhSachSach: () => req<Sach[]>('/sach'),
  chiTietSach: (maSach: string) => req<Sach>(`/sach/${maSach}`),
  xoaSach: (maSach: string) => req<Sach>(`/sach/${maSach}`, { method: 'DELETE' }),
  // Thêm sách kèm ảnh bìa → gửi FormData (multipart)
  themSach: (form: FormData) => reqForm<Sach>('/sach', form),

  // Kho
  danhSachKho: () => req<KhoHang[]>('/kho'),
  tonKhoTheoKho: (maKho: string) => req<TonKho[]>(`/kho/${maKho}/ton-kho`),
  nhapKho: (body: object) =>
    req<unknown>('/kho/nhap', { method: 'POST', body: JSON.stringify(body) }),

  // Nhân viên
  danhSachNhanVien: () => req<NhanVien[]>('/nhan-vien'),

  // Đơn hàng
  danhSachDonHang: () => req<DonHang[]>('/don-hang'),
  chiTietDonHang: (maDH: string) => req<DonHang>(`/don-hang/${maDH}`),
  taoDonHang: (body: object) =>
    req<DonHang>('/don-hang', { method: 'POST', body: JSON.stringify(body) }),

  // Doanh thu (UC3)
  doanhSoBanHang: (f: string, t: string) =>
    req<BaoCaoDoanhSo>(`/doanh-thu/ban-hang?${ngay(f, t)}`),
  thuChi: (f: string, t: string) =>
    req<BaoCaoThuChi>(`/doanh-thu/thu-chi?${ngay(f, t)}`),
  sachBanChay: (f: string, t: string) =>
    req<SachBanChay[]>(`/doanh-thu/sach-ban-chay?${ngay(f, t)}`),
  doanhSoTheoNV: (f: string, t: string) =>
    req<DoanhSoNV[]>(`/doanh-thu/theo-nhan-vien?${ngay(f, t)}`),
};

// Định dạng tiền tệ Việt Nam: 48750000 → "48.750.000 đ"
export const vnd = (n: number | string) =>
  new Intl.NumberFormat('vi-VN').format(Number(n)) + ' đ';

export const ngayVN = (iso: string) =>
  new Date(iso).toLocaleDateString('vi-VN');
