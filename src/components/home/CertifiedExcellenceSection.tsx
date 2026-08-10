'use client';

import React from 'react';
import Image from 'next/image';

interface CertificationCard {
  title: string;
  description: string;
  logo: string;
  badge: string;
  certUrl?: string;
}

const certifications: CertificationCard[] = [
  {
    title: 'FSSAI Certified',
    description: 'Food Safety and Standards Authority of India certified for safe, hygienic and high quality meat processing.',
    logo: '/assets/home/certified/fssai-logo.webp',
    badge: '/assets/home/certified/badge-icon.webp',
  },
  {
    title: 'Halal Certified',
    description: '100% Halal certified processing ensuring purity, ethical practices and complete trust for every product.',
    logo: '/assets/home/certified/halal-logo.webp',
    badge: '/assets/home/certified/badge-icon.webp',
  },
];

export const CertifiedExcellenceSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-[2.5vw] pb-0 lg:min-h-screen lg:h-screen lg:flex lg:flex-col lg:justify-between overflow-hidden z-10">
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0">
        <Image
          src="/assets/home/certified/background-pattern.webp"
          alt="Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Main Section: Header + 2 Certification Cards */}
      <div className="relative z-10 w-full max-w-[1536px] lg:max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-[2vw]">
        
        {/* ========================================================================= */}
        {/* HEADER SECTION                                                            */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-[2.8vw]">
          {/* Top Category Tag + Gold Line */}
          <div className="flex flex-col items-center mb-3 lg:mb-[0.8vw]">
            <span className="font-manrope font-extrabold text-xs sm:text-sm lg:text-[0.85vw] text-[#153520] tracking-widest uppercase block">
              OUR PROMISE
            </span>
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[2.5vw] bg-[#D4A437] mt-1.5 rounded-full" />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[3.2vw] leading-tight mt-1 py-4">
            <span className="font-chau font-extrabold text-[#D62828] mr-2">Certified</span>
            <span className="font-chau font-extrabold text-[#11281D]">Excellence</span>
          </h2>

          {/* Subtitle */}
          <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[0.9vw] text-[#2D2D2D] mt-2 lg:mt-[0.5vw]">
            Our commitment to international food safety and quality standards.
          </p>

          {/* Accent Underline with Center Dot */}
          <div className="flex items-center justify-center gap-1.5 mt-3 lg:mt-[0.6vw]">
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[3vw] bg-[#D4A437]" />
            <span className="w-1.5 h-1.5 lg:w-[0.4vw] lg:h-[0.4vw] rounded-full bg-[#D4A437]" />
            <span className="h-[2px] lg:h-[0.14vw] w-8 lg:w-[3vw] bg-[#D4A437]" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2 CERTIFICATION CARDS GRID                                                */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[1100px] lg:max-w-[60vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-[2vw] mb-8 lg:mb-[2.5vw]">
          {certifications.map((card) => (
            <div
              key={card.title}
              className="bg-[#FAF6F0] rounded-3xl lg:rounded-[1.3vw] border border-[#EADBCC] p-5 sm:p-7 lg:p-[1.8vw] relative shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Ribbon Badge Icon at top-right */}
              <div className="absolute top-5 right-5 lg:top-[1.5vw] lg:right-[1.5vw] w-7 h-7 lg:w-[2vw] lg:h-[2vw]">
                <Image
                  src={card.badge}
                  alt="Badge"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Main Content: Logo + Text */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 lg:gap-[1.5vw]">
                
                {/* Left Logo Container */}
                <div className="w-28 sm:w-32 lg:w-[8.5vw] flex-shrink-0 flex items-center justify-center p-1.5">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={160}
                    height={100}
                    className="w-full h-auto object-contain max-h-20 lg:max-h-[5.2vw]"
                  />
                </div>

                {/* Vertical Accent Divider Bar */}
                <span className="hidden sm:block h-24 lg:h-[6vw] w-[1.5px] bg-[#D4A437]/40 self-center" />

                {/* Right Text Content */}
                <div className="flex-1 text-center sm:text-left pr-0 sm:pr-4 lg:pr-[1.2vw]">
                  <h3 className="font-chau  text-xl sm:text-2xl lg:text-[1.65vw] text-[#153520] leading-tight">
                    {card.title}
                  </h3>

                  {/* Dot / Underline line */}
                  <div className="flex items-center justify-center sm:justify-start gap-1 my-1.5 lg:my-[0.4vw]">
                    <span className="h-[2px] w-6 lg:w-[1.6vw] bg-[#D4A437]" />
                    <span className="w-1 h-1 rounded-full bg-[#D4A437]" />
                     <span className="h-[2px] w-6 lg:w-[1.6vw] bg-[#D4A437]" />
                  </div>

                  <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[0.85vw] text-[#4A5568] leading-relaxed">
                    {card.description}
                  </p>
                </div>

              </div>

              {/* Bottom VIEW CERTIFICATE Button */}
              <div className="mt-5 lg:mt-[1.3vw] flex justify-center">
                <button
                  type="button"
                  className="bg-[#153520] hover:bg-[#1b432a] text-white px-5 py-2 sm:px-6 sm:py-2.5 lg:px-[1.6vw] lg:py-[0.55vw] rounded-full text-xs sm:text-sm lg:text-[0.8vw] font-bold tracking-wider flex items-center justify-center gap-2 shadow-md transition-all duration-300 hover:scale-[1.03] cursor-pointer group"
                >
                  <div className="w-4 h-4 lg:w-[1vw] lg:h-[1vw] flex items-center justify-center text-[#D4A437]">
                    <Image
                      src="/assets/home/certified/eye-icon.svg"
                      alt="Eye"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span>VIEW CERTIFICATE</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* BOTTOM TRUCK LOGISTICS SECTION - 100% FULL WIDTH BACKGROUND               */}
      {/* Edge-to-edge full width with zero bottom margin or padding                */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full bg-[#FBF3E9] border-t border-[#EADBCC] py-4 sm:py-5 lg:py-[1.2vw] px-4 sm:px-8 lg:px-[6vw]">
        <div className="w-full max-w-[1400px] lg:max-w-[85vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-[3vw]">
          
          {/* Left Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-dm-serif text-3xl sm:text-3xl lg:text-[3vw] text-[#153520] leading-tight mb-1 lg:mb-[0.3vw]">
              Certified Quality: Delivered Safely
            </h3>
            <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[1.2vw] text-[#2D2D2D] max-w-xl lg:max-w-[50vw] pt-3 lg:pt-[0.6vw] lg:leading-[1.6vw] leading-relaxed">
              From our state-of-the-art processing plant to your doorstep, we maintain certified hygiene and freshness through our advanced cold chain logistics.
            </p>
          </div>

          {/* Right Delivery Truck Image */}
          <div className="w-full md:w-auto max-w-xs sm:max-w-md lg:max-w-[28vw] flex-shrink-0 flex items-center justify-center">
            <Image
              src="/assets/home/certified/truck-image.webp"
              alt="MEATIN Delivery Truck"
              width={550}
              height={260}
              className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-[1.02]"
              priority
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default CertifiedExcellenceSection;
