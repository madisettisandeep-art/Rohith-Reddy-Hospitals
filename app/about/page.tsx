import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone, Award, CheckCircle2, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'About Us | Rohith Reddy Hospitals & Dr. Rohith Reddy Yata',
  description:
    'Learn about Rohith Reddy Hospitals and Dr. Rohith Reddy Yata (General Physician & Diabetologist, MBBS, 12 years experience) in Hanamkonda.',
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">About Our Practice</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Personalized Healthcare in Hanamkonda
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Founded on the four core pillars of People, Compassion, Excellence, and Better Health, Rohith Reddy Hospitals brings high-quality medical consultations to Subedari.
          </p>
        </div>

        {/* Section 1: Dr. Rohith Reddy Profile */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative w-44 h-44 mx-auto mb-6 bg-white rounded-3xl p-3 shadow-sm border border-brand-border">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Rohith Reddy Yata"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
              <h2 className="font-display font-bold text-2xl text-brand-darkText">
                {verifiedDoctorProfile.name}
              </h2>
              <p className="text-sm font-semibold text-brand-orange-700 mt-1">
                {verifiedDoctorProfile.designation}
              </p>
              <p className="text-xs text-brand-secondaryText mt-0.5">
                {verifiedDoctorProfile.degrees} &bull; {verifiedDoctorProfile.experienceYears} Years Experience
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              <h3 className="font-display font-bold text-xl text-brand-darkText">
                Dedicated General Physician &amp; Diabetologist
              </h3>
              {verifiedDoctorProfile.biography.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/about/dr-rohith-reddy"
                  className="btn-primary py-2.5 px-5 text-xs uppercase tracking-wider"
                >
                  View Full Profile &amp; Clinical Focus <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
                <Link
                  href="/appointments"
                  className="btn-secondary py-2.5 px-5 text-xs font-semibold"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Hospital Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hospital-card p-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-copper">
              Our Vision &amp; Identity
            </span>
            <h2 className="font-display font-bold text-2xl text-brand-darkText">
              Healthier Lives. Brighter Tomorrows.
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Rohith Reddy Hospitals provides an unhurried, patient-centered atmosphere. We focus on evidence-based treatment regimens, accurate primary diagnostic screenings including ECG and blood profiling, and thorough patient education.
            </p>
            <div className="pt-2">
              <Link
                href="/about/hospital"
                className="font-bold text-xs text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide inline-flex items-center"
              >
                Learn More About Our Hospital <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          <div className="hospital-card p-8 space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-copper">
              Hospital Availability
            </span>
            <h2 className="font-display font-bold text-2xl text-brand-darkText">
              24-Hour Clinical Facility
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Located at Teacher's Colony, Pranay Marg, Waddepally, Phase 1, Subedari, Hanamkonda. Our outpatient consultations run during morning and evening slots, with continuous primary emergency and clinical accessibility.
            </p>
            <div className="pt-2">
              <Link
                href="/location"
                className="font-bold text-xs text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide inline-flex items-center"
              >
                View Directions &amp; Contact Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
