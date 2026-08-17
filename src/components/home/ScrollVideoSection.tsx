'use client';

import React, { useEffect, useRef, useState } from 'react';

export const ScrollVideoSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const totalFrames = 1860;
  
  // Keep mutable references for the frame index and images to avoid unnecessary React re-renders during high-frequency scrolls
  const currentFrameRef = useRef<number>(1);
  const lastFrameIndexRef = useRef<number>(1);
  const imagesRef = useRef<{ [key: number]: HTMLImageElement }>({});
  const loadedFramesRef = useRef<Set<number>>(new Set());

  // Generate frame path
  const getFramePath = (index: number) => {
    const padded = String(index).padStart(5, '0');
    return `/assets/home/video-to-image/webp-images/${padded}.webp`;
  };

  // Canvas Drawing logic with aspect-ratio cover matching
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frameToDraw = index;

    // Fallback: If current frame isn't loaded yet, find the closest loaded frame to prevent flickering
    if (!loadedFramesRef.current.has(frameToDraw)) {
      if (loadedFramesRef.current.size === 0) return; // Nothing loaded yet
      
      let minDiff = Infinity;
      let nearest = 1;
      loadedFramesRef.current.forEach((loaded) => {
        const diff = Math.abs(loaded - frameToDraw);
        if (diff < minDiff) {
          minDiff = diff;
          nearest = loaded;
        }
      });
      frameToDraw = nearest;
    }

    const img = imagesRef.current[frameToDraw];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    // object-fit: cover emulation
    if (canvasRatio > imgRatio) {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    
    lastFrameIndexRef.current = index;
  };

  // Resize canvas to match container's physical pixel width/height (with high-DPI retina support)
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const width = parent.clientWidth;
    const height = parent.clientHeight;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    // Set style dimensions to match CSS viewport size
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    drawFrame(currentFrameRef.current);
  };

  // Progressive image preloader queue
  useEffect(() => {
    // Generate priorities: first frame, last frame, and every 10th frame for skeleton outline
    const priorityFrames: number[] = [];
    for (let i = 1; i <= totalFrames; i += 10) {
      priorityFrames.push(i);
    }
    if (!priorityFrames.includes(1)) priorityFrames.push(1);
    if (!priorityFrames.includes(totalFrames)) priorityFrames.push(totalFrames);

    // Remaining frames
    const remainingFrames: number[] = [];
    for (let i = 1; i <= totalFrames; i++) {
      if (!priorityFrames.includes(i)) {
        remainingFrames.push(i);
      }
    }

    let activeDownloads = 0;
    const maxConcurrent = 6; // Browser default limit for HTTP connection pooling

    const loadNext = () => {
      if (priorityFrames.length === 0 && remainingFrames.length === 0) return;
      
      while (activeDownloads < maxConcurrent) {
        const nextFrame = priorityFrames.shift() || remainingFrames.shift();
        if (!nextFrame) break;

        activeDownloads++;
        const img = new window.Image();
        img.src = getFramePath(nextFrame);
        img.onload = () => {
          imagesRef.current[nextFrame] = img;
          loadedFramesRef.current.add(nextFrame);
          activeDownloads--;
          
          // Redraw canvas if the loaded frame is at/near the current viewport scroll frame
          if (
            nextFrame === currentFrameRef.current || 
            Math.abs(nextFrame - currentFrameRef.current) < 5
          ) {
            drawFrame(currentFrameRef.current);
          }
          
          loadNext();
        };
        img.onerror = () => {
          activeDownloads--;
          loadNext();
        };
      }
    };

    // Kick off progressive load queue
    loadNext();
  }, []);

  // Set up scroll and resize listeners
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = rect.height;
      const viewHeight = window.innerHeight;

      // Scroll progress mapping
      const scrolled = -rect.top;
      const scrollableHeight = containerHeight - viewHeight;

      if (scrollableHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      const targetFrame = Math.max(
        1,
        Math.min(totalFrames, Math.round(progress * (totalFrames - 1)) + 1)
      );

      if (targetFrame !== currentFrameRef.current) {
        currentFrameRef.current = targetFrame;
        requestAnimationFrame(() => drawFrame(targetFrame));
      }
    };

    // Handle initial sizing and resize events
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial draw check
    handleScroll();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[1200vh] bg-slate-950"
    >
      {/* Sticky container that keeps the canvas in viewport for the duration of the scroll */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        
        {/* Full viewport canvas */}
        <canvas
          ref={canvasRef}
          className="block w-full h-full object-cover"
        />

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
