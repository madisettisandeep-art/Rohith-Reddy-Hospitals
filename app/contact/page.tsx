import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, Navigation, Send } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export const metadata: Metadata = {
  title: 'Contact Us | Rohith Reddy Hospitals | Hanamkonda',
  description:
    'Contact Rohith Reddy Hospitals in Subedari, Hanamkonda. Direct telephone: +91 96420 02222. WhatsApp, clinic hours, and inquiry form.',
};

export default function ContactPage() {
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <div className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Contact</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Connect With Us</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            We Are Here to Assist You
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Reach out directly to our hospital reception for consultations, inquiries, or directions in Subedari, Hanamkonda.
          </p>
        </div>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="hospital-card p-6 sm:p-8 space-y-6">
              <h2 className="font-display font-bold text-xl text-brand-darkText">
                Hospital Contact Details
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-secondaryText">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white border border-brand-border shrink-0 text-brand-orange-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-darkText uppercase tracking-wider">
                      Direct Telephone
                    </div>
                    <a
                      href={`tel:${hospitalSettings.phone}`}
                      className="text-base font-bold text-brand-orange-700 hover:text-brand-orange-800 block mt-0.5"
                    >
                      {hospitalSettings.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-brand-secondaryText">Available 24/7 for appointments &amp; inquiries</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-brand-border/60">
                  <div className="p-2 rounded-xl bg-white border border-brand-border shrink-0 text-emerald-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-darkText uppercase tracking-wider">
                      WhatsApp Hospital
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-emerald-700 hover:underline block mt-0.5"
                    >
                      Click here to chat instantly
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-brand-border/60">
                  <div className="p-2 rounded-xl bg-white border border-brand-border shrink-0 text-brand-copper">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-darkText uppercase tracking-wider">
                      Hospital Address
                    </div>
                    <p className="mt-0.5 leading-relaxed text-brand-darkText">
                      {hospitalSettings.address.line1},<br />
                      {hospitalSettings.address.line2},<br />
                      {hospitalSettings.address.area}, {hospitalSettings.address.city},<br />
                      {hospitalSettings.address.state} - {hospitalSettings.address.postalCode}
                    </p>
                    <a
                      href={hospitalSettings.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-brand-orange-700 hover:text-brand-orange-800 mt-1"
                    >
                      Get Directions on Google Maps <Navigation className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-brand-border/60">
                  <div className="p-2 rounded-xl bg-white border border-brand-border shrink-0 text-brand-orange-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-brand-darkText uppercase tracking-wider">
                      Operating Hours
                    </div>
                    <p className="mt-0.5 font-semibold text-brand-darkText">
                      {hospitalSettings.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="hospital-card p-6 sm:p-10 space-y-6">
              <div>
                <h2 className="font-display font-bold text-2xl text-brand-darkText">
                  Send an Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-brand-secondaryText mt-1">
                  Have a question regarding consultations or services? Send us a quick note.
                </p>
              </div>

              <form action="/api/contact" method="POST" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-darkText mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-darkText mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98490 12345"
                      className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkText mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-darkText mb-1.5">
                    Message / Question *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="How can we assist you?"
                    className="w-full px-3.5 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-cta"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
