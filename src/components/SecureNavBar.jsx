import React from 'react';
import { Home, Map, BarChart2, Users, Settings } from 'lucide-react';

const TabButton = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-2 rounded-xl transition-all ${
      active ? 'text-white bg-[#0056D2] shadow-lg shadow-[#0056D2]/30' : 'text-slate-500'
    }`}
  >
    <Icon className="h-5 w-5" />
    <span className="text-[11px] mt-1 font-medium">{label}</span>
  </button>
);

const SecureNavBar = ({ active = 'Home', onChange = () => {} }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-xl">
      <div className="flex gap-2">
        <TabButton icon={Home} label="Home" active={active === 'Home'} onClick={() => onChange('Home')} />
        <TabButton icon={Map} label="Zones" active={active === 'Zones'} onClick={() => onChange('Zones')} />
        <TabButton icon={BarChart2} label="Logs" active={active === 'Logs'} onClick={() => onChange('Logs')} />
        <TabButton icon={Users} label="Users" active={active === 'Users'} onClick={() => onChange('Users')} />
        <TabButton icon={Settings} label="Settings" active={active === 'Settings'} onClick={() => onChange('Settings')} />
      </div>
    </nav>
  );
};

export default SecureNavBar;
