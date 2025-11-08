import React from 'react';
import { Plus, Search } from 'lucide-react';

const UserRow = ({ name, role, lastAccess, active = true }) => (
  <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
    <div className="flex items-center gap-3 min-w-0">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0056D2] to-[#00C4CC]" />
      <div className="min-w-0">
        <p className="font-medium text-slate-900 dark:text-slate-100 truncate">{name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{role} • Last: {lastAccess}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className={`text-xs px-2 py-1 rounded-full border ${active ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-900/40' : 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800/40 dark:text-slate-300 dark:border-slate-700'}`}>{active ? 'Active' : 'Suspended'}</span>
      <button className="px-3 py-2 text-sm font-semibold rounded-lg bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-900/40">Details</button>
    </div>
  </div>
);

const UsersPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 pb-28">
      <header className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">User Management</h2>
          <button className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-[#0056D2] to-[#00C4CC] text-white shadow">
            <Plus className="h-4 w-4" />
            Add New User
          </button>
        </div>
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input placeholder="Search users" className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" />
        </div>
      </header>

      <main className="px-5 mt-4 space-y-3">
        <UserRow name="Aarav Patel" role="Admin" lastAccess="09:05" active />
        <UserRow name="Maya Singh" role="Staff" lastAccess="09:12" active />
        <UserRow name="Rohan Das" role="Visitor" lastAccess="08:50" active={false} />
      </main>
    </div>
  );
};

export default UsersPage;
