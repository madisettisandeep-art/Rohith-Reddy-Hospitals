import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HeartPulse, Droplet, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'ECG & Diagnostic Services | Rohith Reddy Hospitals | Hanamkonda',
  description:
    'Verified outpatient diagnostic tests including 12-lead digital ECG (Heart Health Assessment) and Blood Group Analysis at Rohith Reddy Hospitals in Subedari, Hanamkonda.',
};

export default function DiagnosticServicesPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange-600">Services</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Diagnostic Services</span>
        </nav>

        {/* Hero */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="badge-warm">Clinical Diagnostics</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-darkText tracking-tight">
              ECG &amp; Primary Diagnostic Services
            </h1>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Rohith Reddy Hospitals provides rapid, high-accuracy outpatient screening tests including digital 12-lead Electrocardiograms (ECG) and certified blood grouping analysis conducted under rigorous clinical standards.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 mr-1.5" /> Schedule Test
              </Link>
              <a href={`tel:${hospitalSettings.phone}`} className="btn-secondary py-3 px-5 text-xs font-semibold">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" /> Call {hospitalSettings.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* The 2 Confirmed Diagnostic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: ECG */}
          <div className="hospital-card p-8 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-brand-orange-600" />
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-darkText">
              12-Lead ECG / Heart Health Assessment
            </h2>

            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              An Electrocardiogram is an essential primary screening tool that measures electrical conduction through the heart muscle. Performed rapidly with zero discomfort and interpreted directly during physician consultation.
            </p>

            <ul className="space-y-2 text-xs text-brand-darkText pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Detection of arrhythmia, tachycardia, bradycardia &amp; conduction pauses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Identification of ischemic changes and myocardial strain patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Routine baseline cardiac monitoring for diabetic and hypertensive adults</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Evaluation of atypical chest tightness, fluttering, or dizziness</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Blood Grouping & Primary Labs */}
          <div className="hospital-card p-8 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
              <Droplet className="w-6 h-6 text-brand-orange-600" />
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-darkText">
              Blood Group Analysis &amp; Routine Labs
            </h2>

            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Fast and accurate ABO blood group typing, Rh status determination, and primary metabolic blood profiling (Fasting Blood Sugar, Post-Prandial Blood Sugar, and Random Glucose) to assist timely clinical diagnosis.
            </p>

            <ul className="space-y-2 text-xs text-brand-darkText pt-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Certified ABO and Rh factor verification for documentation and medical readiness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Immediate blood glucose profiling with calibrated clinical glucometry</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Sterile, gentle sample collection protocols prioritizing patient comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                <span>Rapid turnaround time with prompt physician consultation integration</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Medical Note */}
        <div className="p-6 rounded-3xl bg-[#EFF6FF] border border-brand-orange-200 text-center text-xs text-brand-secondaryText max-w-2xl mx-auto space-y-1">
          <ShieldCheck className="w-5 h-5 text-brand-copper mx-auto mb-1" />
          <p className="font-bold text-brand-darkText">Statutory Outpatient Scope Notice</p>
          <p>
            Diagnostic testing at Rohith Reddy Hospitals is conducted for outpatient diagnostic evaluation and primary health surveillance.
          </p>
        </div>
      </div>
    </div>
  );
}
