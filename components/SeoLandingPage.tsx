import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CTALink } from '@/components/CTALink'
import { absoluteUrl, SITE_NAME } from '@/lib/seo'
import { mergeSeoRelatedLinks, type SeoRelatedLink } from '@/lib/seo-links'

type LandingPageProps = {
  eyebrow: string
  title: string
  description: string
  sections: Array<{
    title: string
    body: string[]
  }>
  bulletsTitle: string
  bullets: string[]
  faq: Array<{
    question: string
    answer: string
  }>
  path: string
  lastModified?: string
  relatedLinks?: SeoRelatedLink[]
  service?: {
    name: string
    serviceType: string
    description: string
    areaServed: string[]
  }
}

export default function SeoLandingPage({
  eyebrow,
  title,
  description,
  sections,
  bulletsTitle,
  bullets,
  faq,
  path,
  lastModified,
  relatedLinks = [],
  service,
}: LandingPageProps) {
  const pageUrl = absoluteUrl(path)
  const visibleRelatedLinks = mergeSeoRelatedLinks(path, relatedLinks)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: SITE_NAME,
            item: absoluteUrl('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        ...(lastModified ? { dateModified: lastModified } : {}),
        inLanguage: 'ru',
        isPartOf: {
          '@id': `${absoluteUrl('/')}#website`,
        },
        about: [title, ...bullets.slice(0, 3)].map((name) => ({
          '@type': 'Thing',
          name,
        })),
      },
      ...(service
        ? [{
            '@type': 'Service',
            '@id': `${pageUrl}#service`,
            name: service.name,
            serviceType: service.serviceType,
            description: service.description,
            url: pageUrl,
            provider: { '@id': `${absoluteUrl('/')}#organization` },
            areaServed: service.areaServed,
          }]
        : []),
    ],
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Хлебные крошки" className="mb-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" style={{ color: '#6b6b6b' }}>
            <Link href="/" className="underline underline-offset-4">Главная</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{eyebrow}</span>
          </nav>
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            {eyebrow}
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
            {description}
          </p>
          <div className="mt-8">
            <CTALink href="/#contact">Обсудить сотрудничество</CTALink>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-10" style={{ color: '#0f0f0f' }}>
              {bulletsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex gap-4">
                  <span style={{ color: '#b8935a', fontSize: '20px' }}>•</span>
                  <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-10" style={{ color: '#0f0f0f' }}>
              Частые вопросы
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {faq.map((item) => (
                <article key={item.question}>
                  <h3 className="text-xl font-medium mb-3" style={{ color: '#0f0f0f' }}>
                    {item.question}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
              Обсудить коллекцию VN-13 или дистрибуцию
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              Напишите нам, если вы ищете эксклюзивную женскую одежду, производителя для капсульной коллекции или партнера по дистрибуции.
            </p>
            <CTALink href="/#contact">Связаться с VN13</CTALink>
          </div>

          {visibleRelatedLinks.length > 0 ? (
            <div className="mt-20 pt-20 border-t" style={{ borderColor: '#e0ddd8' }}>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Связанные страницы
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {visibleRelatedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block p-5 transition-colors duration-200"
                    style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8', color: '#0f0f0f' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </main>
  )
}
