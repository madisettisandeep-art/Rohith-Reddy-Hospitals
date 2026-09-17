import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, EyeOff, FileCheck } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Privacy Policy & Patient Data Protection | Rohith Reddy Hospitals',
  description:
    'Patient privacy policy and medical confidentiality protocol at Rohith Reddy Hospitals in Subedari, Hanamkonda.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <div className="hospital-card p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
          <div>
            <span className="badge-warm">Confidentiality &bull; Medical Data</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-darkText tracking-tight mt-2">
              Privacy Policy &amp; Patient Confidentiality
            </h1>
            <p className="text-xs text-brand-secondaryText mt-1">
              Effective Date: September 2026 &bull; Rohith Reddy Hospitals, Hanamkonda
            </p>
          </div>

          <p>
            Rohith Reddy Hospitals respects and upholds the confidentiality and sanctity of your personal and health information. This Privacy Policy details our protocols regarding information collection, security, and usage when interacting with our website and appointment portal.
          </p>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              1. Minimum Necessary Data Collection
            </h2>
            <p>
              In accordance with ethical healthcare data principles, we collect only the minimal data required to schedule and coordinate your outpatient visit. When using our online appointment form, we ask only for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Patient Full Name</li>
              <li>10-Digit Mobile Contact Number (for SMS/WhatsApp confirmation)</li>
              <li>Email address (optional)</li>
              <li>Preferred consultation date and time window</li>
              <li>Brief, high-level reason for visit (e.g. &ldquo;Fever&rdquo;, &ldquo;Diabetes checkup&rdquo;)</li>
            </ul>
            <p className="font-medium text-brand-darkText">
              We do NOT collect sensitive diagnostic histories, full prescription scans, genetic reports, or payment card numbers through our public website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              2. How Your Information Is Used
            </h2>
            <p>
              Information submitted via our website is used strictly for:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Scheduling and confirming your outpatient consultation slot with Dr. Rohith Reddy Yata</li>
              <li>Sending appointment reminders or schedule updates via phone or WhatsApp</li>
              <li>Responding to clinical inquiries sent through our contact forms</li>
            </ul>
            <p>
              We do <strong>never sell, lease, or distribute</strong> your contact details to third-party telemarketers, insurance brokers, or data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              3. Data Security &amp; Access Controls
            </h2>
            <p>
              All traffic between your browser and our servers is encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS). Appointment records are protected behind role-based access control (RBAC) restricted solely to authorized hospital administrative and clinical staff.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              If you have any questions regarding your personal information, or wish to update or remove your contact preferences, please contact our hospital front desk:
            </p>
            <div className="p-4 rounded-xl bg-white border border-brand-border mt-2">
              <p className="font-bold text-brand-darkText">Rohith Reddy Hospitals</p>
              <p>Teacher's Colony, Pranay Marg, Waddepally Phase 1, Subedari, Hanamkonda, Telangana 506370</p>
              <p className="mt-1">Telephone: {hospitalSettings.phoneDisplay}</p>
              <p>Email: care@rohithreddyhospitals.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
