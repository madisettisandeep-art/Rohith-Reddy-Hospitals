export interface DoctorProfile {
  name: string;
  salutation: string;
  designation: string;
  degrees: string;
  experienceYears: number;
  registrationNumber?: string;
  biography: string[];
  focusAreas: string[];
  languages: string[];
  consultationTimings: string;
  avatarUrl?: string;
}

export interface MedicalService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  detailedDescription: string;
  keyFeatures: string[];
  iconName: string;
  category: 'clinical' | 'diagnostic' | 'preventive';
  verified: boolean;
}

export interface GoogleReview {
  id: string;
  authorName: string;
  rating: number;
  relativeTimeDescription: string;
  text: string;
  authorPhotoUrl?: string;
  verifiedTheme: 'friendly_staff' | 'personalized_attention' | 'clear_explanation' | 'hygienic_environment' | 'general';
}

export interface HospitalSettings {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    phase: string;
    suburb: string;
    city: string;
    state: string;
    postalCode: string;
    googleMapsUrl: string;
    directionsQuery: string;
  };
  operatingHours: string;
  emergencyNotice: string;
  announcementText: string;
  announcementActive: boolean;
  googleRating: number;
  googleReviewCount: number;
  instagramHandle: string;
  instagramUrl: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  mobileNumber: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  reasonForVisit: string;
  patientType: 'new' | 'existing';
  serviceType: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Appointments' | 'General Consultation' | 'Diabetes Care' | 'Diagnostics' | 'Location' | 'Payments' | 'Follow-up Visits';
}
