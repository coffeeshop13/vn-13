import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import { rootMetadata, siteConfig } from '@/lib/seo'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'fashion distribution agency',
    'European fashion wholesale',
    'fashion brand representation',
    'pre-order fashion collections',
    'European manufacturing partners',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'fashion',
  alternates: rootMetadata.alternates,
  openGraph: rootMetadata.openGraph,
  twitter: rootMetadata.twitter,
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
              '@type': 'Organization',
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              logo: `${siteConfig.url}/favicon.ico`,
              image: `${siteConfig.url}${siteConfig.ogImage}`,
              email: 'info@vn-13.com',
              telephone: '+33 1 23 45 67 89',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressCountry: 'FR',
              },
              areaServed: ['France', 'Italy', 'Germany', 'Russia', 'CIS'],
              knowsAbout: [
                'fashion wholesale',
                'brand distribution',
                'pre-order fashion programs',
                'European apparel manufacturing',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'info@vn-13.com',
                telephone: '+33 1 23 45 67 89',
                areaServed: ['FR', 'IT', 'DE', 'RU'],
                availableLanguage: ['en', 'fr', 'it', 'de', 'ru'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
