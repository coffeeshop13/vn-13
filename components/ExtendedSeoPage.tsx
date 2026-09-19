import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { brandPortfolio } from '@/lib/brand-portfolio'
import { extendedSeoPages, type ExtendedSeoPage as ExtendedSeoPageData } from '@/lib/extended-seo-pages'
import { absoluteUrl, SITE_NAME } from '@/lib/seo'
import { canonicalInternalHref } from '@/lib/seo-links'

const preferredRelatedPaths: Record<string, string[]> = {
  '/japanese-style': ['/рубашки-и-блузы', '/zhenskaya-odezhda'],
  '/рубашки-и-блузы': ['/japanese-style'],
}

export default function ExtendedSeoPage({ page }: { page: ExtendedSeoPageData }) {
  const pageUrl = absoluteUrl(page.path)
  const brands = page.brandSlugs
    .map((slug) => brandPortfolio.find((brand) => brand.slug === slug))
    .filter((brand): brand is NonNullable<typeof brand> => Boolean(brand))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': page.category ? 'CollectionPage' : 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: page.h1,
        description: page.description,
        keywords: page.keywords.join(', '),
        inLanguage: 'ru',
        isPartOf: {
          '@id': `${absoluteUrl('/')}#website`,
        },
        mainEntity: page.category
          ? {
              '@type': 'ItemList',
              name: page.h1,
              numberOfItems: brands.length,
              itemListElement: brands.map((brand, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                url: absoluteUrl(`/brands/${brand.slug}`),
                name: brand.name,
              })),
            }
          : undefined,
      },
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
            name: page.cluster,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: `Бренды VN13: ${page.cluster}`,
        numberOfItems: brands.length,
        itemListElement: brands.map((brand, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: absoluteUrl(`/brands/${brand.slug}`),
          name: brand.name,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  const preferred = (preferredRelatedPaths[page.path] ?? [])
    .map((path) => extendedSeoPages.find((item) => item.path === path))
    .filter((item): item is ExtendedSeoPageData => Boolean(item))
    .filter((item) => item.path !== page.path)
  const fallback = extendedSeoPages
    .filter((item) => item.path !== page.path && !preferred.some((related) => related.path === item.path))
    .slice(page.category ? 0 : 3, page.category ? 6 : 9)
  const relatedPages = [...preferred, ...fallback].slice(0, 6)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto">
          <nav aria-label="Хлебные крошки" className="mb-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#686868]">
            <Link href="/" className="underline underline-offset-4">Главная</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{page.cluster}</span>
          </nav>
          <p className="text-xs tracking-[0.2em] uppercase mb-4 text-[#b8935a]">
            {page.cluster}
          </p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-7 text-balance text-[#0f0f0f]">
            {page.h1}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-[#626262]">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="border-t border-[#e0ddd8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {page.sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-2xl md:text-3xl font-light mb-6 text-[#0f0f0f]">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed mb-4 text-[#686868]">
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
          {page.references?.length ? (
            <aside className="max-w-5xl mx-auto mt-10 border-t border-[#e0ddd8] pt-5 text-sm text-[#686868]">
              <p className="mb-2">Первоисточник</p>
              <ul className="list-disc pl-5">
                {page.references.map((reference) => (
                  <li key={reference.url}>
                    <a
                      href={reference.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      {reference.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </section>

      <section className="border-y border-[#e0ddd8] bg-[#f3efe8]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-[#0f0f0f]">
            {page.selectionTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#d8d0c4] border border-[#d8d0c4]">
            {page.selection.map((item, index) => (
              <div key={item} className="bg-[#f9f7f2] p-7 min-h-36">
                <span className="text-xs tracking-[0.16em] text-[#b8935a]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-5 text-base leading-relaxed text-[#383838]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3 text-[#b8935a]">
                Портфолио VN13
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-[#0f0f0f]">
                {brands.length === 1 ? 'Бренд в этом направлении' : 'Бренды в этой эстетике'}
              </h2>
            </div>
            <Link href="/#portfolio" className="hidden md:block text-sm underline underline-offset-4 text-[#565656]">
              Все бренды
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {brands.map((brand) => (
              <Link key={brand.slug} href={canonicalInternalHref(`/brands/${brand.slug}`)} className="group">
                <article>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] bg-[#f3efe8]">
                    <Image
                      src={brand.cardImage}
                      alt={`${brand.name}: ${page.cluster.toLowerCase()}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="text-lg mt-4 text-[#0f0f0f]">{brand.name}</h3>
                  <p className="text-xs tracking-[0.16em] uppercase mt-1 text-[#b8935a]">
                    {brand.country}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e0ddd8] bg-[#fafaf8]">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-light mb-10 text-[#0f0f0f]">
            Частые вопросы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {page.faq.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-medium mb-3 text-[#0f0f0f]">
                  {item.question}
                </h3>
                <p className="text-sm leading-relaxed text-[#686868]">{item.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 pt-16 border-t border-[#e0ddd8] text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-[#0f0f0f]">
              Узнать о наличии и коллекциях
            </h2>
            <p className="max-w-2xl mx-auto mb-8 leading-relaxed text-[#686868]">
              Напишите VN13, чтобы уточнить доступные бренды, размеры, составы и условия сотрудничества для частных клиентов или бутиков.
            </p>
            <CTALink href="https://t.me/vn13agency">Telegram @vn13agency</CTALink>
          </div>

          <div className="mt-20 pt-16 border-t border-[#e0ddd8]">
            <h2 className="text-2xl font-light mb-6 text-[#0f0f0f]">Связанные подборки</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPages.map((item) => (
                <Link
                  key={item.path}
                  href={canonicalInternalHref(item.path)}
                  className="p-5 border border-[#e0ddd8] bg-white transition-colors hover:bg-[#f3efe8]"
                >
                  {item.cluster}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
