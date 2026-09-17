import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomBar from '@/components/layout/MobileBottomBar';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rohithreddyhospitals.com'),
  title: {
    default: 'Rohith Reddy Hospitals | General Physician & Diabetes Care | Hanamkonda',
    template: '%s | Rohith Reddy Hospitals',
  },
  description:
    'Rohith Reddy Hospitals provides personalized healthcare services in Hanamkonda with a focus on general medicine, diabetes care and patient-focused medical consultation led by Dr. Rohith Reddy Yata.',
  keywords: [
    'Rohith Reddy Hospitals',
    'Dr. Rohith Reddy Yata',
    'General Physician Hanamkonda',
    'Diabetologist Hanamkonda',
    'Diabetes Doctor Warangal',
    'ECG Subedari',
    'Hospital Subedari',
    'Fever clinic Hanamkonda',
    'Best physician Subedari',
  ],
  authors: [{ name: 'Dr. Rohith Reddy Yata' }],
  creator: 'Rohith Reddy Hospitals',
  publisher: 'Rohith Reddy Hospitals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rohithreddyhospitals.com',
    siteName: 'Rohith Reddy Hospitals',
    title: 'Rohith Reddy Hospitals | General Physician & Diabetes Care | Hanamkonda',
    description:
      'Expert medical care with a focus on personalized attention, clear guidance and long-term wellbeing in Hanamkonda.',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 800,
        alt: 'Rohith Reddy Hospitals Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohith Reddy Hospitals | General Physician & Diabetes Care',
    description:
      'Personalized medical care & diabetes management in Hanamkonda by Dr. Rohith Reddy Yata.',
    images: ['/images/logo.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#F47A16',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FFFCF8] text-brand-darkText font-sans selection:bg-brand-orange-100 selection:text-brand-orange-900">
        <JsonLd />
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
