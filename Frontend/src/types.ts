// Kiểu dữ liệu khớp với response của backend

export type TrangThaiSach =
  | 'KHONG_BAN' | 'CON_HANG' | 'HET_HANG' | 'TON_KHO_QUA_MUC' | 'NGUNG_BAN';

export interface Sach {
  maSach: string;
  tenSach: string;
  tacGia: string;
  nxb: string;
  giaNhap: string;   // Prisma Decimal trả về dạng string qua JSON
  giaSach: string;
  trangThai: TrangThaiSach;
  anhBia?: string | null;   // đường dẫn ảnh bìa, vd "/uploads/sach-....jpg"
  tonKho?: { soLuong: number }[];
}

export interface KhoHang {
  maKho: string;
  tenKho: string;
  diaChi: string;
  sdt?: string | null;
  tonKho?: TonKho[];
}

export interface TonKho {
  maKho: string;
  maSach: string;
  soLuong: number;
  viTriKe?: string | null;
  nguongMin: number;
  nguongMax: number;
  sach?: { tenSach: string; trangThai: TrangThaiSach };
  canhBao?: string | null;
}

export interface NhanVien {
  maNV: string;
  hoTen: string;
  chucVu: string;
}

export interface ChiTietDonHang {
  maDH: string;
  maSach: string;
  soLuong: number;
  donGia: string;
  sach?: { tenSach: string; tacGia: string; nxb: string };
}

export interface DonHang {
  maDH: string;
  maNV: string;
  ngayTao: string;
  tongTien: string;
  trangThai: string;
  nhanVien?: { hoTen: string };
  chiTiet?: ChiTietDonHang[];
  _count?: { chiTiet: number };
}

export interface BaoCaoDoanhSo {
  soDonHang: number;
  doanhSo: number;
  danhSachDonHang: DonHang[];
}

export interface NhapHang {
  maGD: string;
  thoiGian: string;
  tenSach: string;
  tenKho: string;
  soLuong: number;
  giaNhap: number;
  thanhTien: number;
}

export interface BaoCaoThuChi {
  thu: number;
  chi: number;
  loiNhuan: number;
  danhSachDonHang: DonHang[];
  danhSachNhapHang: NhapHang[];
}

export interface SachBanChay {
  maSach: string;
  tenSach?: string;
  tacGia?: string;
  tongSoLuongBan: number;
  doanhThu: number;
}

export interface DoanhSoNV {
  maNV: string;
  hoTen?: string;
  chucVu?: string;
  soDonHang: number;
  tongDoanhSo: number;
  danhSachDonHang?: DonHang[];
}
