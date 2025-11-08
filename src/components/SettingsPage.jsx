import React, { useEffect, useState } from 'react';
import { Bell, Moon, SunMedium, Shield } from 'lucide-react';

const SettingsPage = ({ theme, onToggleTheme }) => {
  const [pref, setPref] = useState(theme);

  useEffect(() => setPref(theme), [theme]);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Settings</h2>

      <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white shadow"><Shield size={18} /></div>
          <div>
            <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Profile & Security</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Manage password, biometrics, and devices</div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow"><Bell size={18} /></div>
            <div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Notifications</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Alerts and critical events</div>
            </div>
          </div>
          <button className="rounded-lg px-3 py-2 text-xs text-[#0056D2] hover:bg-slate-50 dark:hover:bg-slate-800">Configure</button>
        </div>
      </div>

      <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow"><SunMedium size={18} /></div>
            <div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Appearance</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Light/Dark theme</div>
            </div>
          </div>
          <button
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-xl bg-[#0056D2] px-3 py-2 text-xs font-medium text-white shadow hover:opacity-95"
          >
            {pref === 'dark' ? <SunMedium size={16} /> : <Moon size={16} />} {pref === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
