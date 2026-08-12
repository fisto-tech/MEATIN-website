'use client';

import React, { useState } from 'react';
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
  pinCoords: { x: number; y: number }; // Percentage coordinates on the 3D map
  tooltipOffset?: { right: number; top: number }; // Override tooltip position for edge-case pins
}

// Custom 3D Glossy Red Teardrop Location Pin Component
const LocationPin3D: React.FC<{ isSelected?: boolean }> = ({ isSelected }) => (
  <div className="relative group flex items-center justify-center">
    {/* Shadow on 3D map */}
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/40 rounded-full blur-[2px]" />
    
    {/* 3D Glossy Red Teardrop Location Pin */}
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
      
      {/* Main 3D Teardrop Pin Body */}
      <path
        d="M17 0C7.61116 0 0 7.61116 0 17C0 26.5 13.5 40.5 16.2 41.6C16.7 41.8 17.3 41.8 17.8 41.6C20.5 40.5 34 26.5 34 17C34 7.61116 26.3888 0 17 0Z"
        fill="url(#redPinGrad)"
        stroke="#800000"
        strokeWidth="0.75"
      />
      {/* Specular Gloss Highlight */}
      <ellipse cx="12" cy="10" rx="7" ry="5" fill="url(#highlightGrad)" />
      {/* Inner Hole Cutout */}
      <circle cx="17" cy="14" r="6" fill="#FAF8F5" stroke="#7A0000" strokeWidth="0.5" />
    </svg>

    {/* Selection Pulse Ring — centred on the pin head circle */}
    {isSelected && (
      <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-9 h-9 rounded-full bg-[#D62828] opacity-40 animate-ping pointer-events-none" />
    )}
  </div>
);

// 6 Key Locations Marked Accurately Inside the 3D Kerala Map
const FEATURED_LOCATIONS: DistrictLocation[] = [
  {
    id: 'kannur',
    name: 'Kannur',
    malayalam: 'കണ്ണൂർ',
    status: 'Operating',
    district: 'Kannur District',
    address: 'MEATIN Outlet, City Centre Complex, Fort Road, Kannur - 670001',
    phone: '+91 99466 16162',
    pinCoords: { x: 32, y: 15 },
  },
  {
    id: 'kozhikode',
    name: 'Kozhikode',
    malayalam: 'കോഴിക്കോട്',
    status: 'Available',
    district: 'Kozhikode District',
    address: 'MEATIN Outlet, Mavoor Road, Near Focus Mall, Kozhikode - 673004',
    phone: '+91 99466 16162',
    pinCoords: { x: 38, y: 24 },
  },
  {
    id: 'thrissur',
    name: 'Thrissur',
    malayalam: 'തൃശ്ശൂർ',
    status: 'Operating',
    district: 'Thrissur (Head Office & Flagship)',
    address: '157809 E, Panchami Complex, Perumpilavu, Karikkad P.O., Thrissur District - 680519',
    phone: '+91 99466 16162',
    pinCoords: { x: 48, y: 40 },
  },
  {
    id: 'ernakulam',
    name: 'Ernakulam',
    malayalam: 'എറണാകുളം',
    status: 'Available',
    district: 'Ernakulam / Kochi District',
    address: 'MEATIN Kochi Flagship, MG Road, Near Padma Junction, Ernakulam - 682035',
    phone: '+91 99466 16162',
    pinCoords: { x: 52, y: 49 },
  },
  {
    id: 'kottayam',
    name: 'Kottayam',
    malayalam: 'കോട്ടയം',
    status: 'Available',
    district: 'Kottayam District',
    address: 'MEATIN Outlet, KKP Heights, KK Road, Kottayam - 686001',
    phone: '+91 99466 16162',
    pinCoords: { x: 58, y: 60 },
  },
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    malayalam: 'തിരുവനന്തപുരം',
    status: 'Available',
    district: 'Thiruvananthapuram District',
    address: 'MEATIN Trivandrum Outlet, Kowdiar Main Road, Thiruvananthapuram - 695003',
    phone: '+91 99466 16162',
    pinCoords: { x: 74, y: 86 },
    tooltipOffset: { right: 52, top: 75 }, // Shift left and up to stay on-screen
  },
];

export const FranchisePageUI: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<DistrictLocation | null>(
    FEATURED_LOCATIONS.find(d => d.id === 'thrissur') || FEATURED_LOCATIONS[2]
  );
  const [activeDistrictPopover, setActiveDistrictPopover] = useState<DistrictLocation | null>(
    FEATURED_LOCATIONS.find(d => d.id === 'thrissur') || FEATURED_LOCATIONS[2]
  );
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictLocation | null>(null);

  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Zoom Control Handlers
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.35, 2.5));
  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(prev - 0.35, 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Dragging Handlers (Left Click & Right Click Supported)
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    // Prevent default right-click menu over the map for smooth right-click panning
    e.preventDefault();
  };

  // Click District or Pin
  const handleSelectDistrict = (location: DistrictLocation) => {
    setSelectedLocation(location);
    setActiveDistrictPopover(location);
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-800 min-h-screen font-sans">
      
      {/* 1. TOP HERO SECTION */}
      <section className="relative w-full min-h-[400px] lg:min-h-[28vw] mb-6 lg:mb-10 flex items-center overflow-hidden bg-white">
        
        {/* Right Image Container (Seamlessly Merged with Left Gradient Fade) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58vw] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/francise/meatin_storefront_hero.png"
            alt="MEATIN Freshness Delivered Storefront"
            fill
            className="object-cover object-center lg:object-left"
            priority
          />
          {/* Smooth Left-to-Right Soft Gradient Fade into white */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[48%] bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
          {/* Subtle Top & Bottom Soft Fades */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent opacity-60 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent opacity-60 z-10" />
        </div>

        {/* Left Content Box */}
        <Container className="relative z-10 py-10 lg:py-14">
          <div className="max-w-xl lg:max-w-[36vw]">
            
            

            {/* Title */}
            <h1 className="font-chau uppercase text-4xl sm:text-5xl lg:text-[4vw] leading-[1.02] font-regular tracking-tight mb-4 text-slate-900">
              <span className="text-[#153520] block">FRANCHISE</span>
              <span className="text-[#153520]">WITH </span>
              <span className="text-[#D62828] relative inline-block">
                MEATIN
                {/* Leaf accent */}
                <span className="absolute -top-3.5 -right-5 text-meatin-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 8C8 10 5 16 3 21C8 21 14 19 17 14C19 11 18 9 17 8Z" />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Sub-paragraph with Green Underline */}
            <div>
              <p className="font-manrope font-semibold text-base sm:text-lg lg:text-[1.1vw] text-slate-700 leading-snug">
                Be a part of Kerala's <br />
                <span className="font-bold text-slate-900">trusted meat brand.</span>
              </p>
              <div className="w-16 h-1 bg-[#153520] rounded-full mt-2.5" />
            </div>

          </div>
        </Container>

      </section>

      {/* 2. CENTERED KERALA MAP SECTION */}
      <section className="py-4">
        <Container>
          <div className=" p-6 sm:p-10  relative max-w-5xl mx-auto">
            
            {/* Section Header Centered with font-chau */}
            <div className="text-center mb-8">
              <h2 className="font-chau uppercase text-3xl sm:text-4xl lg:text-5xl font-regular tracking-tight text-slate-900 leading-tight">
                <span className="block text-[#153520] mb-1">OUR FRANCHISE</span>
                <span className="text-[#1F5A3C] relative inline-block">
                  NETWORK
                  <span className="block w-16 h-1.5 bg-[#1F5A3C] rounded-full mt-1.5 mx-auto" />
                </span>
              </h2>
              <p className="font-manrope text-xs sm:text-sm text-slate-600 mt-3 max-w-md mx-auto font-medium">
                Explore our franchise locations across Kerala and find an opportunity near you.
              </p>
            </div>

            {/* Centered Map Viewport Parent Container with Border */}
            <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-white border border-slate-300/80 p-6 sm:p-8 min-h-[580px] sm:min-h-[660px] overflow-hidden flex items-center justify-center shadow-xs">
              
              {/* Floating Black Vertical Zoom Controls in Top Right */}
              <div className="absolute right-4 sm:right-6 top-4 sm:top-6 z-30 flex flex-col gap-2 bg-slate-950 text-white p-1.5 rounded-2xl shadow-xl border border-slate-800">
                <button
                  onClick={handleZoomIn}
                  className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 mb-0.5" />
                  <span className="text-[9px] font-bold">Zoom In</span>
                </button>

                <button
                  onClick={handleZoomOut}
                  className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 mb-0.5" />
                  <span className="text-[9px] font-bold">Zoom Out</span>
                </button>

                <button
                  onClick={handleResetZoom}
                  className="flex flex-col items-center justify-center p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Reset View"
                >
                  <RotateCcw className="w-4 h-4 mb-0.5" />
                  <span className="text-[9px] font-bold">Reset</span>
                </button>
              </div>

              {/* 3D Kerala Map Image (`kerala-new-map.png`) with Smooth Mouse Dragging */}
              <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onContextMenu={handleContextMenu}
                className={`relative w-full max-w-[340px] sm:max-w-[420px] aspect-[1000/1484] transition-transform duration-200 ease-out select-none ${
                  isDragging ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                  transformOrigin: 'center center',
                }}
              >
                {/* Kerala 3D Map Image */}
                <Image
                  src="/assets/francise/kerala-new-map.png"
                  alt="Kerala Franchise Map"
                  width={1000}
                  height={1484}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-xl pointer-events-none"
                />

                {/* 6 Marked Location Pins & Labels */}
                {FEATURED_LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation?.id === loc.id;

                  return (
                    <div
                      key={loc.id}
                      onClick={() => handleSelectDistrict(loc)}
                      onMouseEnter={() => setHoveredDistrict(loc)}
                      onMouseLeave={() => setHoveredDistrict(null)}
                      className={`absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-full transition-all duration-200 group flex items-center gap-1.5 ${
                        isSelected ? 'z-30' : 'z-20'
                      }`}
                      style={{
                        left: `${loc.pinCoords.x}%`,
                        top: `${loc.pinCoords.y}%`,
                      }}
                    >
                      {/* 3D Glossy Red Location Pin Icon */}
                      <LocationPin3D isSelected={isSelected} />

                      {/* District Label Tag */}
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md shadow-md whitespace-nowrap transition-colors ${
                        isSelected ? 'bg-[#1F5A3C] text-white' : 'bg-white/95 text-slate-800 border border-slate-200/80'
                      }`}>
                        {loc.name}
                      </span>
                    </div>
                  );
                })}

                {/* Popover Tooltip — always displayed to the RIGHT of the pin */}
                {activeDistrictPopover && (
                  <div
                    className="absolute z-40 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 w-56 sm:w-60 text-slate-800 animate-in fade-in zoom-in-95 duration-150 pointer-events-auto"
                    style={{
                      right: `${activeDistrictPopover.tooltipOffset?.right ?? (100 - activeDistrictPopover.pinCoords.x + 4)}%`,
                      top: `${activeDistrictPopover.tooltipOffset?.top ?? (activeDistrictPopover.pinCoords.y + 2)}%`,
                    }}
                  >
                    {/* Close button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDistrictPopover(null);
                      }}
                      className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    {/* Location Title */}
                    <div className="mb-2 pr-6">
                      <h4 className="text-sm font-black text-slate-900">
                        {activeDistrictPopover.name}
                      </h4>
                      <span className="font-manrope text-[11px] font-medium text-slate-400">
                        {activeDistrictPopover.malayalam}
                      </span>
                    </div>

                    {/* Store Address & Contact */}
                    <div className="space-y-2 border-t border-slate-100 pt-2.5">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#D62828] shrink-0 mt-0.5" />
                        <p className="font-manrope text-[11px] font-medium leading-snug text-slate-700">
                          {activeDistrictPopover.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#1F5A3C] shrink-0" />
                        <p className="font-manrope text-[11px] font-bold text-slate-800">
                          {activeDistrictPopover.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default FranchisePageUI;
