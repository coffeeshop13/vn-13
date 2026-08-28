import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGrid from '@/components/PortfolioGrid'
import { absoluteUrl, createMetadata, SITE_NAME } from '@/lib/seo'
import { brandPortfolio } from '@/lib/brand-portfolio'

export const metadata: Metadata = createMetadata({
  title: 'Бренды женской одежды | Европейские дизайнеры VN13',
  description:
    'Бренды женской одежды в портфеле VN13: европейские дизайнеры из Франции, Италии, Японии, Великобритании и Кореи для клиентов, бутиков и шоурумов.',
  path: '/brands',
  keywords: [
    'бренды женской одежды',
    'европейские бренды женской одежды',
    'дизайнерские бренды одежды',
    'премиальные бренды женской одежды',
  ],
})

export default function BrandsPage() {
  const pageUrl = absoluteUrl('/brands')
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Бренды женской одежды в портфеле VN13',
        description:
          'Европейские дизайнерские бренды женской одежды и аксессуаров для клиентов, бутиков и шоурумов.',
        inLanguage: 'ru',
        isPartOf: { '@id': `${absoluteUrl('/')}#website` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: brandPortfolio.length,
          itemListElement: brandPortfolio.map((brand, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: brand.name,
            url: absoluteUrl(`/brands/${brand.slug}`),
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Бренды женской одежды', item: pageUrl },
        ],
      },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="border-b" style={{ backgroundColor: '#f8f5ef', borderColor: '#e0ddd8' }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 md:px-6 md:pt-44 md:pb-20">
          <nav aria-label="Хлебные крошки" className="mb-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" style={{ color: '#6b6b6b' }}>
            <Link href="/" className="underline underline-offset-4">Главная</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Бренды женской одежды</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-3 md:mb-5" style={{ color: '#0f0f0f' }}>
            Бренды женской одежды
          </h1>
          <p className="text-base md:text-lg leading-7 md:leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>
            Европейские дизайнерские бренды и партнёры VN13 для бутиков, шоурумов и клиентов.
          </p>
        </div>
      </section>
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
