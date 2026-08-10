'use client';

import React from 'react';
import Image from 'next/image';

interface FeatureItem {
  number: string;
  title: React.ReactNode;
  description: string;
  icon: string;
  desktopPositionClass: string;
}

const features: FeatureItem[] = [
  {
    number: '01',
    title: (
      <>
        HYGIENIC PROCESSING
      </>
    ),
    description: 'Processed under strict hygiene standards.',
    icon: '/assets/home/why-choose-us/hygienic-processing.webp',
    desktopPositionClass: 'left-[60.5vw] top-[9.2vw]',
  },
  {
    number: '02',
    title: (
      <>
        PREMIUM QUALITY
      </>
    ),
    description: 'Handpicked for superior freshness.',
    icon: '/assets/home/why-choose-us/premium-quality.webp',
    desktopPositionClass: 'left-[67vw] top-[17vw]',
  },
  {
    number: '03',
    title: 'FARM FRESH',
    description: 'Sourced from trusted local farms.',
    icon: '/assets/home/why-choose-us/farm-fresh.webp',
    desktopPositionClass: 'left-[70.5vw] top-[24vw]',
  },
  {
    number: '04',
    title: (
      <>
        NO ARTIFICIAL ADDITIVES
      </>
    ),
    description: 'Free from artificial preservatives.',
    icon: '/assets/home/why-choose-us/no-artificial-additives.webp',
    desktopPositionClass: 'left-[68.5vw] top-[31vw]',
  },
  {
    number: '05',
    title: (
      <>
        FRESHNESS GUARANTEED
      </>
    ),
    description: 'Packed to lock in freshness.',
    icon: '/assets/home/why-choose-us/freshness-guaranteed.webp',
    desktopPositionClass: 'left-[62.5vw] top-[37.5vw]',
  },
  {
    number: '06',
    title: (
      <>
        FAST DELIVERY
      </>
    ),
    description: 'Fresh meat delivered to your doorstep.',
    icon: '/assets/home/why-choose-us/fast-delivery.webp',
    desktopPositionClass: 'left-[54.5vw] top-[42.5vw]',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FDF5EB] py-10 sm:py-14 lg:py-0 lg:min-h-screen lg:h-screen lg:flex lg:items-center lg:justify-center z-10">
      
      {/* Background Doodles - Positioned absolutely for Desktop */}
      <Image
        src="/assets/home/why-choose-us/bg-doodle-1.webp"
        alt=""
        width={240}
        height={240}
        className="hidden lg:block absolute top-[2vw] right-[2.5vw] w-[20vw] pointer-events-none opacity-85 z-0"
      />
      <Image
        src="/assets/home/why-choose-us/bg-doodle-2.webp"
        alt=""
        width={240}
        height={240}
        className="hidden lg:block absolute bottom-[2.5vw] right-[2.5vw] w-[11.5vw] pointer-events-none opacity-85 z-0"
      />
      <Image
        src="/assets/home/why-choose-us/bg-doodle-3.webp"
        alt=""
        width={200}
        height={200}
        className="hidden lg:block absolute top-[3vw] left-[24vw] w-[13.5vw] pointer-events-none opacity-85 z-0"
      />

      <Image
        src="/assets/home/why-choose-us/bg-doodle-2.webp"
        alt=""
        width={240}
        height={240}
        className="hidden lg:block absolute top-[4vw] left-[50vw] w-[3.5vw] rotate-90 pointer-events-none opacity-65 z-0"
      />

      <div className="w-full max-w-[1536px] lg:max-w-[96vw] mx-auto px-4 sm:px-6 lg:px-[1.5vw]">
        
        {/* ========================================================================= */}
        {/* DESKTOP LAYOUT (lg:block) - 100vh Full Screen Height                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full max-w-[96vw] h-[51vw] mx-auto">
          
          {/* Left Column: Title Block */}
          <div className="absolute -left-[1.5vw] top-[11.5vw] w-[25vw] z-20">
            {/* WHY CHOOSE header */}
            <div className="flex items-center gap-[0.5vw]">
              <span className="h-[2px] lg:h-[0.14vw] w-[2vw] bg-[#D4A437]" />
              <span className="font-manrope font-extrabold lg:text-[0.9vw] text-[#153520] tracking-widest uppercase">
                WHY CHOOSE
              </span>
              <span className="h-[2px] lg:h-[0.14vw] w-[2vw] bg-[#D4A437]" />
            </div>

            {/* MEAT IN title */}
            <h2 className="font-chau lg:text-[5.5vw] leading-none uppercase mt-[0.3vw]">
              <span className="text-[#13321B]">MEAT</span>
              <span className="text-[#D62828]">IN</span>
            </h2>

            {/* Tagline */}
            <p className="font-manrope font-bold lg:text-[1vw] text-[#11281D] uppercase tracking-wider mt-[0.8vw]">
              SCIENCE. HYGIENE. QUALITY. DELIVERED.
            </p>

            {/* Description */}
            <p className="font-manrope font-semibold lg:text-[0.88vw] text-[#2D2D2D] leading-relaxed mt-[0.6vw] max-w-[23vw]">
              Every product is thoughtfully crafted using traditional wisdom and modern food safety standards to deliver purity, nutrition, and trust.
            </p>
          </div>

          {/* South India's Largest Badge - Positioned with ample bottom space */}
          <div className="absolute left-[1.5vw] bottom-[4.5vw] z-20 bg-white/90 backdrop-blur-md rounded-[1vw] p-[0.7vw] py-[1.3vw] border border-[#EADBCC] shadow-md flex items-center gap-[0.8vw] max-w-[21vw]">
            <div className="flex-shrink-0 lg:w-[2vw] lg:h-[2vw] flex items-center justify-center text-[#13321B]">
              <svg viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                <path d="M5.7041 9.24256V23.8518C5.7041 38.4611 22.8152 44.7222 22.8152 44.7222C22.8152 44.7222 39.9263 38.4611 39.9263 23.8518V9.24256L22.8152 2.98145L5.7041 9.24256Z" stroke="currentColor" strokeWidth="2.07407" strokeLinecap="square"/>
                <path d="M18.1169 30.0815L22.6647 27.2137L27.2125 30.1192L26.0214 24.6855L30.0278 21.0631L24.7581 20.5725L22.6647 15.4407L20.5713 20.5348L15.3016 21.0253L19.308 24.6855L18.1169 30.0815ZM15.9152 33.2481L17.7055 25.2289L11.7529 19.8375L19.5939 19.1281L22.6647 11.5646L25.7355 19.1265L33.575 19.8359L27.6225 25.2274L29.4142 33.2466L22.6647 28.9902L15.9152 33.2481Z" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className="block lg:text-[0.65vw] text-[#2D2D2D] font-bold uppercase tracking-wider leading-none">
                SOUTH INDIA'S LARGEST
              </span>
              <span className="block lg:text-[0.8vw] font-extrabold text-[#A61716] uppercase leading-tight mt-0.5">
                MULTI SPECIES MEAT
              </span>
              <span className="block lg:text-[0.65vw] font-bold text-[#2D2D2D] uppercase leading-none mt-0.5">
                PROCESSING PLANT
              </span>
            </div>
          </div>

          {/* Center Column: ENLARGED Hand Holding Meat Image */}
          <div className="absolute left-[-3.2vw] top-[7.5vw] w-[70vw] z-10 pointer-events-none">
            <Image
              src="/assets/home/why-choose-us/hand-with-meat-image.webp"
              alt="Hand holding bowl of fresh meat drumsticks"
              width={1100}
              height={900}
              className="w-full h-auto object-contain max-w-[70vw] drop-shadow-2xl opacity-95"
              priority
            />
          </div>

          {/* The 6 Feature Nodes positioned in a tighter arc around the Bowl */}
          {features.map((item) => (
            <div
              key={item.number}
              className={`absolute ${item.desktopPositionClass} z-20 flex items-start gap-[0.8vw] group transition-transform duration-300 hover:scale-105`}
            >
              {/* Feature WebP Icon Badge */}
              <div className="w-[3.6vw] h-[3.6vw] flex-shrink-0 drop-shadow-md">
                <Image
                  src={item.icon}
                  alt={item.number}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Number & Text */}
              <div className="max-w-[14vw]">
                {/* Large Red Number */}
                <span className="font-manrope font-extrabold text-[#D62828] text-2xl lg:text-[1.8vw] leading-none block">
                  {item.number}
                </span>

                {/* Number Line: Rosy Pink left bar + Solid Red Dot + Light Cream right bar */}
                <div className="flex items-center w-[50%] my-[0.35vw]">
                  <span className="h-[2px] lg:h-[0.14vw] w-[3vw] lg:w-[3.2vw] bg-[#CC858B] flex-shrink-0 rounded-l-full" />
                  <span className="w-2 h-2 lg:w-[0.45vw] lg:h-[0.45vw] rounded-full bg-[#A61716] flex-shrink-0 -mx-[1px] z-10" />
                  <span className="h-[2px] lg:h-[0.14vw] flex-1 bg-[#E9E1DB] rounded-r-full" />
                </div>

                <h3 className="font-manrope font-bold text-[#11281D] lg:text-[0.88vw] uppercase tracking-wide mt-[0.15vw] leading-tight">
                  {item.title}
                </h3>
                <p className="font-manrope font-medium text-[#2D2D2D] lg:text-[0.72vw] leading-tight mt-[0.1vw]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* ======================================================== */}
        {/* MOBILE & TABLET LAYOUT (lg:hidden)                        */}
        {/* 1st: Title & Content                                     */}
        {/* 2nd: Hand Image                                          */}
        {/* 3rd: Icons 3 per line (total 2 lines)                    */}
        {/* 4th: South India's Largest Content                       */}
        {/* ======================================================== */}
        <div className="flex flex-col lg:hidden space-y-8">
          
          {/* 1st: Title & Content */}
          <div className="text-center max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="h-[2px] w-6 bg-[#D4A437]" />
              <span className="font-manrope font-extrabold text-xs text-[#153520] tracking-widest uppercase">
                WHY CHOOSE
              </span>
              <span className="h-[2px] w-6 bg-[#D4A437]" />
            </div>

            <h2 className="font-chau text-4xl sm:text-5xl uppercase tracking-tight mt-1">
              <span className="text-[#13321B]">MEAT</span>
              <span className="text-[#D62828]">IN</span>
            </h2>

            <p className="font-manrope font-bold text-xs sm:text-sm text-[#11281D] uppercase tracking-wider mt-2">
              SCIENCE. HYGIENE. QUALITY. DELIVERED.
            </p>

            <p className="font-manrope font-semibold text-xs sm:text-sm text-[#2D2D2D] leading-relaxed mt-2.5 px-2">
              Every product is thoughtfully crafted using traditional wisdom and modern food safety standards to deliver purity, nutrition, and trust.
            </p>
          </div>

          {/* 2nd: Hand Image */}
          <div className="flex  items-center my-2">
            <Image
              src="/assets/home/why-choose-us/hand-with-meat-image.webp"
              alt="Hand holding bowl of fresh meat drumsticks"
              width={500}
              height={380}
              className="w-full max-w-[320px] sm:max-w-[400px] h-auto object-contain drop-shadow-md"
              priority
            />
          </div>

          {/* 3rd: Icons Line Wise - 3 per line (2 lines total) */}
          <div className="grid grid-cols-3 gap-y-7 gap-x-2 sm:gap-6 max-w-md sm:max-w-lg mx-auto w-full">
            {features.map((item) => (
              <div key={item.number} className="flex flex-col items-center text-center">
                {/* Feature WebP Icon Badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-2">
                  <Image
                    src={item.icon}
                    alt={item.number}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Large Red Number */}
                <span className="font-manrope font-extrabold text-[#D62828] text-lg sm:text-xl leading-none block mt-1">
                  {item.number}
                </span>

                {/* Number Line: Rosy Pink left bar + Solid Red Dot + Light Cream right bar */}
                <div className="flex items-center w-20 my-1 mx-auto">
                  <span className="h-[2px] w-7 bg-[#CC858B] flex-shrink-0 rounded-l-full" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A61716] flex-shrink-0 -mx-[1px] z-10" />
                  <span className="h-[2px] flex-1 bg-[#E9E1DB] rounded-r-full" />
                </div>

                {/* Title */}
                <h3 className="font-manrope font-bold text-[#11281D] text-[11px] sm:text-xs uppercase tracking-tight leading-tight mt-0.5">
                  {item.title}
                </h3>

                {/* Content */}
                <p className="font-manrope font-medium text-[#2D2D2D] text-[10px] sm:text-[11px] leading-tight mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* 4th: South India's Largest Content Badge */}
          <div className="flex justify-center pt-2">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-[#EADBCC] shadow-md flex items-center gap-3 max-w-[300px]">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-[#13321B]">
                <svg viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                  <path d="M5.7041 9.24256V23.8518C5.7041 38.4611 22.8152 44.7222 22.8152 44.7222C22.8152 44.7222 39.9263 38.4611 39.9263 23.8518V9.24256L22.8152 2.98145L5.7041 9.24256Z" stroke="currentColor" strokeWidth="2.07407" strokeLinecap="square"/>
                  <path d="M18.1169 30.0815L22.6647 27.2137L27.2125 30.1192L26.0214 24.6855L30.0278 21.0631L24.7581 20.5725L22.6647 15.4407L20.5713 20.5348L15.3016 21.0253L19.308 24.6855L18.1169 30.0815ZM15.9152 33.2481L17.7055 25.2289L11.7529 19.8375L19.5939 19.1281L22.6647 11.5646L25.7355 19.1265L33.575 19.8359L27.6225 25.2274L29.4142 33.2466L22.6647 28.9902L15.9152 33.2481Z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="block text-[10px] text-[#2D2D2D] font-bold uppercase tracking-wider leading-none">
                  SOUTH INDIA'S LARGEST
                </span>
                <span className="block text-xs font-extrabold text-[#A61716] uppercase leading-tight mt-0.5">
                  MULTI SPECIES MEAT
                </span>
                <span className="block text-[10px] font-bold text-[#2D2D2D] uppercase leading-none mt-0.5">
                  PROCESSING PLANT
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
