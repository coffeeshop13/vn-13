import type { Metadata } from 'next'
import { ManuelleGuibalContent } from './ManuelleGuibalContent'

export const metadata: Metadata = {
  title: 'Manuelle Guibal | VN13 Fashion Agency - French Designer Brand',
  description: 'Manuelle Guibal - French designer brand known for artisanal craftsmanship, natural fabrics, and timeless silhouettes. Official distributor VN13. Exclusive collections for retailers.',
  keywords: [
    'Manuelle Guibal',
    'Manuelle Guibal brand',
    'Manuelle Guibal clothing',
    'Manuelle Guibal collection',
    'French fashion designer',
    'artisanal fashion',
    'sustainable fashion France',
    'natural fabrics clothing',
    'VN13 brands',
    'European fashion wholesale',
    'designer clothing distributor'
  ],
  openGraph: {
    type: 'website',
    url: 'https://vn-13.com/brands/manuelle-guibal',
    title: 'Manuelle Guibal | VN13 Fashion Agency',
    description: 'French designer brand. Artisanal craftsmanship, natural fabrics, timeless silhouettes. Official distributor VN13.',
    siteName: 'VN13',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg',
        width: 1200,
        height: 630,
        alt: 'Manuelle Guibal Collection - VN13',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuelle Guibal | VN13 Fashion Agency',
    description: 'French designer brand. Artisanal craftsmanship, natural fabrics, timeless silhouettes.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg'],
  },
  alternates: {
    canonical: 'https://vn-13.com/brands/manuelle-guibal',
    languages: {
      'en': 'https://vn-13.com/brands/manuelle-guibal',
      'ru': 'https://vn-13.com/brands/manuelle-guibal',
      'fr': 'https://vn-13.com/brands/manuelle-guibal',
      'de': 'https://vn-13.com/brands/manuelle-guibal',
      'it': 'https://vn-13.com/brands/manuelle-guibal',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Brand',
      '@id': 'https://vn-13.com/brands/manuelle-guibal#brand',
      name: 'Manuelle Guibal',
      description: 'French designer brand known for artisanal craftsmanship, natural fabrics, and timeless silhouettes.',
      logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg',
      url: 'https://vn-13.com/brands/manuelle-guibal',
      foundingLocation: {
        '@type': 'Place',
        name: 'France',
      },
      slogan: 'Artisanal craftsmanship meets contemporary design',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://vn-13.com/brands/manuelle-guibal#webpage',
      url: 'https://vn-13.com/brands/manuelle-guibal',
      name: 'Manuelle Guibal | VN13 Fashion Agency',
      description: 'Manuelle Guibal - French designer brand. Official distributor VN13.',
      isPartOf: {
        '@id': 'https://vn-13.com/#website',
      },
      about: {
        '@id': 'https://vn-13.com/brands/manuelle-guibal#brand',
      },
      breadcrumb: {
        '@id': 'https://vn-13.com/brands/manuelle-guibal#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://vn-13.com/brands/manuelle-guibal#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://vn-13.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Portfolio',
          item: 'https://vn-13.com/#portfolio',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Manuelle Guibal',
          item: 'https://vn-13.com/brands/manuelle-guibal',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://vn-13.com/#organization',
      name: 'VN13',
      url: 'https://vn-13.com',
      description: 'Fashion agency connecting European fashion masters with retailers worldwide.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'info@vn-13.com',
      },
    },
    {
      '@type': 'Product',
      name: 'Manuelle Guibal Collection',
      description: 'Designer clothing collection featuring artisanal craftsmanship and natural fabrics',
      brand: {
        '@id': 'https://vn-13.com/brands/manuelle-guibal#brand',
      },
      category: 'Designer Clothing',
      manufacturer: {
        '@type': 'Organization',
        name: 'Manuelle Guibal',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'FR',
        },
      },
    },
  ],
}

export default function ManuelleGuibalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ManuelleGuibalContent />
    </>
  )
}
