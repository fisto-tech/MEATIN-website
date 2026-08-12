'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  MapPin, 
  Building2, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Phone, 
  Mail, 
  ChevronRight, 
  Search, 
  Filter, 
  Store,
  TrendingUp,
  Maximize2,
  Info
} from 'lucide-react';
import { KERALA_DISTRICTS, FRANCHISE_LOCATIONS, DistrictInfo, FranchiseLocation } from '@/data/franchiseData';

interface InteractiveKeralaMapProps {
  onSelectLocation?: (location: FranchiseLocation) => void;
  onOpenInquiryModal?: (districtName?: string) => void;
}

export const InteractiveKeralaMap: React.FC<InteractiveKeralaMapProps> = ({
  onSelectLocation,
  onOpenInquiryModal
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  const [selectedDistrict, setSelectedDistrict] = useState<DistrictInfo | null>(
    KERALA_DISTRICTS.find(d => d.id === 'thrissur') || KERALA_DISTRICTS[6]
  );
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictInfo | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<FranchiseLocation | null>(
    FRANCHISE_LOCATIONS[0]
  );
  const [activeRegionFilter, setActiveRegionFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const nextZoom = Math.max(prev - 0.35, 1);
      if (nextZoom === 1) setPanOffset({ x: 0, y: 0 });
      return nextZoom;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Click to zoom on a district
  const handleDistrictClick = (district: DistrictInfo) => {
    setSelectedDistrict(district);
    const districtLoc = FRANCHISE_LOCATIONS.find(l => l.districtId === district.id);
    if (districtLoc) {
      setSelectedLocation(districtLoc);
      if (onSelectLocation) onSelectLocation(districtLoc);
    } else {
      setSelectedLocation(null);
    }

    // Zoom focus
    setZoomLevel(1.5);
    const targetX = (50 - district.pinCoords.x) * 3.5;
    const targetY = (50 - district.pinCoords.y) * 4.2;
    setPanOffset({ x: Math.max(-120, Math.min(120, targetX)), y: Math.max(-140, Math.min(140, targetY)) });
  };

  // Pin click
  const handlePinClick = (e: React.MouseEvent, location: FranchiseLocation) => {
    e.stopPropagation();
    const district = KERALA_DISTRICTS.find(d => d.id === location.districtId) || null;
    if (district) setSelectedDistrict(district);
    setSelectedLocation(location);
    if (onSelectLocation) onSelectLocation(location);
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || zoomLevel <= 1) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Filtered districts
  const filteredDistricts = KERALA_DISTRICTS.filter(district => {
    const matchesRegion = activeRegionFilter === 'All' || district.region === activeRegionFilter;
    const matchesSearch = searchQuery === '' || 
      district.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      FRANCHISE_LOCATIONS.some(l => l.districtId === district.id && l.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <section className="py-8 bg-slate-50 relative overflow-hidden" id="interactive-map">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-meatin-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-meatin-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid: Interactive Map (Left) + Location Info Panel (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: MAP CONTAINER (8 cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col min-h-[580px] sm:min-h-[640px]">
            
            {/* Map Header Status */}
            <div className="flex items-center justify-between gap-3 mb-4 z-20">
              <div className="flex items-center gap-2 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  {hoveredDistrict ? `District: ${hoveredDistrict.name}` : selectedDistrict ? `Selected: ${selectedDistrict.name}` : 'Kerala Franchise Map'}
                </span>
              </div>

              {/* Map Legend */}
              <div className="hidden sm:flex items-center gap-3 text-[11px] font-medium text-slate-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-meatin-red" /> Operating
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Opening Soon
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Available
                </span>
              </div>
            </div>

            {/* Floating Zoom & Reset Controls */}
            <div className="absolute right-6 top-20 z-30 flex flex-col gap-2 bg-slate-800/90 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700 shadow-xl">
              <button
                onClick={handleZoomIn}
                title="Zoom In"
                className="w-9 h-9 rounded-xl bg-slate-700/70 hover:bg-meatin-green text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                title="Zoom Out"
                className="w-9 h-9 rounded-xl bg-slate-700/70 hover:bg-meatin-green text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Reset View"
                className="w-9 h-9 rounded-xl bg-slate-700/70 hover:bg-meatin-yellow hover:text-slate-950 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Map Canvas viewport */}
            <div
              ref={mapContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              className={`relative flex-1 w-full flex items-center justify-center overflow-hidden select-none rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 ${
                zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
              }`}
            >
              {/* Map Canvas Inner with Transform */}
              <div
                className="relative transition-transform duration-300 ease-out w-full max-w-[340px] sm:max-w-[420px] aspect-[261/530]"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                  transformOrigin: 'center center',
                }}
              >
                {/* SVG Visual Map: new 1.svg background graphic */}
                <Image
                  src="/assets/francise/new 1.svg"
                  alt="Kerala District Map"
                  width={261}
                  height={530}
                  priority
                  className="w-full h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                />

                {/* Hotspot District overlay paths */}
                <div className="absolute inset-0 pointer-events-auto">
                  {KERALA_DISTRICTS.map((district) => {
                    const isSelected = selectedDistrict?.id === district.id;
                    const isHovered = hoveredDistrict?.id === district.id;
                    const isMatchingSearch = filteredDistricts.some(d => d.id === district.id);

                    return (
                      <div
                        key={district.id}
                        onClick={() => handleDistrictClick(district)}
                        onMouseEnter={() => setHoveredDistrict(district)}
                        onMouseLeave={() => setHoveredDistrict(null)}
                        className={`absolute rounded-full transition-all duration-200 cursor-pointer -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
                          isMatchingSearch ? 'opacity-100' : 'opacity-30'
                        }`}
                        style={{
                          left: `${district.pinCoords.x}%`,
                          top: `${district.pinCoords.y}%`,
                          width: '36px',
                          height: '36px',
                        }}
                      >
                        {/* District pulse glow on hover/selected */}
                        {(isHovered || isSelected) && (
                          <span
                            className={`absolute inset-0 rounded-full animate-ping opacity-60 ${
                              isSelected ? 'bg-meatin-yellow' : 'bg-meatin-red'
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}

                  {/* Red Location Pins for Franchise Stores */}
                  {FRANCHISE_LOCATIONS.map((loc) => {
                    const isSelected = selectedLocation?.id === loc.id;
                    const isHoveredLoc = hoveredDistrict?.id === loc.districtId;

                    // Color code pin by status
                    const statusColorClass =
                      loc.status === 'Operating'
                        ? 'bg-meatin-red text-white border-white shadow-meatin-red/50'
                        : loc.status === 'Opening Soon'
                        ? 'bg-amber-500 text-slate-950 border-white shadow-amber-500/50'
                        : 'bg-emerald-500 text-white border-white shadow-emerald-500/50';

                    return (
                      <div
                        key={loc.id}
                        onClick={(e) => handlePinClick(e, loc)}
                        className={`absolute z-20 cursor-pointer -translate-x-1/2 -translate-y-full transition-all duration-300 group ${
                          isSelected ? 'scale-125 z-30' : 'scale-100 hover:scale-110'
                        }`}
                        style={{
                          left: `${loc.coordinates.x}%`,
                          top: `${loc.coordinates.y}%`,
                        }}
                      >
                        {/* Tooltip on pin hover */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center pointer-events-none z-40 w-max max-w-[180px]">
                          <div className="bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xl border border-slate-700 text-center leading-tight">
                            {loc.title}
                            <span className="block text-[9px] font-normal text-meatin-yellow">
                              {loc.status}
                            </span>
                          </div>
                          <div className="w-2 h-2 bg-slate-900 rotate-45 -mt-1 border-r border-b border-slate-700" />
                        </div>

                        {/* Red location pin icon & pulse animation */}
                        <div className="relative">
                          <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform ${statusColorClass}`}>
                            <MapPin className="w-4 h-4 fill-current" />
                          </div>

                          {/* Pulsing ring for active location */}
                          {loc.status === 'Operating' && (
                            <span className="absolute -inset-1 rounded-full bg-meatin-red opacity-40 animate-ping pointer-events-none" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Map Bottom Helper Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-xs z-20 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Info className="w-3.5 h-3.5 text-meatin-yellow" />
                <span>Click any district pin or map location to inspect franchise availability.</span>
              </div>
              <div className="font-semibold text-slate-300">
                Showing {filteredDistricts.length} of 14 Kerala Districts
              </div>
            </div>
          </div>

          {/* RIGHT: DISTRICT & LOCATION DETAILS PANEL (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Active Selected Card */}
            {selectedLocation ? (
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 relative overflow-hidden transition-all duration-300">
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 ${
                    selectedLocation.status === 'Operating'
                      ? 'bg-meatin-red/10 text-meatin-red border border-meatin-red/20'
                      : selectedLocation.status === 'Opening Soon'
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${
                      selectedLocation.status === 'Operating' ? 'bg-meatin-red animate-pulse' : selectedLocation.status === 'Opening Soon' ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} />
                    {selectedLocation.status}
                  </span>

                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {selectedLocation.districtName} District
                  </span>
                </div>

                {/* Outlet Title & Malayalam Name */}
                <h3 className="text-2xl font-black text-slate-900 mb-1 leading-snug">
                  {selectedLocation.title}
                </h3>
                <p className="text-sm font-semibold text-meatin-green mb-4">
                  {selectedLocation.malayalamName}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedLocation.description}
                </p>

                {/* Key Franchise Parameters */}
                <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                  <div className="text-center">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">Investment</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 block">{selectedLocation.investment}</span>
                  </div>
                  <div className="text-center border-x border-slate-200">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">Required Area</span>
                    <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 block">{selectedLocation.areaRequired}</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase">Expected ROI</span>
                    <span className="text-xs sm:text-sm font-black text-meatin-green mt-0.5 block">{selectedLocation.expectedRoi}</span>
                  </div>
                </div>

                {/* Store Highlights */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Location Features &amp; Infrastructure
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLocation.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-meatin-green shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Address & Contact Info */}
                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-meatin-red shrink-0 mt-0.5" />
                    <span>{selectedLocation.address}</span>
                  </div>
                  <div className="flex items-center gap-4 pt-1">
                    <a href={`tel:${selectedLocation.phone}`} className="flex items-center gap-1.5 font-bold text-slate-800 hover:text-meatin-green">
                      <Phone className="w-3.5 h-3.5 text-meatin-green" />
                      {selectedLocation.phone}
                    </a>
                    <a href={`mailto:${selectedLocation.email}`} className="flex items-center gap-1.5 font-semibold text-slate-600 hover:text-meatin-green">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {selectedLocation.email}
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenInquiryModal && onOpenInquiryModal(selectedLocation.districtName)}
                    className="flex-1 py-3 px-5 rounded-xl bg-meatin-red hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-meatin-red/20 flex items-center justify-center gap-2 group"
                  >
                    <span>Apply For Franchise</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ) : selectedDistrict ? (
              /* District Summary Card (when no specific store clicked) */
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90 relative">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-meatin-green/10 text-meatin-green border border-meatin-green/20">
                    District Overview
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {selectedDistrict.region}
                  </span>
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-2">
                  {selectedDistrict.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {selectedDistrict.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                    <span className="block text-2xl font-black text-meatin-red">{selectedDistrict.activeCount}</span>
                    <span className="text-xs font-semibold text-slate-500">Active Stores</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
                    <span className="block text-2xl font-black text-emerald-600">{selectedDistrict.availableCount}</span>
                    <span className="text-xs font-semibold text-slate-600">Available Territories</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiryModal && onOpenInquiryModal(selectedDistrict.name)}
                  className="w-full py-3 px-5 rounded-xl bg-meatin-green hover:bg-emerald-900 text-white font-bold text-sm transition-all shadow-lg shadow-meatin-green/20 flex items-center justify-center gap-2"
                >
                  <span>Request Territory Rights in {selectedDistrict.name}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : null}

            {/* Quick District Selector Grid */}
            <div className="bg-white rounded-3xl p-5 shadow-lg border border-slate-200/80">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-meatin-green" />
                Select District ({filteredDistricts.length})
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                {KERALA_DISTRICTS.map((d) => {
                  const isSelected = selectedDistrict?.id === d.id;
                  const storeCount = FRANCHISE_LOCATIONS.filter(l => l.districtId === d.id).length;

                  return (
                    <button
                      key={d.id}
                      onClick={() => handleDistrictClick(d)}
                      className={`p-2.5 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-meatin-green text-white border-meatin-green shadow-md scale-[1.02]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                      }`}
                    >
                      <span className="block text-xs font-bold truncate">{d.name}</span>
                      <span className={`text-[10px] block mt-0.5 ${isSelected ? 'text-meatin-yellow font-semibold' : 'text-slate-500'}`}>
                        {storeCount > 0 ? `${storeCount} Outlet${storeCount > 1 ? 's' : ''}` : 'Franchise Open'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InteractiveKeralaMap;
