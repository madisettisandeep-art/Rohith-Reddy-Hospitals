import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Activity, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Diabetes Care & Glycemic Management | Dr. Rohith Reddy Yata',
  description:
    'Comprehensive evidence-based diabetes consultation, HbA1c control, dietary guidance, and preventive monitoring by Dr. Rohith Reddy Yata in Hanamkonda.',
};

export default function DiabetesCarePage() {
  const clinicalSteps = [
    {
      title: '1. In-Depth Diabetes Consultation',
      desc: 'Detailed examination of your fasting, post-prandial, and HbA1c history, medication tolerance, and daily dietary patterns.',
    },
    {
      title: '2. Precision Blood Sugar Management',
      desc: 'Individualized medical regimens adjusting oral hypoglycemic agents and insulin titration based on evidence-based international clinical guidelines.',
    },
    {
      title: '3. Actionable Lifestyle & Nutritional Guidance',
      desc: 'Realistic, sustainable carbohydrate monitoring, meal portioning, and physical activity planning tailored to South Indian dietary preferences.',
    },
    {
      title: '4. Microvascular & Organ Protection Screening',
      desc: 'Routine protocols for diabetic nephropathy (kidney tests), diabetic retinopathy checks, and peripheral neuropathy foot examinations.',
    },
    {
      title: '5. Continuous Glycemic Tracking & Long-Term Support',
      desc: 'Regular follow-up appointments and clear escalation guidance to prevent severe hypoglycemic or hyperglycemic episodes.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange-600">Services</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Diabetes Care</span>
        </nav>

        {/* Hero Banner */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="badge-warm">Diabetology Department</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-darkText tracking-tight">
              Personalized Diabetes Care &amp; Glycemic Management
            </h1>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Dr. Rohith Reddy Yata provides structured, medically responsible diabetes consultations in Subedari, Hanamkonda. Our goal is sustained blood glucose stability, enhanced quality of life, and proactive prevention of microvascular complications.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 mr-1.5" /> Book Consultation
              </Link>
              <a href={`tel:${hospitalSettings.phone}`} className="btn-secondary py-3 px-5 text-xs font-semibold">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" /> Call {hospitalSettings.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Responsible Medical Notice */}
        <div className="p-5 rounded-2xl bg-[#EFF6FF] border border-brand-orange-200 text-xs text-brand-secondaryText flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-brand-darkText block mb-0.5">
              Medically Responsible Diabetes Management
            </span>
            <span>
              Diabetes is a chronic metabolic condition that requires consistent clinical collaboration, scientific medication, and lifestyle adjustments. We do not make unverified claims of &ldquo;cures&rdquo; or &ldquo;100% prevention&rdquo;; our approach is strictly grounded in medical evidence and individual safety.
            </span>
          </div>
        </div>

        {/* 5-Step Clinical Care Pathway */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl text-brand-darkText">
            The 5 Pillars of Our Diabetes Care Protocol
          </h2>
          <div className="space-y-4">
            {clinicalSteps.map((step) => (
              <div key={step.title} className="hospital-card p-6 flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-brand-orange-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-bold text-base text-brand-darkText">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondaryText mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Consultation Flow */}
        <div className="hospital-card p-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-brand-orange-200 shadow-md">
              <Image
                src="/images/dr-rohith-reddy-portrait.webp"
                alt="Dr. Rohith Reddy Yata - Diabetologist"
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="badge-warm">Lead Diabetologist</span>
              <h2 className="font-display font-bold text-xl text-brand-darkText">
                Direct Consultation with {verifiedDoctorProfile.name}
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
                With over a decade of clinical experience in metabolic disorders and chronic diabetes management, Dr. Rohith Reddy takes time to understand your lifestyle, nutrition, and blood glucose trends to create a realistic, personalized treatment plan.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <Link href="/appointments" className="btn-primary py-2 px-4 text-xs font-semibold">
                  Book Consultation
                </Link>
                <Link href="/about/dr-rohith-reddy" className="btn-secondary py-2 px-4 text-xs font-semibold">
                  View Doctor Profile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="hospital-card p-8 sm:p-10 text-center space-y-4">
          <h3 className="font-display font-bold text-xl text-brand-darkText">
            Schedule Your Diabetology Review
          </h3>
          <p className="text-xs sm:text-sm text-brand-secondaryText max-w-xl mx-auto">
            Bring your past laboratory records, blood glucose meter readings, and medication list for a comprehensive assessment with Dr. Rohith Reddy.
          </p>
          <div className="pt-2">
            <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
