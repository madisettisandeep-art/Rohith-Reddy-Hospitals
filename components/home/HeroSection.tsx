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
            <div className="p-4 rounded-2xl bg-white/90 border border-brand-border shadow-subtle flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-brand-orange-200 shadow-xs">
                <Image
                  src="/images/dr-rohith-reddy.webp"
                  alt={verifiedDoctorProfile.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
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

          {/* Right Column: Premium Healthcare Visual & Authentic Doctor Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Premium Healthcare Doctor Card */}
              <div className="relative rounded-3xl bg-white p-5 sm:p-7 border border-brand-border shadow-card overflow-hidden">
                {/* Decorative background radial pattern */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-orange-100/40 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* High Quality Doctor Portrait Showcase */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 shadow-sm border border-brand-border">
                    <Image
                      src="/images/dr-rohith-reddy-portrait.webp"
                      alt="Dr. Rohith Reddy Yata - General Physician & Diabetologist"
                      fill
                      sizes="(max-width: 640px) 100vw, 420px"
                      className="object-cover object-top"
                      priority
                    />
                    {/* Floating Clinical Excellence Pill */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-brand-border/80 rounded-xl px-3 py-2 flex items-center justify-between shadow-xs">
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">{verifiedDoctorProfile.name}</div>
                        <div className="text-[10px] font-semibold text-brand-orange-700">{verifiedDoctorProfile.designation}</div>
                      </div>
                      <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="w-full text-left">
                    <div className="text-[11px] uppercase tracking-wider text-brand-copper font-bold">
                      Rohith Reddy Hospitals &bull; Hanamkonda
                    </div>
                    <p className="text-xs text-brand-secondaryText mt-1">
                      &ldquo;Safe Patients. Stronger Healthcare. Better Living.&rdquo;
                    </p>
                  </div>

                  {/* 4 Patient Safety Principles from reference poster */}
                  <div className="grid grid-cols-2 gap-2 w-full mt-4 text-left">
                    <div className="p-2.5 rounded-xl bg-brand-orange-50/70 border border-brand-orange-100 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Heart className="w-3.5 h-3.5 text-brand-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Listen</div>
                        <div className="text-[10px] text-brand-secondaryText">Patient needs</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-brand-orange-50/70 border border-brand-orange-100 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-orange-600" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Learn</div>
                        <div className="text-[10px] text-brand-secondaryText">Evidence based</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-brand-orange-50/70 border border-brand-orange-100 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Award className="w-3.5 h-3.5 text-brand-copper" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Speak Up</div>
                        <div className="text-[10px] text-brand-secondaryText">Clear diagnosis</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-brand-orange-50/70 border border-brand-orange-100 flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-darkText">Partner</div>
                        <div className="text-[10px] text-brand-secondaryText">Care together</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 w-full pt-3 border-t border-brand-border/70 flex items-center justify-between text-xs">
                    <span className="text-brand-secondaryText font-medium">Daily OPD Consultations</span>
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
