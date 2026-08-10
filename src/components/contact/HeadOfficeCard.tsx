import React from 'react';
import { Building2, MapPin, Phone, Mail, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';

export const HeadOfficeCard: React.FC = () => {
  const companyName = 'MEATIN FARMS AND FOODS LLP';
  const phone = '+91 9946616162';
  const rawPhone = '919946616162';
  const email = 'info@meatinfoods.com';
  const address = 'Registered Office: 15/809 E, Panchami Complex, Perumpilavu, Karikkad P.O., 680 519, Thrissur District, Kerala, India.';
  const workingHours = 'Mon - Sat: 8:00 AM - 8:00 PM | Sun: 8:00 AM - 2:00 PM';

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-premium border border-slate-100 relative overflow-hidden group hover:shadow-premium-lg transition-all duration-300">
      {/* Decorative top stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-meatin-red via-meatin-yellow to-meatin-green" />

      {/* Header with Office Icon */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-meatin-green/10 border border-meatin-green/20 flex items-center justify-center text-meatin-green shrink-0 shadow-sm">
          <Building2 className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-meatin-red">
            Registered Head Office
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
            {companyName}
          </h2>
        </div>
      </div>

      {/* Contact Details Grid */}
      <div className="space-y-5 text-sm mb-8">
        {/* Registered Office Address */}
        <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-meatin-green/30 transition-colors">
          <MapPin className="w-5 h-5 text-meatin-red shrink-0 mt-1" />
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Registered Office Address
            </span>
            <p className="font-medium text-slate-800 leading-relaxed">
              15/809 E, Panchami Complex,<br />
              Perumpilavu, Karikkad P.O., 680 519,<br />
              Thrissur District, Kerala, India.
            </p>
          </div>
        </div>

        {/* Phone & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <Phone className="w-5 h-5 text-meatin-green shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Phone
              </span>
              <a
                href={`tel:+${rawPhone}`}
                className="font-semibold text-slate-900 hover:text-meatin-green transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
            <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                WhatsApp
              </span>
              <a
                href={`https://wa.me/${rawPhone}`}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
          <Mail className="w-5 h-5 text-meatin-yellow shrink-0" />
          <div>
            <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Email Us
            </span>
            <a
              href={`mailto:${email}`}
              className="font-semibold text-slate-900 hover:text-meatin-green transition-colors break-all"
            >
              {email}
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-meatin-green/5 border border-meatin-green/20">
          <Clock className="w-5 h-5 text-meatin-green shrink-0" />
          <div>
            <span className="block text-xs font-bold text-meatin-green uppercase tracking-wider">
              Working Hours
            </span>
            <span className="font-medium text-slate-800">{workingHours}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href={`tel:+${rawPhone}`}>
          <Button variant="primary" fullWidth size="md" className="font-semibold">
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </a>

        <a
          href={`https://wa.me/${rawPhone}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="ghost"
            fullWidth
            size="md"
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeadOfficeCard;
