import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Coinchasers',
    short_name: 'Coinchasers',
    description: 'Premium clothing for those who want to make money. Dress for success.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png', // Fallback to our dynamically generated icon from Next.js (usually available at /icon) or a static one if provided
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png', // Ideally this would be a 512x512 icon, Next.js handles /icon but for PWA we should explicitly point to an icon. I'll ask the user to provide an icon.png
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
