'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export const ScrollVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(1);
  const totalFrames = 192;

  // Generate frame path
  const getFramePath = (index: number) => {
    const padded = String(index).padStart(5, '0');
    return `/assets/home/video-to-image/webp-images/${padded}.webp`;
  };

  // Preload all frames on mount to prevent flickering during scroll
  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new window.Image();
      img.src = getFramePath(i);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Calculate how much the container has scrolled past the viewport top
      const scrolled = -rect.top;
      const scrollableHeight = containerHeight - viewHeight;

      if (scrollableHeight <= 0) return;

      // Normalize scroll progress (0 to 1)
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      // Map to frame index (1 to 192)
      const targetFrame = Math.max(
        1,
        Math.min(totalFrames, Math.round(progress * (totalFrames - 1)) + 1)
      );

      setFrameIndex(targetFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300vh] bg-slate-950"
    >
      {/* Sticky container that keeps the image in viewport for the duration of the scroll */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Full viewport background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={getFramePath(frameIndex)}
            alt="MEATIN Scroll Experience"
            fill
            priority
            className="object-cover object-center"
            unoptimized
          />
        </div>

        {/* Cinematic dark overlay text to guide the user */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

        <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 text-center text-white pointer-events-none z-10 px-4">
          <p className="font-chau uppercase tracking-widest text-sm lg:text-[0.9vw] text-[#D4A437] mb-1.5">
            Crafting Perfection
          </p>
          <h2 className="font-chau uppercase text-3xl sm:text-4xl lg:text-[3vw] leading-tight max-w-xl">
            FROM FARM TO PLATE, <span className="text-[#84CC16]">SCIENTIFICALLY</span> PROCESSED
          </h2>
          <div className="flex justify-center items-center gap-1.5 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-ping" />
            <p className="font-manrope text-xs font-bold tracking-widest text-white/50 uppercase">
              Scroll to explore
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScrollVideoSection;
