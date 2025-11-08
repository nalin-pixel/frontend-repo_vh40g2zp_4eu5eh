import React, { useEffect, useMemo, useState } from 'react';
import { Bell, Fingerprint, Menu, Plus } from 'lucide-react';
import HeroSpline from './components/HeroSpline';
import StatCards from './components/StatCards';
import QuickActions from './components/QuickActions';
import SecureNavBar from './components/SecureNavBar';
import ZonesPage from './components/ZonesPage';
import LogsPage from './components/LogsPage';
import UsersPage from './components/UsersPage';
import SettingsPage from './components/SettingsPage';
import AlertsDrawer from './components/AlertsDrawer';
import AccessRequestModal from './components/AccessRequestModal';

const FaceID = ({ open, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute left-1/2 top-1/2 w-[84%] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/95 p-6 text-center shadow-2xl ring-1 ring-slate-200 backdrop-blur-md transition-transform duration-300 dark:bg-slate-900/90 dark:ring-slate-700 ${open ? 'scale-100' : 'scale-95'}`}>
        <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0056D2] to-[#00C4CC] p-4 text-white shadow">
          <Fingerprint className="h-full w-full" />
        </div>
        <div className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">Face ID</div>
        <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">Align your face within the frame to authenticate</p>
        <div className="mx-auto h-40 w-40 rounded-[1.75rem] border-2 border-slate-300/70 p-1 dark:border-slate-700">
          <div className="h-full w-full animate-pulse rounded-[1.25rem] bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900" />
        </div>
        <button onClick={onClose} className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#0056D2] px-4 py-2 text-sm font-medium text-white shadow">
          Authenticate
        </button>
      </div>
    </div>
  );
};

const HomeScreen = ({ onOpenAlerts, onOpenRequest }) => {
  return (
    <div className="space-y-5">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">SecurePass</h1>
          <p className="text-xs text-slate-600 dark:text-slate-400">Modern access control</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl bg-white/70 p-2 text-slate-700 ring-1 ring-slate-200 hover:bg-white dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700">
            <Menu size={18} />
          </button>
          <button onClick={onOpenAlerts} className="rounded-xl bg-[#0056D2] p-2 text-white shadow">
            <Bell size={18} />
          </button>
        </div>
      </header>

      <HeroSpline />

      <div className="space-y-5">
        <StatCards />
        <QuickActions onAction={() => {}} />
      </div>

      <button
        onClick={onOpenRequest}
        className="fixed bottom-24 right-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0056D2] to-[#00C4CC] text-white shadow-lg"
        aria-label="Request Access"
      >
        <Plus />
      </button>
    </div>
  );
};

export default function App() {
  const [active, setActive] = useState('home');
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);
  const [faceOpen, setFaceOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const screen = useMemo(() => {
    if (active === 'zones') return <ZonesPage />;
    if (active === 'logs') return <LogsPage />;
    if (active === 'users') return <UsersPage />;
    if (active === 'settings') return <SettingsPage theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />;
    return <HomeScreen onOpenAlerts={() => setAlertsOpen(true)} onOpenRequest={() => setRequestOpen(true)} />;
  }, [active, theme]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 pb-28 pt-6 dark:bg-[#0F172A]">
      {screen}

      <SecureNavBar value={active} onChange={(k) => setActive(k)} />

      <AlertsDrawer open={alertsOpen} onClose={() => setAlertsOpen(false)} />
      <AccessRequestModal open={requestOpen} onClose={() => setRequestOpen(false)} onSubmit={(data) => console.log('request', data)} />

      <FaceID open={faceOpen} onClose={() => setFaceOpen(false)} />

      <button
        onClick={() => setFaceOpen(true)}
        className="fixed bottom-24 left-5 inline-flex items-center gap-2 rounded-xl bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 shadow ring-1 ring-slate-200 backdrop-blur-md hover:bg-white dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700"
      >
        <Fingerprint size={16} /> Face ID
      </button>
    </div>
  );
}
