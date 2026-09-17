import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Clock, MapPin, Phone, Heart, Users, Sparkles, Award, ArrowRight } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'About Rohith Reddy Hospitals | Subedari, Hanamkonda',
  description:
    'Rohith Reddy Hospitals is a patient-centric medical center in Hanamkonda offering General Medicine, Diabetes Care, and diagnostic services led by Dr. Rohith Reddy Yata.',
};

export default function AboutHospitalPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-brand-orange-600">About</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Rohith Reddy Hospitals</span>
        </nav>

        {/* Hero Card */}
        <div className="hospital-card p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6">
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src="/images/logo.png"
              alt="Rohith Reddy Hospitals Official Logo"
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>

          <span className="badge-warm">Subedari, Hanamkonda</span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-darkText tracking-tight">
            Rohith Reddy Hospitals
          </h1>
          <p className="text-base text-brand-secondaryText max-w-2xl mx-auto leading-relaxed">
            A trusted healthcare institution dedicated to patient-centered primary medicine, specialized diabetes regulation, and primary diagnostics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
              Book an Appointment
            </Link>
            <a href={`tel:${hospitalSettings.phone}`} className="btn-secondary py-3 px-5 text-xs font-semibold">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" />
              Call {hospitalSettings.phoneDisplay}
            </a>
          </div>
        </div>

        {/* 4 Pillars in Detail */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="badge-warm">Our Core Values</span>
            <h2 className="font-display text-3xl font-bold text-brand-darkText">
              The Identity Behind Our Logo
            </h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText">
              The four foundational values embedded into every clinical consultation at Rohith Reddy Hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hospital-card p-6 space-y-3 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-orange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-darkText">People</h3>
              <p className="text-xs text-brand-secondaryText leading-relaxed">
                Prioritizing patient comfort, listening intently, and treating each individual and their family with respect and dignity.
              </p>
            </div>

            <div className="hospital-card p-6 space-y-3 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
                <Heart className="w-6 h-6 text-brand-orange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-darkText">Compassion</h3>
              <p className="text-xs text-brand-secondaryText leading-relaxed">
                Empathetic bedside manners, understanding personal constraints, and delivering care that relieves worry and stress.
              </p>
            </div>

            <div className="hospital-card p-6 space-y-3 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-orange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-darkText">Excellence</h3>
              <p className="text-xs text-brand-secondaryText leading-relaxed">
                Rigorous evidence-based protocols, continuous medical knowledge updates, and precise diagnostic screening.
              </p>
            </div>

            <div className="hospital-card p-6 space-y-3 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-brand-orange-600" />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-darkText">Better Health</h3>
              <p className="text-xs text-brand-secondaryText leading-relaxed">
                Empowering patients with actionable lifestyle guidance to achieve sustainable health and vibrant tomorrows.
              </p>
            </div>
          </div>
        </div>

        {/* Location and Timings Info */}
        <div className="hospital-card p-8 sm:p-10 space-y-4">
          <h3 className="font-display font-bold text-xl text-brand-darkText">
            Hospital Facility &amp; Location Details
          </h3>
          <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
            Conveniently situated in Subedari, Hanamkonda, our facility maintains stringent hygiene standards, a spacious waiting environment, and quick access for patients arriving from Warangal, Kazipet, and surrounding regions.
          </p>
          <div className="pt-2">
            <Link
              href="/location"
              className="inline-flex items-center text-xs font-bold text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide"
            >
              View Location, Driving Directions &amp; Maps <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
