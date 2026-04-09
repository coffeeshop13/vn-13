import type { Metadata } from 'next'
import { AequamenteContent } from './AequamenteContent'

export const metadata: Metadata = {
  title: 'Aequamente | VN13 Fashion Agency - Italian Minimalist Fashion',
  description: 'Aequamente - Italian fashion brand known for minimalist design and natural materials. Official distributor VN13.',
  keywords: ['Aequamente', 'Italian fashion', 'minimalist clothing', 'natural fabrics', 'sustainable fashion Italy', 'VN13 brands'],
  openGraph: { type: 'website', url: 'https://vn-13.com/brands/aequamente', title: 'Aequamente | VN13', description: 'Italian minimalist fashion with natural materials.', siteName: 'VN13' },
  alternates: { canonical: 'https://vn-13.com/brands/aequamente' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'Aequamente', description: 'Italian minimalist fashion brand', url: 'https://vn-13.com/brands/aequamente', foundingLocation: { '@type': 'Place', name: 'Italy' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Aequamente', item: 'https://vn-13.com/brands/aequamente' },
    ]},
  ],
}

export default function AequamentePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AequamenteContent />
    </>
  )
}
