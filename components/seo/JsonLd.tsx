import React from 'react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://rohithreddyhospitals.com/#hospital',
        name: hospitalSettings.name,
        legalName: 'Rohith Reddy Hospitals',
        url: 'https://rohithreddyhospitals.com',
        logo: 'https://rohithreddyhospitals.com/images/logo.png',
        image: 'https://rohithreddyhospitals.com/images/logo.png',
        telephone: hospitalSettings.phone,
        email: hospitalSettings.email,
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${hospitalSettings.address.line1}, ${hospitalSettings.address.line2}`,
          addressLocality: hospitalSettings.address.city,
          addressRegion: hospitalSettings.address.state,
          postalCode: hospitalSettings.address.postalCode,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 17.9945,
          longitude: 79.5623,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: hospitalSettings.googleRating.toString(),
          reviewCount: hospitalSettings.googleReviewCount.toString(),
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [hospitalSettings.instagramUrl],
      },
      {
        '@type': 'Physician',
        '@id': 'https://rohithreddyhospitals.com/#doctor',
        name: verifiedDoctorProfile.name,
        jobTitle: verifiedDoctorProfile.designation,
        medicalSpecialty: ['GeneralPractice', 'Endocrinology'],
        worksFor: {
          '@id': 'https://rohithreddyhospitals.com/#hospital',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Medical Council of India recognized Medical College (MBBS)',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
