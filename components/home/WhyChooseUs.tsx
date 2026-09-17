import React from 'react';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Users className="w-7 h-7 text-brand-orange-600" />,
      title: 'People',
      subtitle: 'Patient-First Focus',
      description:
        'Respecting each individual’s personal health journey. We take time to understand your lifestyle, concerns, and family health context.',
    },
    {
      icon: <Heart className="w-7 h-7 text-brand-orange-600" />,
      title: 'Compassion',
      subtitle: 'Empathetic Healthcare',
      description:
        'Medical consultations characterized by patience, active listening, and sincere care in a welcoming, anxiety-free setting.',
    },
    {
      icon: <Award className="w-7 h-7 text-brand-orange-600" />,
      title: 'Excellence',
      subtitle: 'Evidence-Based Practice',
      description:
        'Up-to-date medical protocols, thorough clinical evaluations, and responsible prescription practices without unnecessary procedures.',
    },
    {
      icon: <Sparkles className="w-7 h-7 text-brand-orange-600" />,
      title: 'Better Health',
      subtitle: 'Sustainable Wellbeing',
      description:
        'Guiding patients toward durable long-term vitality, glycemic control, and proactive preventive habits for healthier tomorrows.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-y border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Our Core Philosophy</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
            The Four Pillars of Rohith Reddy Hospitals
          </h2>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Represented directly in our emblem, these four enduring principles guide every patient consultation, diagnostic evaluation, and treatment plan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="hospital-card p-6 sm:p-7 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-brand-border flex items-center justify-center shadow-xs group-hover:border-brand-orange-300 group-hover:scale-105 transition-all mb-5">
                {pillar.icon}
              </div>

              <span className="text-[11px] font-bold text-brand-copper uppercase tracking-widest">
                {pillar.subtitle}
              </span>

              <h3 className="font-display font-bold text-xl text-brand-darkText mt-1">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-secondaryText mt-3 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
