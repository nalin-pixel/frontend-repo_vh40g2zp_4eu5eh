import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroSpline = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-56 overflow-hidden rounded-2xl ${className}`}>
      <Spline
        scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Soft gradient overlay for readability; does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-[#0F172A]/70" />
    </div>
  );
};

export default HeroSpline;
