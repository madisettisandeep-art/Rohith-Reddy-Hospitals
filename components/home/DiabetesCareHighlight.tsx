import React from 'react';
import Link from 'next/link';
import { Activity, CheckCircle, Calendar, ArrowRight, ShieldAlert, Heart, TrendingDown } from 'lucide-react';
import { verifiedDoctorProfile } from '@/lib/data/hospital-data';

export default function DiabetesCareHighlight() {
  const steps = [
    {
      title: 'Diabetes Consultation',
      desc: 'Thorough clinical evaluation of blood glucose history, medications, lifestyle, and symptoms.',
    },
    {
      title: 'Blood Sugar Management',
      desc: 'Precision pharmacotherapy titration, insulin optimization, and individualized glycemic targets.',
    },
    {
      title: 'Lifestyle Guidance',
      desc: 'Practical, sustainable carbohydrate counseling, physical activity plans, and habit tracking.',
    },
    {
      title: 'Long-term Monitoring',
      desc: 'Regular HbA1c reviews, lipid checks, and consistent physician follow-up to sustain control.',
    },
    {
      title: 'Preventive Care',
      desc: 'Proactive surveillance to safeguard microvascular health, renal parameters, and peripheral nerves.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFF9F0] border-y border-brand-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <span className="badge-warm">Specialized Diabetology Care</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
              Structured, Evidence-Based Diabetes Management
            </h2>
            <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
              Living with diabetes requires structured clinical guidance, balanced nutritional habits, and continuous support. Led by {verifiedDoctorProfile.name}, our diabetology program emphasizes realistic, long-term glycemic stability without misleading promises.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-brand-border text-xs text-brand-secondaryText space-y-2">
              <div className="flex items-center gap-1.5 font-bold text-brand-darkText">
                <Heart className="w-4 h-4 text-brand-orange-600" />
                <span>Our Medically Responsible Approach</span>
              </div>
              <p>
                We focus on evidence-based risk reduction, glycemic equilibrium, and complication prevention through personalized medicine and sustainable daily habits.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href="/appointments"
                className="btn-primary py-3.5 px-6 text-xs uppercase tracking-wider shadow-sm text-center"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
              <Link
                href="/services/diabetes-care"
                className="btn-secondary py-3.5 px-5 text-xs text-center font-semibold"
              >
                Read Diabetes Protocol
              </Link>
            </div>
          </div>

          {/* Right Column: 5-Stage Clinical Flow */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="p-5 rounded-2xl bg-white border border-brand-border shadow-xs hover:border-brand-orange-300 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-orange-50 border border-brand-orange-200 text-brand-orange-700 font-display font-bold text-sm flex items-center justify-center shrink-0">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-brand-darkText">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-secondaryText mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
