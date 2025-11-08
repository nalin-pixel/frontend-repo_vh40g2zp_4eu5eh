import React from 'react';

const rows = [
  { time: '10:24', zone: 'Door A', result: 'Granted' },
  { time: '09:58', zone: 'Server Room', result: 'Denied' },
  { time: '09:40', zone: 'Main Entrance', result: 'Granted' },
];

const LogsPage = () => {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Access History</h2>
      <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
          <thead className="bg-slate-50/80 dark:bg-slate-800/40">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">Time</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">Zone</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 dark:text-slate-400">Result</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white/70 backdrop-blur-md dark:divide-slate-800 dark:bg-slate-900/60">
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200">{r.time}</td>
                <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200">{r.zone}</td>
                <td className={`px-4 py-3 text-sm ${r.result === 'Granted' ? 'text-emerald-600' : 'text-rose-500'}`}>{r.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsPage;
