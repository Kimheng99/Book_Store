import { useState } from 'react';
import { api, vnd, ngayVN } from '../api';
import type { BaoCaoDoanhSo, BaoCaoThuChi, SachBanChay, DoanhSoNV, Sach } from '../types';
import DateFilter from '../components/DateFilter';
import Modal from '../components/Modal';
import DoanhThuChart from '../components/DoanhThuChart';

// ===== Trang Doanh thu (UC3) — theo mockup 5, 6, 7, 8 =====
// 4 tab con, dùng chung bộ lọc Từ ngày / Đến ngày / Xác nhận

type Tab = 'doanh-so' | 'thu-chi' | 'ban-chay' | 'theo-nv';

const homNay = () => new Date().toISOString().slice(0, 10);
const dauThang = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-01`;
};

export default function DoanhThuPage() {
  const [tab, setTab] = useState<Tab>('doanh-so');
  const [from, setFrom] = useState(dauThang());
  const [to, setTo] = useState(homNay());
  const [err, setErr] = useState('');

  const [doanhSo, setDoanhSo] = useState<BaoCaoDoanhSo | null>(null);
  const [thuChi, setThuChi] = useState<BaoCaoThuChi | null>(null);
  const [banChay, setBanChay] = useState<SachBanChay[] | null>(null);
  const [theoNV, setTheoNV] = useState<DoanhSoNV[] | null>(null);

  // Modal chi tiết: sách (tab bán chạy) và nhân viên (tab theo NV)
  const [bookDetail, setBookDetail] = useState<Sach | null>(null);
  const [nvDetail, setNvDetail] = useState<DoanhSoNV | null>(null);

  async function xemChiTietSach(maSach: string) {
    try {
      setBookDetail(await api.chiTietSach(maSach));
    } catch (e) {
      setErr((e as Error).message);
    }
  }

  const tongTon = (s: Sach) => (s.tonKho ?? []).reduce((a, t) => a + t.soLuong, 0);

  async function xacNhan() {
    setErr('');
    try {
      if (tab === 'doanh-so') setDoanhSo(await api.doanhSoBanHang(from, to));
      if (tab === 'thu-chi') setThuChi(await api.thuChi(from, to));
      if (tab === 'ban-chay') setBanChay(await api.sachBanChay(from, to));
      if (tab === 'theo-nv') setTheoNV(await api.doanhSoTheoNV(from, to));
    } catch (e) {
      setErr((e as Error).message);
    }
  }

  const tbDon = doanhSo && doanhSo.soDonHang > 0
    ? Math.round(doanhSo.doanhSo / doanhSo.soDonHang) : 0;

  const tongDoanhSoNV = (theoNV ?? []).reduce((s, n) => s + n.tongDoanhSo, 0);
  const tongDonNV = (theoNV ?? []).reduce((s, n) => s + n.soDonHang, 0);

  return (
    <div className="page">
      <h2>Quản lý doanh thu</h2>

      <div className="subtabs">
        <button className={tab === 'doanh-so' ? 'active' : ''} onClick={() => setTab('doanh-so')}>
          Doanh số bán hàng
        </button>
        <button className={tab === 'thu-chi' ? 'active' : ''} onClick={() => setTab('thu-chi')}>
          Xem thu chi
        </button>
        <button className={tab === 'ban-chay' ? 'active' : ''} onClick={() => setTab('ban-chay')}>
          Sách bán chạy
        </button>
        <button className={tab === 'theo-nv' ? 'active' : ''} onClick={() => setTab('theo-nv')}>
          Doanh số theo NV
        </button>
      </div>

      <DateFilter from={from} to={to} onFrom={setFrom} onTo={setTo} onConfirm={xacNhan} />
      {err && <div className="alert err">{err}</div>}

      {/* ===== Tab 1: Doanh số bán hàng (mockup 6) ===== */}
      {tab === 'doanh-so' && doanhSo && (
        <>
          <div className="stat-row">
            <div className="stat green">
              <div className="value">{vnd(doanhSo.doanhSo)}</div>
              <div className="label">Tổng doanh thu</div>
            </div>
            <div className="stat purple">
              <div className="value">{doanhSo.soDonHang}</div>
              <div className="label">Số đơn hàng</div>
            </div>
            <div className="stat blue">
              <div className="value">{vnd(tbDon)}</div>
              <div className="label">Trung bình/đơn</div>
            </div>
          </div>

          {/* Biểu đồ doanh thu theo ngày */}
          <DoanhThuChart orders={doanhSo.danhSachDonHang} />

          <h3>Danh sách đơn hàng</h3>
          <div className="rank-list">
            {doanhSo.danhSachDonHang.map((d) => (
              <div className="rank-item" key={d.maDH}>
                <div className="rank-body">
                  <div style={{ fontWeight: 600 }} className="mono">
                    {d.maDH.slice(0, 10)}… — {d.nhanVien?.hoTen}
                  </div>
                  <div className="sub">
                    {ngayVN(d.ngayTao)} • {d._count?.chiTiet ?? 0} sản phẩm
                  </div>
                </div>
                <div className="rank-money" style={{ color: 'var(--text)' }}>{vnd(d.tongTien)}</div>
              </div>
            ))}
            {doanhSo.danhSachDonHang.length === 0 && (
              <div className="empty">Không có đơn hàng trong khoảng thời gian này.</div>
            )}
          </div>
        </>
      )}

      {/* ===== Tab 2: Thu chi (mockup 5) ===== */}
      {tab === 'thu-chi' && thuChi && (
        <>
          <div className="stat-row">
            <div className="stat green">
              <div className="value">{vnd(thuChi.thu)}</div>
              <div className="label">Tổng thu</div>
            </div>
            <div className="stat red">
              <div className="value">{vnd(thuChi.chi)}</div>
              <div className="label">Tổng chi</div>
            </div>
            <div className="stat blue">
              <div className="value">{vnd(thuChi.loiNhuan)}</div>
              <div className="label">Lợi nhuận</div>
            </div>
          </div>

          <h3>Thu — Danh sách đơn hàng ({thuChi.danhSachDonHang.length})</h3>
          <div className="rank-list">
            {thuChi.danhSachDonHang.map((d) => (
              <div className="rank-item" key={d.maDH}>
                <div className="rank-body">
                  <div style={{ fontWeight: 600 }} className="mono">
                    {d.maDH.slice(0, 10)}… — {d.nhanVien?.hoTen}
                  </div>
                  <div className="sub">{ngayVN(d.ngayTao)} • {d._count?.chiTiet ?? 0} sản phẩm</div>
                </div>
                <div className="rank-money" style={{ color: 'var(--success, #1b7a34)' }}>+{vnd(d.tongTien)}</div>
              </div>
            ))}
            {thuChi.danhSachDonHang.length === 0 && (
              <div className="empty">Không có đơn hàng trong khoảng này.</div>
            )}
          </div>

          <h3>Chi — Danh sách nhập hàng ({thuChi.danhSachNhapHang.length})</h3>
          <div className="rank-list">
            {thuChi.danhSachNhapHang.map((g) => (
              <div className="rank-item" key={g.maGD}>
                <div className="rank-body">
                  <div style={{ fontWeight: 600 }}>{g.tenSach}</div>
                  <div className="sub">
                    {ngayVN(g.thoiGian)} • {g.tenKho} • {g.soLuong} × {vnd(g.giaNhap)}
                  </div>
                </div>
                <div className="rank-money" style={{ color: 'var(--danger)' }}>−{vnd(g.thanhTien)}</div>
              </div>
            ))}
            {thuChi.danhSachNhapHang.length === 0 && (
              <div className="empty">Không có phiếu nhập hàng trong khoảng này.</div>
            )}
          </div>
        </>
      )}

      {/* ===== Tab 3: Sách bán chạy (mockup 7) ===== */}
      {tab === 'ban-chay' && banChay && (
        <>
          <h3>Danh sách sách bán chạy</h3>
          <div className="rank-list">
            {banChay.map((s, i) => (
              <div className="rank-item" key={s.maSach}>
                <div className="rank-num">{i + 1}</div>
                <div className="rank-body">
                  <div style={{ fontWeight: 600 }}>{s.tenSach} — {s.tacGia}</div>
                  <div className="sub">
                    Đã bán: {s.tongSoLuongBan} cuốn • Doanh thu: {vnd(s.doanhThu)}
                  </div>
                </div>
                <button className="btn sm gray" onClick={() => xemChiTietSach(s.maSach)}>
                  Xem chi tiết
                </button>
              </div>
            ))}
            {banChay.length === 0 && (
              <div className="empty">Chưa có sách nào được bán trong khoảng này.</div>
            )}
          </div>
        </>
      )}

      {/* ===== Tab 4: Doanh số theo NV (mockup 8) ===== */}
      {tab === 'theo-nv' && theoNV && (
        <>
          <div className="stat-row">
            <div className="stat purple">
              <div className="value">{theoNV.length}</div>
              <div className="label">Số nhân viên</div>
            </div>
            <div className="stat blue">
              <div className="value">{tongDonNV}</div>
              <div className="label">Tổng số đơn</div>
            </div>
            <div className="stat green">
              <div className="value">{vnd(tongDoanhSoNV)}</div>
              <div className="label">Tổng doanh số</div>
            </div>
            <div className="stat yellow">
              <div className="value">
                {vnd(theoNV.length ? Math.round(tongDoanhSoNV / theoNV.length) : 0)}
              </div>
              <div className="label">Trung bình/NV</div>
            </div>
          </div>
          <h3>Danh sách nhân viên</h3>
          <div className="rank-list">
            {theoNV.map((n) => (
              <div className="rank-item" key={n.maNV}>
                <div className="rank-num">
                  {(n.hoTen ?? '?').split(' ').map((w) => w[0]).slice(-2).join('')}
                </div>
                <div className="rank-body">
                  <div style={{ fontWeight: 600 }}>{n.hoTen} — {n.chucVu}</div>
                  <div className="sub">Số đơn: {n.soDonHang}</div>
                </div>
                <div className="rank-money">{vnd(n.tongDoanhSo)}</div>
                <button className="btn sm gray" onClick={() => setNvDetail(n)}>
                  Xem chi tiết
                </button>
              </div>
            ))}
            {theoNV.length === 0 && (
              <div className="empty">Không có dữ liệu trong khoảng này.</div>
            )}
          </div>
        </>
      )}

      {!doanhSo && !thuChi && !banChay && !theoNV && (
        <div className="empty">Chọn khoảng thời gian rồi bấm "Xác nhận" để xem báo cáo.</div>
      )}

      {/* (3.c) Chi tiết thông tin sách */}
      {bookDetail && (
        <Modal title="Chi tiết sách" onClose={() => setBookDetail(null)}>
          {bookDetail.anhBia && (
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <img src={bookDetail.anhBia} alt={bookDetail.tenSach} className="book-cover" />
            </div>
          )}
          <div className="kv">
            <div className="k">Tên sách:</div><div>{bookDetail.tenSach}</div>
            <div className="k">Tác giả:</div><div>{bookDetail.tacGia}</div>
            <div className="k">NXB:</div><div>{bookDetail.nxb}</div>
            <div className="k">Giá nhập:</div><div className="mono">{vnd(bookDetail.giaNhap)}</div>
            <div className="k">Giá bán:</div><div className="mono">{vnd(bookDetail.giaSach)}</div>
            <div className="k">Số lượng có sẵn:</div><div className="mono">{tongTon(bookDetail)}</div>
          </div>
          <div className="form-actions">
            <button className="btn gray" onClick={() => setBookDetail(null)}>Đóng</button>
          </div>
        </Modal>
      )}

      {/* (4.d) Danh sách đơn đã bán của một nhân viên */}
      {nvDetail && (
        <Modal title={`Đơn hàng của ${nvDetail.hoTen}`} onClose={() => setNvDetail(null)}>
          <div className="kv" style={{ marginBottom: 12 }}>
            <div className="k">Chức vụ:</div><div>{nvDetail.chucVu}</div>
            <div className="k">Số đơn:</div><div>{nvDetail.soDonHang}</div>
            <div className="k">Tổng doanh số:</div>
            <div className="mono" style={{ fontWeight: 700 }}>{vnd(nvDetail.tongDoanhSo)}</div>
          </div>
          {(nvDetail.danhSachDonHang ?? []).map((d) => (
            <div key={d.maDH} style={{ padding: '8px 0', borderTop: '1px solid var(--border)' }}>
              <div className="mono" style={{ fontWeight: 600 }}>{d.maDH.slice(0, 12)}…</div>
              <div style={{ color: 'var(--muted)', fontSize: 13.5 }}>
                {ngayVN(d.ngayTao)} • {d._count?.chiTiet ?? 0} sản phẩm • {vnd(d.tongTien)}
              </div>
            </div>
          ))}
          {(nvDetail.danhSachDonHang ?? []).length === 0 && (
            <div className="empty">Nhân viên chưa có đơn hàng trong khoảng này.</div>
          )}
          <div className="form-actions">
            <button className="btn gray" onClick={() => setNvDetail(null)}>Đóng</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
