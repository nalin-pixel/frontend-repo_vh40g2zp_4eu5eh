import React from 'react';
import { UserPlus } from 'lucide-react';

const users = [
  { name: 'Alex Johnson', role: 'Admin' },
  { name: 'Priya Singh', role: 'Security' },
  { name: 'Diego Martinez', role: 'Employee' },
];

const UsersPage = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">User Management</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-[#0056D2] px-3 py-2 text-xs font-medium text-white shadow hover:opacity-95">
          <UserPlus size={16} /> Add User
        </button>
      </div>
      <div className="rounded-2xl bg-white/70 p-2 ring-1 ring-slate-200 backdrop-blur-md dark:bg-slate-900/60 dark:ring-slate-700">
        {users.map((u) => (
          <div key={u.name} className="flex items-center justify-between rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800">
            <div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">{u.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{u.role}</div>
            </div>
            <button className="text-xs text-[#0056D2] hover:underline">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
