import React from 'react';
import CareersSection from '@/components/career/CareersSection';

export const metadata = {
  title: 'Careers at MEATIN | Build Your Career With MEATIN',
  description: 'Explore exciting career opportunities at MEATIN head office. Join our team and grow with us.',
};

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0]">
      <CareersSection />
    </main>
  );
}
