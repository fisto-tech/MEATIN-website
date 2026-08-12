'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Truck, 
  Store, 
  Award, 
  MapPin, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Container from '../ui/Container';

interface FranchiseHeroProps {
  onApplyClick: () => void;
  onExploreMapClick: () => void;
}

export const FranchiseHero: React.FC<FranchiseHeroProps> = ({
  onApplyClick,
  onExploreMapClick
}) => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-meatin-green/90 text-white overflow-hidden">
      {/* Background glowing shapes & mesh */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F9A825_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-meatin-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-meatin-green/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Pitch */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-meatin-yellow text-xs font-extrabold uppercase tracking-wider mb-6 shadow-inner">
              <Sparkles className="w-4 h-4 text-meatin-yellow animate-spin" />
              <span>Kerala’s Fastest Growing Fresh Meat Retail Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6">
              Own a High-Profit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-meatin-yellow via-amber-300 to-white">
                MEATIN Store Franchise
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Partner with Kerala’s trusted farm-to-table meat brand. Capitalize on high consumer demand with our 100% cold-chain certified fresh chicken, mutton, beef, seafood, and ready-to-cook gourmet marinades.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={onApplyClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-meatin-red hover:bg-red-700 text-white font-black text-base transition-all shadow-xl shadow-meatin-red/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Apply for Franchise</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreMapClick}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-base border border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5 text-meatin-yellow" />
                <span>Explore Kerala Locations</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-center lg:text-left">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-meatin-yellow">14</span>
                <span className="text-xs text-slate-300 font-medium">Kerala Districts</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">25+</span>
                <span className="text-xs text-slate-300 font-medium">Operating Outlets</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-emerald-400">18 - 24%</span>
                <span className="text-xs text-slate-300 font-medium">Expected Net ROI</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-meatin-yellow">100%</span>
                <span className="text-xs text-slate-300 font-medium">Halal &amp; Cold-Chain</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Feature Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl hover:bg-white/15 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-meatin-yellow/20 border border-meatin-yellow/30 flex items-center justify-center text-meatin-yellow mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">High Profit Margins</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct farm sourcing ensures top profit margins for retail, door delivery, and bulk order supply.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl hover:bg-white/15 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-meatin-red/20 border border-meatin-red/30 flex items-center justify-center text-meatin-red mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Daily Cold Logistics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Temperature-controlled refrigerated vans deliver fresh cuts directly to your store every morning.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl hover:bg-white/15 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100% Halal Certified</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict hygiene, veterinary inspection, and zero chemical preservatives build unbeatable local customer trust.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 p-6 rounded-3xl hover:bg-white/15 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-4">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Turnkey Setup</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Complete interior design, chilling equipment, POS software, staff training, and grand launch marketing.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default FranchiseHero;
