import React from 'react';
import { LockOpen, List, ShieldAlert, Users } from 'lucide-react';

const actions = [
  { key: 'unlock', label: 'Unlock', icon: LockOpen, color: 'bg-[#0056D2]' },
  { key: 'logs', label: 'Logs', icon: List, color: 'bg-sky-500' },
  { key: 'zones', label: 'Zones', icon: ShieldAlert, color: 'bg-emerald-500' },
  { key: 'users', label: 'Users', icon: Users, color: 'bg-violet-500' },
];

const QuickActions = ({ onAction }) => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map(({ key, label, icon: Icon, color }) => (
        <button
          key={key}
          onClick={() => onAction?.(key)}
          className="flex flex-col items-center gap-2 rounded-2xl bg-white/70 p-3 text-slate-700 shadow-sm ring-1 ring-slate-200 backdrop-blur-md transition hover:shadow dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700"
        >
          <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-white ${color} shadow`}> 
            <Icon size={18} />
          </span>
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default QuickActions;
