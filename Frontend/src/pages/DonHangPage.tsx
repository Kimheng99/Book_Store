import { useEffect, useMemo, useState } from 'react';
import { api, vnd, ngayVN } from '../api';
import type { Sach, NhanVien, DonHang } from '../types';
import Modal from '../components/Modal';
import { xacNhan, thanhCong, loi } from '../swal';

// ===== Trang Đơn hàng — theo mockup 3 & 4 =====
// Tab "Tạo đơn hàng": thẻ sách → modal chọn số lượng → giỏ "Đơn hàng hiện tại"
// Tab "Xem đơn hàng": thẻ đơn → modal chi tiết

type CartItem = { maSach: string; tenSach: string; donGia: number; soLuong: number };

const tongTon = (s: Sach) => (s.tonKho ?? []).reduce((a, t) => a + t.soLuong, 0);

export default function DonHangPage() {
  const [tab, setTab] = useState<'tao' | 'xem'>('tao');
  const [sachList, setSachList] = useState<Sach[]>([]);
  const [nvList, setNvList] = useState<NhanVien[]>([]);
  const [donHangList, setDonHangList] = useState<DonHang[]>([]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [maNV, setMaNV] = useState('');
  const [adding, setAdding] = useState<Sach | null>(null);
  const [qty, setQty] = useState('1');
  const [addErr, setAddErr] = useState(''); // lỗi kiểm tra số lượng trong pop up
  const [bookDetail, setBookDetail] = useState<Sach | null>(null);
  const [orderDetail, setOrderDetail] = useState<DonHang | null>(null);

  useEffect(() => {
    api.danhSachSach().then(setSachList).catch(console.error);
    api.danhSachNhanVien().then(setNvList).catch(console.error);
  }, []);

  useEffect(() => {
    if (tab === 'xem') api.danhSachDonHang().then(setDonHangList).catch(console.error);
  }, [tab]);

  const tongCong = useMemo(
    () => cart.reduce((s, c) => s + c.donGia * c.soLuong, 0),
    [cart],
  );

  function xacNhanThem() {
    if (!adding) return;
    // (f) Hệ thống kiểm tra số lượng hợp lệ
    const soLuong = Number(qty);
    if (!Number.isInteger(soLuong) || soLuong <= 0) {
      // (h) Không hợp lệ → yêu cầu nhập lại
      setAddErr('Số lượng phải là số nguyên lớn hơn 0. Vui lòng nhập lại.');
      return;
    }
    const daCoTrongDon = cart.find((c) => c.maSach === adding.maSach)?.soLuong ?? 0;
    if (soLuong + daCoTrongDon > tongTon(adding)) {
      setAddErr(`Vượt quá tồn kho (còn ${tongTon(adding)} cuốn). Vui lòng nhập lại.`);
      return;
    }
    // (g) Hợp lệ → đóng pop up và thêm vào đơn hàng
    setCart((prev) => {
      const cu = prev.find((c) => c.maSach === adding.maSach);
      if (cu) {
        return prev.map((c) =>
          c.maSach === adding.maSach ? { ...c, soLuong: c.soLuong + soLuong } : c,
        );
      }
      return [...prev, {
        maSach: adding.maSach,
        tenSach: adding.tenSach,
        donGia: Number(adding.giaSach),
        soLuong,
      }];
    });
    setAdding(null);
    setQty('1');
    setAddErr('');
  }

  async function taoDon() {
    const dongY = await xacNhan({
      title: 'Tạo đơn hàng này?',
      text: `Đơn gồm ${cart.length} loại sách · Tổng cộng ${vnd(tongCong)}.`,
      confirmText: 'Tạo đơn',
    });
    if (!dongY) return;
    try {
      const don = await api.taoDonHang({
        maNV,
        chiTiet: cart.map((c) => ({ maSach: c.maSach, soLuong: c.soLuong })),
      });
      setCart([]);
      thanhCong('Tạo đơn hàng thành công!', `Mã đơn: ${don.maDH}`);
    } catch (e) {
      loi('Tạo đơn hàng thất bại', (e as Error).message);
    }
  }

  async function huyDon() {
    const dongY = await xacNhan({
      title: 'Hủy đơn hàng?',
      text: 'Toàn bộ sách trong đơn hiện tại sẽ bị xóa khỏi giỏ.',
      confirmText: 'Hủy đơn',
      nguyHiem: true,
    });
    if (dongY) setCart([]);
  }

  async function xemChiTiet(maDH: string) {
    setOrderDetail(await api.chiTietDonHang(maDH));
  }

  const sachBanDuoc = sachList.filter(
    (s) => s.trangThai === 'CON_HANG' || s.trangThai === 'TON_KHO_QUA_MUC',
  );

  return (
    <div className="page">
      <div className="subtabs" style={{ maxWidth: 400 }}>
        <button className={tab === 'tao' ? 'active' : ''} onClick={() => setTab('tao')}>
          Tạo đơn hàng
        </button>
        <button className={tab === 'xem' ? 'active' : ''} onClick={() => setTab('xem')}>
          Xem đơn hàng
        </button>
      </div>

      {tab === 'tao' && (
        <>
          <h2>Tạo đơn hàng mới</h2>
          <h3>Danh sách sách hiện có</h3>
          <div className="grid-cards">
            {sachBanDuoc.map((s) => (
              <div className="book-card" key={s.maSach}>
                <div className="book-card-media">
                  {s.anhBia
                    ? <img src={s.anhBia} alt={s.tenSach} className="book-card-img" />
                    : <div className="book-card-img placeholder">📖</div>}
                </div>
                {/* Mã số sách = số thứ tự trong danh sách sách (khớp trang Sách) */}
                <div className="meta">Mã số: {sachList.findIndex((x) => x.maSach === s.maSach) + 1}</div>
                <div style={{ fontWeight: 600 }}>{s.tenSach}</div>
                <div className="meta">Tác giả: {s.tacGia}</div>
                <div className="price">{vnd(s.giaSach)}</div>
                <div className="meta">Có sẵn: {tongTon(s)} cuốn</div>
                <div className="card-actions">
                  <button className="btn sm" onClick={() => { setAdding(s); setQty('1'); setAddErr(''); }}>
                    Thêm vào đơn hàng
                  </button>
                  <button className="btn sm gray" onClick={() => setBookDetail(s)}>
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
            {sachBanDuoc.length === 0 && (
              <div className="empty" style={{ gridColumn: '1/-1' }}>
                Chưa có sách nào ở trạng thái bán được. Hãy nhập kho trước
                (sách phải "Còn hàng" theo sơ đồ trạng thái).
              </div>
            )}
          </div>

          <h3>Đơn hàng hiện tại</h3>
          <div className="card">
            {cart.length === 0 && <div className="empty">Chưa có sách trong đơn. Bấm "Thêm vào đơn hàng" ở trên.</div>}
            {cart.map((c) => (
              <div key={c.maSach}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{c.tenSach}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 13 }}>
                    {vnd(c.donGia)} × {c.soLuong}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span className="mono" style={{ fontWeight: 700 }}>{vnd(c.donGia * c.soLuong)}</span>
                  <button className="btn sm red"
                    onClick={() => setCart(cart.filter((x) => x.maSach !== c.maSach))}>
                    Xóa
                  </button>
                </div>
              </div>
            ))}
            {cart.length > 0 && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontWeight: 700 }}>
                  <span>Tổng cộng:</span>
                  <span className="mono" style={{ color: 'var(--danger)' }}>{vnd(tongCong)}</span>
                </div>
                <label>Nhân viên bán hàng</label>
                <select value={maNV} onChange={(e) => setMaNV(e.target.value)} style={{ maxWidth: 320 }}>
                  <option value="">-- Chọn nhân viên --</option>
                  {nvList.map((n) => (
                    <option key={n.maNV} value={n.maNV}>{n.hoTen}</option>
                  ))}
                </select>
                <div className="form-actions">
                  <button className="btn gray" onClick={huyDon}>Hủy đơn hàng</button>
                  <button className="btn green" disabled={!maNV} onClick={taoDon}>Tạo đơn hàng</button>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {tab === 'xem' && (
        <>
          <h2>Danh sách đơn hàng</h2>
          <div className="grid-cards">
            {donHangList.map((d) => (
              <div className="order-card" key={d.maDH}>
                <div className="mono" style={{ fontWeight: 700 }}>🧾 {d.maDH.slice(0, 10)}…</div>
                <div className="meta">
                  📅 Ngày: {ngayVN(d.ngayTao)}<br />
                  📚 Số sách: {d._count?.chiTiet ?? 0} loại<br />
                  👤 NV: {d.nhanVien?.hoTen}
                </div>
                <div className="total">💰 Tổng: {vnd(d.tongTien)}</div>
                <div className="card-actions">
                  <button className="btn sm" onClick={() => xemChiTiet(d.maDH)}>🔍 Xem chi tiết</button>
                </div>
              </div>
            ))}
            {donHangList.length === 0 && (
              <div className="empty" style={{ gridColumn: '1/-1' }}>Chưa có đơn hàng nào.</div>
            )}
          </div>
        </>
      )}

      {adding && (
        <Modal title="Thêm sách vào đơn hàng" onClose={() => { setAdding(null); setAddErr(''); }}>
          <div className="kv">
            <div className="k">Tên sách:</div><div>{adding.tenSach}</div>
            <div className="k">Tác giả:</div><div>{adding.tacGia}</div>
            <div className="k">Giá:</div><div className="mono">{vnd(adding.giaSach)}</div>
            <div className="k">Số lượng có sẵn:</div><div className="mono">{tongTon(adding)}</div>
          </div>
          <label>Số lượng muốn thêm:</label>
          <input type="number" min={1} value={qty}
            onChange={(e) => { setQty(e.target.value); setAddErr(''); }} />
          {addErr && <div className="alert err">{addErr}</div>}
          <div className="form-actions">
            <button className="btn gray" onClick={() => { setAdding(null); setAddErr(''); }}>Thoát</button>
            <button className="btn" onClick={xacNhanThem}>Xác nhận</button>
          </div>
        </Modal>
      )}

      {orderDetail && (
        <Modal title="Chi tiết đơn hàng" onClose={() => setOrderDetail(null)}>
          <div className="kv" style={{ marginBottom: 14 }}>
            <div className="k">Mã đơn hàng:</div><div className="mono">{orderDetail.maDH}</div>
            <div className="k">Ngày đặt:</div><div>{ngayVN(orderDetail.ngayTao)}</div>
            <div className="k">Nhân viên:</div><div>{orderDetail.nhanVien?.hoTen}</div>
            <div className="k">Tổng giá trị:</div>
            <div className="mono" style={{ color: 'var(--danger)', fontWeight: 700 }}>
              {vnd(orderDetail.tongTien)}
            </div>
          </div>
          <div style={{ fontWeight: 600, marginBottom: 8 }}>Chi tiết sách:</div>
          {(orderDetail.chiTiet ?? []).map((ct) => {
            // (2.d) cho phép xem chi tiết sách ngay trong chi tiết đơn hàng
            const full = sachList.find((s) => s.maSach === ct.maSach);
            return (
              <div key={ct.maSach} style={{ padding: '8px 0', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 600 }}>{ct.sach?.tenSach}</div>
                <div style={{ color: 'var(--muted)', fontSize: 13.5 }} className="mono">
                  Số lượng: {ct.soLuong} × {vnd(ct.donGia)} = {vnd(ct.soLuong * Number(ct.donGia))}
                </div>
                {full && (
                  <button className="btn sm gray" style={{ marginTop: 6 }}
                    onClick={() => setBookDetail(full)}>
                    Xem chi tiết sách
                  </button>
                )}
              </div>
            );
          })}
          <div className="form-actions">
            <button className="btn gray" onClick={() => setOrderDetail(null)}>Đóng</button>
          </div>
        </Modal>
      )}

      {/* Đặt sau orderDetail để khi mở từ chi tiết đơn hàng sẽ nổi lên trên */}
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
            <div className="k">Giá:</div><div className="mono">{vnd(bookDetail.giaSach)}</div>
            <div className="k">Số lượng có sẵn:</div><div className="mono">{tongTon(bookDetail)}</div>
          </div>
          <div className="form-actions">
            <button className="btn gray" onClick={() => setBookDetail(null)}>Đóng</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
