import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGrid from '@/components/PortfolioGrid'
import { absoluteUrl, createMetadata, SITE_NAME } from '@/lib/seo'
import { brandPortfolio } from '@/lib/brand-portfolio'
import '../home.css'

export const metadata: Metadata = createMetadata({
  title: 'Бренды женской одежды | Европейские и японские дизайнеры VN13',
  description:
    'Дизайнерские бренды женской одежды в портфеле VN13: марки из Франции, Италии, Японии, Великобритании и Кореи для клиентов, бутиков и шоурумов.',
  path: '/brands',
  keywords: [
    'бренды женской одежды',
    'европейские бренды женской одежды',
    'японские бренды женской одежды',
    'итальянские бренды женской одежды',
    'французские бренды женской одежды',
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
    <main className="home-editorial bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8 lg:pb-12 lg:pt-32">
          <nav aria-label="Хлебные крошки" className="mb-6 flex flex-wrap items-center gap-x-2 text-sm text-[var(--muted)]">
            <Link href="/" className="hover:text-[var(--bronze)]">Главная</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-[var(--ink)]">Бренды женской одежды</span>
          </nav>
          <p className="rubric">{brandPortfolio.length} марок · {new Set(brandPortfolio.map((brand) => brand.country)).size} стран</p>
          <h1 className="font-display mt-4 max-w-4xl text-4xl leading-[1.08] md:text-6xl">Дизайнерские бренды женской одежды</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-[1.0625rem]">
            Европейские и японские дизайнерские бренды VN13 для бутиков, шоурумов и клиентов.
          </p>
        </div>
      </section>
      <PortfolioGrid />
      <section className="border-t border-[var(--rule)] bg-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="lg:col-span-6">
            <p className="rubric">Селекция VN13</p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">Дизайнерские бренды женской одежды с разным характером</h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
              В каталоге VN13 собраны французские, итальянские, японские, британские и корейские марки. Их объединяют качество, самостоятельный дизайн и возможность работать в селективной рознице, но каждая марка занимает собственную нишу: от мягкого минимализма и натуральных тканей до архитектурного кроя, обуви и аксессуаров. Такое сочетание помогает бутику формировать узнаваемый ассортимент, а не повторять готовую матрицу массового рынка.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="rubric">Как устроен портфель</p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">Европейские бренды для бутиков и шоурумов</h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
              VN13 отбирает бренды женской одежды не по количеству моделей, а по цельности коллекции, качеству материалов и коммерческой роли в магазине. В портфеле есть французские и итальянские марки, <Link href="/japanese-style/" className="underline underline-offset-4 hover:text-[var(--bronze)]">японская дизайнерская одежда</Link>, аксессуары и независимые направления для селективной розницы.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
              Бутики и шоурумы могут подобрать ассортимент под свой город, аудиторию и ценовой сегмент. Для брендов VN13 предлагает представительство, дистрибуцию, предзаказ и развитие розничных партнёрств.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
              <Link href="/zhenskaya-odezhda-dlya-butikov/" className="text-link">Одежда для бутиков</Link>
              <Link href="/partnerstvo/" className="text-link">Стать партнёром</Link>
              <Link href="/contact/" className="text-link">Связаться с VN13</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
