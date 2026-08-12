import React from 'react';
import Container from '../ui/Container';
import { Sparkles } from 'lucide-react';

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2E7D32_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-meatin-red/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-96 h-96 bg-meatin-green/25 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-meatin-yellow text-xs font-bold uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-meatin-yellow animate-spin-slow" />
            <span>We Are Here to Help</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-regular tracking-tight text-white leading-tight">
            Contact Us
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Fresh meat delivered with trust. Reach out for orders, franchise inquiries, or customer assistance.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
