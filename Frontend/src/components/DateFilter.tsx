// Bộ lọc "Từ ngày / Đến ngày / Xác nhận" — dùng chung 4 tab doanh thu (mockup 5-8)
export default function DateFilter({
  from, to, onFrom, onTo, onConfirm,
}: {
  from: string; to: string;
  onFrom: (v: string) => void; onTo: (v: string) => void;
  onConfirm: () => void;
}) {
  return (
    <div className="filter">
      <div className="title">Lọc theo thời gian</div>
      <div className="filter-row">
        <div>
          <label>Từ ngày</label>
          <input type="date" value={from} onChange={(e) => onFrom(e.target.value)} />
        </div>
        <div>
          <label>Đến ngày</label>
          <input type="date" value={to} onChange={(e) => onTo(e.target.value)} />
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <button className="btn" onClick={onConfirm}>Xác nhận</button>
        </div>
      </div>
    </div>
  );
}
