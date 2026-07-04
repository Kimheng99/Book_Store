import { useState } from 'react';
import KhoPage from './pages/KhoPage';
import SachPage from './pages/SachPage';
import DonHangPage from './pages/DonHangPage';
import DoanhThuPage from './pages/DoanhThuPage';

type Tab = 'kho' | 'sach' | 'don-hang' | 'doanh-thu';

const TABS: { id: Tab; label: string }[] = [
  { id: 'kho', label: 'Kho hàng' },
  { id: 'sach', label: 'Sách' },
  { id: 'don-hang', label: 'Đơn hàng' },
  { id: 'doanh-thu', label: 'Doanh thu' },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('kho');
  return (
    <>
      <header className="topbar">
        <div className="brand">📕 Quản lý nhà sách</div>
        <nav className="nav">
          {TABS.map((t) => (
            <button key={t.id}
              className={tab === t.id ? 'active' : ''}
              onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
      </header>
      {tab === 'kho' && <KhoPage />}
      {tab === 'sach' && <SachPage />}
      {tab === 'don-hang' && <DonHangPage />}
      {tab === 'doanh-thu' && <DoanhThuPage />}
    </>
  );
}
