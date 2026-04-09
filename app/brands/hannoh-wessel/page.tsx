import type { Metadata } from 'next'
import { HannohWesselContent } from './HannohWesselContent'

export const metadata: Metadata = {
  title: 'H+ Hannoh Wessel | VN13 Fashion Agency - Italian Designer Brand',
  description: 'H+ Hannoh Wessel - Italian designer brand combining minimalist aesthetics with sustainable practices. Official distributor VN13. Contemporary fashion for retailers.',
  keywords: [
    'H+ Hannoh Wessel',
    'Hannoh Wessel brand',
    'Hannoh Wessel clothing',
    'Italian fashion designer',
    'minimalist fashion',
    'sustainable fashion Italy',
    'contemporary design',
    'VN13 brands',
    'European fashion wholesale',
  ],
  openGraph: {
    type: 'website',
    url: 'https://vn-13.com/brands/hannoh-wessel',
    title: 'H+ Hannoh Wessel | VN13 Fashion Agency',
    description: 'Italian designer brand. Minimalist aesthetics, sustainable practices. Official distributor VN13.',
    siteName: 'VN13',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H+ Hannoh Wessel | VN13 Fashion Agency',
    description: 'Italian designer brand. Minimalist aesthetics, sustainable practices.',
  },
  alternates: {
    canonical: 'https://vn-13.com/brands/hannoh-wessel',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Brand',
      '@id': 'https://vn-13.com/brands/hannoh-wessel#brand',
      name: 'H+ Hannoh Wessel',
      description: 'Italian designer brand combining minimalist aesthetics with sustainable practices.',
      url: 'https://vn-13.com/brands/hannoh-wessel',
      foundingLocation: { '@type': 'Place', name: 'Italy' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://vn-13.com/brands/hannoh-wessel#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
        { '@type': 'ListItem', position: 3, name: 'H+ Hannoh Wessel', item: 'https://vn-13.com/brands/hannoh-wessel' },
      ],
    },
  ],
}

export default function HannohWesselPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HannohWesselContent />
    </>
  )
}
