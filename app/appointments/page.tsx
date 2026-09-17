import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import AppointmentForm from '@/components/appointments/AppointmentForm';
import { Phone, Clock, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { hospitalSettings, verifiedDoctorProfile } from '@/lib/data/hospital-data';

export const metadata: Metadata = {
  title: 'Book an Appointment | Dr. Rohith Reddy Yata | Hanamkonda',
  description:
    'Schedule your outpatient consultation for General Medicine, Diabetes Care, or ECG assessment with Dr. Rohith Reddy Yata in Subedari, Hanamkonda.',
};

export default function AppointmentsPage() {
  return (
    <div className="py-12 sm:py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="badge-warm">Outpatient Scheduling</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkText tracking-tight">
            Schedule Your Clinical Consultation
          </h1>
          <p className="text-sm sm:text-base text-brand-secondaryText leading-relaxed">
            Reserve your appointment with {verifiedDoctorProfile.name} ({verifiedDoctorProfile.degrees}) for personal medical attention and zero waiting time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <AppointmentForm />
          </div>

          {/* Consultation Guidelines Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Consulting Doctor Profile Mini-Card */}
            <div className="hospital-card p-5 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-orange-200 shrink-0 shadow-xs">
                <Image
                  src="/images/dr-rohith-reddy.webp"
                  alt={verifiedDoctorProfile.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange-700 bg-brand-orange-50 px-2 py-0.5 rounded-full">
                  Consulting Physician
                </span>
                <div className="font-display font-bold text-base text-brand-darkText mt-1">
                  {verifiedDoctorProfile.name}
                </div>
                <div className="text-xs text-brand-secondaryText">
                  {verifiedDoctorProfile.designation} &bull; {verifiedDoctorProfile.degrees}
                </div>
              </div>
            </div>

            <div className="hospital-card p-6 sm:p-8 space-y-5">
              <h2 className="font-display font-bold text-xl text-brand-darkText">
                Consultation Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-brand-secondaryText">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-darkText">Consultation Hours:</div>
                    <div>Morning: 10:00 AM – 02:00 PM</div>
                    <div>Evening: 05:00 PM – 09:00 PM</div>
                    <div className="text-[11px] text-brand-copper mt-0.5 font-medium">
                      24/7 Clinical &amp; Urgent Care Availability
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-brand-border/60">
                  <MapPin className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-darkText">Hospital Location:</div>
                    <div>
                      {hospitalSettings.address.line1}, {hospitalSettings.address.line2}, {hospitalSettings.address.suburb}, {hospitalSettings.address.city}, {hospitalSettings.address.state}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-brand-border/60">
                  <Phone className="w-5 h-5 text-brand-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-darkText">Prefer Direct Phone Booking?</div>
                    <a
                      href={`tel:${hospitalSettings.phone}`}
                      className="text-brand-orange-700 font-semibold hover:underline block mt-0.5"
                    >
                      {hospitalSettings.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div className="p-6 rounded-3xl bg-white border border-brand-border shadow-xs space-y-3">
              <h3 className="font-display font-bold text-sm text-brand-darkText">
                What to Bring to Your Visit:
              </h3>
              <ul className="space-y-2 text-xs text-brand-secondaryText">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Previous blood sugar logs and HbA1c reports (for diabetes patients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>List of currently prescribed medications or prescription slips</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange-600 shrink-0" />
                  <span>Past ECG or diagnostic test reports (if applicable)</span>
                </li>
              </ul>
            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-2xl bg-[#F0F6FC] border border-brand-border/80 flex items-center gap-2.5 text-xs text-brand-secondaryText">
              <ShieldCheck className="w-5 h-5 text-brand-copper shrink-0" />
              <span>
                Your contact details are strictly confidential and used solely for appointment coordination.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
