'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoriesSection from '@/components/home/CategoriesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import OurCoreValuesSection from '@/components/home/OurCoreValuesSection';
import CertifiedExcellenceSection from '@/components/home/CertifiedExcellenceSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/assets/home/home-page-video.mp4" type="video/mp4" />
          <source src="/home-page-video.mp4" type="video/mp4" />
        </video>
        {/* Soft Left Overlay Gradient for Text Contrast matching reference screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 via-45% sm:via-40% to-transparent z-[1]" />
        {/* Soft Top/Bottom Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-[1] pointer-events-none" />
      </div>

      {/* Main Hero Content - Responsive with vw units for desktop screens */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 pb-12 sm:pt-28 lg:pt-[8vw] px-4 sm:px-8 md:px-12 lg:px-[5vw] max-w-full lg:max-w-[96vw] mx-auto">
        <div className="w-full max-w-2xl lg:max-w-[55vw] py-6 sm:py-8 lg:py-[1vw]">
          
          {/* Main Headline - Chau Philomene One with desktop vw scaling */}
          <h1 className="font-chau text-6xl sm:text-7xl md:text-8xl lg:text-[7.5vw] leading-[0.88] uppercase tracking-tight select-none">
            <span className="block text-[#1F5A3C]">MEAT</span>
            <span className="block">
              <span className="text-[#D4A437]">WELL </span>
              <span className="text-[#1F5A3C]">MADE.</span>
            </span>
          </h1>

          {/* Tagline - Manrope with desktop vw scaling */}
          <p className="font-manrope text-xl sm:text-2xl md:text-3xl lg:text-[2.1vw] font-medium text-slate-800 tracking-tight mt-4 sm:mt-6 lg:mt-[1.2vw] leading-tight">
            Fresh. Hygienic. <span className="text-[#C62828]">Scientifically</span> Processed.
          </p>

          {/* Sub-tagline - Manrope with desktop vw scaling */}
          <p className="font-manrope text-slate-700 font-semibold text-base sm:text-lg md:text-xl lg:text-[1.2vw] leading-snug mt-3 sm:mt-4 lg:mt-[0.9vw] max-w-lg lg:max-w-[32vw]">
            From our farms to your family,<br className="hidden sm:inline" />
            we deliver purity, nutrition and trust.
          </p>

          {/* Badges Row - Star Icon Badge & Kerala's Original Meat SVG */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-[1.2vw] mt-6 sm:mt-8 lg:mt-[1.8vw]">
            
            {/* Badge 1: South India's Largest Multi Species Meat Processing Plant */}
            <div className="bg-white/90 backdrop-blur-md rounded-2xl lg:rounded-[1.2vw] p-3 sm:p-3.5 lg:p-[0.8vw] py-[4vw] lg:py-[1.5vw] border border-slate-200/90 shadow-md flex items-center gap-3 lg:gap-[0.8vw] max-w-[310px] lg:max-w-[21vw] transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-[2vw] lg:h-[2vw] flex items-center justify-center text-slate-900">
                <svg viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                  <path d="M5.7041 9.24256V23.8518C5.7041 38.4611 22.8152 44.7222 22.8152 44.7222C22.8152 44.7222 39.9263 38.4611 39.9263 23.8518V9.24256L22.8152 2.98145L5.7041 9.24256Z" stroke="currentColor" strokeWidth="2.07407" strokeLinecap="square"/>
                  <path d="M18.1169 30.0815L22.6647 27.2137L27.2125 30.1192L26.0214 24.6855L30.0278 21.0631L24.7581 20.5725L22.6647 15.4407L20.5713 20.5348L15.3016 21.0253L19.308 24.6855L18.1169 30.0815ZM15.9152 33.2481L17.7055 25.2289L11.7529 19.8375L19.5939 19.1281L22.6647 11.5646L25.7355 19.1265L33.575 19.8359L27.6225 25.2274L29.4142 33.2466L22.6647 28.9902L15.9152 33.2481Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] sm:text-[11px] lg:text-[0.7vw] text-[#2D2D2D] font-bold uppercase tracking-wider leading-none">
                  SOUTH INDIA'S LARGEST
                </span>
                <span className="block text-xs sm:text-[13px] lg:text-[0.85vw] font-extrabold text-[#A61716] uppercase leading-tight mt-0.5">
                  MULTI SPECIES MEAT
                </span>
                <span className="block text-[10px] sm:text-[11px] lg:text-[0.7vw] font-bold text-[#2D2D2D] uppercase leading-none mt-0.5">
                  PROCESSING PLANT
                </span>
              </div>
            </div>

            {/* Badge 2: Kerala's Original Meat Image SVG */}
            <div className="flex-shrink-0 h-[68px] sm:h-[72px] lg:h-[4.8vw] transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/assets/home/keralas-original-meat-img.svg"
                alt="Kerala's Original Meat"
                width={220}
                height={72}
                className="h-full w-auto object-cover rounded-2xl lg:rounded-[1.2vw]"
                priority
              />
            </div>
          </div>

          {/* CTA Buttons - Explore Products & Find Store */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-[1.2vw] mt-7 sm:mt-9 lg:mt-[2.2vw]">
            <Link
              href="/products"
              className="bg-[#13321B] hover:bg-[#184830] text-white font-manrope font-medium text-sm sm:text-base lg:text-[1.1vw] px-7 sm:px-8 lg:px-[2.2vw] py-3.5 sm:py-4 lg:py-[0.9vw] rounded-2xl sm:rounded-full lg:rounded-[1vw] shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="bg-white hover:bg-slate-50 text-slate-900 border border-black font-manrope font-semibold text-sm sm:text-base lg:text-[1.1vw] px-6 sm:px-7 lg:px-[2vw] py-3.5 sm:py-4 lg:py-[0.9vw] rounded-2xl sm:rounded-full lg:rounded-[1vw] shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2.5 lg:gap-[0.6vw]"
            >
              <svg viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 lg:w-[1.3vw] lg:h-[1.3vw] object-contain text-slate-900">
                <path d="M8.26741 6.14833C10.1924 4.26184 12.7841 3.21125 15.4793 3.22486C18.1746 3.23847 20.7555 4.31519 22.6614 6.22103C24.5672 8.12687 25.6439 10.7078 25.6575 13.4031C25.6712 16.0983 24.6206 18.69 22.7341 20.615L17.3272 26.0219C16.8427 26.5062 16.1858 26.7783 15.5007 26.7783C14.8157 26.7783 14.1588 26.5062 13.6743 26.0219L8.26741 20.615C6.34914 18.6965 5.27148 16.0946 5.27148 13.3817C5.27148 10.6687 6.34914 8.0668 8.26741 6.14833Z" stroke="currentColor" strokeWidth="1.9375" strokeLinejoin="round"/>
                <path d="M15.5 17.2567C17.6401 17.2567 19.375 15.5218 19.375 13.3817C19.375 11.2415 17.6401 9.50665 15.5 9.50665C13.3599 9.50665 11.625 11.2415 11.625 13.3817C11.625 15.5218 13.3599 17.2567 15.5 17.2567Z" stroke="currentColor" strokeWidth="1.9375" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Find Store</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Categories Section */}
      <CategoriesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Our Core Values Section */}
      <OurCoreValuesSection />

      {/* Certified Excellence Section */}
      <CertifiedExcellenceSection />
    </div>
  );
}
