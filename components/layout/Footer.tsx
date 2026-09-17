import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageSquare, MapPin, Clock, Instagram, Calendar, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export default function Footer() {
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <footer className="bg-[#F0F6FC] border-t border-brand-border text-brand-darkText pt-16 pb-24 lg:pb-12 mt-16">
      {/* Top Banner CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="bg-gradient-to-r from-brand-orange-600 via-brand-orange-500 to-brand-copper rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-block bg-white/20 text-white text-xs uppercase font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
              Prompt Consultation in Hanamkonda
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Prioritize Your Health and Wellbeing?
            </h2>
            <p className="mt-2 text-white/90 text-sm sm:text-base">
              Consult with Dr. Rohith Reddy Yata for comprehensive general medical care and expert diabetes management.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center bg-white text-brand-orange-700 font-bold px-6 py-3.5 rounded-full shadow-md hover:bg-blue-50 transition-all text-sm uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4 mr-2 text-brand-orange-600" />
              Book Appointment
            </Link>
            <a
              href={`tel:${hospitalSettings.phone}`}
              className="inline-flex items-center justify-center bg-brand-orange-800/60 hover:bg-brand-orange-900/80 text-white font-semibold px-5 py-3.5 rounded-full border border-white/30 transition-all text-sm"
            >
              <Phone className="w-4 h-4 mr-2" />
              {hospitalSettings.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Doctor Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="relative w-16 h-16 shrink-0">
              <Image
                src="/images/logo.png"
                alt="Rohith Reddy Hospitals Logo"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-brand-darkText tracking-tight block">
                ROHITH REDDY
              </span>
              <span className="text-xs font-semibold tracking-widest text-brand-copper uppercase block">
                H O S P I T A L S
              </span>
              <span className="text-[10px] text-brand-secondaryText font-medium">
                Healthier Lives. Brighter Tomorrows.
              </span>
            </div>
          </Link>

          <p className="text-sm text-brand-secondaryText leading-relaxed">
            Led by <strong>{verifiedDoctorProfile.name}</strong> ({verifiedDoctorProfile.degrees}), General Physician &amp; Diabetologist with {verifiedDoctorProfile.experienceYears} years of clinical expertise. Providing personalized healthcare, evidence-based diabetes control, and diagnostic support.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={hospitalSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-border text-xs font-medium text-brand-darkText hover:text-brand-orange-600 hover:border-brand-orange-300 transition-colors"
            >
              <Instagram className="w-4 h-4 text-pink-600" />
              <span>{hospitalSettings.instagramHandle}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-border text-xs font-medium text-brand-darkText hover:text-green-700 hover:border-green-300 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-brand-copper mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-brand-secondaryText">
            <li>
              <Link href="/" className="hover:text-brand-orange-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about/dr-rohith-reddy" className="hover:text-brand-orange-600 transition-colors">
                About Dr. Rohith Reddy
              </Link>
            </li>
            <li>
              <Link href="/about/hospital" className="hover:text-brand-orange-600 transition-colors">
                About Hospital
              </Link>
            </li>
            <li>
              <Link href="/specialities" className="hover:text-brand-orange-600 transition-colors">
                Specialities &amp; Departments
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="hover:text-brand-orange-600 transition-colors">
                Google Reviews (4.9★)
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-brand-orange-600 transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>

        {/* Medical Services */}
        <div>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-brand-copper mb-4">
            Clinical Services
          </h3>
          <ul className="space-y-2.5 text-sm text-brand-secondaryText">
            <li>
              <Link href="/services/general-medicine" className="hover:text-brand-orange-600 transition-colors">
                General Physician Care
              </Link>
            </li>
            <li>
              <Link href="/services/diabetes-care" className="hover:text-brand-orange-600 transition-colors">
                Diabetes Management
              </Link>
            </li>
            <li>
              <Link href="/services/diagnostic-services" className="hover:text-brand-orange-600 transition-colors">
                ECG / Heart Assessment
              </Link>
            </li>
            <li>
              <Link href="/services/diagnostic-services" className="hover:text-brand-orange-600 transition-colors">
                Blood Group Analysis
              </Link>
            </li>
            <li>
              <Link href="/services/preventive-healthcare" className="hover:text-brand-orange-600 transition-colors">
                Preventive Health Checkups
              </Link>
            </li>
            <li>
              <Link href="/health-packages" className="hover:text-brand-orange-600 transition-colors">
                Health Packages
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h3 className="font-display font-bold text-sm tracking-wider uppercase text-brand-copper mb-4">
            Contact &amp; Visit
          </h3>
          <ul className="space-y-3 text-sm text-brand-secondaryText">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-orange-600 shrink-0 mt-0.5" />
              <span>
                {hospitalSettings.address.line1}, {hospitalSettings.address.line2}, {hospitalSettings.address.suburb}, {hospitalSettings.address.city}, {hospitalSettings.address.state} {hospitalSettings.address.postalCode}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-orange-600 shrink-0" />
              <a href={`tel:${hospitalSettings.phone}`} className="hover:text-brand-orange-600 font-semibold text-brand-darkText">
                {hospitalSettings.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-brand-orange-600 shrink-0" />
              <span>{hospitalSettings.operatingHours}</span>
            </li>
            <li className="pt-1">
              <a
                href={hospitalSettings.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-brand-orange-600 hover:text-brand-orange-700"
              >
                Get Directions on Google Maps <ArrowRight className="w-3 h-3 ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Patient Safety Ribbon directly inspired by the official Brand Asset */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-[#10355D] text-white p-6 shadow-md border border-[#0B2440]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">Patients</span>
              <span className="text-[11px] text-sky-200">Are at the Centre</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">Safer</span>
              <span className="text-[11px] text-sky-200">Clinical Practices</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">Stronger</span>
              <span className="text-[11px] text-sky-200">Healthy Communities</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white">Brighter</span>
              <span className="text-[11px] text-sky-200">Healthier Tomorrows</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-white/10 text-center text-[11px] uppercase tracking-widest text-sky-200 font-semibold">
            Because Every Patient Matters
          </div>
        </div>
      </div>

      {/* Mandatory Statutory Medical Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-brand-border/70">
        <div className="bg-[#EFF6FF] border border-brand-orange-200/60 rounded-2xl p-5 text-xs text-brand-secondaryText leading-relaxed">
          <div className="flex items-center gap-2 font-semibold text-brand-orange-800 mb-1">
            <ShieldCheck className="w-4 h-4 text-brand-orange-600" />
            <span>Important Medical Notice &amp; Disclaimer</span>
          </div>
          <p>
            The medical information provided on this website is for general informational and educational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified healthcare provider regarding any medical condition. Do not disregard professional medical advice or delay seeking care because of something you have read here.
          </p>
          <p className="mt-1.5 font-medium text-brand-darkText">
            Emergency Notice: If you are experiencing a life-threatening medical crisis or acute trauma, please dial 108 or proceed immediately to the nearest tertiary hospital emergency room.
          </p>
        </div>
      </div>

      {/* Bottom Copyright & Legal Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-secondaryText gap-4">
        <p>
          &copy; {new Date().getFullYear()} Rohith Reddy Hospitals. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-brand-orange-600 transition-colors">
            Privacy Policy
          </Link>
          <span>&bull;</span>
          <Link href="/terms" className="hover:text-brand-orange-600 transition-colors">
            Terms &amp; Conditions
          </Link>
          <span>&bull;</span>
          <Link href="/medical-disclaimer" className="hover:text-brand-orange-600 transition-colors">
            Medical Disclaimer
          </Link>
          <span>&bull;</span>
          <Link href="/admin/login" className="text-stone-400 hover:text-stone-600 transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
