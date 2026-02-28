import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/lib/context/LanguageContext'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'VN13 | Fashion Agency - European Masters & Retail',
  description: 'Strategic partnership connecting European fashion masters with retailers. Over 10 years of experience in France, Italy, and Japan.',
  keywords: ['fashion agency', 'retail', 'european fashion', 'brands', 'fashion partnership'],
  openGraph: {
    type: 'website',
    url: 'https://vn-13.com',
    title: 'VN13 | Fashion Agency',
    description: 'Strategic partnership connecting European fashion masters with retailers',
    siteName: 'VN13',
  },
  twitter: {
    card: 'summary_large_image',
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
    <html lang="en" className={geistSans.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VN13',
              description: 'Fashion agency connecting European masters with retailers',
              url: 'https://vn-13.com',
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
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
