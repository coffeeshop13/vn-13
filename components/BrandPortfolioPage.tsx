'use client'

import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { absoluteUrl } from '@/lib/seo'
import type { BrandPortfolioItem } from '@/lib/brand-portfolio'

type BrandPortfolioPageProps = {
  brand: BrandPortfolioItem
}

export default function BrandPortfolioPage({ brand }: BrandPortfolioPageProps) {
  const gallery = brand.gallery
  const hasEditorialGrid = gallery.length > 1
  const pageUrl = absoluteUrl(`/brands/${brand.slug}`)
  const brandJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${pageUrl}#brand`,
    name: brand.name,
    description: brand.description,
    url: pageUrl,
    slogan: brand.positioning,
    foundingLocation: brand.country,
    knowsAbout: brand.keywords,
    brand: {
      '@id': `${pageUrl}#brand`,
    },
    ...(brand.officialWebsite
      ? {
          sameAs: [brand.officialWebsite],
        }
      : {}),
  }

  return (
    <main>
      <Script
        id={`brand-jsonld-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />
      <Header />

      <section className="border-b" style={{ borderColor: '#e0ddd8', backgroundColor: '#f8f5ef' }}>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase mb-4" style={{ color: '#b8935a' }}>
                Brand portfolio
              </p>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6" style={{ color: '#0f0f0f' }}>
                {brand.name}
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-8" style={{ color: '#5f5b55' }}>
                {brand.description}
              </p>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-2xl p-5" style={{ backgroundColor: '#fff' }}>
                  <p className="text-xs tracking-[0.16em] uppercase mb-2" style={{ color: '#b8935a' }}>
                    Страна
                  </p>
                  <p className="text-base" style={{ color: '#0f0f0f' }}>{brand.country}</p>
                </div>
                <div className="rounded-2xl p-5" style={{ backgroundColor: '#fff' }}>
                  <p className="text-xs tracking-[0.16em] uppercase mb-2" style={{ color: '#b8935a' }}>
                    Формат
                  </p>
                  <p className="text-base" style={{ color: '#0f0f0f' }}>Премиальный отбор</p>
                </div>
                <div className="rounded-2xl p-5" style={{ backgroundColor: '#fff' }}>
                  <p className="text-xs tracking-[0.16em] uppercase mb-2" style={{ color: '#b8935a' }}>
                    Для кого
                  </p>
                  <p className="text-base" style={{ color: '#0f0f0f' }}>Бутики и клиенты</p>
                </div>
              </div>
              {brand.officialWebsite ? (
                <div className="mt-6 inline-flex flex-col gap-2 rounded-2xl border px-5 py-4" style={{ borderColor: '#e0ddd8', backgroundColor: '#fff' }}>
                  <p className="text-xs tracking-[0.16em] uppercase" style={{ color: '#b8935a' }}>
                    Official site
                  </p>
                  <a
                    href={brand.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base underline underline-offset-4"
                    style={{ color: '#0f0f0f' }}
                  >
                    {brand.officialWebsite.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </a>
                </div>
              ) : null}
            </div>

            <div className="relative overflow-hidden rounded-[28px] min-h-[420px]">
              <Image
                src={brand.heroImage.src}
                alt={brand.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
                Почему бренд работает
              </p>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Позиционирование и коммерческий смысл
              </h2>
              <p className="text-base leading-8" style={{ color: '#5f5b55' }}>
                {brand.intro}
              </p>
              {brand.officialWebsite ? (
                <div className="mt-6 rounded-[24px] p-6" style={{ backgroundColor: '#faf8f4' }}>
                  <h3 className="text-xl font-medium mb-3" style={{ color: '#0f0f0f' }}>
                    Официальный сайт бренда
                  </h3>
                  <p className="text-base leading-7 mb-4" style={{ color: '#5f5b55' }}>
                    Мы связываем страницу VN13 с официальным источником бренда, чтобы упростить проверку коллекций, ассортимента и визуального языка.
                  </p>
                  <a
                    href={brand.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-[0.16em] underline underline-offset-4"
                    style={{ color: '#0f0f0f' }}
                  >
                    Перейти на официальный сайт
                  </a>
                </div>
              ) : null}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-[24px] p-6" style={{ backgroundColor: '#f6f1ea' }}>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  Позиционирование
                </h3>
                <p className="text-base leading-7" style={{ color: '#5f5b55' }}>
                  {brand.positioning}
                </p>
              </div>
              <div className="rounded-[24px] p-6" style={{ backgroundColor: '#f3f3f0' }}>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  Поисковые акценты
                </h3>
                <p className="text-base leading-7" style={{ color: '#5f5b55' }}>
                  {brand.keywords.join(', ')}
                </p>
              </div>
              <div className="rounded-[24px] p-6 md:col-span-2" style={{ backgroundColor: '#faf8f4' }}>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  Почему это важно для VN13
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {brand.whyItFits.map((item) => (
                    <div key={item} className="rounded-2xl p-5" style={{ backgroundColor: '#fff' }}>
                      <p className="text-base leading-7" style={{ color: '#5f5b55' }}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] p-6 md:col-span-2" style={{ backgroundColor: '#f3f3f0' }}>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  Связанные страницы VN13
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/vn-13-brand" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Каталог VN-13
                  </Link>
                  <Link href="/premium-zhenskaya-odezhda" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Премиальная женская одежда
                  </Link>
                  <Link href="/eksklyuzivnaya-zhenskaya-odezhda" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Эксклюзивная одежда
                  </Link>
                  <Link href="/optovaya-zhenskaya-odezhda" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Опт
                  </Link>
                  <Link href="/preorder" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Предзаказ
                  </Link>
                  <Link href="/distributsiya-zhenskoy-odezhdy" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Дистрибуция
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t" style={{ borderColor: '#e0ddd8' }}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
                  Visual selection
                </p>
                <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#0f0f0f' }}>
                  Реальные материалы бренда
                </h2>
              </div>
              <p className="text-base max-w-2xl" style={{ color: '#6b6b6b' }}>
                Вместо повторяющихся плейсхолдеров здесь используются реальные визуалы бренда или партнерских stockist-источников.
              </p>
            </div>

            {hasEditorialGrid ? (
              <div className="grid lg:grid-cols-3 gap-6">
                {gallery.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className={index === 0 ? 'lg:col-span-2 relative overflow-hidden rounded-[28px] min-h-[640px]' : 'relative overflow-hidden rounded-[28px] min-h-[420px]'}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 30vw'}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <div className="relative overflow-hidden rounded-[28px] min-h-[680px]">
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[28px] p-8 md:p-10" style={{ backgroundColor: '#f7f4ee' }}>
                  <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
                    Отбор VN13
                  </p>
                  <h3 className="text-2xl md:text-3xl font-light mb-5" style={{ color: '#0f0f0f' }}>
                    Один сильный образ лучше, чем три дубликата
                  </h3>
                  <p className="text-base leading-8 mb-8" style={{ color: '#5f5b55' }}>
                    Для этих страниц важнее показать один убедительный реальный кадр и связать его с коммерческим предложением, чем имитировать lookbook повтором одной и той же фотографии.
                  </p>
                  <CTALink href="/contact">Обсудить бренд</CTALink>
                </div>
              </div>
            )}
          </div>

          <div className="mt-20 pt-16 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#0f0f0f' }}>
              Откройте для себя {brand.name}
            </h3>
            <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: '#6b6b6b' }}>
              Свяжитесь с командой VN13, если вам нужен бренд для бутика, шоурума или частной клиентской подборки.
            </p>
            <CTALink href="/contact">Связаться</CTALink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
