import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Container from '../ui/Container';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-meatin-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-meatin-red/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              <strong className="text-white font-semibold">MEATIN FARMS AND FOODS LLP</strong><br />
              Premium quality meat, ethically sourced and fresh cut for unforgettable culinary experiences.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-meatin-green hover:border-meatin-green transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-meatin-red hover:border-meatin-red transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-meatin-yellow hover:border-meatin-yellow hover:text-slate-950 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-meatin-red hover:border-meatin-red transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-meatin-yellow mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-meatin-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-meatin-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/know-your-meat" className="hover:text-meatin-green transition-colors">
                  Know Your Meat
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-meatin-green transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-meatin-yellow mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/recipes" className="hover:text-meatin-green transition-colors">
                  Recipes &amp; Tips
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-meatin-green transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-meatin-green transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-meatin-green transition-colors">
                  Blog &amp; Articles
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-meatin-green transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Registered Office Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-meatin-yellow mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-meatin-red shrink-0 mt-1" />
                <span className="leading-snug">
                  15/809 E, Panchami Complex, Perumpilavu, Karikkad P.O., 680 519, Thrissur District, Kerala, India.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-meatin-green shrink-0" />
                <a href="tel:+919946616162" className="hover:text-meatin-green transition-colors">
                  +91 9946616162
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-meatin-yellow shrink-0" />
                <a href="mailto:info@meatinfoods.com" className="hover:text-meatin-yellow transition-colors break-all">
                  info@meatinfoods.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} MEATIN FARMS AND FOODS LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Quality Assurance
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
