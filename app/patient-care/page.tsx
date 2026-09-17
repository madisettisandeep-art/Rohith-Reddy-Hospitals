import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, ShieldCheck, Sparkles, MessageCircle, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { verifiedDoctorProfile } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Patient Care & Experience | Rohith Reddy Hospitals',
  description:
    'Discover our patient-first approach, sterile clinical environment, clear medical explanations, and unhurried consultation care in Subedari, Hanamkonda.',
};

export default function PatientCarePage() {
  const values = [
    {
      title: 'Attentive & Unhurried Consultations',
      desc: 'Dr. Rohith Reddy dedicates ample time to listen to your symptoms, review your medical background, and answer your questions thoroughly without rushing.',
      icon: <Clock className="w-6 h-6 text-brand-orange-600" />,
    },
    {
      title: 'Clarity in Medical Communication',
      desc: 'We explain diagnoses, test results, and prescriptions in clear, simple language (English, Telugu, and Hindi), ensuring you and your family are fully informed.',
      icon: <MessageCircle className="w-6 h-6 text-brand-orange-600" />,
    },
    {
      title: 'Clinical Cleanliness & Patient Comfort',
      desc: 'Sterile consultation rooms, sanitized examination surfaces, and a peaceful, air-conditioned waiting lobby designed to minimize clinical anxiety.',
      icon: <Sparkles className="w-6 h-6 text-brand-orange-600" />,
    },
    {
      title: 'Continuity of Care & Follow-Up',
      desc: 'Structured review timelines for chronic conditions like diabetes and hypertension, enabling proactive dose titrations and consistent health tracking.',
      icon: <Heart className="w-6 h-6 text-brand-orange-600" />,
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Patient Care</span>
        </nav>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">The Patient Experience</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Patient Care Centered on Compassion &amp; Dignity
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            At Rohith Reddy Hospitals, healthcare is more than prescriptions—it is an empathetic partnership dedicated to your comfort, understanding, and long-term health.
          </p>
        </div>

        {/* 4 Pillars of Patient Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="hospital-card p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-xs">
                {v.icon}
              </div>
              <h2 className="font-display font-bold text-xl text-brand-darkText">{v.title}</h2>
              <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial highlight */}
        <div className="hospital-card p-8 sm:p-10 bg-[#F0F6FC] border-brand-beige text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-brand-copper uppercase tracking-wider">
            Verified Patient Feedback
          </span>
          <blockquote className="font-display font-semibold text-lg sm:text-xl text-brand-darkText leading-relaxed">
            &ldquo;One of the cleanest and most respectful clinic experiences in Hanamkonda. Dr. Rohith Reddy took time to review every report and gave clear diet and medicine advice for my diabetes.&rdquo;
          </blockquote>
          <p className="text-xs text-brand-secondaryText">
            &mdash; Verified Review from Google Business Profile
          </p>
          <div className="pt-2">
            <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4 mr-1.5" /> Book Your Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
