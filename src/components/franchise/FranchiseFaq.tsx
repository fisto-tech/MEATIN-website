'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, Mail } from 'lucide-react';
import Container from '../ui/Container';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    category: 'Investment & Returns',
    question: 'What is the total investment required to start a MEATIN franchise?',
    answer: 'The initial investment ranges between ₹14 Lakhs to ₹25 Lakhs depending on the store footprint (400 to 800 sq ft) and the chosen model (FOFO or FOCO). This covers store interior branding, glass cold display units, commercial refrigeration equipment, POS hardware, initial stock, and grand launch marketing.'
  },
  {
    category: 'Investment & Returns',
    question: 'What is the expected Return on Investment (ROI) and payback period?',
    answer: 'Franchisees typically achieve full ROI within 15 to 24 months. Operating outlets yield high gross margins due to direct farm-to-store cold chain logistics without middleman markups.'
  },
  {
    category: 'Supply Chain & Sourcing',
    question: 'How is fresh meat supplied to my store daily?',
    answer: 'MEATIN operates a centralized cold storage processing hub in Perumpilavu, Thrissur. Every morning, temperature-controlled refrigerated delivery vans deliver freshly processed, Halal certified poultry, mutton, beef, seafood, and marinades directly to your store.'
  },
  {
    category: 'Operations & Training',
    question: 'Do I need prior experience in the meat or food retail business?',
    answer: 'No prior meat industry experience is required. MEATIN provides comprehensive 2-week hands-on training covering meat cutting techniques, hygienic handling, customer service, inventory software, and doorstep delivery app dispatch.'
  },
  {
    category: 'Franchise Support',
    question: 'What support does MEATIN corporate provide for store launch?',
    answer: 'We assist with catchment site evaluation, lease negotiation, interior store layout design, supply of certified cold-chain equipment, staff hiring, POS software installation, local ad targeting, and grand opening inauguration.'
  },
  {
    category: 'Territory Rights',
    question: 'Will MEATIN grant exclusive territorial protection for my store?',
    answer: 'Yes! Every approved franchisee receives an exclusive geographic radius (typically 3km to 5km depending on urban density) ensuring no other MEATIN store will operate within your protected catchment zone.'
  }
];

export const FranchiseFaq: React.FC<{ onApplyClick: () => void }> = ({ onApplyClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <Container>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-meatin-yellow/20 border border-meatin-yellow/30 text-meatin-yellow text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About Partnering With Us
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have questions about investment, logistics, or store requirements? Here are key answers to help you get started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white hover:text-meatin-yellow transition-colors"
                >
                  <span className="flex-1">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180 bg-meatin-green text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need Assistance Card */}
        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-meatin-green/30 via-slate-800 to-meatin-red/30 p-8 rounded-3xl border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left">
            <h4 className="text-xl font-black text-white">Have More Questions?</h4>
            <p className="text-xs text-slate-300 mt-1">Speak directly with our Franchise Expansion Director in Thrissur.</p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:+919946616162"
              className="py-3 px-5 rounded-xl bg-white text-slate-950 font-black text-xs hover:bg-meatin-yellow transition-all flex items-center gap-2 shrink-0"
            >
              <PhoneCall className="w-4 h-4 text-meatin-red" />
              <span>Call +91 9946616162</span>
            </a>

            <button
              onClick={onApplyClick}
              className="py-3 px-5 rounded-xl bg-meatin-red text-white font-bold text-xs hover:bg-red-700 transition-all shrink-0"
            >
              Apply Online
            </button>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default FranchiseFaq;
