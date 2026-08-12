'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

interface JobCard {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  iconBg: string;
  iconSvg: React.ReactNode;
}

// ... dataset ...


const allJobOpenings: JobCard[] = [
  {
    id: 'admin-assistant',
    title: 'Administration Assistant',
    department: 'Administration',
    location: 'Kerala',
    type: 'Full Time',
    experience: '1-3 Years Experience',
    description: 'Provide daily administrative support, manage head office communications, schedule executive briefings, and maintain official documentation records.',
    requirements: [
      'Bachelor’s degree in Business Administration or related field',
      'Proficiency in MS Office Suite and cloud office management tools',
      'Strong organizational, multi-tasking, and scheduling skills',
      'Fluency in verbal and written English & Malayalam'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'admin-manager',
    title: 'Administration Manager',
    department: 'Administration',
    location: 'Kerala',
    type: 'Full Time',
    experience: '5+ Years Experience',
    description: 'Oversee entire head office facility operations, manage corporate logistics, optimize administrative workflow policies, and lead administrative teams.',
    requirements: [
      'Master’s or Bachelor’s degree in Business Management',
      'Proven leadership experience as an Administrative Manager',
      'In-depth knowledge of office management and statutory regulations',
      'Strong budgeting and facility negotiation capabilities'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'hr-manager',
    title: 'HR Manager',
    department: 'Human Resources',
    location: 'Kerala',
    type: 'Full Time',
    experience: '5-8 Years Experience',
    description: 'Lead end-to-end recruitment, talent retention strategies, employee relations, performance management, and HR compliance standards.',
    requirements: [
      'MBA in Human Resource Management or equivalent',
      'Demonstrated HR leadership in retail/FMCG/food production sector',
      'Solid command of labor laws and organizational development',
      'Empathetic leadership and conflict resolution expertise'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'hr-assistant',
    title: 'HR Assistant',
    department: 'Human Resources',
    location: 'Kerala',
    type: 'Full Time',
    experience: '1-2 Years Experience',
    description: 'Assist in candidate screening, interview scheduling, employee onboarding, attendance audit, and personnel records maintenance.',
    requirements: [
      'Degree in Human Resources, Psychology, or Business',
      'Familiarity with HRIS software and applicant tracking systems',
      'Good interpersonal skills and strict confidentiality compliance',
      'Target-driven and proactive attitude'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'erp-coordinator',
    title: 'ERP Coordinator',
    department: 'Information Technology',
    location: 'Kerala',
    type: 'Full Time',
    experience: '3-5 Years Experience',
    description: 'Manage ERP system workflows, integrate inventory and sales modules across plant operations, and train team members on ERP protocols.',
    requirements: [
      'Degree in Computer Science, IT, or Systems Management',
      'Hands-on experience with ERP systems (SAP, Oracle, Odoo, or custom ERP)',
      'Strong data analytics and technical troubleshooting skills',
      'Ability to bridge IT engineering and business department leads'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
  {
    id: 'bdm',
    title: 'Business Development Manager',
    department: 'Sales & Growth',
    location: 'Kerala',
    type: 'Full Time',
    experience: '5+ Years Experience',
    description: 'Formulate business growth strategies, expand B2B retail distribution channels, negotiate high-value partner deals, and expand market share.',
    requirements: [
      'MBA in Marketing, Sales, or International Business',
      'Proven track record of driving revenue growth in FMCG/Food sectors',
      'Strong network of retail distribution and franchise networks',
      'Strategic presentation and high-stakes negotiation skills'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
  {
    id: 'bdo',
    title: 'Business Development Officer',
    department: 'Sales & Growth',
    location: 'Kerala',
    type: 'Full Time',
    experience: '2-4 Years Experience',
    description: 'Identify new retail partner accounts, perform competitive market research, build client relationships, and hit regional sales targets.',
    requirements: [
      'Bachelor’s degree in Business, Marketing, or Economics',
      'Strong client communication and field sales capabilities',
      'Willingness to travel across regional target zones',
      'Self-motivated with target-oriented mindset'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    ),
  },
  {
    id: 'cre',
    title: 'Customer Relations Executive',
    department: 'Customer Support',
    location: 'Kerala',
    type: 'Full Time',
    experience: '1-3 Years Experience',
    description: 'Handle customer inquiries, resolve delivery and product concerns efficiently, log feedback data, and maintain high satisfaction rates.',
    requirements: [
      'Degree in Communications, Business, or Hospitality',
      'Experience in customer support or call center operations',
      'Polite phone etiquette and quick problem-solving capability',
      'Fluency in Malayalam and English'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    id: 'cro',
    title: 'Customer Relations Officer',
    department: 'Customer Support',
    location: 'Kerala',
    type: 'Full Time',
    experience: '2-4 Years Experience',
    description: 'Oversee client support team operations, evaluate customer satisfaction metrics, optimize response quality, and resolve escalated issues.',
    requirements: [
      'Bachelor’s degree with 2+ years of senior customer support experience',
      'Hands-on expertise with CRM platforms and ticket resolution workflows',
      'Exceptional relationship-building and dispute mitigation skills',
      'Customer-first mindset and high patience'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: 'finance-manager',
    title: 'Finance Manager',
    department: 'Finance & Accounts',
    location: 'Kerala',
    type: 'Full Time',
    experience: '6-10 Years Experience',
    description: 'Manage corporate financial planning, annual budgeting, statutory audits, tax compliance, and strategic financial risk analysis.',
    requirements: [
      'CA / CMA / MBA Finance qualification',
      'Deep knowledge of corporate financial reporting, GST, and statutory audits',
      'Proficiency in ERP finance modules and advanced financial modeling',
      'High integrity and strategic analytical expertise'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    id: 'accounts-sales',
    title: 'Accounts (General ,Sales)',
    department: 'Finance & Accounts',
    location: 'Kerala',
    type: 'Full Time',
    experience: '2-4 Years Experience',
    description: 'Process sales invoicing, perform daily ledger reconciliations, monitor accounts receivables, and compile periodic financial statements.',
    requirements: [
      'B.Com / M.Com degree in Accounting or Finance',
      'Hands-on experience with Tally Prime / Zoho Books / ERP accounting modules',
      'High precision in data entry and bank reconciliations',
      'Solid understanding of GST and commercial sales accounting'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    id: 'managing-director',
    title: 'Managing Director',
    department: 'Executive Board',
    location: 'Kerala',
    type: 'Full Time',
    experience: '12+ Years Experience',
    description: 'Provide strategic visionary direction, oversee corporate governance, drive operational scaling, and steer MEATIN brand expansion.',
    requirements: [
      'Proven senior executive leadership experience in corporate sector',
      'Exceptional vision for brand scaling and sustainable growth',
      'Strong stakeholder management and governance expertise'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    id: 'cmo',
    title: 'Chief Marketing Officer',
    department: 'Executive & Marketing',
    location: 'Kerala',
    type: 'Full Time',
    experience: '8-12 Years Experience',
    description: 'Spearhead global brand positioning, retail & digital marketing campaigns, public relations, and nationwide customer growth initiatives.',
    requirements: [
      'Master’s degree in Marketing, Mass Media, or Executive Business',
      'Demonstrated portfolio of successful national/international brand campaigns',
      'Deep expertise in performance marketing and customer acquisition',
      'Creative vision paired with data-driven decision making'
    ],
    iconBg: '#E8F5E9',
    iconSvg: (
      <svg className="w-6 h-6 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const positionOptions = allJobOpenings.map(j => j.title).concat('Other / General Application');

export const CareersSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobCard | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [viewAllJobs, setViewAllJobs] = useState(false);
  
  // Direct Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [position, setPosition] = useState('');
  const [experience, setExperience] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll when popup modal is active
  useEffect(() => {
    if (isApplicationModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isApplicationModalOpen]);

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleApplyClick = (job: JobCard) => {
    setSelectedJob(job);
    setPosition(job.title);
    setIsApplicationModalOpen(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById('upload-resume-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJobs = () => {
    const el = document.getElementById('available-jobs-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleModalFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append('fullName', fullName);
      formData.append('email', email);
      formData.append('mobile', mobile);
      formData.append('position', position || (selectedJob ? selectedJob.title : 'General Application'));
      formData.append('experience', experience || 'Not specified');
      formData.append('coverLetter', coverLetter);

      const uploadInput = document.getElementById('direct-resume-upload') as HTMLInputElement;
      if (uploadInput && uploadInput.files && uploadInput.files[0]) {
        formData.append('resume', uploadInput.files[0]);
      }

      await fetch('/api/career/apply', {
        method: 'POST',
        body: formData,
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFullName('');
        setEmail('');
        setMobile('');
        setPosition('');
        setExperience('');
        setCoverLetter('');
        setResumeFileName('');
        setIsApplicationModalOpen(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to send resume application:', err);
      setIsSubmitting(false);
      alert('Application received! Thank you for applying.');
    }
  };

  return (
    <section className="relative w-full bg-white pt-16 sm:pt-20 lg:pt-[4.2rem] pb-16 lg:pb-[4vw] overflow-hidden z-10 font-manrope">
      
      {/* Background Soft Texture Overlay */}
      <div className="absolute top-0 left-0 right-0 h-[35vw] pointer-events-none z-0 opacity-30 bg-[url('/assets/home/recipe-inspiration/background-image.webp')] bg-cover bg-center" />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: FULL HEIGHT SEAMLESS BACKGROUND MERGED IMAGE             */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[400px] lg:min-h-[28vw] mb-12 sm:mb-16 lg:mb-[3vw] flex items-center overflow-hidden">
        
        {/* Right Image Container (Seamlessly Merged with Left Gradient Fade) */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58vw] z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/career/career-hero-team.webp"
            alt="MEATIN Corporate & Operations Team"
            fill
            className="object-cover object-center lg:object-left"
            priority
          />
          {/* Smooth Left-to-Right Soft Gradient Fade into white */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[48%] bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          {/* Subtle Top & Bottom Soft Fades */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent opacity-60 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent opacity-60 z-10" />
        </div>

        {/* Left Content Box */}
        <div className="relative z-10 w-full max-w-[1400px] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-[3vw] py-8 lg:py-[2vw]">
          <div className="max-w-xl lg:max-w-[36vw]">
            
            {/* Title */}
            <h1 className="font-chau font-normal text-4xl sm:text-5xl lg:text-[4vw] leading-[1.05] tracking-tight mb-4 lg:mb-[1vw]">
              <span className="text-[#153520] block">BUILD YOUR</span>
              <span className="text-[#153520]">CAREER WITH </span>
              <span className="text-[#D62828]">MEATIN</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="font-manrope font-medium text-sm sm:text-base lg:text-[1vw] text-[#2a2c30] leading-relaxed mb-6 sm:mb-8 lg:mb-[1.8vw] max-w-lg lg:max-w-[34vw]">
              Join one of Kerala’s fastest-growing meat processing companies and grow with a passionate team. At MEATIN, we offer a supportive workplace where you can develop your skills, take on new opportunities, and build a rewarding career while growing with us.

            </p>

         

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. AVAILABLE JOBS SECTION (CAROUSEL & VIEW ALL 13 OPENINGS GRID)          */}
      {/* ========================================================================= */}
      <div id="available-jobs-section" className="relative z-10 w-full max-w-[1400px] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-[3vw] mb-16 lg:mb-[4vw]">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10 lg:mb-[2vw]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="font-chau font-normal text-2xl sm:text-3xl lg:text-[2.2vw] text-[#153520] uppercase tracking-tight">
                AVAILABLE JOBS {viewAllJobs && <span className="text-[#D62828] font-bold">({allJobOpenings.length})</span>}
              </h2>
            </div>
            <div className="w-12 h-[3px] bg-[#153520]" />
          </div>

          {/* Right Action: Carousel Controls & View All Toggle */}
          <div className="flex items-center gap-3">
            
            {/* Carousel Left & Right Arrow Buttons (Visible in Carousel Mode) */}
            {!viewAllJobs && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollSlider('left')}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all cursor-pointer"
                  aria-label="Previous jobs"
                  title="Scroll Left"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollSlider('right')}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xs transition-all cursor-pointer"
                  aria-label="Next jobs"
                  title="Scroll Right"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}

            {/* View All Jobs Toggle Button */}
            <button
              onClick={() => setViewAllJobs(!viewAllJobs)}
              className="inline-flex items-center gap-1.5 font-extrabold text-xs sm:text-sm lg:text-[0.85vw] text-[#153520] hover:text-[#D62828] bg-white border border-slate-200 px-4 py-2 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <span>{viewAllJobs ? 'Show Carousel View' : 'View All Jobs'}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${viewAllJobs ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>

        {/* Dynamic Display: Carousel vs Expanded Multi-row Grid */}
        {viewAllJobs ? (
          /* Expanded Multi-Row Grid View (Sleek Compact 5-6 Column Cards) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 lg:gap-[0.9vw]">
            {allJobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-[#FAF6F0] rounded-xl lg:rounded-[0.8vw] p-3.5 sm:p-4 lg:p-[0.9vw] border border-[#EADBCC] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Circular Icon */}
                  <div
                    className="w-9 h-9 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full flex items-center justify-center mb-2.5"
                    style={{ backgroundColor: job.iconBg }}
                  >
                    {job.iconSvg}
                  </div>

                  {/* Job Title */}
                  <h3 className="font-manrope font-extrabold text-slate-900 text-sm lg:text-[0.88vw] leading-tight mb-1 group-hover:text-[#153520] transition-colors">
                    {job.title}
                  </h3>

                  {/* Department */}
                  <span className="block font-medium text-[11px] lg:text-[0.68vw] text-slate-500 mb-2.5">
                    {job.department}
                  </span>

                  {/* Metadata List with Icons */}
                  <div className="space-y-1 text-[11px] lg:text-[0.68vw] text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="14" x="2" y="7" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="truncate">{job.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <button
                  onClick={() => handleApplyClick(job)}
                  className="w-full bg-[#153520] hover:bg-[#0B1B10] text-white font-bold text-xs lg:text-[0.72vw] py-2 rounded-lg transition-colors shadow-2xs cursor-pointer text-center"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Carousel Slider View (Sleek Compact Width Cards) */
          <div
            ref={sliderRef}
            className="flex items-stretch gap-3.5 sm:gap-4 lg:gap-[0.9vw] overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {allJobOpenings.map((job) => (
              <div
                key={job.id}
                className="min-w-[190px] sm:min-w-[210px] lg:min-w-[13vw] bg-[#FAF6F0] rounded-xl lg:rounded-[0.8vw] p-3.5 sm:p-4 lg:p-[0.9vw] border border-[#EADBCC] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group flex-shrink-0"
              >
                <div>
                  {/* Top Circular Icon */}
                  <div
                    className="w-9 h-9 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full flex items-center justify-center mb-2.5"
                    style={{ backgroundColor: job.iconBg }}
                  >
                    {job.iconSvg}
                  </div>

                  {/* Job Title */}
                  <h3 className="font-manrope font-extrabold text-slate-900 text-xs sm:text-sm lg:text-[0.88vw] leading-tight mb-1 group-hover:text-[#153520] transition-colors">
                    {job.title}
                  </h3>

                  {/* Department */}
                  <span className="block font-medium text-[11px] lg:text-[0.68vw] text-slate-500 mb-2.5">
                    {job.department}
                  </span>

                  {/* Metadata List with Icons */}
                  <div className="space-y-1 text-[11px] lg:text-[0.68vw] text-slate-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="14" x="2" y="7" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="truncate">{job.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Apply Now Button */}
                <button
                  onClick={() => handleApplyClick(job)}
                  className="w-full bg-[#153520] hover:bg-[#0B1B10] text-white font-bold text-xs lg:text-[0.72vw] py-2 rounded-lg transition-colors shadow-2xs cursor-pointer text-center"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* 3. DUAL SECTION: "DIDN'T FIND A SUITABLE POSITION?" & "UPLOAD YOUR RESUME"*/}
      {/* ========================================================================= */}
      <div id="upload-resume-section" className="relative z-10 w-full max-w-[1400px] lg:max-w-[88vw] mx-auto px-4 sm:px-6 lg:px-[3vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-[2vw] items-stretch">
          
          {/* Left Column Card: DIDN'T FIND A SUITABLE POSITION? */}
          <div className="lg:col-span-5 bg-[#FAF6F0] border border-[#EADBCC] rounded-2xl lg:rounded-[1.2vw] p-6 sm:p-8 lg:p-[2.2vw] shadow-2xs flex flex-col items-center justify-center text-center relative overflow-hidden group">
            
            <h3 className="font-chau font-normal text-xl sm:text-2xl lg:text-[1.6vw] text-[#153520] uppercase tracking-tight mb-2">
              DIDN&apos;T FIND A SUITABLE POSITION?
            </h3>
            
            <p className="font-manrope font-medium text-xs sm:text-sm lg:text-[0.88vw] text-slate-600 leading-relaxed mb-8 max-w-sm">
              Upload your resume and we&apos;ll contact you when a suitable opportunity becomes available.
            </p>

            {/* Clickable Graphic Illustration Box (Triggers File Upload) */}
            <div
              onClick={() => {
                const uploadInput = document.getElementById('direct-resume-upload') as HTMLInputElement;
                if (uploadInput) {
                  uploadInput.click();
                }
              }}
              className="relative w-52 h-64 sm:w-60 sm:h-72 lg:w-[15vw] lg:h-[19vw] cursor-pointer group-hover:scale-105 transition-transform duration-300 flex items-center justify-center"
              title="Click to Upload Your Resume"
            >
              
              {/* Background Soft Potted Plant Leaves SVG */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none opacity-25 px-2">
                <svg className="w-16 h-28 text-slate-400" viewBox="0 0 100 180" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 170C50 100 50 40 50 10" />
                  <path d="M50 140C20 120 10 100 20 80C35 85 50 110 50 140Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50 110C80 90 90 70 80 50C65 55 50 80 50 110Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50 70C20 50 10 30 20 10C35 15 50 40 50 70Z" fill="currentColor" fillOpacity="0.15" />
                </svg>
                <svg className="w-16 h-28 text-slate-400" viewBox="0 0 100 180" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M50 170C50 100 50 40 50 10" />
                  <path d="M50 140C80 120 90 100 80 80C65 85 50 110 50 140Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50 110C20 90 10 70 20 50C35 55 50 80 50 110Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M50 70C80 50 90 30 80 10C65 15 50 40 50 70Z" fill="currentColor" fillOpacity="0.15" />
                </svg>
              </div>

              {/* Main Paper Clipboard Container (Matching image.png visual) */}
              <div className="relative w-44 h-56 sm:w-48 sm:h-60 lg:w-[12.5vw] lg:h-[15.5vw] bg-white border-[3.5px] border-[#153520] rounded-2xl shadow-md p-4 flex flex-col justify-start z-10">
                
                {/* Top Clip Handle */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-[#153520] rounded-t-xl flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-[#153520]" />
                </div>

                {/* Upper Avatar & Header Lines */}
                <div className="flex items-start gap-3 mt-3">
                  {/* Person Avatar Circle */}
                  <div className="w-11 h-11 rounded-full bg-slate-100 border-2 border-emerald-700/30 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <svg className="w-10 h-10 text-[#153520] mt-1.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  {/* Top Skeleton Lines */}
                  <div className="flex-1 space-y-1.5 pt-1.5">
                    <div className="w-full h-2 bg-slate-200 rounded-full" />
                    <div className="w-3/4 h-2 bg-slate-200 rounded-full" />
                  </div>
                </div>

                {/* Document Body Lines */}
                <div className="mt-4 space-y-2.5">
                  <div className="w-full h-2 bg-slate-200 rounded-full" />
                  <div className="w-11/12 h-2 bg-slate-200 rounded-full" />
                  <div className="w-4/5 h-2 bg-slate-200 rounded-full" />
                  <div className="w-3/4 h-2 bg-slate-200 rounded-full" />
                </div>

              </div>

              {/* Floating Green Cloud Upload Button (Bottom Right) */}
              <div className="absolute -bottom-1 -right-1 w-14 h-14 sm:w-16 sm:h-16 lg:w-[4.2vw] lg:h-[4.2vw] rounded-full bg-[#153520] border-4 border-white shadow-xl flex items-center justify-center text-white z-20 group-hover:bg-[#0B1B10] transition-colors">
                <svg className="w-7 h-7 lg:w-[2vw] lg:h-[2vw]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </div>

            </div>

          </div>

          {/* Right Column Card: UPLOAD YOUR RESUME FORM */}
          <div className="lg:col-span-7 bg-[#FAF6F0] border border-[#EADBCC] rounded-2xl lg:rounded-[1.2vw] p-6 sm:p-8 lg:p-[2.2vw] shadow-2xs">
            
            <h3 className="font-chau font-normal text-2xl sm:text-3xl lg:text-[1.8vw] text-[#153520] uppercase tracking-tight mb-6">
              UPLOAD YOUR RESUME
            </h3>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#153520]">Application Submitted Successfully!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for submitting your resume. Our HR recruitment department will contact you when a matching opportunity opens up.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalFormSubmit} className="space-y-4 lg:space-y-[1vw]">
                
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1vw]">
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile Number & Position Interested In */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1vw]">
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter your mobile number"
                      className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Position Interested In
                    </label>
                    <select
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors text-slate-700"
                    >
                      <option value="">Select Position</option>
                      {positionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Experience & Upload Resume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[1vw]">
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Experience
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors text-slate-700"
                    >
                      <option value="">Select Experience</option>
                      <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="2-3 Years">2-3 Years</option>
                      <option value="3-5 Years">3-5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                      Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="direct-resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="w-full text-xs lg:text-[0.8vw] p-2.5 rounded-lg border border-slate-200 bg-white text-slate-600 flex items-center justify-between">
                        <span className="bg-[#E8F5E9] text-[#153520] px-3 py-1.5 rounded-md font-bold border border-emerald-200 text-xs">
                          Choose File
                        </span>
                        <span className="truncate text-slate-500 text-xs ml-2">
                          {resumeFileName || 'No file chosen'}
                        </span>
                      </div>
                    </div>
                    <span className="block text-[10px] lg:text-[0.65vw] text-slate-400 mt-1">
                      PDF, DOC, DOCX (Max 5MB)
                    </span>
                  </div>
                </div>

                {/* Row 4: Cover Letter */}
                <div>
                  <label className="block text-xs lg:text-[0.78vw] font-bold text-slate-700 mb-1.5">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Write a few lines about yourself"
                    className="w-full text-xs lg:text-[0.8vw] p-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520] transition-colors"
                  />
                </div>

                {/* Row 5: Checkbox & Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#153520] hover:bg-[#0B1B10] text-white font-bold text-xs lg:text-[0.85vw] px-6 py-3 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        SUBMIT APPLICATION
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="22" y1="2" x2="11" y2="13"/>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                        </svg>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. FULL JOB DETAILS & APPLICATION MODAL FOR "APPLY NOW"                    */}
      {/* ========================================================================= */}
      {mounted && isApplicationModalOpen && selectedJob && createPortal(
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-fade-in font-manrope">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[85vh] flex flex-col my-auto">
            
            {/* Modal Header */}
            <div className="bg-[#153520] text-white p-5 sm:p-6 flex items-center justify-between shrink-0">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4A437] font-bold">
                  {selectedJob.department}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-0.5">{selectedJob.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsApplicationModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-6 overflow-y-auto space-y-3 text-center py-12 flex-1">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[#153520]">Application Submitted Successfully!</h4>
                <p className="text-sm text-black font-medium max-w-md mx-auto">
                  Thank you for applying for the <strong>{selectedJob.title}</strong> position at MEATIN. Our recruitment team will review your application and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalFormSubmit} className="flex flex-col flex-1 overflow-hidden">
                {/* Modal Content Scrollable Area */}
                <div className="p-6 pb-0 overflow-y-auto space-y-6 flex-1">
                  
                  {/* Job Specs & Description Card */}
                  <div className="bg-[#FAF6F0] p-4 sm:p-5 rounded-xl border border-[#EADBCC] space-y-3.5">
                    
                    {/* Metadata Badges */}
                    <div className="flex flex-wrap gap-4 text-xs font-bold text-black">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#D62828]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        Location: {selectedJob.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#153520]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                          <line x1="16" x2="16" y1="2" y2="6"/>
                          <line x1="8" x2="8" y1="2" y2="6"/>
                        </svg>
                        {selectedJob.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect width="20" height="14" x="2" y="7" rx="2"/>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                        </svg>
                        {selectedJob.experience}
                      </span>
                    </div>

                    {/* Job Overview */}
                    <div>
                      <span className="text-xs font-bold text-[#153520] block mb-1">Job Overview:</span>
                      <p className="text-xs sm:text-sm text-black font-medium leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </div>

                    {/* Key Qualifications */}
                    <div className="pt-2 border-t border-slate-200/80">
                      <span className="text-xs font-bold text-[#153520] block mb-1.5">Key Qualifications & Requirements:</span>
                      <ul className="space-y-1.5">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-medium text-black">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#153520] mt-1.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Application Form Inputs */}
                  <div className="space-y-4">
                    <h4 className="font-extrabold text-black text-sm border-b pb-2">
                      Apply for {selectedJob.title}
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full text-xs text-black font-medium p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          className="w-full text-xs text-black font-medium p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full text-xs text-black font-medium p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-black mb-1">Upload Resume (PDF / DOCX) *</label>
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                          />
                          <div className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-slate-50 text-black font-medium flex items-center justify-between">
                            <span className="bg-[#153520] text-white px-3 py-1 rounded text-[10px] font-bold">Browse</span>
                            <span className="truncate text-black font-medium text-xs ml-2">{resumeFileName || 'No file chosen'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black mb-1">Cover Note (Optional)</label>
                      <textarea
                        rows={2}
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Briefly introduce yourself and why you'd like to join MEATIN..."
                        className="w-full text-xs text-black font-medium p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#153520] focus:ring-1 focus:ring-[#153520]"
                      />
                    </div>
                  </div>

                </div>

                {/* Static Bottom Submit Button Footer */}
                <div className="p-4 sm:px-6 bg-white border-t border-slate-100 shrink-0 shadow-lg">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#153520] hover:bg-[#0B1B10] text-white font-bold text-xs py-3.5 rounded-lg transition-colors shadow-md cursor-pointer uppercase tracking-wider"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application Now'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>,
        document.body
      )}

    </section>
  );
};

export default CareersSection;
