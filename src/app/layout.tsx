import type { Metadata } from 'next';
import { Poppins, Chau_Philomene_One, Manrope, Inter } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/layout/Preloader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const chau = Chau_Philomene_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-chau',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MEATIn | Premium Meat Experience',
  description: 'Fresh meat delivered with trust. Discover premium cuts, hygienic processing, and ethical sourcing with MEATIn.',
  icons: {
    icon: [
      { url: '/assets/logo-image.webp', type: 'image/webp' },
      { url: '/assets/logo-image.png', type: 'image/png' },
    ],
    shortcut: '/assets/logo-image.webp',
    apple: '/assets/logo-image.webp',
  },
};

import SmoothScroll from '@/components/layout/SmoothScroll';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable} ${chau.variable} ${manrope.variable} ${inter.variable}`} 
      suppressHydrationWarning
    >
      <body className="font-manrope bg-white text-slate-900 min-h-screen flex flex-col antialiased" suppressHydrationWarning>
        <Preloader />
        <Navbar />
        <main className="flex-1 w-full">
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
