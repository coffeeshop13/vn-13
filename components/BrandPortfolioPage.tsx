'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { absoluteUrl } from '@/lib/seo'
import type { BrandPortfolioItem } from '@/lib/brand-portfolio'
import { getBrandFaq, getBrandPageExtras, getOtherBrands } from '@/lib/brand-pages'
import '@/app/home.css'

type BrandPortfolioPageProps = {
  brand: BrandPortfolioItem
}

const TELEGRAM = 'https://t.me/vn13agency'

export default function BrandPortfolioPage({ brand }: BrandPortfolioPageProps) {
  const { product, related } = getBrandPageExtras(brand)
  const faq = getBrandFaq(brand)
  const otherBrands = getOtherBrands(brand)
  const images = useMemo(
    () => [brand.heroImage, ...brand.gallery].filter((image, index, all) => all.findIndex((item) => item.src === image.src) === index),
    [brand.heroImage, brand.gallery]
  )
  const galleryImages = images.slice(1)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const activeImage = activeImageIndex === null ? null : images[activeImageIndex]
  const pageUrl = absoluteUrl(`/brands/${brand.slug}`)
  const brandJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'VN13', item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Бренды', item: absoluteUrl('/brands') },
          { '@type': 'ListItem', position: 3, name: brand.name, item: pageUrl },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: brand.title,
        description: brand.description,
        ...(brand.lastModified ? { dateModified: brand.lastModified } : {}),
        about: { '@id': `${pageUrl}#brand` },
      },
      {
        '@type': 'Brand',
        '@id': `${pageUrl}#brand`,
        name: brand.name,
        description: brand.description,
        url: pageUrl,
        image: absoluteUrl(brand.heroImage.src),
        slogan: brand.positioning,
        mainEntityOfPage: pageUrl,
        knowsAbout: brand.keywords,
        ...(brand.officialWebsite ? { sameAs: [brand.officialWebsite] } : {}),
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  }

  const closeLightbox = useCallback(() => setActiveImageIndex(null), [])
  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length))
  }, [images.length])
  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => (current === null ? current : (current + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (activeImageIndex === null) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') showPreviousImage()
      if (event.key === 'ArrowRight') showNextImage()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeImageIndex, closeLightbox, showNextImage, showPreviousImage])

  return (
    <main className="home-editorial bg-white">
      <script
        id={`brand-jsonld-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-[var(--cream)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-24 md:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:pt-32">
          <div className="lg:col-span-5 lg:self-center">
            <nav aria-label="Хлебные крошки" className="mb-6 flex flex-wrap items-center gap-x-2 text-sm text-[var(--muted)]">
              <Link href="/" className="hover:text-[var(--bronze)]">Главная</Link>
              <span aria-hidden="true">/</span>
              <Link href="/brands/" className="hover:text-[var(--bronze)]">Бренды</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[var(--ink)]">{brand.name}</span>
            </nav>
            <p className="rubric">Бренд · {brand.country}</p>
            <h1 className="font-display mt-4 text-5xl leading-[1.05] md:text-6xl">{brand.name}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-[1.0625rem]">{brand.description}</p>

            <dl className="mt-7 grid grid-cols-2 border-t border-[var(--rule)] text-sm">
              <div className="border-b border-[var(--rule)] py-3 pr-4">
                <dt className="text-[var(--muted)]">Страна</dt>
                <dd className="mt-1 text-[var(--ink)]">{brand.country}</dd>
              </div>
              <div className="border-b border-[var(--rule)] py-3 pl-4">
                <dt className="text-[var(--muted)]">Кому</dt>
                <dd className="mt-1 text-[var(--ink)]">Бутикам, шоурумам, частным клиентам</dd>
              </div>
              {brand.officialWebsite ? (
                <div className="col-span-2 border-b border-[var(--rule)] py-3">
                  <dt className="text-[var(--muted)]">Официальный сайт марки</dt>
                  <dd className="mt-1">
                    <a href={brand.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-[var(--ink)] underline underline-offset-4 hover:text-[var(--bronze)]">
                      {brand.officialWebsite.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>

            <div className="mt-7 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">
              <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn btn-dark whitespace-nowrap">
                Запросить условия для бутика
              </a>
              <a href="#gde-kupit" className="text-link">
                Как купить {brand.name}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <button
              type="button"
              onClick={() => setActiveImageIndex(0)}
              className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#ece6dc] lg:aspect-[5/6]"
              aria-label={`Открыть увеличенное фото: ${brand.heroImage.alt}`}
            >
              <Image
                src={brand.heroImage.src}
                alt={brand.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="lg:col-span-4">
            <p className="rubric">О марке</p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">{brand.name} в портфеле VN13</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-[var(--ink-soft)] lg:col-span-7 lg:col-start-6 md:text-[1.0625rem]">
            <p>{brand.intro}</p>
            <p>{brand.positioning}</p>
            {brand.slug === 'moyuru' ? (
              <p>
                Moyuru стоит рассматривать бутикам и шоурумам, которым нужна узнаваемая форма, многослойность и заметный авторский характер — не отдельная базовая вещь, а самостоятельная история внутри ассортимента. Подробнее — в разделе{' '}
                <Link href="/japanese-style/" className="underline underline-offset-4 hover:text-[var(--bronze)]">о японском стиле</Link>.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 ? (
        <section className="border-t border-[var(--rule)]" aria-labelledby="brand-gallery">
          <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-16">
            <div className="mb-7 flex items-end justify-between gap-6">
              <div>
                <p className="rubric">Коллекция</p>
                <h2 id="brand-gallery" className="font-display mt-4 text-3xl leading-tight md:text-4xl">Фотографии {brand.name}</h2>
              </div>
              <p className="hidden text-sm text-[var(--muted)] md:block">Нажмите на фото, чтобы увеличить</p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index + 1)}
                  className="group relative block aspect-[3/4] overflow-hidden bg-[var(--cream)]"
                  aria-label={`Открыть увеличенное фото: ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Where to buy */}
      <section id="gde-kupit" className="scroll-mt-20 border-t border-[var(--rule)] bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-16">
          <p className="rubric">Заказ</p>
          <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">Где купить {brand.name} в Москве</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)]">
            {product.charAt(0).toUpperCase() + product.slice(1)} {brand.name} можно заказать через VN13. Команда проверит актуальную коллекцию, размеры и условия заказа и предложит удобный формат.
          </p>
          <ol className="mt-8 grid border-t border-[var(--rule)] md:grid-cols-3">
            <li className="border-b border-[var(--rule)] py-5 md:border-b-0 md:border-r md:pr-6">
              <h3 className="font-display text-2xl">Частный заказ</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-soft)]">
                Напишите, какие модели {brand.name} вас интересуют, и уточните размер. VN13 проверит наличие и пришлёт условия.
              </p>
            </li>
            <li className="border-b border-[var(--rule)] py-5 md:border-b-0 md:border-r md:px-6">
              <h3 className="font-display text-2xl">Для бутика и шоурума</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-soft)]">
                Подбор коллекции под город, аудиторию и ценовой сегмент магазина.{' '}
                <Link href="/partnerstvo/" className="underline underline-offset-4 hover:text-[var(--bronze)]">Условия партнёрства</Link>.
              </p>
            </li>
            <li className="py-5 md:pl-6">
              <h3 className="font-display text-2xl">Предзаказ</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-[var(--ink-soft)]">
                Модели следующего сезона можно зарезервировать заранее.{' '}
                <Link href="/preorder/" className="underline underline-offset-4 hover:text-[var(--bronze)]">Календарь предзаказа</Link>.
              </p>
            </li>
          </ol>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-2 border-t border-[var(--rule)] pt-5 text-[0.9375rem] md:flex-row md:flex-wrap">
            <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--bronze)]">Telegram: @vn13agency</a>
            <a href="tel:+79266022089" className="hover:text-[var(--bronze)]">+7 926 602-20-89</a>
            <a href="mailto:info@vn-13.com" className="hover:text-[var(--bronze)]">info@vn-13.com</a>
            <span className="text-[var(--muted)]">Москва, Большая Дмитровка, 32с1</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[var(--rule)]" aria-labelledby="brand-faq">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:px-8 lg:grid-cols-12 lg:gap-12 lg:py-16">
          <div className="lg:col-span-4">
            <p className="rubric">Вопросы</p>
            <h2 id="brand-faq" className="font-display mt-4 text-3xl leading-tight md:text-4xl">Вопросы о заказе {brand.name}</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {faq.map((item) => (
              <details key={item.question} className="group border-b border-[var(--rule)] first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-base font-medium text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="text-xl leading-none text-[var(--bronze)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-[0.9375rem] leading-relaxed text-[var(--ink-soft)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-[var(--rule)]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <p className="rubric">Смотрите также</p>
              <ul className="mt-5 border-t border-[var(--rule)]">
                {related.map((link) => (
                  <li key={link.href} className="border-b border-[var(--rule)]">
                    <Link href={link.href} className="flex items-center justify-between py-3 text-[0.9375rem] hover:text-[var(--bronze)]">
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex items-end justify-between gap-4">
                <p className="rubric">Другие марки</p>
                <Link href="/brands/" className="text-link">Все бренды</Link>
              </div>
              <ul className="mt-5 grid grid-cols-3 gap-3 md:gap-5">
                {otherBrands.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/brands/${item.slug}/`} className="group block">
                      <span className="relative block aspect-[3/4] overflow-hidden bg-[var(--cream)]">
                        <Image
                          src={item.cardImage}
                          alt={`${item.name} — ${item.country}, бренд в портфеле VN13`}
                          fill
                          sizes="(min-width: 1024px) 18vw, 30vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </span>
                      <span className="font-display mt-2 block text-lg leading-tight md:text-xl">{item.name}</span>
                      <span className="block text-xs text-[var(--muted)] md:text-sm">{item.country}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Фото ${brand.name}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center text-3xl leading-none text-white hover:text-[#d8b77c] md:right-8 md:top-8"
            aria-label="Закрыть увеличенное фото"
          >
            ×
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPreviousImage()
                }}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl leading-none text-white hover:text-[#d8b77c] md:left-8"
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showNextImage()
                }}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-4xl leading-none text-white hover:text-[#d8b77c] md:right-8"
                aria-label="Следующее фото"
              >
                ›
              </button>
            </>
          )}
          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="100vw" className="object-contain" priority />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80">
            {(activeImageIndex ?? 0) + 1} / {images.length}
          </p>
        </div>
      )}

      <Footer />
    </main>
  )
}
