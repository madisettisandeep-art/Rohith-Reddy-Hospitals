import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, Calendar, Phone, ArrowRight, HeartPulse, Activity, Stethoscope } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Health Packages | Rohith Reddy Hospitals | Hanamkonda',
  description:
    'Comprehensive outpatient health checkup packages covering General Wellness, Diabetes Assessment, and Heart Health Screening at Rohith Reddy Hospitals.',
};

export default function HealthPackagesPage() {
  const packages = [
    {
      id: 'general-wellness',
      name: 'Primary Health & Wellness Checkup',
      tagline: 'Ideal for routine annual adult health evaluations and early screening.',
      badge: 'Popular',
      includes: [
        'Detailed Physician Consultation with Dr. Rohith Reddy Yata',
        'Resting 12-Lead Electrocardiogram (ECG) Recording',
        'Random Blood Sugar (RBS) Assessment',
        'Blood Group & Rh Typing (if needed)',
        'Blood Pressure & BMI Review',
        'Personalized Diet & Lifestyle Guidance',
      ],
    },
    {
      id: 'diabetes-monitoring',
      name: 'Comprehensive Diabetes Review Package',
      tagline: 'Tailored for adults with Type 2 or Type 1 diabetes and pre-diabetes.',
      badge: 'Specialized',
      includes: [
        'Detailed Diabetologist Consultation & History Review',
        'Fasting Blood Sugar (FBS) & Post-Prandial (PPBS) Assessment',
        '12-Lead Cardiac Screening ECG Recording',
        'Peripheral Neuropathy & Foot Health Check',
        'Blood Pressure & Cardiovascular Risk Assessment',
        'Medication Titration & Nutrition Action Plan',
      ],
    },
    {
      id: 'cardio-metabolic',
      name: 'Cardio-Metabolic Screening',
      tagline: 'Targeted assessment for hypertension, cardiac rhythm, and metabolic factors.',
      badge: 'Diagnostic',
      includes: [
        'In-Depth Internal Medicine Consultation',
        'Digital 12-Lead Electrocardiogram (ECG) with Clinical Report',
        'Blood Glucose Profiling',
        'Blood Pressure Multi-Point Mapping',
        'Clinical Cardiovascular Risk Evaluation',
        'Preventive Follow-Up Recommendations',
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Health Packages</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Preventive Packages</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Comprehensive Outpatient Health Packages
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Thoughtfully structured health packages combining clinical consultation with on-site ECG and blood assessments for clear insights and peace of mind.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="hospital-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-warm text-[10px]">
                    {pkg.badge}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl text-brand-darkText">
                  {pkg.name}
                </h2>

                <p className="text-xs text-brand-secondaryText mt-2 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="mt-6 pt-5 border-t border-brand-border/60">
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-brand-copper mb-3">
                    Package Inclusions:
                  </h3>
                  <ul className="space-y-2.5 text-xs text-brand-darkText">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border/60 space-y-3">
                <Link
                  href={`/appointments?service=${encodeURIComponent(pkg.name)}`}
                  className="btn-primary w-full py-3 text-xs uppercase tracking-wider text-center"
                >
                  <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Package
                </Link>

                <a
                  href={`tel:${hospitalSettings.phone}`}
                  className="btn-secondary w-full py-2.5 text-xs text-center font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" /> Inquire: {hospitalSettings.phoneDisplay}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="p-6 rounded-3xl bg-[#F0F6FC] border border-brand-border text-center text-xs text-brand-secondaryText max-w-2xl mx-auto space-y-1">
          <ShieldCheck className="w-5 h-5 text-brand-copper mx-auto mb-1" />
          <p className="font-semibold text-brand-darkText">Patient Preparation Instructions</p>
          <p>
            For blood sugar tests, overnight fasting (8 to 10 hours) is recommended. Water intake is allowed. Contact our reception prior to arrival for specific instructions.
          </p>
        </div>
      </div>
    </div>
  );
}
