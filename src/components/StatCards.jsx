import React from 'react';
import { Clock, Calendar, ShieldCheck, Users } from 'lucide-react';

const items = [
  { title: 'Last Access', value: 'Door A • 10:24', icon: Clock, color: 'from-[#0056D2] to-[#00C4CC]' },
  { title: 'Upcoming', value: 'Audit • 15:00', icon: Calendar, color: 'from-[#00C4CC] to-[#0056D2]' },
  { title: 'Access Level', value: 'Admin', icon: ShieldCheck, color: 'from-indigo-500 to-sky-500' },
  { title: 'Active Users', value: '42', icon: Users, color: 'from-emerald-500 to-teal-500' },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map(({ title, value, icon: Icon, color }) => (
        <div
          key={title}
          className="rounded-2xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700"
        >
          <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow`}> 
            <Icon size={18} />
          </div>
          <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">{title}</div>
          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
