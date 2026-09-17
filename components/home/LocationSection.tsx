'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, MessageSquare, ExternalLink, Map as MapIcon } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export default function LocationSection() {
  const [loadInteractiveMap, setLoadInteractiveMap] = useState(false);
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-y border-brand-border/60" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Location details & quick actions */}
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-warm">Hospital Location &amp; Directions</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
              Conveniently Located in Subedari, Hanamkonda
            </h2>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Centrally accessible from all parts of Warangal, Kazipet, and Hanamkonda with patient parking and smooth accessibility.
            </p>

            <div className="p-6 rounded-3xl bg-white border border-brand-border shadow-subtle space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-display font-bold text-brand-darkText">
                    Rohith Reddy Hospitals
                  </div>
                  <div className="text-brand-secondaryText text-xs mt-0.5 leading-relaxed">
                    {hospitalSettings.address.line1},<br />
                    {hospitalSettings.address.line2},<br />
                    {hospitalSettings.address.area}, {hospitalSettings.address.city},<br />
                    {hospitalSettings.address.state} - {hospitalSettings.address.postalCode}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm pt-2 border-t border-brand-border/60">
                <Phone className="w-5 h-5 text-brand-orange-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-brand-secondaryText">Direct Telephone:</div>
                  <a
                    href={`tel:${hospitalSettings.phone}`}
                    className="font-bold text-brand-darkText hover:text-brand-orange-600"
                  >
                    {hospitalSettings.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm pt-2 border-t border-brand-border/60">
                <Clock className="w-5 h-5 text-brand-orange-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-brand-secondaryText">Operating Hours:</div>
                  <div className="font-bold text-brand-darkText">
                    {hospitalSettings.operatingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={hospitalSettings.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs uppercase tracking-wider py-3 px-5 shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 mr-1.5" />
                Get Driving Directions
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-3 px-4"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                WhatsApp Hospital
              </a>
            </div>
          </div>

          {/* Right: High-Performance Lightweight Map Preview (Zero LCP penalty) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-brand-beige shadow-card bg-[#FFF9F0] h-[400px] flex flex-col items-center justify-center p-6 text-center">
              {loadInteractiveMap ? (
                <iframe
                  title="Rohith Reddy Hospitals Location Map"
                  src="https://maps.google.com/maps?q=Teacher%27s+Colony,+Pranay+Marg,+Waddepally,+Phase+1,+Subedari,+Hanamkonda,+Telangana+506370&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  className="absolute inset-0 border-0"
                  loading="lazy"
                  allowFullScreen
                />
              ) : (
                <div className="max-w-md space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center mx-auto shadow-xs">
                    <MapIcon className="w-8 h-8 text-brand-orange-600" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-brand-darkText">
                    Interactive Map Preview
                  </h3>

                  <p className="text-xs text-brand-secondaryText leading-relaxed">
                    Click below to load the interactive Google Map preview, or open direct GPS directions in your preferred navigation app.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setLoadInteractiveMap(true)}
                      className="btn-primary text-xs py-2.5 px-5 shadow-xs"
                    >
                      Click to Load Map
                    </button>

                    <a
                      href={hospitalSettings.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-2.5 px-4 inline-flex items-center"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>

                  <p className="text-[10px] text-brand-secondaryText/80">
                    Optimized for fast mobile loading without background data overhead.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
