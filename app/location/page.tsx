import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import LocationSection from '@/components/home/LocationSection';
import { MapPin, Navigation, Phone, Clock, Bus, Car, Building2 } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Location & Driving Directions | Subedari, Hanamkonda',
  description:
    'Directions and map for Rohith Reddy Hospitals at Teacher’s Colony, Pranay Marg, Waddepally Phase 1, Subedari, Hanamkonda, Telangana 506370.',
};

export default function LocationPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Location &amp; Directions</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Subedari, Hanamkonda</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            How to Reach Rohith Reddy Hospitals
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Conveniently situated in Waddepally Phase 1, Subedari. Accessible within minutes from Warangal, Kazipet Railway Station, and Hanamkonda Bus Station.
          </p>
        </div>

        {/* Embedded Interactive Map Component */}
        <LocationSection />

        {/* Transit & Accessibility Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="hospital-card p-6 sm:p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center">
              <Car className="w-6 h-6 text-brand-orange-600" />
            </div>
            <h2 className="font-display font-bold text-lg text-brand-darkText">By Car or Auto</h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Direct road connectivity via Pranay Marg from Subedari Main Road. Dedicated parking spaces for patient vehicles and smooth ground-floor entry.
            </p>
          </div>

          <div className="hospital-card p-6 sm:p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center">
              <Bus className="w-6 h-6 text-brand-orange-600" />
            </div>
            <h2 className="font-display font-bold text-lg text-brand-darkText">From Bus Station</h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Approximately 10 to 15 minutes drive from Hanamkonda Central Bus Station. Auto rickshaws are readily available towards Subedari / Teacher's Colony.
            </p>
          </div>

          <div className="hospital-card p-6 sm:p-8 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-brand-border flex items-center justify-center">
              <Building2 className="w-6 h-6 text-brand-orange-600" />
            </div>
            <h2 className="font-display font-bold text-lg text-brand-darkText">From Kazipet Junction</h2>
            <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
              Approximately 12 to 18 minutes from Kazipet Railway Station via Subedari Road, providing fast access for outstation patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
