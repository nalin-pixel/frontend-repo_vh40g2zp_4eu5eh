import React from 'react';
import { Shield, Moon, Bell, Puzzle, LogOut } from 'lucide-react';

const SettingsItem = ({ icon: Icon, title, subtitle, action }) => (
  <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div className="flex items-center gap-3 text-left">
      <div className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-center">
        <Icon className="h-5 w-5 text-slate-600 dark:text-slate-300" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
    </div>
    {action}
  </button>
);

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 pb-28">
      <header className="px-5 pt-6">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0056D2] to-[#00C4CC]" />
          <div>
            <h2 className="text-lg font-semibold">Sangita</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Admin • SecurePass</p>
          </div>
        </div>
      </header>

      <main className="px-5 mt-4 space-y-3">
        <SettingsItem icon={Shield} title="Security Settings" subtitle="Change password, MFA setup" action={<span className="text-sm text-slate-400">Manage</span>} />
        <SettingsItem icon={Moon} title="Theme" subtitle="Light/Dark mode" action={<span className="text-sm text-slate-400">Toggle</span>} />
        <SettingsItem icon={Bell} title="Notifications" subtitle="Push & alerts" action={<span className="text-sm text-slate-400">Configure</span>} />
        <SettingsItem icon={Puzzle} title="Integrations" subtitle="Camera, HR System" action={<span className="text-sm text-slate-400">Open</span>} />

        <button className="w-full mt-2 flex items-center justify-center gap-2 p-3 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-900/40">
          <LogOut className="h-4 w-4" /> Logout
        </button>

        <p className="text-center text-xs text-slate-400 mt-4">v1.0.0 SecurePass App</p>
      </main>
    </div>
  );
};

export default SettingsPage;
