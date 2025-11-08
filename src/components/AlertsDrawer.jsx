import React from 'react';
import { AlertTriangle, BellRing, ShieldAlert, X } from 'lucide-react';

const sampleAlerts = [
  { id: 1, title: 'Forced Door', detail: 'Server Room - Door 2', level: 'critical' },
  { id: 2, title: 'Badge Mismatch', detail: 'Main Entrance - Turnstile 1', level: 'warning' },
  { id: 3, title: 'System Notice', detail: 'Firmware update available', level: 'info' },
];

const levelStyles = {
  critical: 'border-rose-400/50 bg-rose-50/80 dark:bg-rose-900/30',
  warning: 'border-amber-400/50 bg-amber-50/80 dark:bg-amber-900/30',
  info: 'border-sky-400/50 bg-sky-50/80 dark:bg-sky-900/30',
};

const levelIcon = (lvl) => {
  if (lvl === 'critical') return <ShieldAlert className="text-rose-500" size={18} />;
  if (lvl === 'warning') return <AlertTriangle className="text-amber-500" size={18} />;
  return <BellRing className="text-sky-500" size={18} />;
};

const AlertsDrawer = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 origin-bottom rounded-t-3xl bg-white/95 p-4 shadow-2xl ring-1 ring-slate-200 backdrop-blur-md transition-transform duration-300 dark:bg-slate-900/90 dark:ring-slate-700 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Alerts"
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-300/70 dark:bg-slate-700" />
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Alerts</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-2">
          {sampleAlerts.map((a) => (
            <div key={a.id} className={`flex items-start gap-3 rounded-2xl border p-3 ${levelStyles[a.level]}`}>
              <div className="mt-0.5">{levelIcon(a.level)}</div>
              <div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{a.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">{a.detail}</div>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="rounded-lg bg-white/70 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200 hover:bg-white dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700">Ack</button>
                <button className="rounded-lg bg-[#0056D2] px-2 py-1 text-xs text-white">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlertsDrawer;
