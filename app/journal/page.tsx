import type { Metadata } from 'next'
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
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            Журнал
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Гиды по женской одежде, дистрибуции и производству
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
            Материалы VN13 для бутиков, шоурумов, брендов и покупателей, которые ищут не массовую одежду, а сильный ассортимент, капсульные коллекции и понятную производственную логику.
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="block p-6 transition-colors duration-200"
                style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}
              >
                <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>
                  {article.category} · {article.readingTime}
                </p>
                <h2 className="text-2xl font-light leading-tight mb-4" style={{ color: '#0f0f0f' }}>
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
