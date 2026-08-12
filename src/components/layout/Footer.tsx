import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/Container';

import backgroundImage from '@/assets/footer/background-image.webp';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#092212] text-white pt-12 sm:pt-16 pb-6 overflow-hidden font-manrope">
      
      {/* Background Image (background-image.webp) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Footer Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <Container className="relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-emerald-800/40">
          
          {/* Column 1: Brand Info & Social Icons (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo Row */}
            <div className="flex items-center gap-3">
              <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
                <Image
                  src="/assets/logo-image.webp"
                  alt="MEATIN Logo"
                  width={140}
                  height={50}
                  className="h-10 sm:h-12 w-auto object-contain"
                  unoptimized
                />
              </Link>
            </div>

            {/* Company Title & Description */}
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white tracking-wide uppercase">
                MEATIN FARMS AND FOODS LLP
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed max-w-sm mt-1.5 font-normal">
                Premium quality meat, ethically sourced and fresh cut for unforgettable culinary experiences.
              </p>
            </div>

            {/* Social Icons (Facebook, Instagram, YouTube, WhatsApp) */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#11381E] hover:bg-[#1877F2] border border-emerald-700/50 hover:border-[#1877F2] text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#11381E] hover:bg-[#E4405F] border border-emerald-700/50 hover:border-[#E4405F] text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#11381E] hover:bg-[#FF0000] border border-emerald-700/50 hover:border-[#FF0000] text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919946616162"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#11381E] hover:bg-[#25D366] border border-emerald-700/50 hover:border-[#25D366] text-emerald-100 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Column 2: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-[#F9A825] pb-1 w-fit">
              <svg className="w-4 h-4 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#F9A825]">
                QUICK LINKS
              </h3>
            </div>
            <ul className="space-y-2 pt-1 text-xs sm:text-sm text-emerald-100/80 font-medium">
              <li>
                <Link href="/" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/know-your-meat" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Know Your Meat
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: EXPLORE (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-[#F9A825] pb-1 w-fit">
              <svg className="w-4 h-4 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#F9A825]">
                EXPLORE
              </h3>
            </div>
            <ul className="space-y-2 pt-1 text-xs sm:text-sm text-emerald-100/80 font-medium">
              <li>
                <Link href="/recipes" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Recipes &amp; Tips
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Blog &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#F9A825] transition-colors flex items-center gap-1.5">
                  <span className="text-[#F9A825] text-xs font-bold">&gt;</span> Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 border-b-2 border-[#F9A825] pb-1 w-fit">
              <svg className="w-4 h-4 text-[#F9A825]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <h3 className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#F9A825]">
                GET IN TOUCH
              </h3>
            </div>
            <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-emerald-100/80 font-medium">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#F9A825] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="leading-snug">
                  157809 E, Panchami Complex, Perumpilavu, Karikkad P.O., 680 519, Thrissur District, Kerala, India.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+919946616162" className="hover:text-[#F9A825] transition-colors">
                  +91 9946616162
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#F9A825] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:info@meatinfoods.com" className="hover:text-[#F9A825] transition-colors break-all">
                  info@meatinfoods.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-100/80 font-medium">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} MEATIN FARMS AND FOODS LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-[#F9A825] transition-colors">
              Privacy Policy
            </a>
            <span className="text-emerald-800/60">|</span>
            <a href="#terms" className="hover:text-[#F9A825] transition-colors">
              Terms of Service
            </a>
            <span className="text-emerald-800/60">|</span>
            <a href="#quality" className="hover:text-[#F9A825] transition-colors">
              Quality Assurance
            </a>
          </div>
        </div>

      </Container>

    </footer>
  );
};

export default Footer;
