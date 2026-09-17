import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Calendar, Phone, ArrowLeft } from 'lucide-react';
import { hospitalSettings } from '@/lib/data/hospital-data';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#FFFCF8]">
      <div className="hospital-card p-8 sm:p-12 text-center max-w-lg mx-auto space-y-6">
        <div className="relative w-24 h-24 mx-auto bg-white rounded-2xl p-2 shadow-xs border border-brand-border">
          <Image
            src="/images/logo.png"
            alt="Rohith Reddy Hospitals Logo"
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>

        <span className="badge-warm">Page Not Found &bull; 404</span>

        <h1 className="font-display font-bold text-3xl text-brand-darkText">
          We Couldn’t Find That Page
        </h1>

        <p className="text-xs sm:text-sm text-brand-secondaryText leading-relaxed">
          The link you followed may have changed or does not exist. Return to the homepage or use one of the quick healthcare shortcuts below:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto py-2.5 px-5 text-xs uppercase tracking-wider"
          >
            <Home className="w-3.5 h-3.5 mr-1.5" /> Return Home
          </Link>
          <Link
            href="/appointments"
            className="btn-secondary w-full sm:w-auto py-2.5 px-5 text-xs font-semibold"
          >
            <Calendar className="w-3.5 h-3.5 mr-1.5" /> Book Appointment
          </Link>
        </div>

        <div className="pt-4 border-t border-brand-border/60 text-xs text-brand-secondaryText">
          Need immediate assistance? Call us directly at{' '}
          <a href={`tel:${hospitalSettings.phone}`} className="font-bold text-brand-orange-700 hover:underline">
            {hospitalSettings.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
