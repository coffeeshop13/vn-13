import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getJournalArticle, journalArticles } from '@/lib/journal'
import { absoluteUrl, createMetadata } from '@/lib/seo'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
}

function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

export function generateStaticParams() {
  return journalArticles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getJournalArticle(slug)

  if (!article) {
    return {}
  }

  const title = article.seoTitle
    ?? (article.slug === 'premium-rynki-zhenskoy-odezhdy-france-italy-japan-korea'
      ? 'Премиальные рынки женской одежды | VN13'
      : `${article.title} | Журнал VN13`)

  return createMetadata({
    title,
    description: article.description,
    path: `/journal/${article.slug}`,
    image: article.ogImageSrc ?? article.imageSrc,
    imageAlt: article.imageAlt,
    keywords: article.keywords,
    contentType: 'article',
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt ?? article.publishedAt,
  })
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getJournalArticle(slug)

  if (!article) {
    notFound()
  }

  const url = absoluteUrl(`/journal/${article.slug}`)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    articleSection: article.category,
    author: {
      '@type': 'Organization',
      name: 'VN13',
      url: absoluteUrl('/'),
    },
    publisher: {
      '@type': 'Organization',
      name: 'VN13',
      url: absoluteUrl('/'),
    },
    mainEntityOfPage: url,
    image: absoluteUrl(article.ogImageSrc ?? article.imageSrc),
    inLanguage: 'ru',
    keywords: article.keywords,
    about: article.keywords.map((keyword) => ({ '@type': 'Thing', name: keyword })),
    ...(article.sources ? { citation: article.sources.map((source) => source.href) } : {}),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <article>
        <section className="pt-28 pb-12 md:pt-40 md:pb-16 px-6" style={{ backgroundColor: '#fafaf8' }}>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-end">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
                {article.category} · <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time> · {article.readingTime}
              </p>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
                {article.title}
              </h1>
              <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
                {article.intro}
              </p>
            </div>

            <div className="relative overflow-hidden bg-[#f6f2ec] min-h-[360px] md:min-h-[520px]">
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
          <div className="max-w-4xl mx-auto px-6 py-14 md:py-18">
            <div className="space-y-12">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl md:text-4xl font-light mb-5 text-balance" style={{ color: '#0f0f0f' }}>
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                      {paragraph}
                    </p>
                  ))}

                  {section.points && (
                    <ul className="my-6 space-y-3" style={{ color: '#4f4f4f' }}>
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3 text-base leading-relaxed">
                          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: '#b8935a' }} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <figure className="my-8">
                      <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '3 / 2' }}>
                        <Image
                          src={section.image.src}
                          alt={section.image.alt}
                          fill
                          sizes="(max-width: 896px) 100vw, 896px"
                          className="object-cover"
                        />
                      </div>
                      {section.image.caption && (
                        <figcaption className="mt-3 text-sm leading-relaxed" style={{ color: '#85817a' }}>
                          {section.image.caption}
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {section.links && (
                    <div className="mt-6 flex flex-wrap gap-3" aria-label="Материалы по теме">
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="px-4 py-3 text-sm transition-colors duration-200 hover:bg-[#f3efe9]"
                          style={{ border: '1px solid #e0ddd8', color: '#3f3f3f' }}
                        >
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {article.sources && (
              <section className="mt-16 pt-12 border-t" style={{ borderColor: '#e0ddd8' }}>
                <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
                  Проверено по первоисточникам
                </p>
                <h2 className="text-2xl font-light mb-5" style={{ color: '#0f0f0f' }}>
                  Источники
                </h2>
                <ol className="space-y-3">
                  {article.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm leading-relaxed underline underline-offset-4 decoration-[#c7b89f] hover:decoration-[#8f7040]"
                        style={{ color: '#5f5b55' }}
                      >
                        {source.title} — {source.publisher}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <div className="mt-16 pt-12 border-t" style={{ borderColor: '#e0ddd8' }}>
              <Link
                href={article.ctaHref}
                className="inline-block px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-200"
                style={{ backgroundColor: '#0f0f0f', color: '#fff' }}
              >
                {article.ctaText}
              </Link>
            </div>

            <div className="mt-16 pt-12 border-t" style={{ borderColor: '#e0ddd8' }}>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Связанные страницы
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/vn-13-brand" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Каталог VN-13
                </Link>
                <Link href="/optovaya-zhenskaya-odezhda" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Оптовая женская одежда
                </Link>
                <Link href="/preorder" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Предзаказ
                </Link>
                <Link href="/proizvoditel-zhenskoy-odezhdy" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Производство
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t" style={{ borderColor: '#e0ddd8' }}>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Кластеры VN13
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link href="/sravnenie-premialnykh-rynkov" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Премиальные рынки женской одежды
                </Link>
                <Link href="/kak-vn13-vybirayet-brendy" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Как VN13 выбирает бренды
                </Link>
                <Link href="/limited-series-dlya-butikov" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                  Лимитированные серии для бутиков
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  )
}
