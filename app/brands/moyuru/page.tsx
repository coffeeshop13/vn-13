import type { Metadata } from 'next'
import { MoyuruContent } from './MoyuruContent'

export const metadata: Metadata = {
  title: 'Moyuru | VN13 Fashion Agency - Japanese Designer Brand',
  description: 'Moyuru - Japanese avant-garde fashion brand known for architectural silhouettes and Art Mix philosophy. Official distributor VN13. Exclusive collections for retailers.',
  keywords: [
    'Moyuru',
    'Moyuru brand',
    'Moyuru clothing',
    'Japanese fashion designer',
    'avant-garde fashion',
    'architectural fashion',
    'Art Mix philosophy',
    'VN13 brands',
    'Japanese fashion wholesale',
  ],
  openGraph: {
    type: 'website',
    url: 'https://vn-13.com/brands/moyuru',
    title: 'Moyuru | VN13 Fashion Agency',
    description: 'Japanese avant-garde fashion brand. Architectural silhouettes, Art Mix philosophy. Official distributor VN13.',
    siteName: 'VN13',
  },
  alternates: { canonical: 'https://vn-13.com/brands/moyuru' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Brand',
      '@id': 'https://vn-13.com/brands/moyuru#brand',
      name: 'Moyuru',
      description: 'Japanese avant-garde fashion brand known for architectural silhouettes.',
      url: 'https://vn-13.com/brands/moyuru',
      foundingLocation: { '@type': 'Place', name: 'Japan' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
        { '@type': 'ListItem', position: 3, name: 'Moyuru', item: 'https://vn-13.com/brands/moyuru' },
      ],
    },
  ],
}

export default function MoyuruPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MoyuruContent />
    </>
  )
}
