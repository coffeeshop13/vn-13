import type { Metadata } from 'next'

export const SITE_URL = 'https://vn-13.com'
export const SITE_NAME = 'VN13'
export const DEFAULT_OG_IMAGE = '/hero-vn13-showroom.jpg'
export const SITE_LOCALE = 'ru_RU'

type SeoConfig = {
  title: string
  description: string
  path?: string
  image?: string
  imageAlt?: string
  keywords?: string[]
  contentType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

const defaultKeywords = [
  'VN13',
  'VN-13',
  'премиальная женская одежда',
  'лимитированные серии одежды',
  'женская одежда премиум',
  'дизайнерская женская одежда',
  'оптовая женская одежда',
  'предзаказ коллекций',
  'дистрибуция женской одежды',
  'европейские дизайнеры',
  'европейское производство одежды',
  'женская одежда',
  'эксклюзивная женская одежда',
  'производитель женской одежды',
  'оптовая женская одежда',
  'дизайнерская женская одежда',
]

export function absoluteUrl(path = '/') {
  const url = new URL(path, SITE_URL)
  const hasExtension = /\.[a-z0-9]+$/i.test(url.pathname)

  if (!hasExtension && !url.pathname.endsWith('/')) {
    url.pathname = `${url.pathname}/`
  }

  return url.toString()
}

export function createMetadata({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  imageAlt = `${SITE_NAME} женская одежда и дистрибуция`,
  keywords = [],
  contentType = 'website',
  publishedTime,
  modifiedTime,
}: SeoConfig): Metadata {
  const url = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  const pageKeywords = keywords.length > 0 ? keywords : defaultKeywords.slice(0, 5)
  const openGraph: Metadata['openGraph'] =
    contentType === 'article'
      ? {
          type: 'article',
          url,
          siteName: SITE_NAME,
          locale: SITE_LOCALE,
          title,
          description,
          publishedTime,
          modifiedTime,
          images: [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: imageAlt,
            },
          ],
        }
      : {
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
              alt: imageAlt,
            },
          ],
        }

  return {
    title,
    description,
    keywords: [...new Set(pageKeywords)].slice(0, 5),
    alternates: { canonical: url },
    openGraph,
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
  title: 'VN13 | Премиальная женская одежда и лимитированные серии',
  description:
    'VN13 соединяет премиальную женскую одежду, лимитированные серии европейских дизайнеров, собственный бренд VN-13 и работу с бутиками, шоурумами и клиентами.',
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
      logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        'VN13 is a fashion distributor and own VN-13 womenswear brand connecting European designer labels, manufacturers, and retail partners across Russia and CIS markets.',
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
        'exclusive women clothing',
        'womenswear manufacturing',
        'designer womenswear',
        'женская одежда',
        'эксклюзивная женская одежда',
        'производство женской одежды',
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
        'VN-13 is the own womenswear brand and distribution platform of VN13, focused on exclusive women clothing, European craftsmanship, responsible production, and curated retail partnerships.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'ru',
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
