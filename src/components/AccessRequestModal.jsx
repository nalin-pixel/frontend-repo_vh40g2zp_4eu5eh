import React from 'react';
import { Calendar, Clock, FileText, X } from 'lucide-react';

const AccessRequestModal = ({ open, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-slate-900/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div className={`absolute left-0 right-0 bottom-0 mx-auto w-full max-w-md rounded-t-3xl bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-300 ${open ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-semibold">New Access Request</h3>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-3">
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input className="w-full pl-9 pr-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" placeholder="Reason" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input type="date" className="w-full pl-9 pr-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input type="time" className="w-full pl-9 pr-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800" />
            </div>
          </div>
          <button className="w-full py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-[#0056D2] to-[#00C4CC]">Submit Request</button>
        </div>
      </div>
    </div>
  );
};

export default AccessRequestModal;
