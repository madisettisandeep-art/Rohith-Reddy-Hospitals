import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import AboutDoctorPreview from '@/components/home/AboutDoctorPreview';
import ServicesGrid from '@/components/home/ServicesGrid';
import DiabetesCareHighlight from '@/components/home/DiabetesCareHighlight';
import DiagnosticHighlight from '@/components/home/DiagnosticHighlight';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PatientExperience from '@/components/home/PatientExperience';
import GoogleReviewsSection from '@/components/home/GoogleReviewsSection';
import AppointmentCTA from '@/components/home/AppointmentCTA';
import LocationSection from '@/components/home/LocationSection';
import InstagramSection from '@/components/home/InstagramSection';
import FAQSection from '@/components/home/FAQSection';
import { getCachedGoogleReviews } from '@/lib/google/reviews';

export const revalidate = 21600; // 6 hours ISR caching

export default async function HomePage() {
  const reviewsData = await getCachedGoogleReviews();

  return (
    <>
      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Trust Indicators */}
      <TrustBar rating={reviewsData.rating} reviewCount={reviewsData.reviewCount} />

      {/* 5. About Doctor */}
      <AboutDoctorPreview />

      {/* 6. Services Grid */}
      <ServicesGrid />

      {/* 7. Diabetes Care Spotlight */}
      <DiabetesCareHighlight />

      {/* 8. Diagnostic Services */}
      <DiagnosticHighlight />

      {/* 9. Why Choose Us (Logo 4 Pillars) */}
      <WhyChooseUs />

      {/* 10. Patient Experience */}
      <PatientExperience />

      {/* 11. Google Reviews Showcase */}
      <GoogleReviewsSection
        reviews={reviewsData.reviews}
        rating={reviewsData.rating}
        reviewCount={reviewsData.reviewCount}
      />

      {/* 12. Appointment CTA */}
      <AppointmentCTA />

      {/* 13. Location & Directions */}
      <LocationSection />

      {/* 14. Instagram Presence */}
      <InstagramSection />

      {/* 15. FAQ */}
      <FAQSection />
    </>
  );
}
