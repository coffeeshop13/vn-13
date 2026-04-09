import type { Metadata } from 'next'
import { SOHContent } from './SOHContent'

export const metadata: Metadata = {
  title: 'SOH | VN13 Fashion Agency - Korean Contemporary Fashion',
  description: 'SOH - South Korean contemporary fashion brand known for minimalist design and structured silhouettes. Official distributor VN13.',
  keywords: ['SOH', 'Korean fashion', 'Seoul fashion', 'minimalist Korean design', 'contemporary fashion Korea', 'VN13 brands'],
  openGraph: { type: 'website', url: 'https://vn-13.com/brands/soh', title: 'SOH | VN13', description: 'Korean contemporary fashion. Minimalist structured designs.', siteName: 'VN13' },
  alternates: { canonical: 'https://vn-13.com/brands/soh' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'SOH', description: 'South Korean contemporary fashion brand', url: 'https://vn-13.com/brands/soh', foundingLocation: { '@type': 'Place', name: 'South Korea' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'SOH', item: 'https://vn-13.com/brands/soh' },
    ]},
  ],
}

export default function SOHPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SOHContent />
    </>
  )
}
