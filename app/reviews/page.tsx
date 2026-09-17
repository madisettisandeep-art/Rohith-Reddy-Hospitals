import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection';
import { Star, ShieldCheck, ExternalLink, Calendar } from 'lucide-react';
import { getCachedGoogleReviews } from '@/lib/google/reviews';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | 4.9★ Google Rating',
  description:
    'Read verified patient reviews for Dr. Rohith Reddy Yata and Rohith Reddy Hospitals in Hanamkonda. 4.9-star average across 670+ Google reviews.',
};

export default async function ReviewsPage() {
  const reviewsData = await getCachedGoogleReviews();

  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Patient Reviews</span>
        </nav>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Authentic Patient Voice</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Patient Reviews &amp; Experiences
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Direct feedback from individuals and families who have received medical care and diabetes consultations at Rohith Reddy Hospitals.
          </p>
        </div>

        {/* Dynamic Reviews Showcase */}
        <GoogleReviewsSection
          reviews={reviewsData.reviews}
          rating={reviewsData.rating}
          reviewCount={reviewsData.reviewCount}
        />

        {/* Call to action */}
        <div className="hospital-card p-8 sm:p-10 text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-brand-darkText">
            Experience Our Patient-Focused Care First-Hand
          </h2>
          <p className="text-xs sm:text-sm text-brand-secondaryText">
            Book an appointment with Dr. Rohith Reddy Yata for personal attention and clear medical guidance.
          </p>
          <div className="pt-2">
            <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
              <Calendar className="w-4 h-4 mr-1.5" /> Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
