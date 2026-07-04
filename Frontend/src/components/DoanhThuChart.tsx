import {
  Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import type { DonHang } from '../types';
import { vnd } from '../api';

// Biểu đồ doanh thu theo ngày — thay cho snippet shadcn/ui (không dùng được ở
// dự án Vite thuần này). Một chuỗi duy nhất (doanh thu) nên không cần chú thích.

const GREEN = '#28a745'; // = var(--success), đã validate đạt tương phản trên nền trắng

// Gộp đơn hàng theo ngày (YYYY-MM-DD) rồi cộng tổng tiền
function gomTheoNgay(orders: DonHang[]) {
  const byDay = new Map<string, number>();
  for (const d of orders) {
    const key = d.ngayTao.slice(0, 10);
    byDay.set(key, (byDay.get(key) ?? 0) + Number(d.tongTien));
  }
  return [...byDay.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([ngay, doanhThu]) => ({ ngay, doanhThu }));
}

const nhanNgay = (iso: string) => { const [, m, d] = iso.split('-'); return `${d}/${m}`; };
// Rút gọn trục tiền: 1.500.000 → "1.5tr", 25.000 → "25k"
const gonTien = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}tr`
  : n >= 1_000 ? `${Math.round(n / 1_000)}k`
  : String(n);

function TooltipContent({ active, payload }: {
  active?: boolean;
  payload?: { payload: { ngay: string; doanhThu: number } }[];
}) {
  if (!active || !payload?.length) return null;
  const p = payload[0].payload;
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8,
      padding: '8px 12px', boxShadow: '0 6px 18px rgba(15,23,42,0.12)', fontSize: 13,
    }}>
      <div style={{ color: 'var(--muted)', marginBottom: 2 }}>Ngày {nhanNgay(p.ngay)}</div>
      <div style={{ fontWeight: 700, fontFamily: 'var(--mono)' }}>{vnd(p.doanhThu)}</div>
    </div>
  );
}

export default function DoanhThuChart({ orders }: { orders: DonHang[] }) {
  const data = gomTheoNgay(orders);
  if (data.length === 0) return null;

  return (
    <div className="card" style={{ marginBottom: 20 }}>
      <h3 style={{ marginTop: 0, marginBottom: 4 }}>Biểu đồ doanh thu theo ngày</h3>
      <div style={{ color: 'var(--muted)', fontSize: 13, marginBottom: 12 }}>
        Tổng tiền các đơn hàng hoàn thành theo từng ngày
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 0 }}>
          <defs>
            <linearGradient id="fillDoanhThu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity={0.35} />
              <stop offset="100%" stopColor={GREEN} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#e3e8ef" strokeDasharray="3 3" />
          <XAxis
            dataKey="ngay" tickFormatter={nhanNgay}
            tickLine={false} axisLine={false} tickMargin={8}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis
            tickFormatter={gonTien} width={44}
            tickLine={false} axisLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip cursor={{ stroke: GREEN, strokeWidth: 1 }} content={<TooltipContent />} />
          <Area
            dataKey="doanhThu" type="monotone"
            stroke={GREEN} strokeWidth={2}
            fill="url(#fillDoanhThu)"
            dot={{ r: 3, fill: GREEN, strokeWidth: 0 }}
            activeDot={{ r: 5, fill: GREEN, stroke: 'var(--surface)', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
