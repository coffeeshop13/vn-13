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
  keywords?: string[]
  image?: string
  imageAlt?: string
  modifiedTime?: string
}

export function createPageMetadata({ title, description, path = '/', keywords = [], image, imageAlt, modifiedTime }: PageMetadataOptions): Metadata {
  return createMetadata({ title, description, path, keywords, image, imageAlt, modifiedTime })
}

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  title: 'VN13 — бренд женской одежды и европейские дизайнерские марки',
  description:
    'VN13 соединяет премиальную женскую одежду, лимитированные серии европейских дизайнеров, собственный бренд VN-13 и работу с бутиками, шоурумами и клиентами.',
  ogImage: DEFAULT_OG_IMAGE,
  locale: SITE_LOCALE,
}

export const rootMetadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})

export const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: 'VN13 — бренд женской одежды и дизайнерские европейские марки',
  description:
    'VN13 — бренд женской одежды и дизайнерские европейские марки. Лимитированные коллекции, опт и сотрудничество с бутиками и шоурумами.',
  dateModified: '2026-09-22',
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: [
    { '@type': 'Brand', '@id': `${SITE_URL}/#brand` },
    { '@type': 'Service', '@id': `${SITE_URL}/#distribution-service` },
  ],
  inLanguage: 'ru',
}

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'VN-13',
      url: SITE_URL,
      logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        'VN13 занимается дистрибуцией европейских дизайнерских брендов и развивает собственный бренд женской одежды VN-13: капсульные коллекции, ограниченные серии, производство и партнёрства с бутиками.',
      email: 'info@vn-13.com',
      telephone: '+79266022089',
      areaServed: ['Europe', 'Russia', 'CIS countries'],
      sameAs: [
        'https://t.me/vn13agency',
        'https://www.retail.ru/rbc/company/vn_13/',
      ],
      knowsAbout: [
        'дистрибуция европейских брендов',
        'представительство дизайнерских брендов',
        'оптовые поставки женской одежды',
        'партнёрства с бутиками',
        'предзаказ коллекций',
        'эксклюзивная женская одежда',
        'производство женской одежды',
        'дизайнерская женская одежда',
        'женская одежда',
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
        'VN-13 — собственный бренд женской одежды VN13: дизайнерские капсульные коллекции, премиальные материалы, ограниченные серии и контролируемая дистрибуция.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        'Дизайнерская и премиальная женская одежда, европейские бренды, производство, оптовые поставки и дистрибуция для бутиков.',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'ru',
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#distribution-service`,
      name: 'Дистрибуция европейских брендов женской одежды',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: ['Europe', 'Russia', 'CIS countries'],
      serviceType: [
        'Дистрибуция дизайнерской женской одежды',
        'Представительство брендов',
        'Оптовые поставки для бутиков',
        'Предзаказ коллекций',
        'Координация разработки и выпуска коллекций',
      ],
    },
  ],
}
