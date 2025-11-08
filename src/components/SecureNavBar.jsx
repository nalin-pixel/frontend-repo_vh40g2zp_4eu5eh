import React from 'react';
import { Home, List, Users, Settings, ShieldAlert } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'zones', label: 'Zones', icon: ShieldAlert },
  { key: 'logs', label: 'Logs', icon: List },
  { key: 'users', label: 'Users', icon: Users },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const SecureNavBar = ({ value, onChange }) => {
  return (
    <nav className="fixed bottom-5 left-1/2 z-50 w-[92%] -translate-x-1/2 rounded-2xl bg-white/80 p-2 backdrop-blur-md shadow-lg ring-1 ring-slate-200 dark:bg-slate-900/70 dark:ring-slate-700">
      <ul className="grid grid-cols-5 gap-1">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = value === key;
          return (
            <li key={key}>
              <button
                onClick={() => onChange(key)}
                className={`flex w-full flex-col items-center justify-center rounded-xl px-2 py-2 text-xs transition-colors ${
                  active
                    ? 'bg-[#0056D2] text-white shadow'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
                aria-label={label}
              >
                <Icon size={18} />
                <span className="mt-1">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SecureNavBar;
