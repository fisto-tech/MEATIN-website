'use client';

import React, { useEffect, useState } from 'react';
import Logo from './Logo';

export const Preloader: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 500); // 500ms fade transition
      return () => clearTimeout(removeTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Ring & Logo wrapper */}
        <div className="relative flex items-center justify-center p-6">
          {/* Animated Spinner Ring with Green, Red, Yellow theme */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-meatin-green border-r-meatin-red border-b-meatin-yellow animate-spin" />
          
          {/* Centered Brand Logo */}
          <div className="relative z-10 scale-110">
            <Logo variant="dark" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1.5 text-center mt-2">
          <p className="text-sm font-semibold tracking-wider text-slate-800 uppercase">
            Preparing Freshness<span className="animate-pulse text-meatin-green">...</span>
          </p>
          <div className="flex gap-1.5 items-center">
            <span className="w-2 h-2 rounded-full bg-meatin-green animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-meatin-red animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-meatin-yellow animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
