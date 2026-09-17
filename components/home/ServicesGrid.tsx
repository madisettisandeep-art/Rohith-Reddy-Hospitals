import React from 'react';
import Link from 'next/link';
import { Stethoscope, Activity, HeartPulse, Droplet, ShieldCheck, ArrowRight } from 'lucide-react';
import { verifiedServices } from '@/lib/data/hospital-data';

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-6 h-6 text-brand-orange-600" />,
  Activity: <Activity className="w-6 h-6 text-brand-orange-600" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-brand-orange-600" />,
  Droplet: <Droplet className="w-6 h-6 text-brand-orange-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-orange-600" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Verified Clinical Services</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
            Specialized Medical Consultation &amp; Primary Care
          </h2>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Targeted clinical disciplines focused on accurate diagnosis, personalized diabetes regulation, and primary diagnostic screening.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {verifiedServices.map((service) => (
            <div
              key={service.id}
              className="hospital-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Card Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-xs group-hover:border-brand-orange-300 transition-colors mb-6">
                  {iconMap[service.iconName] || <Stethoscope className="w-6 h-6 text-brand-orange-600" />}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-brand-darkText tracking-tight group-hover:text-brand-orange-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-brand-secondaryText mt-3 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Key Points */}
                <ul className="mt-5 space-y-2 border-t border-brand-border/60 pt-4 text-xs text-brand-darkText">
                  {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learn More Link */}
              <div className="mt-8 pt-4 border-t border-brand-border/60">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-xs font-bold text-brand-orange-700 group-hover:text-brand-orange-800 tracking-wide uppercase"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Hospital Services Reassurance */}
        <div className="mt-12 text-center text-xs text-brand-secondaryText max-w-xl mx-auto">
          Need assistance choosing the appropriate consultation?{' '}
          <Link href="/contact" className="text-brand-orange-700 font-semibold underline underline-offset-2">
            Speak directly with our clinical desk
          </Link>
        </div>
      </div>
    </section>
  );
}
