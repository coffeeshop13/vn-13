import type { Metadata } from 'next'
import { ShotoContent } from './ShotoContent'

export const metadata: Metadata = {
  title: 'Shoto | VN13 Fashion Agency - Italian Luxury Footwear',
  description: 'Shoto - Italian luxury footwear brand crafting artisanal shoes since 1960s. Handmade leather boots and shoes. Official distributor VN13.',
  keywords: ['Shoto', 'Shoto shoes', 'Italian footwear', 'luxury boots', 'handmade leather shoes', 'artisanal footwear', 'VN13 brands'],
  openGraph: {
    type: 'website',
    url: 'https://vn-13.com/brands/shoto',
    title: 'Shoto | VN13 Fashion Agency',
    description: 'Italian luxury footwear. Handmade leather boots and shoes since 1960s.',
    siteName: 'VN13',
  },
  alternates: { canonical: 'https://vn-13.com/brands/shoto' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'Shoto', description: 'Italian luxury footwear brand', url: 'https://vn-13.com/brands/shoto', foundingLocation: { '@type': 'Place', name: 'Italy' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Shoto', item: 'https://vn-13.com/brands/shoto' },
    ]},
  ],
}

export default function ShotoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ShotoContent />
    </>
  )
}
