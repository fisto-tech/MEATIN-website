'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, User, Mail, Phone, MapPin, Building, DollarSign, ShieldCheck } from 'lucide-react';
import { KERALA_DISTRICTS } from '@/data/franchiseData';

interface FranchiseInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDistrict?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDistrict: string;
  preferredCity: string;
  investmentBudget: string;
  preferredModel: string;
  message: string;
}

export const FranchiseInquiryModal: React.FC<FranchiseInquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledDistrict = ''
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDistrict: prefilledDistrict || 'Thrissur',
    preferredCity: '',
    investmentBudget: '₹15 Lakhs - ₹20 Lakhs',
    preferredModel: 'FOFO (Franchise Owned, Franchise Operated)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledDistrict) {
      setFormData(prev => ({ ...prev, preferredDistrict: prefilledDistrict }));
    }
  }, [prefilledDistrict]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-5 top-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-meatin-red/20 border border-meatin-red/30 text-meatin-yellow text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Franchise Application
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Apply for MEATIN Franchise
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            Fill out the form below. Our corporate expansion manager will contact you within 24 hours.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-2">
                Application Submitted Successfully!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. We have received your application for <span className="font-bold text-meatin-green">{formData.preferredDistrict}</span> district.
              </p>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto mb-6 text-left space-y-1">
                <p><strong>Ref Code:</strong> MFR-{Math.floor(100000 + Math.random() * 900000)}</p>
                <p><strong>District Assigned:</strong> {formData.preferredDistrict}</p>
                <p><strong>Contact Phone:</strong> {formData.phone}</p>
              </div>
              <button
                onClick={handleReset}
                className="py-3 px-8 rounded-xl bg-meatin-green hover:bg-emerald-900 text-white font-bold text-sm transition-all shadow-lg shadow-meatin-green/20"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none"
                    />
                  </div>
                </div>

                {/* Preferred District */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Preferred Kerala District *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.preferredDistrict}
                      onChange={(e) => setFormData({ ...formData, preferredDistrict: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none bg-white"
                    >
                      {KERALA_DISTRICTS.map((d) => (
                        <option key={d.id} value={d.name}>
                          {d.name} ({d.region})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred City/Town */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Preferred City / Town
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Perumpilavu, Kaloor, Manjeri"
                    value={formData.preferredCity}
                    onChange={(e) => setFormData({ ...formData, preferredCity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none"
                  />
                </div>

                {/* Investment Budget */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Investment Capital Range
                  </label>
                  <select
                    value={formData.investmentBudget}
                    onChange={(e) => setFormData({ ...formData, investmentBudget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none bg-white"
                  >
                    <option value="₹10 Lakhs - ₹15 Lakhs">₹10 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹20 Lakhs">₹15 Lakhs - ₹20 Lakhs</option>
                    <option value="₹20 Lakhs - ₹30 Lakhs">₹20 Lakhs - ₹30 Lakhs</option>
                    <option value="Above ₹30 Lakhs">Above ₹30 Lakhs</option>
                  </select>
                </div>
              </div>

              {/* Franchise Model Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Franchise Operating Model
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'FOFO (Franchise Owned, Franchise Operated)',
                    'FOCO (Franchise Owned, Company Operated)'
                  ].map((model) => (
                    <label
                      key={model}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        formData.preferredModel === model
                          ? 'bg-meatin-green/10 border-meatin-green text-meatin-green font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredModel"
                        checked={formData.preferredModel === model}
                        onChange={() => setFormData({ ...formData, preferredModel: model })}
                        className="text-meatin-green focus:ring-meatin-green"
                      />
                      <span>{model}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background or specific space availability..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-meatin-green/30 focus:border-meatin-green focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-meatin-red hover:bg-red-700 text-white font-bold text-base transition-all shadow-xl shadow-meatin-red/30 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Franchise Application</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default FranchiseInquiryModal;
