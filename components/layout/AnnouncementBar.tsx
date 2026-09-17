import React from 'react';
import Link from 'next/link';
import { Phone, Clock, AlertCircle } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export default function AnnouncementBar() {
  if (!hospitalSettings.announcementActive) return null;

  return (
    <aside aria-label="Hospital Announcements and Emergency Notice" className="bg-gradient-to-r from-brand-orange-800 via-brand-orange-700 to-brand-orange-800 text-white text-xs py-2 px-4 border-b border-brand-orange-900/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="bg-white/20 text-white px-2 py-0.5 rounded-full font-semibold text-[10px] tracking-wider uppercase flex items-center gap-1">
            <Clock className="w-3 h-3" /> 24/7 Availability
          </span>
          <span className="truncate max-w-xl font-medium text-amber-50">
            {hospitalSettings.announcementText}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
          <a
            href={`tel:${hospitalSettings.phone}`}
            className="inline-flex items-center gap-1 hover:text-amber-200 transition-colors"
          >
            <Phone className="w-3 h-3 text-amber-300" />
            <span>Emergency / OPD: {hospitalSettings.phoneDisplay}</span>
          </a>
          <span className="text-white/40 hidden md:inline">|</span>
          <Link
            href="/medical-disclaimer"
            className="text-amber-200 hover:text-white underline underline-offset-2 hidden md:inline"
          >
            Emergency Notice
          </Link>
        </div>
      </div>
    </aside>
  );
}
