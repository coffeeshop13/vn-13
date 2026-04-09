import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import { CookieBanner } from '@/components/CookieBanner'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vn-13.com'),
  title: {
    default: 'VN13 | Fashion Agency - European Designer Brands Distribution',
    template: '%s | VN13 Fashion Agency',
  },
  description: 'VN13 Fashion Agency - Official distributor of European designer brands: Manuelle Guibal, Rundholz, Moyuru, Shoto, Post & Co, Aequamente, MJ Watson, Sula, SOH. Wholesale partnerships for retailers worldwide.',
  keywords: [
    'fashion agency',
    'fashion distributor',
    'European fashion brands',
    'designer clothing wholesale',
    'Manuelle Guibal',
    'Rundholz',
    'Moyuru',
    'Shoto',
    'Post & Co',
    'Aequamente',
    'MJ Watson',
    'Sula',
    'SOH',
    'French fashion',
    'Italian fashion',
    'Japanese fashion',
    'Korean fashion',
    'British fashion',
    'fashion retail partnership',
    'luxury fashion distribution',
    'artisanal fashion brands',
    'sustainable fashion',
    'designer clothing distributor',
    'VN13',
  ],
  authors: [{ name: 'VN13 Fashion Agency' }],
  creator: 'VN13',
  publisher: 'VN13',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ru_RU', 'fr_FR', 'de_DE', 'it_IT'],
    url: 'https://vn-13.com',
    title: 'VN13 | Fashion Agency - European Designer Brands',
    description: 'Official distributor of European designer brands. Manuelle Guibal, Rundholz, Moyuru, Shoto, and more.',
    siteName: 'VN13 Fashion Agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VN13 | Fashion Agency',
    description: 'Official distributor of European designer brands.',
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
  alternates: {
    canonical: 'https://vn-13.com',
    languages: {
      'en': 'https://vn-13.com',
      'ru': 'https://vn-13.com',
      'fr': 'https://vn-13.com',
      'de': 'https://vn-13.com',
      'it': 'https://vn-13.com',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://vn-13.com/#organization',
                  name: 'VN13',
                  legalName: 'VN13 Fashion Agency',
                  description: 'Fashion agency and official distributor of European designer brands including Manuelle Guibal, Rundholz, Moyuru, Shoto, Post & Co, Aequamente, MJ Watson, Sula, and SOH.',
                  url: 'https://vn-13.com',
                  sameAs: [
                    'https://t.me/vn13agency'
                  ],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'Sales',
                    email: 'info@vn-13.com',
                    availableLanguage: ['English', 'Russian', 'French', 'German', 'Italian']
                  },
                  areaServed: ['Europe', 'Russia', 'Asia'],
                  knowsAbout: [
                    'Fashion Distribution',
                    'European Designer Brands',
                    'Retail Partnerships',
                    'Luxury Fashion',
                    'Artisanal Clothing'
                  ]
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://vn-13.com/#website',
                  url: 'https://vn-13.com',
                  name: 'VN13 Fashion Agency',
                  description: 'Official distributor of European designer fashion brands',
                  publisher: {
                    '@id': 'https://vn-13.com/#organization'
                  },
                  inLanguage: ['en', 'ru', 'fr', 'de', 'it']
                },
                {
                  '@type': 'ItemList',
                  name: 'VN13 Brand Portfolio',
                  description: 'European designer brands distributed by VN13',
                  itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Manuelle Guibal', url: 'https://vn-13.com/brands/manuelle-guibal' },
                    { '@type': 'ListItem', position: 2, name: 'Rundholz', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 3, name: 'Moyuru', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 4, name: 'Shoto', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 5, name: 'Post & Co', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 6, name: 'Aequamente', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 7, name: 'MJ Watson', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 8, name: 'Sula', url: 'https://vn-13.com/#portfolio' },
                    { '@type': 'ListItem', position: 9, name: 'SOH', url: 'https://vn-13.com/#portfolio' }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
