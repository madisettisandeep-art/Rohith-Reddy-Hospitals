import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Stethoscope, CheckCircle2, Phone, Calendar, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { verifiedDoctorProfile, hospitalSettings } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'General Physician Care | Dr. Rohith Reddy Yata | Hanamkonda',
  description:
    'Expert general physician consultations for seasonal fevers, infections, chronic cough, hypertension, and internal medicine by Dr. Rohith Reddy Yata in Subedari, Hanamkonda.',
};

export default function GeneralMedicinePage() {
  const conditions = [
    'Seasonal fevers & acute viral illnesses (Viral fever, Dengue, Typhoid, Malaria)',
    'Upper and lower respiratory tract infections, bronchitis, chronic persistent cough',
    'Hypertension, elevated blood pressure & cardiovascular risk assessment',
    'Gastrointestinal distress, acidity, gastritis & liver profile reviews',
    'Chronic fatigue, unexplained weakness, vitamin deficiency syndromes',
    'General health checkups, medication management & preventive adult care',
  ];

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-brand-orange-600">Services</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">General Medicine</span>
        </nav>

        {/* Hero Banner */}
        <div className="hospital-card p-8 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="badge-warm">Primary Adult Care</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-darkText tracking-tight">
              General Physician Care &amp; Clinical Medicine
            </h1>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Led by {verifiedDoctorProfile.name} ({verifiedDoctorProfile.degrees}, 12 years clinical experience), our General Medicine practice offers methodical diagnostic evaluations and compassionate care for acute and chronic adult illnesses in Hanamkonda.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/appointments" className="btn-primary py-3 px-6 text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4 mr-1.5" /> Book Consultation
              </Link>
              <a href={`tel:${hospitalSettings.phone}`} className="btn-secondary py-3 px-5 text-xs font-semibold">
                <Phone className="w-3.5 h-3.5 mr-1.5 text-brand-orange-600" /> Call {hospitalSettings.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Conditions Evaluated */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl text-brand-darkText">
            Conditions Evaluated &amp; Managed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conditions.map((item, idx) => (
              <div key={idx} className="hospital-card p-4 sm:p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-brand-darkText font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Consultation Flow */}
        <div className="hospital-card p-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-brand-orange-200 shadow-md">
              <Image
                src="/images/dr-rohith-reddy-portrait.webp"
                alt="Dr. Rohith Reddy Yata"
                fill
                sizes="128px"
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="badge-warm">Consulting Physician</span>
              <h2 className="font-display font-bold text-xl text-brand-darkText">
                Consultation with {verifiedDoctorProfile.name}
              </h2>
              <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
                During your visit, Dr. Rohith Reddy takes comprehensive notes of your symptoms, temperature and blood pressure trends, medical history, and daily routine. Where necessary, primary diagnostic tests such as ECG or blood profiling are carried out on-site for prompt diagnosis and targeted medication.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                <Link href="/appointments" className="btn-primary py-2 px-4 text-xs font-semibold">
                  Book Consultation
                </Link>
                <Link href="/about/dr-rohith-reddy" className="btn-secondary py-2 px-4 text-xs font-semibold">
                  View Doctor Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
