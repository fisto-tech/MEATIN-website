'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'KNOW YOUR MEAT', href: '/know-your-meat' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'RECIPES', href: '/recipes' },
  { label: 'FRANCHISE', href: '/franchise' },
  { label: 'MEET OUR TEAM', href: '/team' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CAREER', href: '/career' },
  { label: 'CONTACT US', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 lg:pt-[1.2vw] px-3 sm:px-6 lg:px-[2.5vw] w-full flex justify-center pointer-events-none">
        <div className="pointer-events-auto bg-white/85 backdrop-blur-md rounded-2xl md:rounded-[28px] lg:rounded-[1.8vw] border border-white/60 shadow-lg px-4 sm:px-6 lg:px-[1.8vw] py-2 lg:py-[0.6vw] flex items-center justify-between w-full lg:w-fit lg:gap-[2.2vw] font-inter transition-all duration-300">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation - Pure VW Units for Desktop with Balanced Left/Right Padding */}
          <nav className="hidden lg:flex items-center gap-[1.5vw] whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative lg:text-[0.85vw] font-bold font-inter tracking-wider transition-all duration-200 lg:px-[0.3vw] lg:py-[0.2vw] whitespace-nowrap ${
                    isActive
                      ? 'text-[#C62828]'
                      : 'text-slate-800 hover:text-[#1F5A3C]'
                  }`}
                >
                  {item.label}
                  {/* Active indicator red line under HOME */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 lg:h-[0.14vw] bg-[#C62828] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle navigation menu"
            className="lg:hidden ml-auto p-2 rounded-xl text-slate-800 hover:bg-slate-100/80 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 z-[101] w-full max-w-xs bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-out lg:hidden flex flex-col font-inter ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <Logo variant="dark" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold font-inter tracking-wider transition-all ${
                  isActive
                    ? 'bg-[#C62828]/10 text-[#C62828] font-extrabold border-l-4 border-[#C62828]'
                    : 'text-slate-800 hover:bg-slate-50 hover:text-[#1F5A3C]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 text-center text-xs text-slate-400 font-medium">
          Fresh. Hygienic. Scientifically Processed.
        </div>
      </aside>
    </>
  );
};

export default Navbar;
