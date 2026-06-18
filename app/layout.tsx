import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
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
    title: 'Дизайнерская и премиальная женская одежда | VN13',
    description:
      'VN13 — дизайнерская и премиальная женская одежда: лимитированные коллекции, натуральные ткани и лучшие европейские бренды для клиентов и бутиков России.',
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
  const yandexMetrikaInit = `
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) { return; }
      }
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(70368979, 'init', {
      webvisor:true,
      clickmap:true,
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce:true,
      trackLinks:true
    });
  `

  return (
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased">
        <Script id="yandex-metrika" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: yandexMetrikaInit }} />
        <noscript>
          <div>
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
        </LanguageProvider>
      </body>
    </html>
  )
}
