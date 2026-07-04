import { useEffect, useMemo, useState } from 'react';
import { api } from '../api';
import type { KhoHang, TonKho, Sach, NhanVien } from '../types';

// ===== Trang Kho hàng — theo mockup 1 & 2 =====
// Màn 1: Tổng quan (3 thẻ thống kê + bảng kho)
// Màn 2: Chi tiết kho (bảng tồn kho + form nhập kho có Vị trí kệ)

const tongSoLuong = (kho: KhoHang) =>
  (kho.tonKho ?? []).reduce((s, t) => s + t.soLuong, 0);

// Trạng thái kho theo mockup: Hết hàng / Đủ hàng / Thừa hàng (>50)
function trangThaiKho(tong: number) {
  if (tong === 0) return { text: 'Hết hàng', cls: 'red' };
  if (tong > 50) return { text: 'Thừa hàng', cls: 'yellow' };
  return { text: 'Đủ hàng', cls: 'green' };
}

export default function KhoPage() {
  const [khoList, setKhoList] = useState<KhoHang[]>([]);
  const [selected, setSelected] = useState<KhoHang | null>(null);
  const [tonKho, setTonKho] = useState<TonKho[]>([]);
  const [sachList, setSachList] = useState<Sach[]>([]);
  const [nvList, setNvList] = useState<NhanVien[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ maSach: '', maNV: '', soLuong: '', viTriKe: '' });
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const loadKho = () => api.danhSachKho().then(setKhoList).catch(console.error);
  useEffect(() => { loadKho(); }, []);

  const stats = useMemo(() => {
    let sapHet = 0, onDinh = 0, duThua = 0;
    for (const k of khoList) {
      const tong = tongSoLuong(k);
      if (tong < 10) sapHet++;
      else if (tong > 50) duThua++;
      else onDinh++;
    }
    return { sapHet, onDinh, duThua };
  }, [khoList]);

  async function openKho(kho: KhoHang) {
    setSelected(kho);
    setShowForm(false);
    setMsg(null);
    setTonKho(await api.tonKhoTheoKho(kho.maKho));
    if (sachList.length === 0) setSachList(await api.danhSachSach());
    if (nvList.length === 0) setNvList(await api.danhSachNhanVien());
  }

  async function submitNhapKho() {
    if (!selected) return;
    setMsg(null);
    try {
      await api.nhapKho({
        maKho: selected.maKho,
        maSach: form.maSach,
        maNV: form.maNV,
        soLuong: Number(form.soLuong),
        viTriKe: form.viTriKe || undefined,
      });
      setMsg({ ok: true, text: 'Nhập sách vào kho thành công' });
      setForm({ maSach: '', maNV: '', soLuong: '', viTriKe: '' });
      setTonKho(await api.tonKhoTheoKho(selected.maKho));
      loadKho();
    } catch (e) {
      setMsg({ ok: false, text: (e as Error).message });
    }
  }

  // ---------- Màn 2: Chi tiết kho ----------
  if (selected) {
    return (
      <div className="page">
        <h2>Chi tiết kho: {selected.tenKho}</h2>
        <p style={{ marginTop: -8, color: 'var(--muted)' }}>
          Địa chỉ: {selected.diaChi}
        </p>
        <div className="form-actions" style={{ marginBottom: 16 }}>
          <button className="btn green" onClick={() => { setShowForm(!showForm); setMsg(null); }}>
            Nhập kho
          </button>
          <button className="btn gray" onClick={() => setSelected(null)}>Quay lại</button>
        </div>

        {showForm && (
          <div className="card" style={{ marginBottom: 18 }}>
            <h3 style={{ marginTop: 0 }}>Nhập kho sách</h3>
            <div className="row-2">
              <div>
                <label>Mã sách</label>
                <select value={form.maSach} onChange={(e) => setForm({ ...form, maSach: e.target.value })}>
                  <option value="">-- Chọn sách --</option>
                  {sachList.map((s) => (
                    <option key={s.maSach} value={s.maSach}>{s.tenSach}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Nhân viên thực hiện</label>
                <select value={form.maNV} onChange={(e) => setForm({ ...form, maNV: e.target.value })}>
                  <option value="">-- Chọn nhân viên --</option>
                  {nvList.map((n) => (
                    <option key={n.maNV} value={n.maNV}>{n.hoTen}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row-2">
              <div>
                <label>Số lượng</label>
                <input type="number" min={1} placeholder="Nhập số lượng"
                  value={form.soLuong}
                  onChange={(e) => setForm({ ...form, soLuong: e.target.value })} />
              </div>
              <div>
                <label>Vị trí kệ</label>
                <input placeholder="Ví dụ: Kệ A3"
                  value={form.viTriKe}
                  onChange={(e) => setForm({ ...form, viTriKe: e.target.value })} />
              </div>
            </div>
            {msg && <div className={`alert ${msg.ok ? 'ok' : 'err'}`}>{msg.text}</div>}
            <div className="form-actions">
              <button className="btn green"
                disabled={!form.maSach || !form.maNV || !form.soLuong}
                onClick={submitNhapKho}>
                Hoàn thành nhập kho
              </button>
              <button className="btn red" onClick={() => setShowForm(false)}>Kết thúc</button>
            </div>
          </div>
        )}

        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Mã sách</th><th>Tên sách</th><th>Số lượng</th><th>Vị trí kệ</th><th>Cảnh báo</th></tr>
            </thead>
            <tbody>
              {tonKho.map((t) => (
                <tr key={t.maSach}>
                  <td className="mono">{t.maSach}</td>
                  <td>{t.sach?.tenSach}</td>
                  <td className="mono">{t.soLuong}</td>
                  <td>{t.viTriKe ?? '—'}</td>
                  <td>
                    {t.canhBao === 'DUOI_NGUONG_MIN' && <span className="badge red">Dưới ngưỡng min</span>}
                    {t.canhBao === 'VUOT_NGUONG_MAX' && <span className="badge yellow">Vượt ngưỡng max</span>}
                    {!t.canhBao && <span className="badge green">Ổn định</span>}
                  </td>
                </tr>
              ))}
              {tonKho.length === 0 && (
                <tr><td colSpan={5} className="empty">Kho chưa có sách. Bấm "Nhập kho" để bắt đầu.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // ---------- Màn 1: Tổng quan ----------
  return (
    <div className="page">
      <h2>Tổng quan danh sách kho hàng</h2>
      <div className="stat-row">
        <div className="stat red">
          <div className="value">{stats.sapHet}</div>
          <div className="label">Kho sắp hết (&lt;10)</div>
        </div>
        <div className="stat green">
          <div className="value">{stats.onDinh}</div>
          <div className="label">Kho ổn định</div>
        </div>
        <div className="stat yellow">
          <div className="value">{stats.duThua}</div>
          <div className="label">Kho dư thừa (&gt;50)</div>
        </div>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Mã kho</th><th>Tên kho</th><th>Địa chỉ</th><th>Trạng thái</th><th>Thao tác</th></tr>
          </thead>
          <tbody>
            {khoList.map((k, i) => {
              const tt = trangThaiKho(tongSoLuong(k));
              return (
                <tr key={k.maKho}>
                  <td className="mono">kho{i + 1}</td>
                  <td>{k.tenKho}</td>
                  <td>{k.diaChi}</td>
                  <td><span className={`badge ${tt.cls}`}>{tt.text}</span></td>
                  <td><button className="btn sm" onClick={() => openKho(k)}>Xem chi tiết</button></td>
                </tr>
              );
            })}
            {khoList.length === 0 && (
              <tr><td colSpan={5} className="empty">Chưa có kho. Hãy chạy seed data trước.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
