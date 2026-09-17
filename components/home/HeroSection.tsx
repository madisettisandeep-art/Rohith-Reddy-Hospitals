import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone, Navigation, Star, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-brand-warmWhite via-brand-cream/60 to-brand-warmWhite">
      {/* Subtle organic orange/beige background blur ornaments */}
      <div
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-brand-orange-100/40 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-brand-beige-200/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description, CTAs, Doctor Quick Badge */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clinical Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-cream border border-brand-beige px-3.5 py-1.5 rounded-full shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange-500 animate-pulse" />
              <span className="text-xs font-semibold text-brand-copper uppercase tracking-wider">
                Dr. Rohith Reddy Yata &bull; Hanamkonda
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-darkText leading-[1.12]">
              Personalized Healthcare. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-600 via-brand-orange-500 to-brand-copper">
                Better Health. Better Living.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-secondaryText leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert medical care with a focus on personalized attention, clear guidance and long-term wellbeing. Comprehensive consultations in general medicine and evidence-based diabetes management.
            </p>

            {/* Doctor Quick Badge */}
            <div className="p-4 rounded-2xl bg-white/80 border border-brand-border shadow-subtle flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Rohith Reddy Hospitals Emblem"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-display font-bold text-base text-brand-darkText">
                  {verifiedDoctorProfile.name}
                </div>
                <div className="text-xs font-semibold text-brand-orange-700">
                  {verifiedDoctorProfile.designation} &bull; {verifiedDoctorProfile.degrees}
                </div>
                <div className="text-xs text-brand-secondaryText mt-0.5">
                  {verifiedDoctorProfile.experienceYears}+ Years Clinical Practice &bull; Subedari, Hanamkonda
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="/appointments"
                className="btn-primary text-sm uppercase tracking-wider py-3.5 px-6 shadow-cta"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book an Appointment
              </Link>

              <a
                href={`tel:${hospitalSettings.phone}`}
                className="btn-secondary text-sm py-3.5 px-5"
              >
                <Phone className="w-4 h-4 mr-2 text-brand-orange-600" />
                Call Now
              </a>

              <a
                href={hospitalSettings.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-brand-secondaryText hover:text-brand-orange-700 py-2 px-3 rounded-lg transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 mr-1 text-brand-copper" />
                Get Directions
              </a>
            </div>

            {/* Trust highlights inline */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-brand-border/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display font-bold text-lg text-brand-darkText flex items-center gap-1">
                  4.9★ <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                </span>
                <span className="text-[11px] text-brand-secondaryText">
                  {hospitalSettings.googleReviewCount}+ Google Reviews
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display font-bold text-lg text-brand-darkText">
                  12+ Years
                </span>
                <span className="text-[11px] text-brand-secondaryText">
                  Clinical Experience
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="font-display font-bold text-lg text-brand-darkText">
                  24 Hours
                </span>
                <span className="text-[11px] text-brand-secondaryText">
                  Hospital Availability
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Healthcare Visual & Brand Identity Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Premium Brand Display Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white via-brand-cream to-white p-6 sm:p-8 border border-brand-beige shadow-card overflow-hidden">
                {/* Decorative background radial pattern */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange-100/50 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Official Logo Display */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6">
                    <Image
                      src="/images/logo.png"
                      alt="Rohith Reddy Hospitals Official Brand"
                      fill
                      sizes="(max-width: 640px) 192px, 224px"
                      className="object-contain"
                      priority
                    />
                  </div>

                  <span className="text-xs uppercase tracking-widest text-brand-copper font-bold">
                    Center for General Medicine &amp; Diabetology
                  </span>
                  <h3 className="font-display font-bold text-2xl text-brand-darkText mt-1">
                    Rohith Reddy Hospitals
                  </h3>
                  <p className="text-xs text-brand-secondaryText mt-1">
                    Subedari, Hanamkonda, Telangana
                  </p>

                  {/* 4 Brand Pillars Mini Badges */}
                  <div className="grid grid-cols-2 gap-2.5 w-full mt-6 text-left">
                    <div className="p-2.5 rounded-xl bg-white border border-brand-border/80 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange-50 flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4 text-brand-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">People First</div>
                        <div className="text-[10px] text-brand-secondaryText">Empathetic care</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-brand-border/80 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange-50 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-brand-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Excellence</div>
                        <div className="text-[10px] text-brand-secondaryText">Evidence based</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-brand-border/80 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange-50 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4 text-brand-copper" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Compassion</div>
                        <div className="text-[10px] text-brand-secondaryText">Active listening</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-brand-border/80 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-brand-orange-50 flex items-center justify-center shrink-0">
                        <Star className="w-4 h-4 text-amber-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Better Health</div>
                        <div className="text-[10px] text-brand-secondaryText">Long-term wellbeing</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 w-full pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs">
                    <span className="text-brand-secondaryText font-medium">OPD Consultations</span>
                    <Link
                      href="/about/dr-rohith-reddy"
                      className="font-semibold text-brand-orange-700 hover:text-brand-orange-800 inline-flex items-center"
                    >
                      View Doctor Profile <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
