import React, { useState } from 'react';
import { Shield, BadgeCheck, Bell, Plus, Fingerprint, Mail, Lock } from 'lucide-react';
import HeroSpline from './components/HeroSpline';
import StatCards from './components/StatCards';
import QuickActions from './components/QuickActions';
import SecureNavBar from './components/SecureNavBar';

const GradientButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-[#0056D2] to-[#00C4CC] hover:opacity-95 active:scale-[0.99] transition ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`w-full py-3 rounded-xl font-semibold border border-slate-300 text-slate-700 bg-white dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition ${className}`}
  >
    {children}
  </button>
);

const LoginScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#EBF2FF] to-[#F8FAFC] dark:from-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <div className="px-5 pt-10 pb-4">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-md">
          <Shield className="w-8 h-8 text-[#0056D2]" />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-center">SecurePass</h1>
        <p className="text-center text-slate-500 dark:text-slate-400">Modern access control for teams and facilities</p>
      </div>

      <div className="px-5">
        <HeroSpline className="h-64" />
      </div>

      <div className="mt-6 px-5">
        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input type="email" placeholder="Email or ID" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C4CC]" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input type="password" placeholder="Password" className="w-full pl-10 pr-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00C4CC]" />
          </div>
          <GradientButton onClick={onLogin}>Login</GradientButton>
          <SecondaryButton>
            <div className="flex items-center justify-center gap-2 text-[#0056D2]">
              <Fingerprint className="h-5 w-5" />
              <span>Login with Face ID / Fingerprint</span>
            </div>
          </SecondaryButton>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <button className="hover:underline">Forgot Password?</button>
            <button className="hover:underline">Sign Up</button>
          </div>
        </div>
      </div>

      <div className="mt-auto p-5 text-center text-xs text-slate-400">v1.0.0 SecurePass</div>
    </div>
  );
};

const AlertBanner = () => (
  <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-900/40">
    <Bell className="h-5 w-5" />
    <p className="text-sm font-medium">Security Alerts: 2 failed attempts detected</p>
  </div>
);

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 pb-28">
      <header className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Welcome, Sangita 👋</h2>
            <div className="inline-flex items-center gap-1 mt-1 text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-900/40">
              <BadgeCheck className="h-3.5 w-3.5" />
              <span>Access Level: Admin</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0056D2] to-[#00C4CC]" />
        </div>
        <div className="mt-5">
          <StatCards />
        </div>
        <AlertBanner />
      </header>

      <main className="px-5 mt-6 space-y-5">
        <section>
          <h3 className="text-sm font-semibold text-slate-500 mb-2">Quick Actions</h3>
          <QuickActions />
        </section>

        <section className="relative">
          <button className="fixed bottom-24 right-5 h-14 w-14 rounded-full shadow-xl bg-gradient-to-br from-[#0056D2] to-[#00C4CC] text-white flex items-center justify-center">
            <Plus className="h-6 w-6" />
          </button>
        </section>
      </main>

      <SecureNavBar active="Home" />
    </div>
  );
};

const App = () => {
  const [authed, setAuthed] = useState(false);
  return authed ? <HomeScreen /> : <LoginScreen onLogin={() => setAuthed(true)} />;
};

export default App;
