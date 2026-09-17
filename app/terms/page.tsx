import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Rohith Reddy Hospitals',
  description: 'Terms and conditions for utilizing Rohith Reddy Hospitals web portal and outpatient scheduling services.',
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Terms &amp; Conditions</span>
        </nav>

        {/* Header */}
        <div className="hospital-card p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
          <div>
            <span className="badge-warm">Legal Terms</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-darkText tracking-tight mt-2">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-brand-secondaryText mt-1">
              Effective Date: September 2026 &bull; Rohith Reddy Hospitals
            </p>
          </div>

          <p>
            By accessing or using the Rohith Reddy Hospitals website (rohithreddyhospitals.com) and associated online appointment scheduling services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              1. Scope of Online Appointment Requests
            </h2>
            <p>
              Submitting an appointment request via this website signifies an expression of intent to consult. Our reception team confirms the actual appointment slot based on doctor availability, clinic schedule, and patient triaging. Walk-in emergency cases take clinical precedence over pre-booked slots.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              2. Accuracy of Patient Information
            </h2>
            <p>
              You agree to provide accurate, current, and complete information (such as real patient names and verifiable 10-digit mobile contact numbers) when submitting forms. Falsified or abusive entries are subject to immediate cancellation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              3. Intellectual Property
            </h2>
            <p>
              The official Rohith Reddy Hospitals logo, emblems, trademarks, layout, and original content on this site are the exclusive property of Rohith Reddy Hospitals and Dr. Rohith Reddy Yata. Unauthorized duplication, imitation, or redistribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              4. Governing Law and Jurisdiction
            </h2>
            <p>
              These terms are governed by and construed in accordance with the laws of India. Any disputes arising in connection with the website or outpatient services shall be subject to the exclusive jurisdiction of the competent courts in Hanamkonda / Warangal, Telangana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
