'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Calendar, Navigation } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';

export default function MobileBottomBar() {
  const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber);

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFCF8]/95 backdrop-blur-md border-t border-brand-border/90 px-3 py-2 shadow-lg"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        <a
          href={`tel:${hospitalSettings.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-brand-darkText hover:text-brand-orange-600 hover:bg-brand-cream transition-colors text-center"
          aria-label="Call Hospital"
        >
          <Phone className="w-5 h-5 text-brand-orange-600 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Call</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-brand-darkText hover:text-green-700 hover:bg-green-50 transition-colors text-center"
          aria-label="WhatsApp Hospital"
        >
          <MessageSquare className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        <a
          href={hospitalSettings.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-brand-darkText hover:text-brand-copper hover:bg-brand-cream transition-colors text-center"
          aria-label="Get Directions"
        >
          <Navigation className="w-5 h-5 text-brand-copper mb-0.5" />
          <span className="text-[10px] font-semibold tracking-tight">Directions</span>
        </a>

        <Link
          href="/appointments"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-br from-brand-orange-500 to-brand-orange-600 text-white shadow-md text-center"
          aria-label="Book Appointment"
        >
          <Calendar className="w-5 h-5 text-white mb-0.5" />
          <span className="text-[10px] font-bold tracking-tight">Book</span>
        </Link>
      </div>
    </aside>
  );
}
