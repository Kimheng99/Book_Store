import { prisma } from '../lib/prisma';
import { LoaiGiaoDich, TrangThaiDonHang } from '../../generated/prisma';

// ============================================================
// SERVICE: DOANH THU (UC3) — dịch từ Hình 18 (sequence nghiệp vụ)
// Cả 4 chức năng đều nhận (fromDate, toDate)
// ============================================================

const dieuKienNgay = (fromDate: Date, toDate: Date) => ({
  ngayTao: { gte: fromDate, lte: toDate },
  trangThai: TrangThaiDonHang.HOAN_THANH,
});

// (1) Xem doanh số bán hàng
//   → danh sách đơn hàng (sắp xếp theo ngày) + tổng doanh thu
export async function xemDoanhSoBanHang(fromDate: Date, toDate: Date) {
  const danhSachDonHang = await prisma.donHang.findMany({
    where: dieuKienNgay(fromDate, toDate),
    orderBy: { ngayTao: 'desc' }, // (1.b) sắp xếp theo ngày tháng
    include: {
      nhanVien: { select: { hoTen: true } },
      _count: { select: { chiTiet: true } },
    },
  });

  const doanhSo = danhSachDonHang.reduce((t, d) => t + Number(d.tongTien), 0);

  return {
    fromDate,
    toDate,
    soDonHang: danhSachDonHang.length,
    doanhSo, // (1.d.ii) tổng doanh thu
    danhSachDonHang, // (1.d.i) danh sách đơn hàng
  };
}

// (2) Xem thu chi
//   THU = doanh số bán hàng; CHI = giao dịch NHẬP kho × giá nhập
//   → kèm danh sách đơn hàng + danh sách nhập hàng
export async function xemThuChi(fromDate: Date, toDate: Date) {
  const baoCaoBan = await xemDoanhSoBanHang(fromDate, toDate);
  const thu = baoCaoBan.doanhSo;

  const giaoDichNhap = await prisma.giaoDichKho.findMany({
    where: {
      loaiGD: LoaiGiaoDich.NHAP,
      thoiGian: { gte: fromDate, lte: toDate },
    },
    orderBy: { thoiGian: 'desc' }, // (2.b) sắp xếp theo ngày tháng
    include: {
      sach: { select: { tenSach: true, giaNhap: true } },
      khoHang: { select: { tenKho: true } },
    },
  });

  // (2.d.i) danh sách nhập hàng — mỗi dòng có thành tiền = giá nhập × số lượng
  const danhSachNhapHang = giaoDichNhap.map((gd) => ({
    maGD: gd.maGD,
    thoiGian: gd.thoiGian,
    tenSach: gd.sach.tenSach,
    tenKho: gd.khoHang.tenKho,
    soLuong: gd.soLuong,
    giaNhap: Number(gd.sach.giaNhap),
    thanhTien: Number(gd.sach.giaNhap) * gd.soLuong,
  }));

  const chi = danhSachNhapHang.reduce((t, g) => t + g.thanhTien, 0);

  return {
    fromDate,
    toDate,
    thu, // (2.d.ii) tổng thu
    chi, // (2.d.iii) tổng chi
    loiNhuan: thu - chi, // (2.d.iv) lợi nhuận
    danhSachDonHang: baoCaoBan.danhSachDonHang,
    danhSachNhapHang,
  };
}

// (3) Xem sách bán chạy
//   → thống kê số lượng bán + doanh thu theo mã sách, sắp xếp giảm dần
export async function xemSachBanChay(fromDate: Date, toDate: Date, top = 10) {
  const chiTiet = await prisma.chiTietDonHang.findMany({
    where: { donHang: dieuKienNgay(fromDate, toDate) },
    include: { sach: { select: { tenSach: true, tacGia: true } } },
  });

  const gom = new Map<
    string,
    { maSach: string; tenSach: string; tacGia: string; tongSoLuongBan: number; doanhThu: number }
  >();
  for (const ct of chiTiet) {
    const cur =
      gom.get(ct.maSach) ?? {
        maSach: ct.maSach,
        tenSach: ct.sach.tenSach,
        tacGia: ct.sach.tacGia,
        tongSoLuongBan: 0,
        doanhThu: 0,
      };
    cur.tongSoLuongBan += ct.soLuong;
    cur.doanhThu += Number(ct.donGia) * ct.soLuong;
    gom.set(ct.maSach, cur);
  }

  return [...gom.values()]
    .sort((a, b) => b.tongSoLuongBan - a.tongSoLuongBan) // (3.b) sắp theo SL bán
    .slice(0, top);
}

// (4) Xem doanh số theo nhân viên
//   → mỗi nhân viên: số đơn thành công, tổng doanh số, và danh sách đơn (để xem chi tiết)
export async function xemDoanhSoTheoNV(fromDate: Date, toDate: Date) {
  const donHang = await prisma.donHang.findMany({
    where: dieuKienNgay(fromDate, toDate),
    orderBy: { ngayTao: 'desc' },
    include: { _count: { select: { chiTiet: true } } },
  });

  const nvList = await prisma.nhanVien.findMany({
    select: { maNV: true, hoTen: true, chucVu: true },
  });

  return nvList
    .map((nv) => {
      const dons = donHang.filter((d) => d.maNV === nv.maNV);
      return {
        maNV: nv.maNV,
        hoTen: nv.hoTen,
        chucVu: nv.chucVu,
        soDonHang: dons.length,
        tongDoanhSo: dons.reduce((t, d) => t + Number(d.tongTien), 0),
        // (4.d) danh sách đơn đã bán cho từng nhân viên
        danhSachDonHang: dons.map((d) => ({
          maDH: d.maDH,
          ngayTao: d.ngayTao,
          tongTien: String(d.tongTien),
          trangThai: d.trangThai,
          _count: d._count,
        })),
      };
    })
    .sort((a, b) => b.tongDoanhSo - a.tongDoanhSo);
}
