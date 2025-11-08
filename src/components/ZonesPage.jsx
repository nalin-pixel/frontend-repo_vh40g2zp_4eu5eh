import React from 'react';
import { CheckCircle2, XCircle, Map } from 'lucide-react';

const ZoneRow = ({ name, granted, actionLabel }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div className="flex items-center gap-3 min-w-0">
      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${granted ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-300' : 'bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-300'}`}>
        {granted ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
      </div>
      <div className="min-w-0">
        <p className="font-medium text-slate-900 dark:text-slate-100 truncate">{name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{granted ? 'Access Granted' : 'Restricted'}</p>
      </div>
    </div>
    <button className={`px-3 py-2 text-sm font-semibold rounded-lg border transition ${granted ? 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/40' : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700'}`}>
      {actionLabel}
    </button>
  </div>
);

const ZonesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 pb-28">
      <header className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">My Access Zones</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800">
            <Map className="h-4 w-4" />
            Map View
          </button>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">List View</p>
      </header>

      <main className="px-5 mt-4 space-y-3">
        <ZoneRow name="Main Gate" granted actionLabel="Open" />
        <ZoneRow name="Lab 1" granted actionLabel="Enter" />
        <ZoneRow name="Server Room" granted={false} actionLabel="Request Access" />
        <ZoneRow name="Library" granted actionLabel="Open" />
      </main>
    </div>
  );
};

export default ZonesPage;
