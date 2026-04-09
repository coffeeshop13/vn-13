import type { Metadata } from 'next'
import { MJWatsonContent } from './MJWatsonContent'

export const metadata: Metadata = {
  title: 'MJ Watson | VN13 Fashion Agency - Italian Luxury Knitwear',
  description: 'MJ Watson - Italian luxury knitwear brand known for sophisticated cashmere and contemporary designs. Official distributor VN13.',
  keywords: ['MJ Watson', 'Italian knitwear', 'luxury cashmere', 'designer knitwear', 'Italian fashion', 'VN13 brands'],
  openGraph: { type: 'website', url: 'https://vn-13.com/brands/mj-watson', title: 'MJ Watson | VN13', description: 'Italian luxury knitwear. Sophisticated cashmere designs.', siteName: 'VN13' },
  alternates: { canonical: 'https://vn-13.com/brands/mj-watson' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'MJ Watson', description: 'Italian luxury knitwear brand', url: 'https://vn-13.com/brands/mj-watson', foundingLocation: { '@type': 'Place', name: 'Italy' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'MJ Watson', item: 'https://vn-13.com/brands/mj-watson' },
    ]},
  ],
}

export default function MJWatsonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MJWatsonContent />
    </>
  )
}
