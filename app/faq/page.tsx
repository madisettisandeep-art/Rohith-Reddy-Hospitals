import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import FAQSection from '@/components/home/FAQSection';
import { Phone, Calendar } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Rohith Reddy Hospitals',
  description:
    'Common questions and answers regarding doctor consultations, diabetes care, ECG diagnostics, appointments, and hospital location in Hanamkonda.',
};

export default function FAQPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">FAQ</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Hospital Knowledge Base</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Quick, reliable answers regarding doctor consultations, appointment policies, clinical diagnostics, and hospital timings in Subedari, Hanamkonda.
          </p>
        </div>

        {/* Interactive Accordion Component */}
        <FAQSection />

        {/* Help Banner */}
        <div className="hospital-card p-8 text-center max-w-xl mx-auto space-y-4">
          <h2 className="font-display font-bold text-xl text-brand-darkText">
            Still Have Questions?
          </h2>
          <p className="text-xs sm:text-sm text-brand-secondaryText">
            Our clinical desk is happy to assist you directly over telephone or WhatsApp.
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <a href={`tel:${hospitalSettings.phone}`} className="btn-primary py-2.5 px-5 text-xs">
              <Phone className="w-3.5 h-3.5 mr-1.5" /> Call {hospitalSettings.phoneDisplay}
            </a>
            <Link href="/appointments" className="btn-secondary py-2.5 px-5 text-xs font-semibold">
              <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
