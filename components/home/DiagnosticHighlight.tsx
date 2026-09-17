import React from 'react';
import Link from 'next/link';
import { HeartPulse, Droplet, Clock, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function DiagnosticHighlight() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]" id="diagnostics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="badge-warm">Clinical Diagnostics</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-darkText tracking-tight">
            On-Site Diagnostic &amp; Screening Support
          </h2>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Essential primary diagnostic tests supporting accurate physician evaluation, heart rhythm tracking, and metabolic monitoring.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: ECG / Heart Health Assessment */}
          <div className="hospital-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-50 border border-brand-orange-200 flex items-center justify-center">
                  <HeartPulse className="w-7 h-7 text-brand-orange-600" />
                </div>
                <span className="text-[11px] font-bold text-brand-copper bg-brand-cream border border-brand-beige px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Verified Service
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-darkText tracking-tight">
                ECG / Heart Health Assessment
              </h3>

              <p className="text-sm text-brand-secondaryText mt-3 leading-relaxed">
                A 12-lead Electrocardiogram (ECG) records the electrical signals of your heart to detect arrhythmias, cardiac strain, and baseline cardiovascular indicators. Directly evaluated during physician consultation.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-brand-darkText">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>High-fidelity 12-lead digital ECG recording</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Immediate physician review and clinical discussion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Baseline cardiovascular screening for diabetic &amp; hypertensive adults</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/80 flex items-center justify-between">
              <span className="text-xs text-brand-secondaryText">Available During OPD Hours</span>
              <Link
                href="/services/diagnostic-services"
                className="inline-flex items-center text-xs font-bold text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Blood Group Analysis & Essential Labs */}
          <div className="hospital-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Droplet className="w-7 h-7 text-brand-orange-600" />
                </div>
                <span className="text-[11px] font-bold text-brand-copper bg-brand-cream border border-brand-beige px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Verified Service
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-brand-darkText tracking-tight">
                Blood Group Analysis &amp; Routine Tests
              </h3>

              <p className="text-sm text-brand-secondaryText mt-3 leading-relaxed">
                Precise ABO typing, Rh factor determination, and rapid blood glucose profiles (Fasting, Post-Prandial, Random) to ensure prompt clinical decision making.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-brand-darkText">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Certified ABO and Rh factor identification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Blood glucose profiling for diabetes management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Sterile collection protocols with minimal discomfort</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-border/80 flex items-center justify-between">
              <span className="text-xs text-brand-secondaryText">Quick Report Turnaround</span>
              <Link
                href="/services/diagnostic-services"
                className="inline-flex items-center text-xs font-bold text-brand-orange-700 hover:text-brand-orange-800 uppercase tracking-wide"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Responsible Medical Note */}
        <div className="mt-10 p-4 rounded-2xl bg-[#F0F6FC] border border-brand-border text-center text-xs text-brand-secondaryText max-w-2xl mx-auto">
          <ShieldCheck className="w-4 h-4 text-brand-copper inline mr-1.5 -mt-0.5" />
          <span>
            Diagnostic testing is conducted strictly for outpatient clinical evaluation and primary monitoring.
          </span>
        </div>
      </div>
    </section>
  );
}
