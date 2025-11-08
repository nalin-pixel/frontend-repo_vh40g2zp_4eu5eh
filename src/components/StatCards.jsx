import React from 'react';
import { Clock, DoorOpen, ShieldCheck, UserCheck } from 'lucide-react';

const colorStyles = {
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  cyan: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300',
  emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300',
  violet: 'bg-violet-50 text-violet-700 dark:bg-violet-900/20 dark:text-violet-300',
};

const StatCard = ({ icon: Icon, title, value, accent = 'blue' }) => (
  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${colorStyles[accent]}`}>
      <Icon className="h-5 w-5" />
    </div>
    <div className="min-w-0">
      <p className="text-xs text-slate-500 dark:text-slate-400">{title}</p>
      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">{value}</p>
    </div>
  </div>
);

const StatCards = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <StatCard icon={Clock} title="Last Access" value="Lab 2 — 9:05 AM" accent="blue" />
      <StatCard icon={DoorOpen} title="Upcoming" value="Server Room — 3:00 PM" accent="cyan" />
      <StatCard icon={ShieldCheck} title="Access Level" value="Admin" accent="emerald" />
      <StatCard icon={UserCheck} title="Active Users" value="128 online" accent="violet" />
    </div>
  );
};

export default StatCards;
