'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Award,
  ChevronRight,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  Tag,
  PhoneCall,
  ArrowUpRight,
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
  const companyName = 'Meatin Foods Pvt. Ltd.';
  const phone1 = '+91 9946 61 61 28';
  const phone2 = '+91 9946 61 61 68';
  const rawPhone1 = '919946616128';
  const email = 'info@meatinfoods.com';
  const address = '15/809 E, Panchami Complex, Perumpilavu, Karikkad P.O., 680 519, Thrissur District, Kerala, India.';

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="bg-meatin-bg-light min-h-screen font-poppins text-slate-900 pb-16">
      {/* 1. HERO BANNER WITH BACKGROUND IMAGE (FULL SCREEN HEIGHT) */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-28 sm:pb-32 overflow-hidden bg-slate-950">
        {/* Background Image: src/contact-us/hero-bg-image.webp */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-us/hero-bg-image.webp"
            alt="MEATIn Processing Plant & Truck Background"
            fill
            priority
            className="object-cover object-right sm:object-center filter brightness-95"
            unoptimized
          />
          {/* Gradient overlay for readability on left content */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-transparent sm:w-2/3 md:w-3/5" />
          <div className="absolute inset-0 bg-slate-950/30" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl text-white space-y-5 sm:space-y-6">
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-meatin-yellow text-xs sm:text-sm font-bold tracking-widest uppercase flex items-center gap-2"
            >
              <span>WE ARE HERE TO HELP</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
                CONTACT <span className="text-meatin-yellow">US</span>
              </h1>
              {/* Green Bar Accent */}
              <div className="w-20 h-1.5 bg-meatin-green rounded-full" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg"
            >
              Have questions, feedback, or need assistance? Our team is here to help you with anything you need.
            </motion.p>

            {/* Action Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href={`tel:+${rawPhone1}`}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-meatin-green hover:bg-meatin-green-hover text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>

              <a
                href={`https://wa.me/${rawPhone1}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/40 text-white text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Value Highlights Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-xl"
            >
              {/* Highlight 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-meatin-green/30 border border-meatin-green/50 flex items-center justify-center text-meatin-green shrink-0">
                  <ShieldCheck className="w-5 h-5 text-meatin-green" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">100% Hygienic</span>
                  <span className="text-[11px] text-slate-300">Safe &amp; Clean</span>
                </div>
              </div>

              {/* Highlight 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-meatin-green/30 border border-meatin-green/50 flex items-center justify-center text-meatin-green shrink-0">
                  <Truck className="w-5 h-5 text-meatin-green" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">On-time Delivery</span>
                  <span className="text-[11px] text-slate-300">Right to your door</span>
                </div>
              </div>

              {/* Highlight 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-meatin-green/30 border border-meatin-green/50 flex items-center justify-center text-meatin-green shrink-0">
                  <Award className="w-5 h-5 text-meatin-green" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">Best Quality</span>
                  <span className="text-[11px] text-slate-300">You can trust</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. OVERLAPPING 4-COLUMN CONTACT CARD */}
      <Container className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-4 sm:p-5 lg:py-6 lg:px-4 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Column 1: Call Us */}
            <div className="flex flex-col items-center text-center pt-3 sm:pt-0 sm:px-2 lg:px-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-meatin-green mb-3 shadow-sm">
                <Phone className="w-5.5 h-5.5 text-meatin-green" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Call Us</h3>
              <a
                href={`tel:+${rawPhone1}`}
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-meatin-green transition-colors"
              >
                {phone1}
              </a>
              <a
                href={`tel:+919946616168`}
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-meatin-green transition-colors mt-0.5"
              >
                {phone2}
              </a>
              <span className="text-[11px] text-slate-400 font-medium mt-2">
                Mon - Sun: 8:00 AM - 8:00 PM
              </span>
            </div>

            {/* Column 2: WhatsApp Us */}
            <div className="flex flex-col items-center text-center pt-5 sm:pt-0 sm:px-2 lg:px-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-meatin-green mb-3 shadow-sm">
                <MessageSquare className="w-5.5 h-5.5 text-meatin-green" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">WhatsApp Us</h3>
              <a
                href={`https://wa.me/${rawPhone1}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-meatin-green transition-colors"
              >
                {phone1}
              </a>
              <span className="text-[11px] text-slate-400 font-medium mt-2">
                Quick support on WhatsApp
              </span>
            </div>

            {/* Column 3: Email Us */}
            <div className="flex flex-col items-center text-center pt-5 sm:pt-0 sm:px-2 lg:px-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-meatin-green mb-3 shadow-sm">
                <Mail className="w-5.5 h-5.5 text-meatin-green" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">Email Us</h3>
              <a
                href={`mailto:${email}`}
                className="text-xs sm:text-sm font-bold text-slate-800 hover:text-meatin-green transition-colors break-all"
              >
                {email}
              </a>
              <span className="text-[11px] text-slate-400 font-medium mt-2">
                We reply within 24 hours
              </span>
            </div>

            {/* Column 4: Visit Us */}
            <div className="flex flex-col items-center text-center pt-5 sm:pt-0 sm:px-2 lg:px-3 relative z-10">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-meatin-green mb-3 shadow-sm">
                <MapPin className="w-5.5 h-5.5 text-meatin-green" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">Visit Us</h3>
              <p className="text-xs text-slate-600 font-medium leading-snug">
                {companyName},<br />
                Kerala, India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-meatin-green hover:text-meatin-green-hover transition-colors mt-2"
              >
                <span>Get directions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* 3. INQUIRY FORM & ADDRESS DETAIL SECTION */}
      <Container className="pt-8 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Registered Address Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 shadow-xl border border-slate-100 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-meatin-green/10 border border-meatin-green/20 flex items-center justify-center text-meatin-green shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-meatin-red uppercase tracking-wider">
                    Official Office
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">Registered Office</h3>
                </div>
              </div>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-medium">
                <strong className="text-slate-900 block mb-0.5 font-bold">MEATIN FARMS AND FOODS LLP</strong>
                15/809 E, Panchami Complex,<br />
                Perumpilavu, Karikkad P.O., 680 519,<br />
                Thrissur District, Kerala, India.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium">Customer Support:</span>
                  <span className="font-bold text-slate-900">{phone1}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-medium">Direct Email:</span>
                  <span className="font-bold text-slate-900">{email}</span>
                </div>
              </div>
            </div>

            {/* Location Map Embed (Flex-1 to fill equal height as form) */}
            <div className="w-full flex-1 min-h-[220px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative mt-2">
              <iframe
                title="MEATIn Registered Office Location Map"
                src="https://maps.google.com/maps?q=Perumpilavu,%20Thrissur,%20Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-7 lg:p-8 shadow-xl border border-slate-100 flex flex-col justify-between h-full">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-meatin-green">
                Drop Us A Note
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">Send Us A Message</h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-meatin-green/10 rounded-2xl border border-meatin-green/20 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-meatin-green text-white flex items-center justify-center mx-auto shadow-green-glow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for contacting MEATIn. Our team will review your inquiry and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-meatin-green text-white text-xs font-semibold hover:bg-meatin-green-hover transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-meatin-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.fullName ? 'border-meatin-red focus:ring-2 focus:ring-meatin-red/30' : 'border-slate-200 focus:border-meatin-green focus:ring-2 focus:ring-meatin-green/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-meatin-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-meatin-red">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.email ? 'border-meatin-red focus:ring-2 focus:ring-meatin-red/30' : 'border-slate-200 focus:border-meatin-green focus:ring-2 focus:ring-meatin-green/20'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-meatin-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-meatin-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 99466 16128"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.phone ? 'border-meatin-red focus:ring-2 focus:ring-meatin-red/30' : 'border-slate-200 focus:border-meatin-green focus:ring-2 focus:ring-meatin-green/20'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-meatin-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Subject <span className="text-meatin-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Order Inquiry"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all ${
                        errors.subject ? 'border-meatin-red focus:ring-2 focus:ring-meatin-red/30' : 'border-slate-200 focus:border-meatin-green focus:ring-2 focus:ring-meatin-green/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs text-meatin-red mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Message <span className="text-meatin-red">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you?"
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all resize-none ${
                      errors.message ? 'border-meatin-red focus:ring-2 focus:ring-meatin-red/30' : 'border-slate-200 focus:border-meatin-green focus:ring-2 focus:ring-meatin-green/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-meatin-red mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-8 rounded-full bg-meatin-green hover:bg-meatin-green-hover text-white font-bold text-sm tracking-wide shadow-green-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Message
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
