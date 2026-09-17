import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Phone, CheckCircle2, Clock, MapPin, Award, Heart, MessageSquare, ShieldCheck } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export const metadata: Metadata = {
  title: 'Dr. Rohith Reddy Yata | General Physician & Diabetologist | MBBS',
  description:
    'Profile of Dr. Rohith Reddy Yata (MBBS, 12 years experience), leading General Physician & Diabetologist at Rohith Reddy Hospitals in Subedari, Hanamkonda.',
};

export default function DoctorProfilePage() {
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-brand-orange-600">About</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Dr. Rohith Reddy Yata</span>
        </nav>

        {/* Doctor Hero Card */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 text-center">
              <div className="relative w-52 h-52 mx-auto mb-6 bg-white rounded-3xl p-3 shadow-md border border-brand-border">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Rohith Reddy Yata Emblem"
                  fill
                  sizes="208px"
                  className="object-contain"
                  priority
                />
              </div>

              <span className="badge-warm">Doctor Profile</span>
              <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-darkText mt-2">
                {verifiedDoctorProfile.name}
              </h1>
              <p className="text-base font-bold text-brand-orange-700 mt-1">
                {verifiedDoctorProfile.designation}
              </p>
              <p className="text-xs text-brand-secondaryText mt-1">
                Educational Qualification: <strong className="text-brand-darkText">{verifiedDoctorProfile.degrees}</strong>
              </p>
              <p className="text-xs text-brand-secondaryText mt-0.5">
                Clinical Experience: <strong className="text-brand-darkText">{verifiedDoctorProfile.experienceYears} Years Overall Practice</strong>
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <Link
                  href="/appointments"
                  className="btn-primary py-3 px-6 text-xs uppercase tracking-wider shadow-sm"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book In-Clinic Appointment
                </Link>
                <a
                  href={`tel:${hospitalSettings.phone}`}
                  className="btn-secondary py-2.5 px-4 text-xs font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" />
                  Call Clinic: {hospitalSettings.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Biography & Approach */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-brand-darkText">
                  Professional Biography
                </h2>
                <div className="space-y-3 mt-3 text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
                  {verifiedDoctorProfile.biography.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Consultation Details */}
              <div className="p-5 rounded-2xl bg-white border border-brand-border space-y-3 text-xs">
                <h3 className="font-display font-bold text-sm text-brand-darkText">
                  Consultation Schedule &amp; Information:
                </h3>
                <div className="flex items-center gap-2 text-brand-secondaryText">
                  <Clock className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>{verifiedDoctorProfile.consultationTimings}</span>
                </div>
                <div className="flex items-center gap-2 text-brand-secondaryText">
                  <MapPin className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Rohith Reddy Hospitals, Subedari, Hanamkonda</span>
                </div>
                <div className="flex items-center gap-2 text-brand-secondaryText">
                  <Heart className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Languages Spoken: {verifiedDoctorProfile.languages.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Focus Areas */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="badge-warm">Areas of Practice</span>
            <h2 className="font-display text-3xl font-bold text-brand-darkText">
              Clinical Specializations &amp; Care Spectrum
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText">
              Specialized expertise in general adult medicine, acute infections, and tailored diabetes regulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedDoctorProfile.focusAreas.map((area) => (
              <div
                key={area}
                className="hospital-card p-6 flex items-start gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-brand-darkText">
                    {area}
                  </h3>
                  <p className="text-xs text-brand-secondaryText mt-1 leading-relaxed">
                    Comprehensive outpatient evaluation, therapeutic protocol, and continuous health tracking.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
