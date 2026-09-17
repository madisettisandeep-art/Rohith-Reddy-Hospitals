'use client';

import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { GoogleReview } from '@/lib/types';
import { verifiedGoogleReviews, hospitalSettings } from '@/lib/data/hospital-data';

interface GoogleReviewsSectionProps {
  reviews?: GoogleReview[];
  rating?: number;
  reviewCount?: number;
}

export default function GoogleReviewsSection({
  reviews = verifiedGoogleReviews,
  rating = hospitalSettings.googleRating,
  reviewCount = hospitalSettings.googleReviewCount,
}: GoogleReviewsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'clear_explanation' | 'personalized_attention' | 'hygienic_environment'>('all');

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter((r) => r.verifiedTheme === filter);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] border-y border-brand-border/60" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand-border/80">
          <div>
            <span className="badge-warm">Google Reviews &amp; Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight mt-2">
              Trusted by Patients Across Hanamkonda &amp; Warangal
            </h2>
            <p className="text-sm text-brand-secondaryText mt-2 max-w-xl">
              Real feedback from patients consulting Dr. Rohith Reddy Yata for general health, fevers, and diabetes management.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 rounded-2xl bg-white border border-brand-border shadow-xs flex items-center gap-4 shrink-0">
            <div className="flex flex-col items-center justify-center p-3 bg-amber-50 rounded-xl border border-amber-200">
              <span className="font-display font-bold text-2xl text-amber-700 leading-none">
                {rating}
              </span>
              <div className="flex items-center gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                ))}
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm text-brand-darkText">
                Google Rating
              </div>
              <div className="text-xs text-brand-secondaryText">
                Over <strong>{reviewCount}+</strong> Verified Reviews
              </div>
              <a
                href={hospitalSettings.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-brand-orange-700 hover:text-brand-orange-800 inline-flex items-center gap-1 mt-1"
              >
                View on Google <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8 mb-8">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            All Reviews
          </button>
          <button
            type="button"
            onClick={() => setFilter('clear_explanation')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              filter === 'clear_explanation'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            Clear Guidance
          </button>
          <button
            type="button"
            onClick={() => setFilter('personalized_attention')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              filter === 'personalized_attention'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            Personalized Care
          </button>
          <button
            type="button"
            onClick={() => setFilter('hygienic_environment')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
              filter === 'hygienic_environment'
                ? 'bg-brand-orange-600 text-white shadow-xs'
                : 'bg-white text-brand-darkText border border-brand-border hover:bg-brand-cream'
            }`}
          >
            Hospital Hygiene
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="hospital-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-brand-secondaryText">
                    {review.relativeTimeDescription}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-brand-orange-200 mb-2" />

                <p className="text-xs sm:text-sm text-brand-darkText leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-orange-100 text-brand-orange-800 font-bold text-xs flex items-center justify-center">
                    {review.authorName[0]}
                  </div>
                  <span className="font-display font-bold text-xs text-brand-darkText">
                    {review.authorName}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Disclaimer note */}
        <div className="mt-8 text-center text-xs text-brand-secondaryText">
          Testimonials reflect individual patient experiences and are not independent medical guarantees.{' '}
          <a
            href={hospitalSettings.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-orange-700 font-semibold underline underline-offset-2 ml-1"
          >
            Read all {reviewCount} reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
