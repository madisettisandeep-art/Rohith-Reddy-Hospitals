# Rohith Reddy Hospitals - Web Application

A modern, production-ready, ultra-fast healthcare web application built for **Rohith Reddy Hospitals** and **Dr. Rohith Reddy Yata** (MD, General Physician & Diabetologist, 12 years clinical experience) located in Subedari, Hanamkonda, Telangana.

---

## 🏥 Brand & Visual Identity

- **Official Brand Emblem**: Preserved directly from the supplied `Logo.png` without alteration.
- **Brand Palette**: Medical Blue (`#1D4ED8`), Deep Navy (`#10355D`), clean slates, and warm whites.
- **The Four Pillars**: People, Compassion, Excellence, Better Health.

---

## 🌐 19-Page Architecture & Routes

1. **Home** (`/`): The 16-step sequence including announcement bar, sticky header with logo, hero, trust bar (4.9★ Google rating), doctor profile preview, verified services grid, diabetes care pathway, diagnostic highlights (12-lead ECG & blood group analysis), patient experience, Google reviews, appointment CTA, lightweight click-to-load map, Instagram presence, and categorized FAQ.
2. **About Overview** (`/about`): Introduction to Dr. Rohith Reddy Yata & the hospital.
3. **Doctor Profile** (`/about/dr-rohith-reddy`): Detailed verified profile (MD, General Physician & Diabetologist, 12 years experience, focus areas, consultation timings).
4. **About Hospital** (`/about/hospital`): Facility history, values, and location overview.
5. **Specialities** (`/specialities`): Clinical departments catalog.
6. **Services Directory** (`/services`): Outpatient services directory.
7. **General Medicine** (`/services/general-medicine`): Acute fevers, infections, chronic conditions.
8. **Diabetes Care** (`/services/diabetes-care`): 5-step glycemic management & monitoring pathway.
9. **Diagnostic Services** (`/services/diagnostic-services`): 12-lead ECG & Blood Group Analysis.
10. **Preventive Healthcare** (`/services/preventive-healthcare`): Proactive checkups & metabolic screening.
11. **Patient Care** (`/patient-care`): Compassion, clarity, hygiene, and bedside manner.
12. **Health Packages** (`/health-packages`): Wellness, diabetes, and cardio-metabolic packages.
13. **Appointment Booking** (`/appointments`): Multi-step booking form with instant validation, confirmation ID, and 1-click WhatsApp sync.
14. **Contact** (`/contact`): Inquiry form, direct phone (`+91 96420 02222`), WhatsApp, and address.
15. **Location & Directions** (`/location`): Subedari, Hanamkonda transit directions and map preview.
16. **Patient Reviews** (`/reviews`): Verified 4.9★ Google rating showcase with theme filters.
17. **FAQ** (`/faq`): Categorized expandable accordions.
18. **Privacy Policy** (`/privacy-policy`): Healthcare data confidentiality & minimal data collection.
19. **Terms & Conditions** (`/terms`): Legal terms for outpatient scheduling.
20. **Medical Disclaimer** (`/medical-disclaimer`): Statutory disclaimer & immediate 108 emergency advisory.
21. **Staff Admin Portal** (`/admin` & `/admin/login`): Appointment status management, clinic hours, announcements, and review controls.

---

## 🚀 Performance & Core Web Vitals

- **Lighthouse Performance Target**: 90+
- **First Load JS**: All routes under 111 kB (Shared JS: 87.3 kB, far below the 200 kB budget)
- **Zero Heavy Video**: Lightweight CSS gradients and optimized WebP/PNG assets
- **Lazy Loaded Map**: Click-to-load Google Maps preview eliminates initial page data load
- **Google Reviews Cache**: 6-hour TTL in-memory + ISR cache with resilient fallback (zero downtime if upstream API fails)
- **Security & Headers**: Strict CSP, X-Frame-Options, X-Content-Type-Options, IP sliding-window rate limiting, and bot honeypot protection

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### 3. Production Build & Start
```bash
npm run build
npm run start
```

### 4. Admin Portal Access
- URL: `http://localhost:3000/admin/login`
- Username: `admin`
- Password: `hospital@2026`
