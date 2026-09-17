import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ShieldAlert, Phone, HeartPulse, CheckCircle2 } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Medical Disclaimer & Emergency Notice | Rohith Reddy Hospitals',
  description:
    'Official medical disclaimer regarding informational content, clinical scope, and emergency advisory for Rohith Reddy Hospitals in Hanamkonda.',
};

export default function MedicalDisclaimerPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Medical Disclaimer</span>
        </nav>

        {/* Emergency Alert Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-red-50 border-2 border-red-200 text-red-900 space-y-3">
          <div className="flex items-center gap-2.5 font-display font-bold text-lg text-red-800">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0" />
            <span>Emergency Advisory &bull; Immediate Action Required</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-red-950">
            If you or someone under your care is experiencing a life-threatening medical emergency—including acute central crushing chest pain, difficulty breathing, severe traumatic hemorrhage, loss of consciousness, sudden facial drooping or weakness, or acute poisoning—<strong>do not wait for an online reply or website appointment</strong>. Please immediately call <strong>108</strong> (National Ambulance Emergency Service) or transport the individual directly to the nearest tertiary emergency trauma hospital.
          </p>
        </div>

        {/* Full Disclaimer Text */}
        <div className="hospital-card p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
          <h1 className="font-display font-bold text-3xl text-brand-darkText tracking-tight">
            Medical Information Disclaimer
          </h1>

          <p className="text-sm font-semibold text-brand-darkText">
            Last Updated: September 2026
          </p>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              1. General Informational Purpose Only
            </h2>
            <p>
              All content provided on this website—including health articles, medical definitions, service overviews, FAQs, diabetes guidelines, and informational text—is published strictly for educational and general informational purposes. It is not intended to be a substitute for direct, individual professional medical advice, clinical diagnosis, or active therapeutic treatment.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              2. No Doctor-Patient Relationship via Website
            </h2>
            <p>
              Navigating this website, submitting an appointment request, sending a WhatsApp inquiry, or reading health publications does not establish a formal doctor-patient relationship between you and Dr. Rohith Reddy Yata or Rohith Reddy Hospitals. A formal doctor-patient relationship is established only upon an in-person or officially registered clinical consultation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              3. Individual Medical Consultation Required
            </h2>
            <p>
              Always seek the advice of your qualified physician, diabetologist, or healthcare provider with any questions you may have regarding a medical condition. Never disregard professional clinical advice or delay seeking timely medical attention because of content or information read on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              4. No Guarantees on Treatment Outcomes
            </h2>
            <p>
              Every human body responds uniquely to medical interventions, diet, exercise, and pharmacotherapy. Rohith Reddy Hospitals makes no claims of &ldquo;guaranteed cures&rdquo;, &ldquo;100% prevention&rdquo;, or specific therapeutic outcomes. Clinical results vary depending on patient age, baseline health parameters, genetic factors, and individual treatment adherence.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-base text-brand-darkText">
              5. Diagnostic Limitations
            </h2>
            <p>
              Diagnostic tests (such as 12-lead ECG, blood group analysis, and glucose profiling) conducted at Rohith Reddy Hospitals provide outpatient clinical data. These tests must always be interpreted in conjunction with direct physical examination and medical history by a licensed physician.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
