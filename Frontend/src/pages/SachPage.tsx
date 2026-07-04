import { useEffect, useMemo, useState } from 'react';
import { api, vnd } from '../api';
import type { Sach } from '../types';
import StatusBadge from '../components/StatusBadge';
import Modal from '../components/Modal';
import { xacNhan, thanhCong, loi } from '../swal';

// ===== Trang Sách — theo mockup 2 (dưới): tìm kiếm + lọc + bảng =====

const tongTon = (s: Sach) => (s.tonKho ?? []).reduce((a, t) => a + t.soLuong, 0);

const FORM_TRONG = { tenSach: '', tacGia: '', nxb: '', giaNhap: '', giaSach: '', tonKho: '' };

export default function SachPage() {
  const [sachList, setSachList] = useState<Sach[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [detail, setDetail] = useState<Sach | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState(FORM_TRONG);
  const [anhFile, setAnhFile] = useState<File | null>(null);
  const [err, setErr] = useState('');

  const load = () => api.danhSachSach().then(setSachList).catch(console.error);
  useEffect(() => { load(); }, []);

  // Xóa sách. Lưu ý: backend chuyển sang NGUNG_BAN (không xóa vật lý)
  // nếu sách đã có giao dịch/đơn hàng, để không mất dữ liệu thống kê.
  async function xoaSach(s: Sach) {
    const dongY = await xacNhan({
      title: `Xóa sách "${s.tenSach}"?`,
      text: 'Nếu sách đã có giao dịch, hệ thống sẽ chuyển sang "Ngưng bán" thay vì xóa vật lý.',
      confirmText: 'Xóa',
      nguyHiem: true,
    });
    if (!dongY) return;
    try {
      const kq = await api.xoaSach(s.maSach);
      setDetail(null);
      load();
      if (kq?.trangThai === 'NGUNG_BAN') {
        thanhCong('Đã chuyển sang "Ngưng bán"', `Sách "${s.tenSach}" đã có giao dịch nên được giữ lại cho thống kê.`);
      } else {
        thanhCong('Đã xóa sách', `Đã xóa "${s.tenSach}" khỏi hệ thống.`);
      }
    } catch (e) {
      loi('Xóa sách thất bại', (e as Error).message);
    }
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return sachList.filter((s) => {
      const matchQ =
        s.tenSach.toLowerCase().includes(q) ||
        s.maSach.toLowerCase().includes(q) ||
        s.tacGia.toLowerCase().includes(q);
      // "Tất cả" ẩn sách Ngưng bán (dữ liệu vẫn giữ cho thống kê);
      // chỉ hiện khi người dùng chọn đúng bộ lọc "Ngưng bán".
      const matchF =
        filter === 'ALL' ? s.trangThai !== 'NGUNG_BAN' : s.trangThai === filter;
      return matchQ && matchF;
    });
  }, [sachList, search, filter]);

  async function themSach() {
    setErr('');
    try {
      // Gửi multipart: các trường text + ảnh bìa (nếu có)
      const fd = new FormData();
      fd.append('tenSach', form.tenSach);
      fd.append('tacGia', form.tacGia);
      fd.append('nxb', form.nxb);
      fd.append('giaNhap', form.giaNhap);
      fd.append('giaSach', form.giaSach);
      fd.append('tonKho', form.tonKho || '0');
      if (anhFile) fd.append('anhBia', anhFile);

      await api.themSach(fd);
      setShowAdd(false);
      setForm(FORM_TRONG);
      setAnhFile(null);
      load();
      thanhCong('Thêm sách thành công', `Đã thêm "${form.tenSach}" vào hệ thống.`);
    } catch (e) {
      setErr((e as Error).message);
    }
  }

  return (
    <div className="page">
      <h2>Danh sách sách hệ thống quản lý</h2>

      <div className="filter-row" style={{ marginBottom: 16 }}>
        <div style={{ flex: 2 }}>
          <input placeholder="🔍 Tìm theo tên hoặc mã sách..."
            value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="ALL">Tất cả trạng thái</option>
            <option value="KHONG_BAN">Không bán</option>
            <option value="CON_HANG">Còn hàng</option>
            <option value="HET_HANG">Hết hàng</option>
            <option value="TON_KHO_QUA_MUC">Tồn kho quá mức</option>
            <option value="NGUNG_BAN">Ngưng bán</option>
          </select>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <button className="btn green" onClick={() => setShowAdd(true)}>+ Thêm sách</button>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>STT</th><th>Ảnh</th><th>Thông tin sách</th><th>NXB</th>
              <th>Giá bán</th><th>Tồn kho</th><th>Trạng thái</th><th>Tác vụ</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => {
              const ton = tongTon(s);
              return (
                <tr key={s.maSach}>
                  <td className="mono">{i + 1}</td>
                  <td>
                    {s.anhBia
                      ? <img src={s.anhBia} alt={s.tenSach} className="book-thumb" />
                      : <div className="book-thumb placeholder">📖</div>}
                  </td>
                  <td>
                    <div style={{ fontWeight: 600 }}>{s.tenSach}</div>
                    <div style={{ color: 'var(--muted)', fontSize: 13 }}>{s.tacGia}</div>
                  </td>
                  <td>{s.nxb}</td>
                  <td className="mono">{vnd(s.giaSach)}</td>
                  <td className="mono">{ton}</td>
                  <td><StatusBadge trangThai={s.trangThai} /></td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="btn sm" onClick={() => setDetail(s)}>Chi tiết</button>
                      <button className="btn sm red" onClick={() => xoaSach(s)}>Xóa</button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr><td colSpan={8} className="empty">Không tìm thấy sách phù hợp.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {detail && (
        <Modal title="Chi tiết sách" onClose={() => setDetail(null)}>
          {detail.anhBia && (
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <img src={detail.anhBia} alt={detail.tenSach} className="book-cover" />
            </div>
          )}
          <div className="kv">
            <div className="k">Tên sách:</div><div>{detail.tenSach}</div>
            <div className="k">Tác giả:</div><div>{detail.tacGia}</div>
            <div className="k">NXB:</div><div>{detail.nxb}</div>
            <div className="k">Giá nhập:</div><div className="mono">{vnd(detail.giaNhap)}</div>
            <div className="k">Giá bán:</div><div className="mono">{vnd(detail.giaSach)}</div>
            <div className="k">Số lượng có sẵn:</div><div className="mono">{tongTon(detail)}</div>
            <div className="k">Trạng thái:</div><div><StatusBadge trangThai={detail.trangThai} /></div>
          </div>
          <div className="form-actions">
            <button className="btn gray" onClick={() => setDetail(null)}>Đóng</button>
            <button className="btn red" onClick={() => xoaSach(detail)}>Xóa sách</button>
          </div>
        </Modal>
      )}

      {showAdd && (
        <Modal title="Thêm sách mới" onClose={() => setShowAdd(false)}>
          <label>Tên sách</label>
          <input value={form.tenSach} onChange={(e) => setForm({ ...form, tenSach: e.target.value })} />
          <label>Tác giả</label>
          <input value={form.tacGia} onChange={(e) => setForm({ ...form, tacGia: e.target.value })} />
          <label>Nhà xuất bản</label>
          <input value={form.nxb} onChange={(e) => setForm({ ...form, nxb: e.target.value })} />
          <div className="row-2">
            <div>
              <label>Giá nhập (đ)</label>
              <input type="number" value={form.giaNhap} onChange={(e) => setForm({ ...form, giaNhap: e.target.value })} />
            </div>
            <div>
              <label>Giá bán (đ)</label>
              <input type="number" value={form.giaSach} onChange={(e) => setForm({ ...form, giaSach: e.target.value })} />
            </div>
          </div>
          <div className="row-2">
            <div>
              <label>Tồn kho ban đầu</label>
              <input type="number" min={0} placeholder="Ví dụ: 20"
                value={form.tonKho}
                onChange={(e) => setForm({ ...form, tonKho: e.target.value })} />
            </div>
            <div>
              <label>Ảnh bìa</label>
              <input type="file" accept="image/*"
                onChange={(e) => setAnhFile(e.target.files?.[0] ?? null)} />
            </div>
          </div>
          {Number(form.tonKho) > 0 && (
            <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
              Nhập tồn kho &gt; 0 → sách sẽ ở trạng thái <b>Còn hàng</b>.
            </div>
          )}
          {err && <div className="alert err">{err}</div>}
          <div className="form-actions">
            <button className="btn green"
              disabled={!form.tenSach || !form.giaNhap || !form.giaSach}
              onClick={themSach}>
              Lưu sách
            </button>
            <button className="btn gray" onClick={() => setShowAdd(false)}>Thoát</button>
          </div>
        </Modal>
      )}
    </div>
  );
}
