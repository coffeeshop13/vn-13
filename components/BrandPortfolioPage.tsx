'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
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
  const lightboxImages = useMemo(
    () => [brand.heroImage, ...gallery].filter((image, index, images) => images.findIndex((item) => item.src === image.src) === index),
    [brand.heroImage, gallery]
  )
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)
  const activeImage = activeImageIndex === null ? null : lightboxImages[activeImageIndex]
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
    ],
  }
  const closeLightbox = useCallback(() => setActiveImageIndex(null), [])
  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => (current === null ? current : (current - 1 + lightboxImages.length) % lightboxImages.length))
  }, [lightboxImages.length])
  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => (current === null ? current : (current + 1) % lightboxImages.length))
  }, [lightboxImages.length])
  const openLightbox = useCallback(
    (src: string) => {
      const imageIndex = lightboxImages.findIndex((image) => image.src === src)
      if (imageIndex >= 0) setActiveImageIndex(imageIndex)
    },
    [lightboxImages]
  )

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
    <main>
      <script
        id={`brand-jsonld-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />
      <Header />

      <section className="lg:hidden bg-[#f8f5ef] px-2 pb-6 pt-[88px]" aria-label={`Описание бренда ${brand.name}`}>
        <p className="mb-2 text-base" style={{ color: '#9b7541' }}>Бренд из {brand.country}</p>
        <h1 className="text-4xl font-light leading-tight" style={{ color: '#0f0f0f' }}>
          {brand.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: '#5f5b55' }}>
          {brand.description}
        </p>
        <a
          href="https://t.me/vn13agency"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex min-h-[52px] items-center justify-center bg-[#1d1b18] px-6 text-base font-medium text-white"
        >
          Запросить условия для бутика
        </a>
      </section>

      <section className="lg:hidden bg-white" aria-label={`Фотографии бренда ${brand.name}`}>
        <div className="w-full">
          {[brand.heroImage, ...gallery]
            .filter((image, index, images) => images.findIndex((item) => item.src === image.src) === index)
            .map((image, index) => (
              <button
                key={`mobile-${image.src}-${index}`}
                type="button"
                onClick={() => openLightbox(image.src)}
                className="relative block w-full overflow-hidden bg-[#f8f5ef] text-left"
                aria-label={`Открыть увеличенное фото: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1600}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="block h-auto w-full"
                />
                <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white" aria-hidden="true">
                  +
                </span>
              </button>
            ))}
        </div>
      </section>

      <section className="hidden border-b lg:mt-4 lg:block" style={{ borderColor: '#e0ddd8', backgroundColor: '#f8f5ef' }}>
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-base mb-2 md:mb-4" style={{ color: '#9b7541' }}>
                Бренд из {brand.country}
              </p>
              <p className="text-4xl md:text-6xl font-light leading-tight mb-3 md:mb-6" style={{ color: '#0f0f0f' }}>
                {brand.name}
              </p>
              <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-5" style={{ color: '#5f5b55' }}>
                {brand.description}
              </p>
              <a
                href="https://t.me/vn13agency"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 inline-flex min-h-[52px] items-center justify-center bg-[#1d1b18] px-6 text-base font-medium text-white"
              >
                Запросить условия для бутика
              </a>
              <div className="grid sm:grid-cols-2 gap-2 md:gap-4">
                <div className="rounded-2xl p-4 md:p-5" style={{ backgroundColor: '#fff' }}>
                  <p className="text-sm mb-1 md:mb-2" style={{ color: '#9b7541' }}>
                    Страна
                  </p>
                  <p className="text-base" style={{ color: '#0f0f0f' }}>{brand.country}</p>
                </div>
                <div className="rounded-2xl p-4 md:p-5" style={{ backgroundColor: '#fff' }}>
                  <p className="text-sm mb-1 md:mb-2" style={{ color: '#9b7541' }}>
                    Кому подойдёт
                  </p>
                  <p className="text-base" style={{ color: '#0f0f0f' }}>Бутикам, шоурумам и частным клиентам</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => openLightbox(brand.heroImage.src)}
              className="group relative order-1 hidden aspect-[2/3] overflow-hidden rounded-[24px] md:rounded-[28px] w-full bg-white text-left lg:order-2 lg:block"
              aria-label={`Открыть увеличенное фото: ${brand.heroImage.alt}`}
            >
              <Image
                src={brand.heroImage.src}
                alt={brand.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain transition duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white transition group-hover:bg-white group-hover:text-black" aria-hidden="true">
                +
              </span>
            </button>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="flex flex-col">
          <div className="order-2 md:order-1 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16 items-start">
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
                  Ключевые особенности
                </h3>
                <p className="text-base leading-7" style={{ color: '#5f5b55' }}>
                  {brand.keywords.join(', ')}
                </p>
              </div>
              <div className="hidden rounded-[24px] p-6 md:col-span-2 lg:block" style={{ backgroundColor: '#faf8f4' }}>
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
              {brand.slug === 'moyuru' ? (
                <div className="rounded-[24px] p-6 md:col-span-2" style={{ backgroundColor: '#1d1b18', color: '#fff' }}>
                  <p className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#d8b77c' }}>
                    Для кого подходит Moyuru
                  </p>
                  <h3 className="text-xl font-medium mb-3">
                    Японская дизайнерская одежда для выразительной селекции
                  </h3>
                  <p className="text-base leading-7 text-white/80">
                    Moyuru стоит рассматривать бутикам и шоурумам, которым нужна узнаваемая форма, многослойность и заметный авторский характер — не отдельная базовая вещь, а самостоятельная история внутри ассортимента. Напишите VN13, чтобы запросить актуальную коллекцию, размеры и условия поставки.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <Link href="/partnerstvo/" className="underline underline-offset-4">
                      Обсудить коллекцию для бутика
                    </Link>
                    <Link href="/japanese-style/" className="underline underline-offset-4 text-white/80">
                      Читать о японском стиле
                    </Link>
                  </div>
                </div>
              ) : null}
              <div className="rounded-[24px] p-6 md:col-span-2" style={{ backgroundColor: '#f3f3f0' }}>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  Связанные страницы VN13
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/vn-13-brand/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Каталог VN-13
                  </Link>
                  {brand.slug === 'moyuru' ? (
                    <Link href="/japanese-style/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                      Японский стиль в одежде
                    </Link>
                  ) : null}
                  <Link href="/premium-zhenskaya-odezhda/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Премиальная женская одежда
                  </Link>
                  <Link href="/eksklyuzivnaya-zhenskaya-odezhda/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Эксклюзивная одежда
                  </Link>
                  <Link href="/optovaya-zhenskaya-odezhda/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Опт
                  </Link>
                  <Link href="/preorder/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Предзаказ
                  </Link>
                  <Link href="/distributsiya-zhenskoy-odezhdy/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: '#d7d1c7', color: '#0f0f0f' }}>
                    Дистрибуция
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 mt-20 hidden border-t pt-16 lg:order-2 lg:block" style={{ borderColor: '#e0ddd8' }}>
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
                  <button
                    key={`${image.src}-${index}`}
                    type="button"
                    onClick={() => openLightbox(image.src)}
                    className={index === 0 ? 'lg:col-span-2 relative aspect-[2/3] overflow-hidden rounded-[28px]' : 'relative aspect-[2/3] overflow-hidden rounded-[28px]'}
                    aria-label={`Открыть увеличенное фото: ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={index === 0 ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 100vw, 30vw'}
                      className="object-contain bg-[#f8f5ef] transition duration-500 hover:scale-[1.02]"
                    />
                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white transition hover:bg-white hover:text-black" aria-hidden="true">
                      +
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                <button
                  type="button"
                  onClick={() => openLightbox(gallery[0].src)}
                  className="group relative block aspect-[2/3] overflow-hidden rounded-[28px] w-full text-left"
                  aria-label={`Открыть увеличенное фото: ${gallery[0].alt}`}
                >
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-contain bg-[#f8f5ef] transition duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white transition group-hover:bg-white group-hover:text-black" aria-hidden="true">
                    +
                  </span>
                </button>
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
                  <CTALink href="/contact/">Обсудить бренд</CTALink>
                </div>
              </div>
            )}
          </div>

          </div>

          <section className="mt-20 border-t pt-16" style={{ borderColor: '#e0ddd8' }}>
            <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
                  Заказ и наличие
                </p>
                <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#0f0f0f' }}>
                  Как заказать {brand.name}
                </h2>
              </div>
              <div className="text-base leading-8" style={{ color: '#5f5b55' }}>
                <p>
                  Если вы ищете, где купить {brand.name} в России, команда VN13 проверит актуальную коллекцию, размеры и условия заказа. Для бутиков и шоурумов отдельно обсуждаем ассортимент, предзаказ и формат поставки.
                </p>
                <ul className="mt-5 space-y-2" aria-label={`Варианты заказа ${brand.name}`}>
                  <li>— частный заказ и подбор размера;</li>
                  <li>— подбор коллекции для бутика или шоурума;</li>
                  <li>— предзаказ и уточнение сроков поставки.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-20 pt-16 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#0f0f0f' }}>
              Откройте для себя {brand.name}
            </h3>
            <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: '#6b6b6b' }}>
              Свяжитесь с командой VN13, если вам нужен бренд для бутика, шоурума или частной клиентской подборки.
            </p>
            <CTALink href="/contact/">Связаться</CTALink>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное фото VN13"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-2xl leading-none text-white transition hover:bg-white hover:text-black md:right-8 md:top-8"
            aria-label="Закрыть увеличенное фото"
          >
            ×
          </button>

          {lightboxImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPreviousImage()
                }}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-3xl leading-none text-white transition hover:bg-white hover:text-black md:left-8"
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
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-3xl leading-none text-white transition hover:bg-white hover:text-black md:right-8"
                aria-label="Следующее фото"
              >
                ›
              </button>
            </>
          )}

          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
