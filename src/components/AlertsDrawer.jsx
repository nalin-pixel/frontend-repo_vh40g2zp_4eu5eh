import React from 'react';
import { AlertTriangle, Bell, Info, X } from 'lucide-react';

const AlertCard = ({ color = 'red', title, time, actionLabel = 'Acknowledge', onAction = () => {} }) => {
  const tone = {
    red: {
      wrap: 'bg-rose-50 border-rose-200 dark:bg-rose-900/20 dark:border-rose-900/40',
      text: 'text-rose-700 dark:text-rose-300',
      Icon: AlertTriangle,
    },
    yellow: {
      wrap: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-900/40',
      text: 'text-amber-700 dark:text-amber-300',
      Icon: AlertTriangle,
    },
    blue: {
      wrap: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-900/40',
      text: 'text-blue-700 dark:text-blue-300',
      Icon: Info,
    },
  }[color];

  const IconComp = tone.Icon;

  return (
    <div className={`p-4 rounded-xl border ${tone.wrap} flex items-start justify-between`}>
      <div className="flex items-start gap-3">
        <div className={`${tone.text}`}>
          <IconComp className="h-5 w-5 mt-0.5" />
        </div>
        <div>
          <p className={`text-sm font-medium ${tone.text}`}>{title}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{time}</p>
        </div>
      </div>
      <button onClick={onAction} className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">{actionLabel}</button>
    </div>
  );
};

const AlertsDrawer = ({ open, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <div
        className={`absolute left-0 right-0 bottom-0 mx-auto w-full max-w-md rounded-t-3xl bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-300 ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-[#0056D2]" />
            <h3 className="font-semibold">Notifications & Alerts</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-3">
          <AlertCard color="red" title="Unauthorized attempt at Server Room" time="09:06 AM" />
          <AlertCard color="yellow" title="Door left open in Lab 1" time="08:59 AM" actionLabel="View Logs" />
          <AlertCard color="blue" title="New user access request" time="09:20 AM" actionLabel="Review" />
        </div>
      </div>
    </div>
  );
};

export default AlertsDrawer;
