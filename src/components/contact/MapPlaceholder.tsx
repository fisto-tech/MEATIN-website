import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';

export const MapPlaceholder: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-premium-lg border border-slate-100 relative overflow-hidden">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-meatin-red/10 border border-meatin-red/20 flex items-center justify-center text-meatin-red">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Headquarters Location</h3>
            <p className="text-xs text-slate-500">MEATIn Corporate &amp; Distribution Hub</p>
          </div>
        </div>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-meatin-green hover:text-meatin-green-hover transition-colors"
        >
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Map Card Viewport */}
      <div className="relative w-full h-[350px] sm:h-[420px] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner group">
        {/* Styled Simulated Interactive Map Background */}
        <div className="absolute inset-0 bg-[#1e293b] opacity-90">
          {/* Simulated Roads & Grid Vector graphics */}
          <svg className="w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100" x2="1000" y2="100" stroke="#334155" strokeWidth="8" />
            <line x1="0" y1="260" x2="1000" y2="260" stroke="#334155" strokeWidth="12" />
            <line x1="0" y1="340" x2="1000" y2="340" stroke="#2E7D32" strokeWidth="4" />
            <line x1="200" y1="0" x2="200" y2="600" stroke="#334155" strokeWidth="10" />
            <line x1="500" y1="0" x2="500" y2="600" stroke="#C62828" strokeWidth="6" />
            <line x1="750" y1="0" x2="750" y2="600" stroke="#334155" strokeWidth="8" />
            <circle cx="500" cy="260" r="180" stroke="#334155" strokeWidth="2" fill="none" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Center Animated Location Pin Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center group-hover:scale-110 transition-transform duration-300">
          {/* Glowing pulse ring */}
          <div className="absolute w-20 h-20 bg-meatin-red/30 rounded-full animate-ping pointer-events-none" />
          
          {/* Floating Location Card */}
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-slate-200 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-meatin-green animate-pulse" />
            <span className="text-xs font-bold text-slate-900">MEATIn HQ</span>
          </div>

          {/* Pin Icon */}
          <div className="w-12 h-12 rounded-full bg-meatin-red text-white flex items-center justify-center shadow-red-glow border-2 border-white">
            <MapPin className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        {/* Map Overlay Controls */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/10 text-white text-xs font-medium pointer-events-auto">
            Interactive Map View
          </div>
          
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto"
          >
            <Button variant="yellow" size="sm" className="font-semibold shadow-lg">
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapPlaceholder;
