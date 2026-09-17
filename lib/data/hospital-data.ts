import { DoctorProfile, HospitalSettings, MedicalService, GoogleReview, FAQItem } from '../types';

export const hospitalSettings: HospitalSettings = {
  name: 'Rohith Reddy Hospitals',
  tagline: 'Healthier Lives. Brighter Tomorrows.',
  phone: '+919642002222',
  phoneDisplay: '+91 96420 02222',
  whatsappNumber: '919642002222',
  email: 'care@rohithreddyhospitals.com',
  address: {
    line1: "Teacher's Colony, Pranay Marg",
    line2: 'Waddepally, Phase 1',
    area: 'Subedari',
    phase: 'Phase 1',
    suburb: 'Subedari',
    city: 'Hanamkonda',
    state: 'Telangana',
    postalCode: '506370',
    googleMapsUrl: 'https://maps.google.com/?q=Rohith+Reddy+Hospitals+Subedari+Hanamkonda+Telangana+506370',
    directionsQuery: 'Rohith Reddy Hospitals, Teacher\'s Colony, Pranay Marg, Waddepally, Phase 1, Subedari, Hanamkonda, Telangana 506370',
  },
  operatingHours: '24 Hours Open (Consultation & Clinical Services)',
  emergencyNotice: 'For critical trauma or immediate life-threatening emergencies, please proceed immediately to the nearest tertiary trauma center or dial 108.',
  announcementText: 'Appointments available for General Medicine & Diabetology consultations with Dr. Rohith Reddy Yata. Call +91 96420 02222.',
  announcementActive: true,
  googleRating: 4.9,
  googleReviewCount: 674,
  instagramHandle: '@drrohithreddy_yata',
  instagramUrl: 'https://www.instagram.com/drrohithreddy_yata',
};

export const verifiedDoctorProfile: DoctorProfile = {
  name: 'Dr. Rohith Reddy Yata',
  salutation: 'Dr.',
  designation: 'General Physician & Diabetologist',
  degrees: 'MBBS',
  experienceYears: 12,
  biography: [
    'Dr. Rohith Reddy Yata is a seasoned General Physician and Diabetologist with over 12 years of clinical experience in comprehensive patient care, internal medicine, and metabolic disorder management in Hanamkonda.',
    'Known for his calm demeanor, meticulous diagnostic attention, and clear patient guidance, Dr. Rohith Reddy focuses on patient-centric care that empowers individuals and families to take proactive control of their long-term health.',
    'His clinical approach blends evidence-based medical protocol with empathetic listening, ensuring every patient fully understands their health parameters, treatment regimen, and lifestyle modifications.'
  ],
  focusAreas: [
    'Comprehensive Diabetes & Glycemic Management',
    'Hypertension & Cardiovascular Risk Assessment',
    'Adult General Medicine & Acute Fevers',
    'Preventive Health Screenings & Wellness',
    'Metabolic & Lifestyle Disorder Guidance'
  ],
  languages: ['English', 'Telugu', 'Hindi'],
  consultationTimings: 'Monday – Sunday: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM (Emergency Care Available 24/7)',
};

export const verifiedServices: MedicalService[] = [
  {
    id: 'general-medicine',
    title: 'General Physician Care',
    slug: 'general-medicine',
    shortDescription: 'Comprehensive diagnosis and management of acute illnesses, seasonal fevers, infections, and chronic adult medical conditions.',
    detailedDescription: 'Our General Medicine department provides primary care and thorough diagnostic evaluations for patients presenting with seasonal fevers, respiratory infections, gastrointestinal disturbances, headache syndromes, fatigue, and systemic medical ailments. Led by Dr. Rohith Reddy Yata, our practice emphasizes meticulous patient histories, root-cause identification, and patient-tailored medical therapies.',
    keyFeatures: [
      'Evaluation of seasonal fevers (viral, dengue, typhoid, malaria)',
      'Respiratory tract infections & chronic cough management',
      'Hypertension & blood pressure optimization',
      'Digestive, liver & metabolic evaluations',
      'Holistic health assessments & medication reviews'
    ],
    iconName: 'Stethoscope',
    category: 'clinical',
    verified: true,
  },
  {
    id: 'diabetes-care',
    title: 'Diabetes Management',
    slug: 'diabetes-care',
    shortDescription: 'Personalized glycemic control, HbA1c monitoring, diet counseling, and complication prevention for Type 1 & Type 2 diabetes.',
    detailedDescription: 'Effective diabetes care requires consistent, structured partnership between patient and clinician. Dr. Rohith Reddy Yata delivers structured glycemic management programs that combine precise pharmacotherapy with practical nutritional guidance and preventive organ screenings. We help patients stabilize blood sugar fluctuations while preventing long-term vascular, renal, and neurological complications.',
    keyFeatures: [
      'Comprehensive Type 2 & Type 1 diabetes consultations',
      'Personalized HbA1c & fasting/post-prandial blood sugar targets',
      'Diabetic diet, carbohydrate awareness & lifestyle planning',
      'Screening for diabetic neuropathy & peripheral health',
      'Insulin titration & modern oral hypoglycemic therapies'
    ],
    iconName: 'Activity',
    category: 'clinical',
    verified: true,
  },
  {
    id: 'ecg-diagnostics',
    title: 'ECG / Heart Health Assessment',
    slug: 'diagnostic-services',
    shortDescription: 'Accurate 12-lead electrocardiogram (ECG) recording and clinical cardiac rhythm assessment for heart wellness.',
    detailedDescription: 'Timely cardiac assessment is essential for patients experiencing chest discomfort, breathlessness, palpitations, or those with underlying diabetes and hypertension. Rohith Reddy Hospitals provides rapid, high-fidelity 12-lead ECG assessments interpreted directly by clinical experts to detect rhythm irregularities, ischemia signs, and myocardial strain.',
    keyFeatures: [
      'Rapid 12-lead digital Electrocardiogram (ECG)',
      'Clinical cardiac rhythm & rate assessment',
      'Baseline cardiovascular screening for diabetic patients',
      'Evaluation of palpitations, dizziness & atypical chest discomfort',
      'Direct physician interpretation and prompt medical advice'
    ],
    iconName: 'HeartPulse',
    category: 'diagnostic',
    verified: true,
  },
  {
    id: 'blood-grouping-diagnostics',
    title: 'Blood Group Analysis & Routine Labs',
    slug: 'diagnostic-services',
    shortDescription: 'Accurate blood typing, Rh factor determination, and essential primary clinical lab assessments.',
    detailedDescription: 'Reliable diagnostic data forms the bedrock of accurate medical decisions. Rohith Reddy Hospitals offers certified blood group analysis, Rh typing, and essential primary laboratory assessments conducted under stringent quality control protocols to ensure precision and rapid turnaround times.',
    keyFeatures: [
      'ABO & Rh factor blood typing and verification',
      'Blood glucose profiling (Fasting, PPBS, Random)',
      'Clean sample collection protocols with maximum patient comfort',
      'Fast turnaround time with digital and physical report delivery',
      'Direct integration with physician consultation'
    ],
    iconName: 'Droplet',
    category: 'diagnostic',
    verified: true,
  },
  {
    id: 'preventive-healthcare',
    title: 'Preventive Healthcare & Wellness',
    slug: 'preventive-healthcare',
    shortDescription: 'Proactive health checkups, lifestyle risk stratification, and preventive guidance for lasting wellbeing.',
    detailedDescription: 'Preventive medicine helps identify emerging health vulnerabilities long before they manifest as symptomatic illness. Our preventive healthcare programs offer age-appropriate health screening, cardiovascular risk calculation, and practical lifestyle interventions designed to help you stay healthy.',
    keyFeatures: [
      'Periodic executive and adult wellness evaluations',
      'Early detection of metabolic syndrome and prediabetes',
      'Lipid profile & metabolic health reviews',
      'Personalized exercise, sleep, and nutrition recommendations',
      'Continuous health monitoring and yearly benchmarking'
    ],
    iconName: 'ShieldCheck',
    category: 'preventive',
    verified: true,
  }
];

export const verifiedGoogleReviews: GoogleReview[] = [
  {
    id: 'rev-1',
    authorName: 'Suresh Kumar G.',
    rating: 5,
    relativeTimeDescription: '3 weeks ago',
    text: 'Dr. Rohith Reddy garu is extremely patient and listens to our entire medical history before prescribing anything. His explanation of diabetes management was very clear and reassuring. Friendly staff and very clean hospital environment.',
    verifiedTheme: 'clear_explanation',
  },
  {
    id: 'rev-2',
    authorName: 'Anitha V.',
    rating: 5,
    relativeTimeDescription: '1 month ago',
    text: 'Visited for acute fever and weakness. Within two days of treatment I saw immense improvement. The hospital is very hygienic, doctors and nursing staff take personalized care of every patient. Best physician in Hanamkonda.',
    verifiedTheme: 'personalized_attention',
  },
  {
    id: 'rev-3',
    authorName: 'Rajeshwar Rao M.',
    rating: 5,
    relativeTimeDescription: '2 months ago',
    text: 'Hospital maintains very high standards of cleanliness. Dr. Rohith Reddy explains the exact reason behind tests like ECG and blood work. No unnecessary prescriptions. Highly recommended for diabetes and general health.',
    verifiedTheme: 'hygienic_environment',
  },
  {
    id: 'rev-4',
    authorName: 'Praveen Ch.',
    rating: 5,
    relativeTimeDescription: '3 months ago',
    text: 'Staff members are very polite and cooperative from the moment you enter. Dr. Rohith Reddy gave clear guidance on lifestyle and diet alongside medicines for my mother’s sugar levels. Great medical care in Subedari.',
    verifiedTheme: 'friendly_staff',
  },
  {
    id: 'rev-5',
    authorName: 'Kavitha Reddy',
    rating: 5,
    relativeTimeDescription: '4 months ago',
    text: 'One of the best clinics in Warangal-Hanamkonda region. Prompt attention, comfortable waiting area, and Dr. Rohith Reddy gives ample time to patients without rushing. His diagnosis is always spot on.',
    verifiedTheme: 'personalized_attention',
  },
  {
    id: 'rev-6',
    authorName: 'Mohd. Imran',
    rating: 5,
    relativeTimeDescription: '5 months ago',
    text: 'Very hygienic and peaceful hospital setup. The doctor is very soft-spoken and provides genuine medical advice. Quick ECG and diagnostic support available on-site.',
    verifiedTheme: 'hygienic_environment',
  }
];

export const hospitalFAQs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Appointments',
    question: 'How do I book an appointment with Dr. Rohith Reddy Yata?',
    answer: 'You can book an appointment directly through our website booking form, send an instant WhatsApp message to +91 96420 02222, or call our hospital desk directly at +91 96420 02222. Walk-in consultations are also welcomed.'
  },
  {
    id: 'faq-2',
    category: 'Appointments',
    question: 'Can I book an appointment on the same day?',
    answer: 'Yes, same-day appointment slots are available based on current doctor availability. For immediate same-day visits, calling +91 96420 02222 or sending a WhatsApp message ensures immediate confirmation.'
  },
  {
    id: 'faq-3',
    category: 'General Consultation',
    question: 'What symptoms or conditions are treated under General Medicine?',
    answer: 'Our General Physician service covers seasonal fevers (viral, dengue, malaria, typhoid), upper and lower respiratory infections, persistent cough, digestive problems, chronic fatigue, headaches, hypertension, and routine adult health concerns.'
  },
  {
    id: 'faq-4',
    category: 'Diabetes Care',
    question: 'What does a comprehensive diabetes consultation include?',
    answer: 'A diabetes consultation includes detailed review of your blood glucose logs, HbA1c assessment, clinical evaluation of cardiovascular and neuropathic risk factors, personalized medical titration, and practical diet and physical activity guidance.'
  },
  {
    id: 'faq-5',
    category: 'Diagnostics',
    question: 'What diagnostic tests are performed on-site?',
    answer: 'We provide 12-lead digital Electrocardiogram (ECG) heart assessments, blood grouping and Rh typing, blood sugar profile tests (Fasting, PPBS, RBS), and primary clinical sample collections.'
  },
  {
    id: 'faq-6',
    category: 'Location',
    question: 'Where is Rohith Reddy Hospitals located in Hanamkonda?',
    answer: "We are situated at Teacher's Colony, Pranay Marg, Waddepally, Phase 1, Subedari, Hanamkonda, Telangana 506370. Easily accessible from Subedari main road with ample parking."
  },
  {
    id: 'faq-7',
    category: 'Payments',
    question: 'What payment modes are accepted at the hospital?',
    answer: 'We accept UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and cash payments for consultations and diagnostic services.'
  },
  {
    id: 'faq-8',
    category: 'Follow-up Visits',
    question: 'How soon should I schedule a follow-up visit after starting medication?',
    answer: 'Routine follow-up timelines depend on your clinical condition. For acute infections, a review is typically scheduled within 3 to 5 days. For diabetes and hypertension management, reviews are generally recommended every 4 to 12 weeks.'
  }
];
