import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getJournalArticle, journalArticles } from '@/lib/journal'
import { absoluteUrl, createMetadata } from '@/lib/seo'

type ArticlePageProps = {
  params: Promise<{ slug: string }>
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

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/journal/${article.slug}`,
    keywords: article.keywords,
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
    dateModified: article.publishedAt,
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
    inLanguage: 'ru',
    keywords: article.keywords,
    about: [
      { '@type': 'Thing', name: 'женская одежда' },
      { '@type': 'Thing', name: 'дистрибуция женской одежды' },
      { '@type': 'Thing', name: 'предзаказ коллекций' },
      { '@type': 'Thing', name: 'производство женской одежды' },
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <article>
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
              {article.category} · {article.readingTime}
            </p>
            <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
              {article.title}
            </h1>
            <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
              {article.intro}
            </p>
          </div>
        </section>

        <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <div className="space-y-14">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                    {section.title}
                  </h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

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
