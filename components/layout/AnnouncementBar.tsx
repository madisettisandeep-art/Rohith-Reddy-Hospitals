import React from 'react';
import Link from 'next/link';
import { Phone, Clock, AlertCircle } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export default function AnnouncementBar() {
  if (!hospitalSettings.announcementActive) return null;

  return (
    <aside
      aria-label="Hospital Announcements and Emergency Notice"
      className="bg-gradient-to-r from-brand-orange-800 via-brand-orange-700 to-brand-orange-800 text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-brand-orange-900/30"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-center sm:text-left">
        {/* Announcement Message with Badge */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-center sm:text-left">
          <span className="bg-white/20 text-white px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wider uppercase inline-flex items-center gap-1 shrink-0">
            <Clock className="w-3 h-3 text-amber-200" /> 24/7 Open
          </span>
          <span className="font-medium text-amber-50 break-words leading-tight max-w-full">
            General Medicine &amp; Diabetes Consultations &bull; Dr. Rohith Reddy Yata
          </span>
        </div>

        {/* Contact & Emergency links */}
        <div className="flex items-center justify-center gap-3 text-[11px] sm:text-xs font-semibold shrink-0">
          <a
            href={`tel:${hospitalSettings.phone}`}
            className="inline-flex items-center gap-1 text-white hover:text-amber-200 transition-colors bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-full"
            aria-label="Call Hospital for OPD or Emergency"
          >
            <Phone className="w-3 h-3 text-amber-300 shrink-0" />
            <span>OPD: {hospitalSettings.phoneDisplay}</span>
          </a>
          <span className="text-white/40 hidden md:inline">|</span>
          <Link
            href="/medical-disclaimer"
            className="text-amber-200 hover:text-white underline underline-offset-2 hidden sm:inline"
          >
            Emergency Notice
          </Link>
        </div>
      </div>
    </aside>
  );
}
