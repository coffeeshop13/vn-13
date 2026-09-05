import Image from 'next/image'
import Link from 'next/link'
import { journalArticles } from '@/lib/journal'

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

export default function LatestNews() {
  const articles = journalArticles.slice(0, 3)

  return (
    <section className="border-t border-[#e3ddd3] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-base font-medium" style={{ color: '#8a6b3f' }}>Журнал VN13</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-light" style={{ color: '#1d1b18' }}>Последние новости</h2>
          </div>
          <Link href="/journal" className="text-base font-medium underline underline-offset-4" style={{ color: '#1d1b18' }}>
            Все новости
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#eee8de]">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <p className="mt-4 text-base" style={{ color: '#8a6b3f' }}>
                {article.category} · {formatDate(article.publishedAt)}
              </p>
              <h3 className="mt-2 text-xl font-medium leading-snug" style={{ color: '#1d1b18' }}>{article.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
