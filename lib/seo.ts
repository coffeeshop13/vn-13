import type { Metadata } from 'next'

export const SITE_URL = 'https://vn-13.com'
export const SITE_NAME = 'VN13'
export const DEFAULT_OG_IMAGE = '/hero-bg.jpg'
export const SITE_LOCALE = 'en_US'

type SeoConfig = {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
}

const defaultKeywords = [
  'VN13',
  'VN-13',
  'fashion distributor',
  'European fashion distribution',
  'fashion agency',
  'wholesale fashion distributor',
  'designer fashion brands',
  'Russia CIS fashion distribution',
  'fashion pre-order',
  'European manufacturing',
]

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

export function createMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  keywords = [],
}: SeoConfig): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} European fashion distribution`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
}

export function createPageMetadata({ title, description, path = '/' }: PageMetadataOptions): Metadata {
  return createMetadata({ title, description, path })
}

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  title: 'VN13 | European Fashion Distribution Agency',
  description:
    'VN13 connects European fashion brands with retailers through wholesale distribution, pre-order access, and manufacturing partnerships.',
  ogImage: DEFAULT_OG_IMAGE,
  locale: SITE_LOCALE,
}

export const rootMetadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'FashionBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'VN-13',
      url: SITE_URL,
      logo: `${SITE_URL}/hero-bg.jpg`,
      image: `${SITE_URL}/hero-bg.jpg`,
      description:
        'VN13 is a fashion distributor and own brand connecting European designer labels, manufacturers, and retail partners across Russia and CIS markets.',
      email: 'info@vn-13.com',
      telephone: '+79266022089',
      areaServed: ['Europe', 'Russia', 'CIS countries'],
      knowsAbout: [
        'European fashion distribution',
        'designer brand representation',
        'fashion wholesale',
        'retail partnerships',
        'pre-order collections',
        'European garment manufacturing',
      ],
      brand: {
        '@id': `${SITE_URL}/#brand`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales and partnerships',
        email: 'info@vn-13.com',
        telephone: '+79266022089',
        areaServed: ['Europe', 'Russia', 'CIS countries'],
        availableLanguage: ['English', 'French', 'Italian', 'German', 'Russian'],
      },
    },
    {
      '@type': 'Brand',
      '@id': `${SITE_URL}/#brand`,
      name: 'VN-13',
      alternateName: 'VN13',
      url: SITE_URL,
      description:
        'VN-13 is the own fashion brand and distribution platform of VN13, focused on European craftsmanship, responsible production, and curated retail partnerships.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#distribution-service`,
      name: 'European fashion distribution and brand representation',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: ['Europe', 'Russia', 'CIS countries'],
      serviceType: [
        'Fashion distribution',
        'Wholesale brand representation',
        'Retail partnership development',
        'Pre-order collection access',
        'European manufacturing coordination',
      ],
    },
  ],
}
