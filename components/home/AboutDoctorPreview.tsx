import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone, CheckCircle2, Clock, MapPin, Award, BookOpen, ArrowRight } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';

export default function AboutDoctorPreview() {
  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Doctor Profile Card with Official Brand Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-b from-[#FFF9F0] to-white border border-brand-beige p-8 shadow-card overflow-hidden text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange-50 border border-brand-orange-200 text-xs font-bold text-brand-orange-700 uppercase tracking-wider mb-6">
                <Award className="w-3.5 h-3.5" /> Verified Medical Professional
              </div>

              {/* Official Brand Emblem Display */}
              <div className="relative w-36 h-36 mx-auto mb-6 bg-white rounded-2xl p-2 shadow-sm border border-brand-border">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Rohith Reddy Yata - Rohith Reddy Hospitals"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-darkText">
                {verifiedDoctorProfile.name}
              </h3>
              <p className="text-sm font-semibold text-brand-orange-700 mt-1">
                {verifiedDoctorProfile.designation}
              </p>
              <p className="text-xs text-brand-secondaryText mt-0.5">
                Qualifications: <strong className="text-brand-darkText">{verifiedDoctorProfile.degrees}</strong> &bull; Experience: <strong className="text-brand-darkText">{verifiedDoctorProfile.experienceYears} Years</strong>
              </p>

              {/* Languages & Timings */}
              <div className="mt-6 pt-6 border-t border-brand-border/70 space-y-3 text-left text-xs">
                <div className="flex items-start gap-2 text-brand-secondaryText">
                  <Clock className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-darkText">Consultation Timings:</span>
                    <div>Mon – Sun: 10:00 AM – 2:00 PM &bull; 5:00 PM – 9:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-brand-secondaryText">
                  <MapPin className="w-4 h-4 text-brand-copper shrink-0" />
                  <span>Subedari, Hanamkonda (24/7 Clinical Support)</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href="/appointments"
                  className="btn-primary w-full py-3 text-xs uppercase tracking-wider shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  Schedule Consultation
                </Link>
                <a
                  href={`tel:${hospitalSettings.phone}`}
                  className="btn-secondary w-full py-2.5 text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-brand-orange-600" />
                  Call {hospitalSettings.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Areas of Practice */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="badge-warm">About the Physician</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText mt-3 tracking-tight">
                Compassionate, Thorough &amp; Evidence-Based Clinical Care
              </h2>
              <p className="text-base text-brand-secondaryText mt-4 leading-relaxed">
                With 12 years of hands-on medical experience, Dr. Rohith Reddy Yata provides comprehensive medical evaluations for acute ailments, complex fevers, and chronic metabolic conditions. He is recognized by patients for providing unhurried consultations and clear explanations of health conditions and medications.
              </p>
            </div>

            {/* Areas of Practice Grid */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-base text-brand-darkText">
                Clinical Focus &amp; Practice Areas:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {verifiedDoctorProfile.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0" />
                    <span className="text-xs font-semibold text-brand-darkText">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Bio Excerpt */}
            <div className="p-5 rounded-2xl bg-[#FFF9F0] border border-brand-beige/80 text-xs sm:text-sm text-brand-secondaryText leading-relaxed space-y-2">
              <p>
                &ldquo;Every patient deserves attentive listening, meticulous examination, and clear guidance. Effective healing begins when patients fully comprehend their diagnosis and feel confident in their wellness journey.&rdquo;
              </p>
              <div className="font-bold text-brand-darkText text-xs pt-1">
                &mdash; {verifiedDoctorProfile.name}, {verifiedDoctorProfile.designation}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about/dr-rohith-reddy"
                className="inline-flex items-center font-bold text-sm text-brand-orange-700 hover:text-brand-orange-800 transition-colors"
              >
                Read Full Professional Biography <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
