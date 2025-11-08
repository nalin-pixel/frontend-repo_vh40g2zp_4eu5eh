import React from 'react';
import { CheckCircle2, CircleAlert } from 'lucide-react';

const zones = [
  { name: 'Main Entrance', status: 'Secure' },
  { name: 'Server Room', status: 'Restricted' },
  { name: 'R&D Lab', status: 'Secure' },
  { name: 'Warehouse', status: 'Secure' },
];

const ZonesPage = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">My Access Zones</h2>
      <div className="rounded-2xl bg-white/70 p-2 ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700">
        {zones.map((z) => (
          <div key={z.name} className="flex items-center justify-between gap-3 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
            <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{z.name}</div>
            <div className="flex items-center gap-2 text-xs">
              {z.status === 'Secure' ? (
                <><CheckCircle2 className="text-emerald-500" size={16} /><span className="text-emerald-600">Secure</span></>
              ) : (
                <><CircleAlert className="text-amber-500" size={16} /><span className="text-amber-600">Restricted</span></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZonesPage;
