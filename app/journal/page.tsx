import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { journalArticles } from '@/lib/journal'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Журнал VN13 | Женская одежда, дистрибуция и производство',
  description:
    'Практические материалы VN13 о женской одежде, эксклюзивных коллекциях, оптовых закупках, производстве, предзаказе и дистрибуции.',
  path: '/journal',
  keywords: ['журнал женская одежда', 'гид по женской одежде', 'fashion buying', 'дистрибуция одежды'],
})

export default function JournalPage() {
  const [featuredArticle, ...articles] = journalArticles

  return (
    <main>
      <Header />
      <section className="pt-28 pb-12 md:pt-40 md:pb-16 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-10 lg:gap-14 items-end">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
                Журнал VN13
              </p>
              <h1 className="text-4xl md:text-6xl font-light leading-tight mb-5 text-balance" style={{ color: '#0f0f0f' }}>
                Практичные заметки о коллекциях, закупке и премиальной рознице
              </h1>
              <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
                Не технический SEO-раздел, а короткие материалы для бутиков, брендов и покупателей: как выбирать вещи, планировать предзаказ, читать коллекции и понимать рынок.
              </p>
            </div>

            <Link href={`/journal/${featuredArticle.slug}`} className="group block">
              <article className="grid sm:grid-cols-[0.9fr_1fr] bg-white" style={{ border: '1px solid #e0ddd8' }}>
                <div className="relative overflow-hidden bg-[#f6f2ec] min-h-[280px] sm:min-h-[360px]">
                  <Image
                    src={featuredArticle.imageSrc}
                    alt={featuredArticle.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-end">
                  <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>
                    {featuredArticle.category} · {featuredArticle.readingTime}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-light leading-tight mb-4 text-balance" style={{ color: '#0f0f0f' }}>
                    {featuredArticle.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
                    {featuredArticle.description}
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
                Все материалы
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-balance" style={{ color: '#0f0f0f' }}>
                Читать по темам
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
              Каждая карточка ведет к материалу с практическими критериями, а не к набору ключевых слов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group block overflow-hidden transition-colors duration-200"
                style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}
              >
                <article>
                  <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '4 / 5' }}>
                    <Image
                      src={article.imageSrc}
                      alt={article.imageAlt}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: '#b8935a' }}>
                      {article.category} · {article.readingTime}
                    </p>
                    <h3 className="text-xl font-light leading-tight mb-3 text-balance" style={{ color: '#0f0f0f' }}>
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
                      {article.description}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-14 pt-10 border-t" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
              Связанные направления
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
              <Link href="/manufacturing" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
                Производство
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
