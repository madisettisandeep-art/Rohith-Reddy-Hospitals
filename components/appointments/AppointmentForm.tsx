'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp/helpers';
import { hospitalSettings } from '@/lib/data/hospital-data';

interface AppointmentFormData {
  patientName: string;
  mobileNumber: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  patientType: 'new' | 'existing';
  serviceType: string;
  consent: boolean;
  honeypot: string; // Anti-bot hidden field
}

export default function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    mobileNumber: '',
    email: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 01:00 PM)',
    reasonForVisit: '',
    patientType: 'new',
    serviceType: 'General Physician Consultation',
    consent: false,
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    patientName: string;
    preferredDate: string;
    preferredTime: string;
    serviceType: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!formData.patientName.trim()) {
      setErrorMessage('Please enter the patient’s full name.');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      setErrorMessage('Please provide a valid 10-digit mobile contact number.');
      return;
    }
    if (!formData.preferredDate) {
      setErrorMessage('Please select a preferred consultation date.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please confirm your consent for the appointment request.');
      return;
    }

    // Bot detection check
    if (formData.honeypot) {
      return; // Silent fail for automated spambots
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit appointment request.');
      }

      setSubmittedBooking({
        id: result.appointment.id,
        patientName: formData.patientName,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        serviceType: formData.serviceType,
      });
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedBooking) {
    const whatsappUrl = generateWhatsAppBookingUrl(hospitalSettings.whatsappNumber, {
      patientName: submittedBooking.patientName,
      mobileNumber: formData.mobileNumber,
      preferredDate: submittedBooking.preferredDate,
      preferredTime: submittedBooking.preferredTime,
      serviceType: submittedBooking.serviceType,
      patientType: formData.patientType,
      reasonForVisit: formData.reasonForVisit,
    });

    return (
      <div className="hospital-card p-8 sm:p-10 text-center animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="badge-warm">Request Received</span>

        <h3 className="font-display font-bold text-2xl text-brand-darkText mt-2">
          Appointment Request Confirmed!
        </h3>

        <div className="mt-4 p-4 rounded-2xl bg-white border border-brand-border inline-block text-left text-xs sm:text-sm text-brand-secondaryText space-y-1.5 max-w-md w-full">
          <div>
            Booking Reference ID: <strong className="text-brand-darkText font-mono">{submittedBooking.id}</strong>
          </div>
          <div>
            Patient Name: <strong className="text-brand-darkText">{submittedBooking.patientName}</strong>
          </div>
          <div>
            Consultation: <strong className="text-brand-darkText">{submittedBooking.serviceType}</strong>
          </div>
          <div>
            Date &amp; Slot: <strong className="text-brand-darkText">{submittedBooking.preferredDate} ({submittedBooking.preferredTime})</strong>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-brand-secondaryText mt-4 max-w-md mx-auto leading-relaxed">
          Our hospital front desk in Subedari, Hanamkonda has received your request. You can also sync this booking directly with our team via WhatsApp:
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-full shadow-md text-xs uppercase tracking-wider transition-all"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Send WhatsApp Confirmation
          </a>

          <button
            type="button"
            onClick={() => {
              setSubmittedBooking(null);
              setFormData({
                patientName: '',
                mobileNumber: '',
                email: '',
                preferredDate: '',
                preferredTime: 'Morning (10:00 AM - 01:00 PM)',
                reasonForVisit: '',
                patientType: 'new',
                serviceType: 'General Physician Consultation',
                consent: false,
                honeypot: '',
              });
            }}
            className="btn-secondary py-3 px-5 text-xs font-semibold"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  // Today's date in YYYY-MM-DD for min date picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="hospital-card p-6 sm:p-10 space-y-6">
      <div>
        <h3 className="font-display font-bold text-2xl text-brand-darkText">
          Request an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-brand-secondaryText mt-1">
          Fill in the details below. Our clinical staff will confirm your slot promptly.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Honeypot field for bot suppression */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Patient Type Radio */}
      <div className="flex items-center gap-6 text-xs font-semibold text-brand-darkText">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="patientType"
            value="new"
            checked={formData.patientType === 'new'}
            onChange={handleChange}
            className="text-brand-orange-600 focus:ring-brand-orange-500"
          />
          <span>New Patient</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="patientType"
            value="existing"
            checked={formData.patientType === 'existing'}
            onChange={handleChange}
            className="text-brand-orange-600 focus:ring-brand-orange-500"
          />
          <span>Existing / Follow-Up</span>
        </label>
      </div>

      {/* Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Patient Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3.5" />
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="e.g. Ramesh Reddy"
              required
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Mobile Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3.5" />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="e.g. +91 98490 12345"
              required
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Email (Optional) & Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3.5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Service Required *
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
          >
            <option value="General Physician Consultation">General Physician Consultation</option>
            <option value="Diabetes Management Consultation">Diabetes Management Consultation</option>
            <option value="ECG / Heart Health Assessment">ECG / Heart Health Assessment</option>
            <option value="Blood Group Analysis & Labs">Blood Group Analysis &amp; Labs</option>
            <option value="Preventive Health Checkup">Preventive Health Checkup</option>
          </select>
        </div>
      </div>

      {/* Date & Time Slot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Preferred Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3.5" />
            <input
              type="date"
              name="preferredDate"
              min={todayStr}
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-brand-darkText mb-1.5">
            Preferred Time Slot *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3.5" />
            <select
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
            >
              <option value="Morning (10:00 AM - 01:00 PM)">Morning (10:00 AM – 01:00 PM)</option>
              <option value="Afternoon (01:00 PM - 03:00 PM)">Afternoon (01:00 PM – 03:00 PM)</option>
              <option value="Evening (05:00 PM - 07:00 PM)">Evening (05:00 PM – 07:00 PM)</option>
              <option value="Night (07:00 PM - 09:00 PM)">Night (07:00 PM – 09:00 PM)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reason for visit */}
      <div>
        <label className="block text-xs font-bold text-brand-darkText mb-1.5">
          Reason for Visit / Symptoms (Brief)
        </label>
        <div className="relative">
          <FileText className="w-4 h-4 text-brand-secondaryText absolute left-3 top-3" />
          <textarea
            name="reasonForVisit"
            rows={2}
            value={formData.reasonForVisit}
            onChange={handleChange}
            placeholder="e.g. Regular sugar checkup, persistent fever, high BP review"
            className="w-full pl-9 pr-3 py-2.5 bg-white border border-brand-border rounded-xl text-xs sm:text-sm text-brand-darkText focus:border-brand-orange-500 focus:ring-1 focus:ring-brand-orange-500"
          />
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-0.5 rounded border-brand-border text-brand-orange-600 focus:ring-brand-orange-500"
        />
        <label htmlFor="consent" className="text-xs text-brand-secondaryText leading-tight cursor-pointer">
          I consent to Rohith Reddy Hospitals contacting me regarding this appointment scheduling. (We never share your personal contact details with third parties).
        </label>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold shadow-cta"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              <Calendar className="w-4 h-4 mr-2" />
              Request Appointment
            </>
          )}
        </button>
      </div>
    </form>
  );
}
