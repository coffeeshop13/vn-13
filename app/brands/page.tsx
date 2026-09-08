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
      <section className="border-t px-6 py-16 md:py-24" style={{ backgroundColor: '#fff', borderColor: '#e0ddd8' }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Как устроен портфель</p>
            <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Европейские бренды для бутиков и шоурумов</h2>
            <p className="leading-relaxed" style={{ color: '#5f5b55' }}>
              VN13 отбирает бренды женской одежды не по количеству моделей, а по цельности коллекции, качеству материалов и коммерческой роли в магазине. В портфеле есть французские и итальянские марки, японская дизайнерская одежда, аксессуары и независимые направления для селективной розницы.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Для партнёров</p>
            <p className="mb-5 leading-relaxed" style={{ color: '#5f5b55' }}>
              Бутики и шоурумы могут подобрать ассортимент под свой город, аудиторию и ценовой сегмент. Для брендов VN13 предлагает представительство, дистрибуцию, предзаказ и развитие розничных партнёрств.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link href="/zhenskaya-odezhda-dlya-butikov" className="underline underline-offset-4">Одежда для бутиков</Link>
              <Link href="/partnerstvo" className="underline underline-offset-4">Стать партнёром</Link>
              <Link href="/contact" className="underline underline-offset-4">Связаться с VN13</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
