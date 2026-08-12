'use client';

import React from 'react';
import { 
  Building, 
  Store, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  Users, 
  Headphones, 
  Zap,
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Container from '../ui/Container';

interface FranchiseBenefitsProps {
  onApplyClick: () => void;
}

export const FranchiseBenefits: React.FC<FranchiseBenefitsProps> = ({ onApplyClick }) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container>
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-meatin-red/10 border border-meatin-red/20 text-meatin-red text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Business Formats
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Flexible Franchise Models Designed for Maximum Returns
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Choose the model that fits your operational preferences. We provide end-to-end support from site selection to daily cold-chain supply.
          </p>
        </div>

        {/* Models Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Model 1: FOFO (Franchise Owned Franchise Operated) */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-meatin-green/50 transition-all hover:shadow-2xl relative flex flex-col justify-between group">
            <div className="absolute top-0 right-0 bg-meatin-green text-white text-xs font-extrabold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
              Most Popular
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-meatin-green/10 border border-meatin-green/20 text-meatin-green flex items-center justify-center mb-6">
                <Store className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                FOFO Model
              </h3>
              <p className="text-xs font-bold text-meatin-green uppercase tracking-wider mb-4">
                Franchise Owned &amp; Franchise Operated
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Ideal for hands-on entrepreneurs who wish to actively manage daily retail operations while leveraging MEATIN’s brand equity, marketing, and cold-chain supply.
              </p>

              <div className="space-y-3 mb-8 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Investment Range</span>
                  <span className="text-meatin-red text-sm font-black">₹14 Lakhs - ₹22 Lakhs</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Store Space Required</span>
                  <span className="text-slate-900 font-black">400 - 750 Sq. Ft.</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Payback Period</span>
                  <span className="text-emerald-600 font-black">15 - 20 Months</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What You Get:</h4>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-meatin-green shrink-0 mt-0.5" />
                  <span>100% Retained Operational Profits</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-meatin-green shrink-0 mt-0.5" />
                  <span>Direct Morning Cold-Chain Farm Logistics</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-meatin-green shrink-0 mt-0.5" />
                  <span>Corporate Staff Butchery &amp; Counter Training</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                  <Check className="w-4 h-4 text-meatin-green shrink-0 mt-0.5" />
                  <span>Local &amp; Digital Hyperlocal App Marketing</span>
                </div>
              </div>
            </div>

            <button
              onClick={onApplyClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-meatin-green hover:bg-emerald-900 text-white font-bold text-sm transition-all shadow-lg shadow-meatin-green/20 flex items-center justify-center gap-2"
            >
              <span>Select FOFO Model</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Model 2: FOCO (Franchise Owned Company Operated) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 hover:border-meatin-yellow/50 transition-all hover:shadow-2xl relative flex flex-col justify-between group">
            <div className="absolute top-0 right-0 bg-meatin-yellow text-slate-950 text-xs font-extrabold px-4 py-1.5 rounded-bl-2xl rounded-tr-3xl uppercase tracking-wider">
              Passive Income
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-meatin-yellow/20 border border-meatin-yellow/30 text-meatin-yellow flex items-center justify-center mb-6">
                <Building className="w-7 h-7" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                FOCO Model
              </h3>
              <p className="text-xs font-bold text-meatin-yellow uppercase tracking-wider mb-4">
                Franchise Owned &amp; Company Operated
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Designed for investors seeking stress-free passive income. You fund the store capital while MEATIN’s expert corporate team manages staffing, inventory, sales, and delivery.
              </p>

              <div className="space-y-3 mb-8 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Investment Range</span>
                  <span className="text-meatin-yellow text-sm font-black">₹18 Lakhs - ₹28 Lakhs</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Assured Revenue Share</span>
                  <span className="text-emerald-400 font-black">Fixed Margin + Share</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span>Management Effort</span>
                  <span className="text-white font-black">0% (Fully Corporate Managed)</span>
                </div>
              </div>

              <div className="space-y-2.5 mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What You Get:</h4>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-meatin-yellow shrink-0 mt-0.5" />
                  <span>Guaranteed Monthly Returns &amp; Profit Payouts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-meatin-yellow shrink-0 mt-0.5" />
                  <span>Zero Operational Hassle or Staff Hiring Burden</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-meatin-yellow shrink-0 mt-0.5" />
                  <span>Complete Inventory &amp; Wastage Liability Covered</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                  <Check className="w-4 h-4 text-meatin-yellow shrink-0 mt-0.5" />
                  <span>Real-time Live Sales Dashboard Access</span>
                </div>
              </div>
            </div>

            <button
              onClick={onApplyClick}
              className="w-full py-3.5 px-6 rounded-2xl bg-meatin-red hover:bg-red-700 text-white font-bold text-sm transition-all shadow-lg shadow-meatin-red/30 flex items-center justify-center gap-2"
            >
              <span>Select FOCO Model</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* 6 Core Franchise Pillars */}
        <div className="mt-16 bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80">
          <h3 className="text-2xl font-extrabold text-slate-900 text-center mb-10">
            6 Pillars of MEATIN Franchise Support
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-green/10 text-meatin-green flex items-center justify-center shrink-0 font-bold">
                01
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Site Selection &amp; Feasibility</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our expansion team conducts footfall audits, demographic analysis, and catchment area mapping before approving any store site.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-red/10 text-meatin-red flex items-center justify-center shrink-0 font-bold">
                02
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Store Fit-Out &amp; Interiors</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardized glassmorphic cold display counters, hygienic stainless steel workstations, and premium store branding.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-yellow/20 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                03
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Uninterrupted Cold Chain</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Daily refrigerated logistics dispatch guaranteed fresh poultry, lamb, beef, and seafood from our central hub in Thrissur.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-green/10 text-meatin-green flex items-center justify-center shrink-0 font-bold">
                04
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">POS &amp; Order Technology</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Integrated cloud billing software, inventory tracking, automatic reordering, and direct doorstep delivery app dispatch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-red/10 text-meatin-red flex items-center justify-center shrink-0 font-bold">
                05
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Staff Recruitment &amp; Training</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Professional butchery technique training, customer service protocols, hygiene compliance, and food safety certification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-meatin-yellow/20 text-slate-900 flex items-center justify-center shrink-0 font-bold">
                06
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">Grand Launch &amp; Hyperlocal Marketing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Social media campaigns, influencer inaugurations, local print flyers, sampling events, and digital ad targeting in your city.
                </p>
              </div>
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
};

export default FranchiseBenefits;
