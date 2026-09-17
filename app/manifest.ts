import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rohith Reddy Hospitals',
    short_name: 'Rohith Reddy',
    description: 'Personalized Healthcare. Better Health. Better Living. Led by Dr. Rohith Reddy Yata in Hanamkonda.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#1D4ED8',
    icons: [
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
