import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, MessageSquare, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export default function AppointmentCTA() {
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF8]" id="book-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-orange-600 via-brand-orange-500 to-brand-copper text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle decorative background light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs uppercase font-bold px-3 py-1 rounded-full tracking-wider mb-4">
              Prioritize Your Health Today
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Consult with Dr. Rohith Reddy Yata in Subedari, Hanamkonda
            </h2>

            <p className="mt-4 text-white/90 text-sm sm:text-base leading-relaxed max-w-2xl">
              Whether you need evaluation for seasonal fevers, a comprehensive diabetes management consultation, or routine ECG assessment, our hospital team is here to assist you.
            </p>

            {/* Quick Action Matrix */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center bg-white text-brand-orange-700 font-bold px-5 py-3.5 rounded-full shadow-lg hover:bg-amber-50 transition-all text-xs uppercase tracking-wider text-center"
              >
                <Calendar className="w-4 h-4 mr-1.5 text-brand-orange-600" />
                Book Online
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-full shadow-lg transition-all text-xs uppercase tracking-wider text-center"
              >
                <MessageSquare className="w-4 h-4 mr-1.5" />
                WhatsApp Us
              </a>

              <a
                href={`tel:${hospitalSettings.phone}`}
                className="inline-flex items-center justify-center bg-brand-orange-800/80 hover:bg-brand-orange-900 text-white font-bold px-5 py-3.5 rounded-full border border-white/30 shadow-lg transition-all text-xs uppercase tracking-wider text-center"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Call Hospital
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-200 shrink-0" />
                <span>OPD &amp; In-Person Consultations Available</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-200 shrink-0" />
                <span>Zero Wait-Time with Prior Appointment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
