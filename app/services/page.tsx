import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Stethoscope, Activity, HeartPulse, Droplet, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { verifiedServices, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Clinical Services | Rohith Reddy Hospitals | Hanamkonda',
  description:
    'Verified medical services at Rohith Reddy Hospitals: General Physician care, Diabetes Management, ECG cardiac screening, Blood group analysis, and preventive health.',
};

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-brand-orange-600" />,
  Activity: <Activity className="w-6 h-6 text-brand-orange-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-brand-orange-600" />,
  Droplet: <Droplet className="w-6 h-6 text-brand-orange-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-orange-600" />,
};

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFCF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb */}
        <nav className="text-xs text-brand-secondaryText flex items-center gap-2">
          <Link href="/" className="hover:text-brand-orange-600">Home</Link>
          <span>/</span>
          <span className="text-brand-darkText font-semibold">Services</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Outpatient Care Directory</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Our Medical &amp; Diagnostic Services
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            All services are provided under the clinical supervision of {verifiedDoctorProfile.name} in Subedari, Hanamkonda.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedServices.map((service) => (
            <div
              key={service.id}
              className="hospital-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-xs group-hover:border-brand-orange-300 transition-colors mb-6">
                  {iconMap[service.iconName]}
                </div>

                <h2 className="font-display font-bold text-xl text-brand-darkText group-hover:text-brand-orange-700 transition-colors">
                  {service.title}
                </h2>

                <p className="text-xs sm:text-sm text-brand-secondaryText mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-brand-border/60">
                  <h3 className="font-display font-bold text-[11px] uppercase tracking-wider text-brand-copper mb-2">
                    Key Features:
                  </h3>
                  <ul className="space-y-1.5 text-xs text-brand-darkText">
                    {service.keyFeatures.slice(0, 3).map((kf, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-1.5 shrink-0" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold text-brand-orange-700 group-hover:text-brand-orange-800 tracking-wide uppercase"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/appointments"
                  className="btn-primary py-1.5 px-3.5 text-xs"
                >
                  Book Slot
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
