'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category {
  name: string;
  icon: string;
  href: string;
}

const categories: Category[] = [
  { name: 'Chicken', icon: '/assets/home/chicken-icon.webp', href: '/products' },
  { name: 'Buffalo', icon: '/assets/home/buffalo-icon.webp', href: '/products' },
  { name: 'Mutton', icon: '/assets/home/mutton-icon.webp', href: '/products' },
  { name: 'Duck', icon: '/assets/home/duck-icon.webp', href: '/products' },
  { name: 'Quail', icon: '/assets/home/quail-icon.webp', href: '/products' },
  { name: 'Burger Patty', icon: '/assets/home/burger-patty-icon.webp', href: '/products' },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section className="relative w-full py-8 sm:py-10 lg:py-[2.5vw] bg-[#FDFDFD] bg-[url('/assets/home/categories-bg-image.webp')] bg-repeat bg-center z-10 border-t border-slate-100">
      <div className="w-full max-w-[1536px] lg:max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-[3vw]">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-[4vw]">
          <h2 className="font-chau text-3xl sm:text-4xl lg:text-[2.8vw] text-[#13321B] uppercase tracking-wider font-normal">
            CATEGORIES
          </h2>
          {/* Line color - D4A437 */}
          <div className="w-16 sm:w-20 lg:w-[10vw] h-[2px] lg:h-[0.16vw] bg-[#D4A437] mx-auto mt-2 sm:mt-2.5 lg:mt-[0.4vw] rounded-full" />
        </div>

        {/* Categories Grid/Flex - Reduced gaps for tighter layout */}
        <div className="grid grid-cols-3 gap-y-6 gap-x-3 sm:gap-6 lg:flex lg:justify-between lg:items-center lg:px-[1.5vw] max-w-lg sm:max-w-2xl lg:max-w-[80vw] mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* WebP Category Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[7.2vw] lg:h-[7.2vw] flex items-center justify-center">
                <Image
                  src={cat.icon}
                  alt={cat.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                  priority
                />
              </div>

              {/* Icon Bottom Dot - D4A437 */}
              <span className="w-1.5 h-1.5 lg:w-[0.6vw] lg:h-[0.6vw] ml-[0.2vw] rounded-full bg-[#D4A437] mt-1.5 mb-1 lg:mt-[0.35vw] lg:mb-[0.25vw] shadow-sm transition-transform group-hover:scale-125" />

              {/* Icon Text - Manrope */}
              <span className="font-manrope font-bold text-xs mt-[0.8vw] sm:text-sm md:text-base lg:text-[1.4vw] text-[#2D2D2D] group-hover:text-[#13321B] tracking-tight text-center whitespace-nowrap transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesSection;
