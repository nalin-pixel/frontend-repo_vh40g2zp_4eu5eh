import React, { useState } from 'react';
import { X } from 'lucide-react';

const AccessRequestModal = ({ open, onClose, onSubmit }) => {
  const [form, setForm] = useState({ reason: '', date: '', time: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    onClose?.();
  };

  return (
    <div className={`fixed inset-0 z-50 transition ${open ? 'pointer-events-auto' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div
        className={`absolute bottom-0 left-0 right-0 origin-bottom rounded-t-3xl bg-white/95 p-4 shadow-2xl ring-1 ring-slate-200 backdrop-blur-md transition-transform duration-300 dark:bg-slate-900/90 dark:ring-slate-700 ${open ? 'translate-y-0' : 'translate-y-full'}`}
        role="dialog" aria-modal="true" aria-label="Request Access"
      >
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-slate-300/70 dark:bg-slate-700" />
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Request Access</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="mb-1 block text-xs text-slate-600 dark:text-slate-300">Reason</label>
            <input name="reason" value={form.reason} onChange={handleChange} required placeholder="e.g., After-hours maintenance"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 outline-none ring-0 focus:border-[#0056D2] dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs text-slate-600 dark:text-slate-300">Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#0056D2] dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100" />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-600 dark:text-slate-300">Time</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} required
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-900 outline-none focus:border-[#0056D2] dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100" />
            </div>
          </div>
          <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-[#0056D2] to-[#00C4CC] px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default AccessRequestModal;
