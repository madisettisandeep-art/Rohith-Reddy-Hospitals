import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rohithreddyhospitals.com';
  const currentDate = new Date();

  const routes = [
    '',
    '/about',
    '/about/dr-rohith-reddy',
    '/about/hospital',
    '/specialities',
    '/services',
    '/services/general-medicine',
    '/services/diabetes-care',
    '/services/diagnostic-services',
    '/services/preventive-healthcare',
    '/patient-care',
    '/health-packages',
    '/appointments',
    '/contact',
    '/location',
    '/reviews',
    '/faq',
    '/privacy-policy',
    '/terms',
    '/medical-disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' || route === '/appointments' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route === '/appointments' ? 0.8 : 0.6,
  }));
}
