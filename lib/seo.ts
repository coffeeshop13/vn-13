import type { Metadata } from 'next'

export const siteConfig = {
  name: 'VN13',
  url: 'https://vn-13.com',
  title: 'VN13 | European Fashion Distribution Agency',
  description:
    'VN13 connects European fashion brands with retailers through wholesale distribution, pre-order access, and manufacturing partnerships.',
  ogImage: '/hero-bg.jpg',
  locale: 'en_US',
}

type PageMetadataOptions = {
  title: string
  description: string
  path?: string
}

export function createPageMetadata({
  title,
  description,
  path = '/',
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, siteConfig.url).toString()

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: siteConfig.ogImage,
          alt: `${siteConfig.name} hero image`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
  }
}

export const rootMetadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})
