'use client';

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bg500: string;
  bg900: string;
  linkedin?: string;
}

const executiveLeaders: TeamMember[] = [
  {
    name: 'Mr. SHIBU K. MOHAMED',
    role: 'Chairman',
    image: '/assets/meet-our-team/Shibu k muhammed chairman.webp',
    bg500: '#9E1B1B', // Dark Red
    bg900: '#5C0F0F',
  },
  {
    name: 'Mr. ALI VARIKUNNATH',
    role: 'Managing Director',
    image: '/assets/meet-our-team/Ali varikkunnath MD.webp',
    bg500: '#153520', // Dark Green
    bg900: '#0B1B10',
  },
  {
    name: 'Mr. RAFEEQUE ARAKKAKATTIL',
    role: 'Chief Executive Officer',
    image: '/assets/meet-our-team/Rafeeque ak CEO.webp',
    bg500: '#1E3A8A', // Dark Navy
    bg900: '#0F172A',
  },
];

const directors: TeamMember[] = [
  {
    name: 'Mohamed Asharaf K',
    role: 'Director',
    image: '/assets/meet-our-team/MOHAMED ASHARAF K.webp',
    bg500: '#9E1B1B', // Dark Red
    bg900: '#5C0F0F',
  },
  {
    name: 'Anfas K Mohamed',
    role: 'Director & CMO',
    image: '/assets/meet-our-team/ANFAS K MOHAMED CMO.webp',
    bg500: '#831843', // Dark Burgundy
    bg900: '#500727',
  },
  {
    name: 'Nazeer VM',
    role: 'Director',
    image: '/assets/meet-our-team/NAZEER VM.webp',
    bg500: '#4C1D95', // Dark Purple
    bg900: '#2E1065',
  },
  {
    name: 'Jadeer Akthar M',
    role: 'Director',
    image: '/assets/meet-our-team/JADEER AKTHAR M.webp',
    bg500: '#153520', // Dark Green
    bg900: '#0B1B10',
  },
  {
    name: 'Arshad Asharaf',
    role: 'Director',
    image: '/assets/meet-our-team/ARSHAD ASHARAF.webp',
    bg500: '#1E3A8A', // Dark Navy
    bg900: '#0F172A',
  },
  {
    name: 'Rooshid Mohiyudheen C A',
    role: 'Director',
    image: '/assets/meet-our-team/ROOSHID MOHIYUDHEEN C A.webp',
    bg500: '#0F5132', // Dark Emerald
    bg900: '#052C1E',
  },
  {
    name: 'Nasir Neriyar',
    role: 'Director',
    image: '/assets/meet-our-team/NASIR NERIYAR.webp',
    bg500: '#1E40AF', // Dark Royal Blue
    bg900: '#172554',
  },
  {
    name: 'Moosakutty MM',
    role: 'Director',
    image: '/assets/meet-our-team/MOOSAKUTTY M M.webp',
    bg500: '#115E59', // Dark Teal
    bg900: '#042F2E',
  },
  {
    name: 'Sabeer Abdul Rahman',
    role: 'Director',
    image: '/assets/meet-our-team/SABEER ABDUL RAHMAN.webp',
    bg500: '#334155', // Dark Slate
    bg900: '#0F172A',
  },
  {
    name: 'Abbas Chemban',
    role: 'Director',
    image: '/assets/meet-our-team/ABBAS CHEMBAN.webp',
    bg500: '#153520', // Dark Green
    bg900: '#0B1B10',
  },
  {
    name: 'Hydros Villan',
    role: 'Director',
    image: '/assets/meet-our-team/HYDROS VILLAN.webp',
    bg500: '#365314', // Dark Olive
    bg900: '#1A2E05',
  },
  {
    name: 'Rafi Abdu Rahman',
    role: 'Director',
    image: '/assets/meet-our-team/RAFI ABDU RAHMAN.webp',
    bg500: '#78350F', // Dark Brown
    bg900: '#451A03',
  },
  {
    name: 'Anas Kamaru',
    role: 'Director & Plant Manager',
    image: '/assets/meet-our-team/ANAS KAMARU plant manager.webp',
    bg500: '#9A3412', // Dark Rust
    bg900: '#431407',
  },
  {
    name: 'Mohamed Gadhafi Pilakal',
    role: 'Director',
    image: '/assets/meet-our-team/MOHAMED GADHAFI PILAKAL.webp',
    bg500: '#991B1B', // Dark Crimson
    bg900: '#450A0A',
  },
  {
    name: 'Mohanan Pilankuvittil',
    role: 'Project Consultant',
    image: '/assets/meet-our-team/Mohananpilankuvittl PROJECT CONSULTANT.webp',
    bg500: '#1E293B', // Dark Charcoal
    bg900: '#0F172A',
  },
];

export const MeetOurTeamSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF6F0] pt-16 sm:pt-18 lg:pt-[4.5rem] overflow-hidden z-10">
      
      {/* Soft Wave Background Pattern at top */}
      <div className="absolute top-0 left-0 right-0 h-[25vw] pointer-events-none z-0 opacity-40 bg-[url('/assets/home/recipe-inspiration/background-image.webp')] bg-cover bg-center" />

      {/* ========================================================================= */}
      {/* HERO BANNER: FULL-WIDTH EDGE-TO-EDGE WITH COMPACT VERTICAL SPACING        */}
      {/* ========================================================================= */}
      <div className="relative w-full py-8 sm:py-10 lg:py-[2vw] mb-6 sm:mb-8 lg:mb-[1.8vw] flex flex-col justify-center items-center text-center bg-[#FAF6F0] px-4 sm:px-8 lg:px-[3vw] shadow-2xs overflow-hidden bg-[url('/assets/meet-our-team/background-image.webp')] bg-cover bg-center">
        
        {/* Subtle Light Soft Warm Tint Overlay */}
        <div className="absolute inset-0 bg-[#FAF6F0]/65 pointer-events-none z-0" />

        {/* Main Hero Content Box */}
        <div className="relative z-10 max-w-3xl lg:max-w-[50vw] flex flex-col items-center justify-center text-center mx-auto">
          
          {/* Top Tagline Header flanked by Gold Lines */}
          <div className="flex items-center justify-center gap-3 mb-2 sm:mb-2.5 lg:mb-[0.5vw]">
            <span className="w-6 sm:w-10 lg:w-[2.2vw] h-[1.5px] bg-[#C5A880]" />
            <span className="font-manrope font-extrabold text-xs sm:text-sm lg:text-[0.82vw] text-[#153520] tracking-widest uppercase">
              THE PEOPLE BEHIND THE PROMISE
            </span>
            <span className="w-6 sm:w-10 lg:w-[2.2vw] h-[1.5px] bg-[#C5A880]" />
          </div>

          {/* Main Title Header */}
          <h1 className="font-chau font-extrabold text-3xl sm:text-5xl lg:text-[3.8vw] leading-[1.02] tracking-tight mb-2.5 lg:mb-[0.6vw]">
            <span className="text-[#153520]">MEET OUR </span>
            <span className="text-[#D62828]">TEAM</span>
          </h1>

          {/* Underline Gold Accent Line */}
          <div className="w-14 sm:w-20 lg:w-[4.5vw] h-[2.5px] bg-[#C5A880] mb-3 sm:mb-4 lg:mb-[0.9vw]" />

          {/* 2-Line Description */}
          <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[0.92vw] text-[#4A5568] max-w-xl lg:max-w-[40vw] leading-relaxed">
            A passionate team working together with dedication to bring you the freshest and finest meat products.<br className="hidden sm:inline" />
            We are committed to quality, hygiene and your trust.
          </p>

        </div>

      </div>

      {/* Main Container for Team Members Grid */}
      <div className="relative z-10 w-full max-w-[1400px] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-[3vw]">

        {/* ========================================================================= */}
        {/* SECTION 1: LED BY (EXECUTIVE LEADERSHIP - 3 CARDS)                       */}
        {/* ========================================================================= */}
        <div className="mb-16 lg:mb-[4vw]">
          
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-4 lg:gap-[1.2vw] mb-8 sm:mb-10 lg:mb-[2.2vw]">
            <span className="h-[1.5px] lg:h-[0.1vw] w-12 sm:w-16 lg:w-[4vw] bg-[#D4A437]" />
            <h3 className="font-chau font-extrabold text-2xl sm:text-3xl lg:text-[2.2vw] text-[#153520] uppercase tracking-wider">
              LED BY
            </h3>
            <span className="h-[1.5px] lg:h-[0.1vw] w-12 sm:w-16 lg:w-[4vw] bg-[#D4A437]" />
          </div>

          {/* 3 Leader Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-[2vw] max-w-6xl lg:max-w-[70vw] mx-auto">
            {executiveLeaders.map((leader) => (
              <div key={leader.name} className="relative w-full mb-12 lg:mb-[3vw] group">
                
                {/* Upper Portrait Photo Container (Shifted 16px right from container edge) */}
                <div className="relative w-[calc(100%-16px)] ml-4 aspect-[4/4.5] overflow-hidden bg-slate-100 shadow-md">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Top-Right Circular LinkedIn Action Button (Original Brand Color #0A66C2) */}
                  <a
                    href="#linkedin"
                    aria-label={`${leader.name} LinkedIn Profile`}
                    className="absolute top-3 right-3 lg:top-[0.8vw] lg:right-[0.8vw] w-10 h-10 lg:w-[2.4vw] lg:h-[2.4vw] rounded-full bg-[#0A66C2] hover:bg-[#084e96] border-4 border-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-20 cursor-pointer text-white"
                  >
                    <svg className="w-5 h-5 lg:w-[1.2vw] lg:h-[1.2vw] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                </div>

                {/* Material Card H2 Banner Strip (Full 100% Width starting at left:0, overlapping bottom 16px of photo) */}
                <div
                  className="relative w-full p-3.5 lg:p-[0.9vw] text-white z-10 shadow-lg -mt-4"
                  style={{ backgroundColor: leader.bg500 }}
                >
                  {/* Left 3D Ribbon Fold Triangle Notch (Seamless 0-Gap Overlap) */}
                  <span
                    className="absolute left-0 -top-[17px] w-0 h-0 border-b-[17px] border-l-[16px] border-l-transparent pointer-events-none z-0"
                    style={{ borderBottomColor: leader.bg900 }}
                  />

                  <h4 className="font-chau font-regular text-lg sm:text-xl lg:text-[1.25vw] text-white">
                    {leader.name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5 text-white/90">
                    <svg className="w-3.5 h-3.5 lg:w-[0.85vw] lg:h-[0.85vw] text-white fill-current flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="font-manrope font-normal text-xs sm:text-sm lg:text-[0.8vw]">
                      {leader.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: DIRECTORS (5 CARDS PER LINE GRID WITH DARK COLORS)             */}
        {/* ========================================================================= */}
        <div className="mb-12 lg:mb-[3vw]">
          
          {/* Section Divider Header */}
          <div className="flex items-center justify-center gap-4 lg:gap-[1.2vw] mb-8 sm:mb-10 lg:mb-[2.2vw]">
            <span className="h-[1.5px] lg:h-[0.1vw] w-12 sm:w-16 lg:w-[4vw] bg-[#D4A437]" />
            <h3 className="font-chau font-extrabold text-2xl sm:text-3xl lg:text-[2.2vw] text-[#153520] uppercase tracking-wider">
              DIRECTORS
            </h3>
            <span className="h-[1.5px] lg:h-[0.1vw] w-12 sm:w-16 lg:w-[4vw] bg-[#D4A437]" />
          </div>

          {/* Directors 5-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[1.4vw]">
            {directors.map((member) => (
              <div key={member.name} className="relative w-full mb-10 lg:mb-[2.5vw] group">
                
                {/* Upper Portrait Photo Container (Shifted 16px right for seamless alignment) */}
                <div className="relative w-[calc(100%-16px)] ml-4 aspect-[4/4.5] overflow-hidden bg-slate-100 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Top-Right Circular LinkedIn Action Button (Original Brand Color #0A66C2) */}
                  <a
                    href="#linkedin"
                    aria-label={`${member.name} LinkedIn Profile`}
                    className="absolute top-2.5 right-2.5 lg:top-[0.6vw] lg:right-[0.6vw] w-8 h-8 lg:w-[2.1vw] lg:h-[2.1vw] rounded-full bg-[#0A66C2] hover:bg-[#084e96] border-2 border-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 z-20 cursor-pointer text-white"
                  >
                    <svg className="w-4 h-4 lg:w-[1.05vw] lg:h-[1.05vw] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                </div>

                {/* Material Card H2 Banner Strip */}
                <div
                  className="relative w-full p-3 lg:p-[0.8vw] text-white z-10 shadow-lg -mt-4"
                  style={{ backgroundColor: member.bg500 }}
                >
                  {/* Left 3D Ribbon Fold Triangle Notch (Seamless 0-Gap Overlap) */}
                  <span
                    className="absolute left-0 -top-[17px] w-0 h-0 border-b-[17px] border-l-[16px] border-l-transparent pointer-events-none z-0"
                    style={{ borderBottomColor: member.bg900 }}
                  />

                  <h4 className="font-chau font-normal text-base sm:text-lg lg:text-[1.05vw] text-white ">
                    {member.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5 text-white/90">
                    <svg className="w-3 h-3 lg:w-[0.75vw] lg:h-[0.75vw] text-white fill-current flex-shrink-0" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                    <span className="font-manrope font-normal text-[11px] sm:text-xs lg:text-[0.72vw]">
                      {member.role}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default MeetOurTeamSection;
