'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MapPin, 
  Phone,
  X 
} from 'lucide-react';
import Container from '../ui/Container';

interface DistrictLocation {
  id: string;
  name: string;
  malayalam: string;
  status: 'Available' | 'Coming Soon' | 'Operating';
  district: string;
  address: string;
  phone: string;
  pinCoords: { x: number; y: number };
}

const LocationPin3D: React.FC<{ isSelected?: boolean }> = ({ isSelected }) => (
  <div className="relative group flex items-center justify-center">
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/40 rounded-full blur-[2px]" />
    <svg
      width="32"
      height="40"
      viewBox="0 0 34 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-all duration-300 drop-shadow-md origin-bottom ${
        isSelected ? 'scale-125 -translate-y-1' : 'group-hover:scale-110 group-hover:-translate-y-0.5'
      }`}
    >
      <defs>
        <linearGradient id="redPinGrad" x1="5" y1="2" x2="29" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF4D4D" />
          <stop offset="35%" stopColor="#D62828" />
          <stop offset="85%" stopColor="#9E0C0C" />
          <stop offset="100%" stopColor="#600505" />
        </linearGradient>
        <radialGradient id="highlightGrad" cx="12" cy="10" r="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        d="M17 0C7.61116 0 0 7.61116 0 17C0 26.5 13.5 40.5 16.2 41.6C16.7 41.8 17.3 41.8 17.8 41.6C20.5 40.5 34 26.5 34 17C34 7.61116 26.3888 0 17 0Z"
        fill="url(#redPinGrad)"
        stroke="#800000"
        strokeWidth="0.75"
      />
      <ellipse cx="12" cy="10" rx="7" ry="5" fill="url(#highlightGrad)" />
      <circle cx="17" cy="14" r="6" fill="#FAF8F5" stroke="#7A0000" strokeWidth="0.5" />
    </svg>
    {isSelected && (
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-9 h-9 rounded-full bg-[#D62828] opacity-40 animate-ping pointer-events-none" />
    )}
  </div>
);

const FEATURED_LOCATIONS: DistrictLocation[] = [
  { id: 'kannur', name: 'Kannur', malayalam: 'കണ്ണൂർ', status: 'Operating', district: 'Kannur District', address: 'MEATIN Outlet, City Centre Complex, Fort Road, Kannur - 670001', phone: '+91 99466 16162', pinCoords: { x: 32, y: 15 } },
  { id: 'kozhikode', name: 'Kozhikode', malayalam: 'കോഴിക്കോട്', status: 'Available', district: 'Kozhikode District', address: 'MEATIN Outlet, Mavoor Road, Near Focus Mall, Kozhikode - 673004', phone: '+91 99466 16162', pinCoords: { x: 38, y: 24 } },
  { id: 'thrissur', name: 'Thrissur', malayalam: 'തൃശ്ശൂർ', status: 'Operating', district: 'Thrissur (Head Office & Flagship)', address: '157809 E, Panchami Complex, Perumpilavu, Karikkad P.O., Thrissur District - 680519', phone: '+91 99466 16162', pinCoords: { x: 48, y: 40 } },
  { id: 'ernakulam', name: 'Ernakulam', malayalam: 'എറണാകുളം', status: 'Available', district: 'Ernakulam / Kochi District', address: 'MEATIN Kochi Flagship, MG Road, Near Padma Junction, Ernakulam - 682035', phone: '+91 99466 16162', pinCoords: { x: 52, y: 49 } },
  { id: 'kottayam', name: 'Kottayam', malayalam: 'കോട്ടയം', status: 'Available', district: 'Kottayam District', address: 'MEATIN Outlet, KKP Heights, KK Road, Kottayam - 686001', phone: '+91 99466 16162', pinCoords: { x: 58, y: 60 } },
  { id: 'thiruvananthapuram', name: 'Thiruvananthapuram', malayalam: 'തിരുവനന്തപുരം', status: 'Available', district: 'Thiruvananthapuram District', address: 'MEATIN Trivandrum Outlet, Kowdiar Main Road, Thiruvananthapuram - 695003', phone: '+91 99466 16162', pinCoords: { x: 84, y: 86 } },
];

export const FranchisePageUI: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<DistrictLocation | null>(
    FEATURED_LOCATIONS.find(d => d.id === 'thrissur') || FEATURED_LOCATIONS[2]
  );
  const [activeDistrictPopover, setActiveDistrictPopover] = useState<DistrictLocation | null>(
    FEATURED_LOCATIONS.find(d => d.id === 'thrissur') || FEATURED_LOCATIONS[2]
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch pinch-zoom refs
  const lastTouchDist = useRef<number | null>(null);
  const lastPanTouch  = useRef<{ x: number; y: number } | null>(null);
  const isPinching    = useRef(false);

  // Refs for tooltip position calculation
  const viewportRef = useRef<HTMLDivElement>(null);
  const mapRef      = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // Zoom helpers
  const handleZoomIn  = () => setZoomLevel(prev => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoomLevel(prev => { const n = Math.max(prev - 0.35, 1); if (n === 1) setPanOffset({ x: 0, y: 0 }); return n; });
  const handleResetZoom = () => { setZoomLevel(1); setPanOffset({ x: 0, y: 0 }); };

  // Mouse drag
  const handleMouseDown   = (e: React.MouseEvent) => { setIsDragging(true); setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y }); };
  const handleMouseMove   = (e: React.MouseEvent) => { if (!isDragging) return; setPanOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); };
  const handleMouseUp     = () => setIsDragging(false);
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  // Touch helpers
  const getTouchDist = (t: React.TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      isPinching.current = true;
      lastTouchDist.current = getTouchDist(e.touches);
      lastPanTouch.current = null;
    } else if (e.touches.length === 1) {
      isPinching.current = false;
      lastPanTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault(); // prevent native scroll/zoom over the map
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      const nd = getTouchDist(e.touches);
      const delta = nd / lastTouchDist.current;
      lastTouchDist.current = nd;
      setZoomLevel(prev => { const n = Math.min(Math.max(prev * delta, 1), 3); if (n === 1) setPanOffset({ x: 0, y: 0 }); return n; });
    } else if (e.touches.length === 1 && !isPinching.current && lastPanTouch.current) {
      const dx = e.touches[0].clientX - lastPanTouch.current.x;
      const dy = e.touches[0].clientY - lastPanTouch.current.y;
      lastPanTouch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setPanOffset(prev => ({ x: prev.x + dx, y: prev.y + dy }));
    }
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length < 2) { lastTouchDist.current = null; isPinching.current = false; }
    if (e.touches.length === 0) lastPanTouch.current = null;
  }, []);

  // Compute tooltip pixel position relative to viewportRef
  const computeTooltipPos = useCallback(() => {
    if (!activeDistrictPopover || !mapRef.current || !viewportRef.current) { setTooltipPos(null); return; }
    const mr = mapRef.current.getBoundingClientRect();
    const vr = viewportRef.current.getBoundingClientRect();
    setTooltipPos({
      x: mr.left - vr.left + mr.width  * (activeDistrictPopover.pinCoords.x / 100),
      y: mr.top  - vr.top  + mr.height * (activeDistrictPopover.pinCoords.y / 100),
    });
  }, [activeDistrictPopover]);

  useEffect(() => { computeTooltipPos(); }, [activeDistrictPopover, zoomLevel, panOffset, computeTooltipPos]);

  // Tooltip placement, clamped inside viewport
  const TOOLTIP_W = 224; const TOOLTIP_H = 165; const MARGIN = 12;
  const getTooltipStyle = (): React.CSSProperties => {
    if (!tooltipPos || !viewportRef.current) return { display: 'none' };
    const vpW = viewportRef.current.offsetWidth;
    const vpH = viewportRef.current.offsetHeight;
    let left = tooltipPos.x + 22;
    let top  = tooltipPos.y - 20;
    if (left + TOOLTIP_W > vpW - MARGIN) left = tooltipPos.x - TOOLTIP_W - 22;
    left = Math.max(MARGIN, Math.min(left, vpW - TOOLTIP_W - MARGIN));
    top  = Math.max(MARGIN, Math.min(top,  vpH - TOOLTIP_H - MARGIN));
    return { position: 'absolute', left, top };
  };

  const handleSelectDistrict = (location: DistrictLocation) => {
    setSelectedLocation(location);
    setActiveDistrictPopover(location);
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800 min-h-screen font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[400px] lg:min-h-[30vw] mb-0 flex items-center overflow-hidden bg-white">
        {/* Wide background image — covers most of the hero */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[72vw] z-0 pointer-events-none overflow-hidden">
          <Image src="/assets/francise/meatin_storefront_hero.png" alt="MEATIN Freshness Delivered Storefront" fill className="object-cover object-center lg:object-left" priority />
          {/* Narrow left gradient — only covers text area */}
          <div className="absolute inset-y-0 left-0  w-full lg:w-[38%] bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent opacity-50 z-10" />
        </div>

        <Container className="relative z-10 py-10 lg:py-14">
          <div className="max-w-xs lg:max-w-[28vw]">
            {/* Title */}
            <h1 className="font-chau uppercase text-4xl sm:text-5xl pt-10 lg:text-[4vw] leading-[1.02] font-regular tracking-tight mb-4 text-slate-900">
              <span className="text-[#153520] block">FRANCHISE</span>
              <span className="text-[#153520]">WITH </span>
              <span className="text-[#D62828] relative inline-block">
                MEATIN
                <span className="absolute -top-3.5 -right-5 text-meatin-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5 16 3 21C8 21 14 19 17 14C19 11 18 9 17 8Z" /></svg>
                </span>
              </span>
            </h1>

            {/* Tagline */}
            <div>
              <p className="font-manrope font-semibold text-base sm:text-lg lg:text-[1.1vw] text-slate-700 leading-snug">
                Be a part of Kerala&apos;s <br /><span className="font-bold text-slate-900">trusted meat brand.</span>
              </p>
              <div className="w-16 h-1 bg-[#153520] rounded-full mt-2.5" />
            </div>

            {/* Stat pills — bottom of left block */}
            <div className="flex flex-wrap gap-2 mt-5">
              {[
                { num: '6+', label: 'Kerala Districts' },
                { num: '100%', label: 'Fresh & Hygienic' },
                { num: '24/7', label: 'Support' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2.5 bg-white/85 backdrop-blur-sm border border-[#1F5A3C]/20 rounded-xl px-4 py-2 shadow-sm">
                  <span className="font-chau text-2xl text-[#153520] leading-none">{s.num}</span>
                  <span className="font-manrope text-sm font-semibold text-slate-600">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* MAP SECTION */}
      <section className="py-0 pt-6">
        <Container>
          <div className="p-4 sm:p-6 lg:p-10 relative max-w-5xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-chau uppercase text-2xl sm:text-4xl lg:text-5xl font-regular tracking-tight text-slate-900 leading-tight">
                <span className="text-[#153520] mb-1">OUR FRANCHISE </span>
                <span className="text-[#1F5A3C] relative">
                  NETWORK
                  <span className="block w-16 h-1.5 bg-[#1F5A3C] rounded-full mt-1.5 mx-auto" />
                </span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-slate-600 mt-3 max-w-md mx-auto font-medium">
                Explore our franchise locations across Kerala and find an opportunity near you.
              </p>
            </div>

            {/*
              viewportRef uses overflow:visible so the tooltip (a sibling of the
              map clip div) can escape the bounding box and never get clipped.
            */}
            <div
              ref={viewportRef}
              className="relative w-full rounded-[24px] sm:rounded-[36px] bg-white border border-slate-300/80 shadow-sm"
              style={{ minHeight: 520, overflow: 'visible' }}
            >
              {/* Zoom controls — z-index 9999 so always on top */}
              <div
                className="absolute right-3 sm:right-5 top-3 sm:top-5 flex flex-col gap-2 bg-slate-950 text-white p-1.5 rounded-2xl shadow-xl border border-slate-800"
                style={{ zIndex: 9999 }}
              >
                <button onClick={handleZoomIn} className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer touch-manipulation" title="Zoom In">
                  <ZoomIn className="w-4 h-4 mb-0.5" /><span className="text-[9px] font-bold">Zoom In</span>
                </button>
                <button onClick={handleZoomOut} className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer touch-manipulation" title="Zoom Out">
                  <ZoomOut className="w-4 h-4 mb-0.5" /><span className="text-[9px] font-bold">Zoom Out</span>
                </button>
                <button onClick={handleResetZoom} className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 active:bg-slate-700 transition-colors cursor-pointer touch-manipulation" title="Reset View">
                  <RotateCcw className="w-4 h-4 mb-0.5" /><span className="text-[9px] font-bold">Reset</span>
                </button>
              </div>

              {/* Map clip wrapper — clips only the map image, NOT the tooltip */}
              <div
                className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden flex items-center justify-center"
                style={{ minHeight: 520 }}
              >
                {/* Scalable + draggable map inner */}
                <div
                  ref={mapRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onContextMenu={handleContextMenu}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  className={`relative w-full max-w-[290px] sm:max-w-[370px] md:max-w-[420px] aspect-[1000/1484] select-none ${
                    isDragging ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                    transformOrigin: 'center center',
                    touchAction: 'none',
                    transition: isDragging ? 'none' : 'transform 0.12s ease-out',
                    willChange: 'transform',
                    zIndex: 1,
                  }}
                >
                  <Image
                    src="/assets/francise/kerala-new-map.png"
                    alt="Kerala Franchise Map"
                    width={1000}
                    height={1484}
                    priority
                    className="w-full h-auto object-contain filter drop-shadow-xl pointer-events-none"
                  />

                  {/* Location pins */}
                  {FEATURED_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation?.id === loc.id;
                    return (
                      <div
                        key={loc.id}
                        onClick={() => handleSelectDistrict(loc)}
                        onTouchEnd={(e) => {
                          if (!isPinching.current) { e.stopPropagation(); handleSelectDistrict(loc); }
                        }}
                        className={`absolute cursor-pointer -translate-x-1/2 -translate-y-full transition-all duration-200 group flex items-center gap-1 sm:gap-1.5 touch-manipulation ${
                          isSelected ? 'z-30' : 'z-20'
                        }`}
                        style={{ left: `${loc.pinCoords.x}%`, top: `${loc.pinCoords.y}%` }}
                      >
                        <LocationPin3D isSelected={isSelected} />
                        <span className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md shadow-md whitespace-nowrap transition-colors ${
                          isSelected ? 'bg-[#1F5A3C] text-white' : 'bg-white/95 text-slate-800 border border-slate-200/80'
                        }`}>
                          {loc.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*
                TOOLTIP — sibling of map clip div, child of viewportRef (overflow:visible).
                Never clipped. z-index 9999 floats it above everything.
              */}
              {activeDistrictPopover && tooltipPos && (
                <div
                  className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-slate-200 w-52 sm:w-60 text-slate-800 pointer-events-auto"
                  style={{ ...getTooltipStyle(), zIndex: 9999 }}
                >
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveDistrictPopover(null); setTooltipPos(null); }}
                    className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors touch-manipulation"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                  <div className="mb-2 pr-6">
                    <h4 className="text-sm font-black text-slate-900">{activeDistrictPopover.name}</h4>
                    <span className="font-manrope text-[11px] font-medium text-slate-400">{activeDistrictPopover.malayalam}</span>
                  </div>
                  <div className="space-y-2 border-t border-slate-100 pt-2.5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D62828] shrink-0 mt-0.5" />
                      <p className="font-manrope text-[10px] sm:text-[11px] font-medium leading-snug text-slate-700">
                        {activeDistrictPopover.address}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#1F5A3C] shrink-0" />
                      <p className="font-manrope text-[11px] font-bold text-slate-800">{activeDistrictPopover.phone}</p>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default FranchisePageUI;
