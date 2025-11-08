import React from 'react';
import { Calendar, Filter, Download } from 'lucide-react';

const LogRow = ({ dt, zone, method, ok }) => (
  <div className="grid grid-cols-4 gap-2 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm">
    <span className="text-slate-600 dark:text-slate-400">{dt}</span>
    <span className="font-medium truncate">{zone}</span>
    <span className="text-slate-600 dark:text-slate-400 truncate">{method}</span>
    <span className={ok ? 'text-emerald-600 dark:text-emerald-300' : 'text-rose-600 dark:text-rose-300'}>{ok ? 'Granted' : 'Denied'}</span>
  </div>
);

const LogsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 pb-28">
      <header className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Access History</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
            <Calendar className="h-4 w-4" /> Date
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
            <Filter className="h-4 w-4" /> Zone
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
            <Filter className="h-4 w-4" /> Status
          </button>
        </div>
      </header>

      <main className="px-5 mt-4 space-y-2">
        <LogRow dt="08-Nov 09:05" zone="Lab 2" method="Face ID" ok />
        <LogRow dt="08-Nov 09:06" zone="Server Room" method="RFID" ok={false} />
        <LogRow dt="08-Nov 09:12" zone="Main Gate" method="Mobile Key" ok />
      </main>
    </div>
  );
};

export default LogsPage;
