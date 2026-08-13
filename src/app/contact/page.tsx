'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  ChevronRight,
} from 'lucide-react';
import Container from '@/components/ui/Container';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const companyName = 'MEATIN FARMS AND FOODS LLP';
  const phone1 = '+91 9946 61 61 28';
  const phone2 = '+91 9946 61 61 68';
  const rawPhone1 = '919946616128';
  const email = 'info@meatinfoods.com';

  const [formData, setFormData] = useState<FormData>({
    fullName: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.fullName.trim()) e.fullName = 'Full Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    if (!formData.subject.trim()) e.subject = 'Subject is required';
    if (!formData.message.trim()) e.message = 'Message is required';
    else if (formData.message.trim().length < 10) e.message = 'At least 10 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false); setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    }, 1200);
  };

  const inputCls = (field: keyof FormErrors) =>
    `w-full px-4 py-3 sm:py-2.5 lg:py-[0.7vw] px-4 sm:px-3.5 lg:px-[1vw] bg-white border rounded-xl text-sm lg:text-[0.9vw] font-manrope text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
      errors[field]
        ? 'border-[#D62828] focus:ring-2 focus:ring-[#D62828]/20'
        : 'border-slate-200 focus:border-[#1F5A3C] focus:ring-2 focus:ring-[#1F5A3C]/15'
    }`;

  return (
    <div className="bg-[#FAF8F5] text-slate-800 min-h-screen font-manrope">

      {/* ─── 1. FULL-SCREEN HERO ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* Background image — covers full hero */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-us/hero-bg-image.webp"
            alt="MEATIN Processing & Delivery"
            fill
            priority
            className="object-cover object-center"
            unoptimized
          />
          {/* White gradient — left ~60% for content, right 40% full image */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 via-[45%] to-white/10 to-[68%]" />
          {/* Bottom fade into page bg */}
          <div className="absolute inset-x-0 bottom-0 h-24 lg:h-[7vw] bg-gradient-to-t from-[#FAF8F5] to-transparent" />
        </div>

        {/* Hero content */}
        <Container className="relative z-10 py-28 sm:py-32 lg:py-[8vw]">
          <div className="max-w-2xl lg:max-w-[45vw] space-y-5 lg:space-y-[1.4vw]">

            {/* Eyebrow */}
            <p className="font-manrope text-xs lg:text-[0.85vw] font-bold uppercase tracking-widest text-[#1F5A3C]">
              We Are Here To Help
            </p>

            {/* H1 */}
            <h1 className="font-chau uppercase leading-[1.02] tracking-tight">
              <span className="block text-5xl sm:text-6xl lg:text-[5vw] text-[#153520]">CONTACT</span>
              <span className="block text-5xl sm:text-6xl lg:text-[5vw] text-[#D62828]">
                US
                <span className="inline-block ml-2 text-[#1F5A3C]">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="inline w-7 h-7 lg:w-[2.2vw] lg:h-[2.2vw] -translate-y-2 lg:-translate-y-[0.3vw]"><path d="M17 8C8 10 5 16 3 21C8 21 14 19 17 14C19 11 18 9 17 8Z" /></svg>
                </span>
              </span>
            </h1>

            {/* Green accent bar */}
            <div className="w-20 lg:w-[5vw] h-1.5 lg:h-[0.4vw] bg-[#1F5A3C] rounded-full" />

            {/* Description */}
            <p className="font-manrope text-sm lg:text-[1vw] text-slate-600 leading-relaxed max-w-lg lg:max-w-[38vw] font-medium">
              Have questions, feedback, or need assistance? Our dedicated team is ready to support you every day of the week.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-[0.8vw] pt-1">
              <a
                href={`tel:+${rawPhone1}`}
                className="inline-flex items-center gap-2 lg:gap-[0.5vw] px-7 lg:px-[1.8vw] py-3 lg:py-[0.8vw] rounded-full bg-[#1F5A3C] hover:bg-[#153520] text-white text-sm lg:text-[0.9vw] font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-105"
              >
                <PhoneCall className="w-4 h-4 lg:w-[1.1vw] lg:h-[1.1vw]" />
                Call Us Now
              </a>
              <a
                href={`https://wa.me/${rawPhone1}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 lg:gap-[0.5vw] px-7 lg:px-[1.8vw] py-3 lg:py-[0.8vw] rounded-full bg-white border border-slate-200 text-slate-800 text-sm lg:text-[0.9vw] font-semibold tracking-wide shadow-sm transition-all duration-300 hover:border-[#1F5A3C] hover:text-[#1F5A3C] hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 lg:w-[1.1vw] lg:h-[1.1vw] text-emerald-600" />
                WhatsApp Us
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ─── 2. QUICK-CONTACT CARDS (overlapping) ───────────────────── */}
      <section className="relative z-10 -mt-6 lg:-mt-[1.8vw]">
        <Container>
          <div className="bg-white rounded-[28px] lg:rounded-[2vw] shadow-xl border border-slate-100 p-4 sm:p-5 lg:p-[1.4vw]">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 sm:divide-y-0 sm:divide-x divide-slate-100">
              {[
                {
                  icon: <Phone className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />,
                  label: 'Call Us',
                  content: <><a href={`tel:+${rawPhone1}`} className="font-bold text-xs lg:text-[0.85vw] text-slate-800 hover:text-[#1F5A3C] transition-colors block">{phone1}</a><a href="tel:+919946616168" className="font-bold text-xs lg:text-[0.85vw] text-slate-800 hover:text-[#1F5A3C] transition-colors block">{phone2}</a></>,
                  sub: 'Mon – Sun: 8 AM – 8 PM',
                },
                {
                  icon: <MessageSquare className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />,
                  label: 'WhatsApp',
                  content: <a href={`https://wa.me/${rawPhone1}`} target="_blank" rel="noreferrer" className="font-bold text-xs lg:text-[0.85vw] text-slate-800 hover:text-[#1F5A3C] transition-colors block">{phone1}</a>,
                  sub: 'Instant support',
                },
                {
                  icon: <Mail className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />,
                  label: 'Email Us',
                  content: <a href={`mailto:${email}`} className="font-bold text-xs lg:text-[0.85vw] text-slate-800 hover:text-[#1F5A3C] transition-colors break-all block">{email}</a>,
                  sub: 'Reply within 24 hrs',
                },
                {
                  icon: <MapPin className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />,
                  label: 'Visit Us',
                  content: <p className="text-xs lg:text-[0.85vw] text-slate-600 font-medium">Thrissur, Kerala, India</p>,
                  sub: '',
                  extra: <a href="https://maps.google.com/?q=Perumpilavu+Thrissur+Kerala" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs lg:text-[0.8vw] font-bold text-[#1F5A3C] hover:text-[#153520] transition-colors mt-1 lg:mt-[0.3vw]"><ChevronRight className="w-3.5 h-3.5 lg:w-[1vw] lg:h-[1vw]" />Get directions</a>,
                },
              ].map((card, i) => (
                <div key={i} className="flex flex-col items-center text-center px-3 py-4 sm:py-2 lg:py-[0.8vw]">
                  <div className="w-11 h-11 lg:w-[3.2vw] lg:h-[3.2vw] rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#1F5A3C] mb-2.5 lg:mb-[0.8vw] shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="font-chau text-sm lg:text-[1.1vw] text-slate-900 mb-1.5 lg:mb-[0.5vw] tracking-wide">{card.label}</h3>
                  {card.content}
                  {card.sub && <span className="text-[10px] lg:text-[0.72vw] text-slate-400 font-medium mt-1.5 lg:mt-[0.5vw]">{card.sub}</span>}
                  {'extra' in card && card.extra}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 3. SECTION TITLE ────────────────────────────────────────── */}
      <section className="pt-12 pb-0 lg:pt-[3.5vw]">
        <Container>
          <div className="text-center">
            <h2 className="font-chau uppercase text-2xl sm:text-4xl lg:text-[3.2vw] tracking-tight text-slate-900 leading-tight">
              <span className="text-[#153520]">GET IN </span>
              <span className="text-[#1F5A3C] relative">
                TOUCH
                <span className="block w-16 lg:w-[4.5vw] h-1.5 lg:h-[0.4vw] bg-[#1F5A3C] rounded-full mt-1.5 lg:mt-[0.5vw] mx-auto" />
              </span>
            </h2>
            <p className="font-manrope text-xs sm:text-sm lg:text-[0.95vw] text-slate-500 mt-3 lg:mt-[0.8vw] max-w-md lg:max-w-[32vw] mx-auto font-medium">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── 4. FORM + ADDRESS + MAP ─────────────────────────────────── */}
      <section className="pt-8 pb-16 lg:pt-[2.2vw] lg:pb-[4.5vw]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-[2vw] items-stretch">

            {/* ── Left: Address card + Map ── */}
            <div className="lg:col-span-5 flex flex-col gap-5 lg:gap-[1.4vw]">
              <div className="bg-white rounded-[24px] lg:rounded-[1.8vw] border border-slate-200/80 shadow-sm p-5 sm:p-6 lg:p-[1.8vw] space-y-4 lg:space-y-[1.2vw]">
                <div className="flex items-center gap-3 lg:gap-[0.8vw] pb-3 lg:pb-[0.8vw] border-b border-slate-100">
                  <div className="w-10 h-10 lg:w-[2.8vw] lg:h-[2.8vw] rounded-xl bg-[#1F5A3C]/10 border border-[#1F5A3C]/20 flex items-center justify-center text-[#1F5A3C] shrink-0">
                    <MapPin className="w-4.5 h-4.5 lg:w-[1.2vw] lg:h-[1.2vw]" />
                  </div>
                  <div>
                    <span className="font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-[#D62828]">Registered Office</span>
                    <h3 className="font-chau text-base lg:text-[1.25vw] text-slate-900 tracking-wide">Head Office</h3>
                  </div>
                </div>

                <p className="font-manrope text-xs lg:text-[0.85vw] text-slate-600 leading-relaxed font-medium">
                  <strong className="font-bold text-slate-900 lg:text-[0.9vw] block mb-1 lg:mb-[0.3vw]">{companyName}</strong>
                  15/809 E, Panchami Complex,<br />
                  Perumpilavu, Karikkad P.O., 680 519,<br />
                  Thrissur District, Kerala, India.
                </p>

                <div className="rounded-xl lg:rounded-[1vw] bg-[#FAF8F5] border border-slate-100 p-3.5 lg:p-[1vw] space-y-2 lg:space-y-[0.6vw]">
                  {[
                    { label: 'Phone:', value: phone1, href: `tel:+${rawPhone1}` },
                    { label: 'Email:', value: email, href: `mailto:${email}` },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between text-xs lg:text-[0.8vw] font-manrope text-slate-500">
                      <span className="font-semibold">{row.label}</span>
                      <a href={row.href} className="font-bold text-slate-800 hover:text-[#1F5A3C] transition-colors">{row.value}</a>
                    </div>
                  ))}
                  <div className="flex items-center justify-between text-xs lg:text-[0.8vw] font-manrope text-slate-500">
                    <span className="font-semibold flex items-center gap-1 lg:gap-[0.3vw]"><Clock className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" /> Hours:</span>
                    <span className="font-bold text-slate-800">Mon – Sun: 8 AM – 8 PM</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Perumpilavu+Thrissur+Kerala"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 lg:gap-[0.4vw] text-xs lg:text-[0.8vw] font-bold text-[#1F5A3C] hover:text-[#153520] transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5 lg:w-[1vw] lg:h-[1vw]" />
                  Get Directions on Google Maps
                </a>
              </div>

              <div className="flex-1 min-h-[220px] lg:min-h-[16vw] rounded-[24px] lg:rounded-[1.8vw] overflow-hidden border border-slate-200/80 shadow-sm relative">
                <iframe
                  title="MEATIn Head Office Map"
                  src="https://maps.google.com/maps?q=Perumpilavu,%20Thrissur,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0"
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-7 bg-white rounded-[24px] lg:rounded-[1.8vw] border border-slate-200/80 shadow-sm p-5 sm:p-7 lg:p-[2.2vw] flex flex-col">
              <div className="mb-5 lg:mb-[1.4vw]">
                <span className="font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-[#1F5A3C]">Drop Us A Note</span>
                <h2 className="font-chau uppercase text-xl lg:text-[1.8vw] text-slate-900 tracking-wide mt-1">Send A Message</h2>
                <p className="font-manrope text-xs lg:text-[0.85vw] text-slate-500 mt-1 font-medium">Our team will respond within 24 hours.</p>
              </div>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 lg:p-[2.5vw] bg-[#1F5A3C]/5 rounded-2xl lg:rounded-[1.2vw] border border-[#1F5A3C]/15 space-y-4 lg:space-y-[1vw]">
                  <div className="w-14 h-14 lg:w-[4vw] lg:h-[4vw] rounded-full bg-[#1F5A3C] text-white flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-7 h-7 lg:w-[2vw] lg:h-[2vw]" />
                  </div>
                  <h3 className="font-chau uppercase text-xl lg:text-[1.4vw] text-slate-900 tracking-wide">Message Sent!</h3>
                  <p className="font-manrope text-xs lg:text-[0.85vw] text-slate-600 max-w-sm lg:max-w-[26vw] font-medium">Thank you for reaching out. We&apos;ll reply within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="px-6 lg:px-[1.8vw] py-2.5 lg:py-[0.8vw] rounded-full bg-[#1F5A3C] hover:bg-[#153520] text-white text-xs lg:text-[0.8vw] font-semibold tracking-wide shadow-sm transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-4 lg:space-y-[1.2vw]" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1.2vw]">
                    <div>
                      <label htmlFor="fullName" className="block font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-slate-600 mb-1.5 lg:mb-[0.4vw]">Full Name <span className="text-[#D62828]">*</span></label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. John Doe" className={inputCls('fullName')} />
                      {errors.fullName && <p className="font-manrope text-[10px] lg:text-[0.72vw] text-[#D62828] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" />{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-slate-600 mb-1.5 lg:mb-[0.4vw]">Email <span className="text-[#D62828]">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputCls('email')} />
                      {errors.email && <p className="font-manrope text-[10px] lg:text-[0.72vw] text-[#D62828] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" />{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1.2vw]">
                    <div>
                      <label htmlFor="phone" className="block font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-slate-600 mb-1.5 lg:mb-[0.4vw]">Phone <span className="text-[#D62828]">*</span></label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99466 16128" className={inputCls('phone')} />
                      {errors.phone && <p className="font-manrope text-[10px] lg:text-[0.72vw] text-[#D62828] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" />{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="subject" className="block font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-slate-600 mb-1.5 lg:mb-[0.4vw]">Subject <span className="text-[#D62828]">*</span></label>
                      <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="e.g. Order Inquiry" className={inputCls('subject')} />
                      {errors.subject && <p className="font-manrope text-[10px] lg:text-[0.72vw] text-[#D62828] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" />{errors.subject}</p>}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="message" className="block font-manrope text-[10px] lg:text-[0.72vw] font-bold uppercase tracking-widest text-slate-600 mb-1.5 lg:mb-[0.4vw]">Message <span className="text-[#D62828]">*</span></label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="How can we help you?" className={`flex-1 resize-none ${inputCls('message')}`} />
                    {errors.message && <p className="font-manrope text-[10px] lg:text-[0.72vw] text-[#D62828] mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3 lg:w-[0.9vw] lg:h-[0.9vw]" />{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full py-3.5 lg:py-[1vw] px-8 lg:px-[2vw] rounded-full bg-[#1F5A3C] hover:bg-[#153520] text-white font-manrope font-bold text-sm lg:text-[0.95vw] tracking-wide shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60">
                    {isSubmitting ? (<><span className="w-4 h-4 lg:w-[1.2vw] lg:h-[1.2vw] border-2 border-white border-t-transparent rounded-full animate-spin" />Submitting...</>) : (<><Send className="w-4 h-4 lg:w-[1.2vw] lg:h-[1.2vw]" />Submit Message</>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
