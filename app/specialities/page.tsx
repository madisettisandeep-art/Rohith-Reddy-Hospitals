import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Stethoscope, Activity, HeartPulse, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { verifiedServices, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Departments & Specialities | Rohith Reddy Hospitals',
  description:
    'Explore verified medical specialities and clinical departments at Rohith Reddy Hospitals in Hanamkonda, led by Dr. Rohith Reddy Yata.',
};

export default function SpecialitiesPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Specialities</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Clinical Specialities</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Medical Departments &amp; Clinical Focus
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Our specialized clinical departments focus on verified core medical proficiencies led by {verifiedDoctorProfile.name} (General Physician &amp; Diabetologist).
          </p>
        </div>

        {/* Department Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verifiedServices.map((dept) => (
            <div
              key={dept.id}
              className="hospital-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-copper bg-brand-cream border border-brand-beige px-3 py-1 rounded-full">
                    {dept.category} Care
                  </span>
                </div>

                <h2 className="font-display font-bold text-2xl text-brand-darkText">
                  {dept.title}
                </h2>

                <p className="text-xs sm:text-sm text-brand-secondaryText mt-3 leading-relaxed">
                  {dept.detailedDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <h3 className="font-display font-bold text-xs text-brand-darkText uppercase tracking-wider mb-2.5">
                    Clinical Services Offered:
                  </h3>
                  <ul className="space-y-1.5 text-xs text-brand-secondaryText">
                    {dept.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-1.5 shrink-0" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <Link
                  href={`/services/${dept.slug}`}
                  className="font-bold text-xs text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide inline-flex items-center"
                >
                  Department Overview <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>

                <Link
                  href="/appointments"
                  className="btn-primary py-2 px-4 text-xs"
                >
                  Book OPD
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Note regarding administrative expansion */}
        <div className="p-6 rounded-3xl bg-[#FFF9F0] border border-brand-border text-center text-xs text-brand-secondaryText max-w-2xl mx-auto space-y-1">
          <ShieldCheck className="w-5 h-5 text-brand-copper mx-auto mb-1" />
          <p className="font-semibold text-brand-darkText">Verified Outpatient Scope</p>
          <p>
            Rohith Reddy Hospitals lists only verified clinical departments. Additional sub-speciality consultations are scheduled through the hospital desk following clinical triaging.
          </p>
        </div>
      </div>
    </div>
  );
}
