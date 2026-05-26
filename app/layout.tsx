import type { Metadata, Viewport } from 'next'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, createMetadata, organizationJsonLd } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  generator: 'Next.js',
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Fashion distribution',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...createMetadata({
    title: 'VN13 | Женская одежда VN-13, производство и дистрибуция',
    description:
      'VN13 развивает собственный бренд женской одежды VN-13 и дистрибуцию европейских дизайнерских брендов для бутиков, шоурумов и розничных партнеров.',
    path: '/',
    image: DEFAULT_OG_IMAGE,
    keywords: [
      'own fashion brand VN-13',
      'fashion distributor Europe',
      'designer wholesale fashion',
      'женская одежда VN-13',
      'эксклюзивная женская одежда',
      'производитель женской одежды',
    ],
  }),
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
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
