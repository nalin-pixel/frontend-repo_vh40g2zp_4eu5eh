import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSpline = () => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
      <Spline scene="https://prod.spline.design/1pYx4wHkKqE9dQ8U/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70 dark:to-slate-900/80" />
    </div>
  );
};

export default HeroSpline;
