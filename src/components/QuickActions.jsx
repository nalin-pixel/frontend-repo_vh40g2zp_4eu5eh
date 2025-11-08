import React from 'react';
import { LockOpen, FileText, Map, Users } from 'lucide-react';

const ActionButton = ({ icon: Icon, label, color = 'blue' }) => {
  const styles = {
    blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
    cyan: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300',
    slate: 'bg-slate-50 text-slate-700 dark:bg-slate-800/40 dark:text-slate-300',
    violet: 'bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300',
  };
  return (
    <button className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 ${styles[color]} transition-transform active:scale-95`}>
      <Icon className="h-6 w-6" />
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
};

const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      <ActionButton icon={LockOpen} label="Unlock" color="blue" />
      <ActionButton icon={FileText} label="Logs" color="cyan" />
      <ActionButton icon={Map} label="Zones" color="slate" />
      <ActionButton icon={Users} label="Users" color="violet" />
    </div>
  );
};

export default QuickActions;
