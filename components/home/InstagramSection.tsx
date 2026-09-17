import React from 'react';
import { Instagram, ExternalLink, Heart, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export default function InstagramSection() {
  const cards = [
    {
      tag: 'Diabetes Awareness',
      headline: 'Understanding Post-Meal Blood Sugar Spikes & Prevention',
      icon: <Activity className="w-5 h-5 text-brand-orange-600" />,
      date: 'Recent Update',
    },
    {
      tag: 'Healthy Habits',
      headline: 'Why Daily Hydration & Physical Activity Protect Metabolic Wellness',
      icon: <Heart className="w-5 h-5 text-brand-orange-600" />,
      date: 'Recent Update',
    },
    {
      tag: 'Clinical Advisory',
      headline: 'Seasonal Fevers: When to Consult Your Physician Immediately',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange-600" />,
      date: 'Recent Update',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]" id="social">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-brand-border/80">
          <div>
            <span className="badge-warm">Social &amp; Health Insights</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight mt-2">
              Connect with {verifiedDoctorProfile.name}
            </h2>
            <p className="text-sm text-brand-secondaryText mt-2 max-w-xl">
              Follow for medically grounded health tips, diabetes awareness advisories, and hospital updates.
            </p>
          </div>

          <a
            href={hospitalSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-brand-orange-600 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md hover:opacity-95 transition-all shrink-0"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Lightweight Health Tip Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="hospital-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-brand-secondaryText mb-4">
                  <span className="bg-brand-orange-50 border border-brand-orange-200 text-brand-orange-800 px-2.5 py-0.5 rounded-full font-semibold text-[10px] uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <span className="text-[11px]">{card.date}</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {card.icon}
                </div>

                <h3 className="font-display font-bold text-base text-brand-darkText leading-snug group-hover:text-brand-orange-700 transition-colors">
                  {card.headline}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs">
                <span className="text-brand-secondaryText font-medium">
                  {hospitalSettings.instagramHandle}
                </span>
                <a
                  href={hospitalSettings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-brand-orange-700 hover:text-brand-orange-800 inline-flex items-center gap-1"
                >
                  View Post <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
