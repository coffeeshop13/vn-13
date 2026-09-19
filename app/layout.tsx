import type { Metadata, Viewport } from 'next'
import CookieConsentBar from '@/components/CookieConsentBar'
import DeferredAhrefsAnalytics from '@/components/DeferredAhrefsAnalytics'
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
  referrer: 'strict-origin-when-cross-origin',
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
    title: 'Дизайнерская и премиальная женская одежда | VN13',
    description:
      'VN13 — дизайнерская и премиальная женская одежда: европейские бренды, лимитированные коллекции и оптовые поставки для клиентов, бутиков и шоурумов России.',
    path: '/',
    image: DEFAULT_OG_IMAGE,
    keywords: [
      'премиальная женская одежда',
      'люксовая женская одежда',
      'бренд женской одежды',
      'эксклюзивная женская одежда',
      'дизайнерская женская одежда',
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
        <DeferredAhrefsAnalytics />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- Yandex.Metrica noscript beacon must remain a plain image. */}
            <img
              src="https://mc.yandex.ru/watch/70368979"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          {children}
          <CookieConsentBar />
        </LanguageProvider>
      </body>
    </html>
  )
}
