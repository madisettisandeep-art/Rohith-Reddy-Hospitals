import React from 'react';
import Link from 'next/link';
import { Star, MapPin, UserCheck, Activity, HeartHandshake } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

interface TrustBarProps {
  rating?: number;
  reviewCount?: number;
}

export default function TrustBar({
  rating = hospitalSettings.googleRating,
  reviewCount = hospitalSettings.googleReviewCount,
}: TrustBarProps) {
  return (
    <section className="border-y border-brand-border bg-[#FFFFFF] py-6 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-brand-border/80">
          {/* Trust Element 1: Google Rating & dynamic review count */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
              <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-display font-bold text-lg text-brand-darkText leading-none">
                <span>{rating}★</span>
                <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                  Google
                </span>
              </div>
              <Link
                href="/reviews"
                className="text-xs text-brand-secondaryText hover:text-brand-orange-600 transition-colors mt-1 block"
              >
                Based on <strong className="text-brand-darkText">{reviewCount}+</strong> Reviews
              </Link>
            </div>
          </div>

          {/* Trust Element 2: Doctor Profile & Specialty */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 text-brand-orange-600" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-brand-darkText">
                General Physician
              </div>
              <div className="text-xs font-medium text-brand-orange-700">
                &amp; Diabetologist (MD)
              </div>
            </div>
          </div>

          {/* Trust Element 3: Patient Focused Approach */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-brand-beige-100 border border-brand-beige flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6 text-brand-copper" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-brand-darkText">
                Patient-Centered Care
              </div>
              <div className="text-xs text-brand-secondaryText">
                Empathetic &amp; Unhurried
              </div>
            </div>
          </div>

          {/* Trust Element 4: Local Presence in Hanamkonda */}
          <div className="flex items-center gap-3.5 justify-center md:justify-start px-2 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-brand-orange-600" />
            </div>
            <div>
              <div className="font-display font-bold text-sm text-brand-darkText">
                Subedari, Hanamkonda
              </div>
              <div className="text-xs text-brand-secondaryText">
                24/7 Clinical Availability
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
