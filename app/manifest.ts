import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VN13',
    short_name: 'VN13',
    description:
      'European fashion distributor and own brand connecting designer labels, manufacturers, and retail partners.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf8',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
