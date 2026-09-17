import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Heart, Sparkles, CheckCircle2, Calendar, Phone, ArrowRight } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Preventive Healthcare & Wellness | Rohith Reddy Hospitals',
  description:
    'Proactive health checkups, cardiovascular risk review, and preventive adult health guidance by Dr. Rohith Reddy Yata in Hanamkonda.',
};

export default function PreventiveHealthcarePage() {
  const pillars = [
    'Periodic health screenings for early detection of metabolic imbalances and silent hypertension',
    'Pre-diabetes risk stratification and glucose tolerance evaluations',
    'Cardiovascular risk screening with resting 12-lead ECG review and blood pressure mapping',
    'Personalized nutrition, hydration, and sleep hygiene recommendations',
    'Vaccination and seasonal infection prophylaxis counseling for adults',
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange-600">Services</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Preventive Healthcare</span>
        </nav>

        {/* Hero */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="badge-warm">Preventive Medicine</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-darkText tracking-tight">
              Preventive Healthcare &amp; Wellness
            </h1>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Detecting subtle health vulnerabilities before they evolve into chronic symptoms. Guided by {verifiedDoctorProfile.name}, our preventive consultations empower you with medical clarity and actionable lifestyle modifications.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 mr-1.5" /> Book Preventive Checkup
              </Link>
              <a href={`tel:${hospitalSettings.phone}`} className="btn-secondary py-3 px-5 text-xs font-semibold">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" /> Call {hospitalSettings.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Scope */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl text-brand-darkText">
            Preventive Clinical Scope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div key={idx} className="hospital-card p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-darkText font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hospital-card p-8 sm:p-10 text-center space-y-4">
          <h3 className="font-display font-bold text-xl text-brand-darkText">
            Invest in Your Health Today
          </h3>
          <p className="text-xs sm:text-sm text-brand-secondaryText max-w-xl mx-auto">
            Schedule a preventive checkup or consult with our front desk regarding recommended screening frequencies based on age and family history.
          </p>
          <div className="pt-2">
            <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
              Book Checkup Slot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
