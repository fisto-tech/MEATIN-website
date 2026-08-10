import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/assets/logo-image.webp"
          alt="MEATIN Farms and Foods LLP Logo"
          width={150}
          height={55}
          className="h-10 sm:h-12 lg:h-[3.2vw] w-auto object-contain"
          unoptimized
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
