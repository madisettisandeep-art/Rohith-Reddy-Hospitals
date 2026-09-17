import React from 'react';
import { Sparkles, MessageCircle, HeartHandshake, ShieldCheck, Stethoscope, Check } from 'lucide-react';

export default function PatientExperience() {
  const experiences = [
    {
      title: 'Personalized Attention',
      description: 'Unhurried appointments where every symptom, past history, and daily habit is carefully reviewed by Dr. Rohith Reddy.',
      icon: <HeartHandshake className="w-5 h-5 text-brand-orange-600" />,
    },
    {
      title: 'Clear, Transparent Explanations',
      description: 'Understanding why a test is needed and how medicines work. No ambiguous medical jargon, only honest, direct guidance.',
      icon: <MessageCircle className="w-5 h-5 text-brand-orange-600" />,
    },
    {
      title: 'Hygienic & Peaceful Facility',
      description: 'Immaculately sanitized consultation suites and waiting spaces adhering to strict clinical infection control standards.',
      icon: <Sparkles className="w-5 h-5 text-brand-orange-600" />,
    },
    {
      title: 'Polite & Supportive Staff',
      description: 'A courteous administrative and clinical support team dedicated to smooth patient registration and rapid assistance.',
      icon: <ShieldCheck className="w-5 h-5 text-brand-orange-600" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF8]" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="badge-warm">The Patient Journey</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
              A Reassuring, Respectful Healthcare Experience
            </h2>
            <p className="text-base text-brand-secondaryText leading-relaxed">
              We believe a hospital visit should reduce anxiety, not amplify it. Our clinical practice in Subedari, Hanamkonda is engineered around thoughtful comfort, clinical cleanliness, and empowering communication.
            </p>

            <div className="space-y-4 pt-2">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="p-4 rounded-2xl bg-[#FFF9F0] border border-brand-border/80 flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-xl bg-white border border-brand-orange-200 shrink-0">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-darkText">
                      {exp.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-secondaryText mt-0.5 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-tr from-brand-orange-500 to-brand-copper p-8 sm:p-10 text-white shadow-xl overflow-hidden">
              <div className="relative z-10 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest bg-white/20 px-3 py-1 rounded-full">
                  What Patients Notice
                </span>

                <blockquote className="font-display text-xl sm:text-2xl font-semibold leading-snug">
                  &ldquo;Friendly staff, pristine hospital hygiene, and a doctor who actually explains what is happening and listens with genuine care.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-white/20 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-bold text-white text-base">4.9 / 5.0 ★</div>
                    <div className="text-white/80">Average Google Rating</div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-base">670+ Verified</div>
                    <div className="text-white/80">Patient Reviews</div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[11px] text-white/70 italic">
                    *Based on authentic patient reviews on Google Business Profile for Dr. Rohith Reddy Yata / Rohith Reddy Hospitals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
