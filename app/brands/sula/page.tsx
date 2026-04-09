import type { Metadata } from 'next'
import { SulaContent } from './SulaContent'

export const metadata: Metadata = {
  title: 'Sula | VN13 Fashion Agency - British Contemporary Fashion',
  description: 'Sula - British contemporary fashion brand known for minimalist designs and sustainable practices. Official distributor VN13.',
  keywords: ['Sula', 'Sula clothing', 'British fashion', 'sustainable fashion UK', 'minimalist clothing', 'VN13 brands'],
  openGraph: { type: 'website', url: 'https://vn-13.com/brands/sula', title: 'Sula | VN13', description: 'British contemporary fashion. Minimalist sustainable designs.', siteName: 'VN13' },
  alternates: { canonical: 'https://vn-13.com/brands/sula' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'Sula', description: 'British contemporary fashion brand', url: 'https://vn-13.com/brands/sula', foundingLocation: { '@type': 'Place', name: 'United Kingdom' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Sula', item: 'https://vn-13.com/brands/sula' },
    ]},
  ],
}

export default function SulaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SulaContent />
    </>
  )
}
