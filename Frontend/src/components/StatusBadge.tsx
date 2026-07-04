import type { TrangThaiSach } from '../types';

// Signature element: badge 5 trạng thái đúng theo state machine (Hình 8)
const MAP: Record<TrangThaiSach, { text: string; cls: string }> = {
  KHONG_BAN: { text: 'Không bán', cls: 'gray' },
  CON_HANG: { text: 'Còn hàng', cls: 'green' },
  HET_HANG: { text: 'Hết hàng', cls: 'red' },
  TON_KHO_QUA_MUC: { text: 'Tồn kho quá mức', cls: 'yellow' },
  NGUNG_BAN: { text: 'Ngưng bán', cls: 'gray' },
};

export default function StatusBadge({ trangThai }: { trangThai: TrangThaiSach }) {
  const { text, cls } = MAP[trangThai] ?? { text: trangThai, cls: 'gray' };
  return <span className={`badge ${cls}`}>{text}</span>;
}
