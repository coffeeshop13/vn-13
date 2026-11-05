import Image from 'next/image'
import Link from 'next/link'
import { journalArticles } from '@/lib/journal'
import { canonicalInternalHref } from '@/lib/seo-links'

const steps = [
  ['Выберите вещь', 'Откройте каталог или сохраните понравившуюся фотографию.'],
  ['Свяжитесь с нами', 'Позвоните или напишите в Telegram — это удобно и быстро.'],
  ['Получите ответ', 'Проверим размер, состав, цену и наличие нужной модели.'],
] as const

const facts = [
  { value: '2013', label: 'год основания' },
  { value: '45+', label: 'магазинов-партнёров' },
  { value: '22+', label: 'города России и СНГ' },
] as const

function formatDate(date: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

/** How to order, company facts, latest journal articles and contacts. */
export default function HomeClosing({ brandCount }: { brandCount: number }) {
  const articles = journalArticles.slice(0, 3)

  return (
    <>
      <section className="border-t border-[var(--rule)] bg-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <p className="rubric">Без сложностей</p>
          <h2 className="font-display mt-5 text-4xl md:text-5xl">Как сделать заказ</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {steps.map(([title, text], i) => (
              <li key={title} className="border-t border-[var(--ink)] pt-5">
                <span className="font-display text-lg italic text-[var(--bronze)]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display mt-2 text-[1.75rem] leading-tight">{title}</h3>
                <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="story" className="border-t border-[var(--rule)] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="rubric">О нас</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.1] text-balance md:text-5xl">Опыт, на который можно положиться</h2>
            <p className="mt-5 max-w-md text-[15px] leading-6 text-[var(--muted)]">
              Мы работаем с дизайнерскими брендами, бутиками и частными клиентами в России и СНГ.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-7 lg:grid-cols-4 lg:self-end">
            {[...facts, { value: String(brandCount), label: 'марок в портфеле' }].map((f) => (
              <div key={f.label} className="flex flex-col-reverse border-t border-[var(--rule)] pt-4">
                <dt className="mt-3 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{f.label}</dt>
                <dd className="font-display text-5xl leading-none">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-[var(--rule)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="rubric">Журнал VN13</p>
              <h2 className="font-display mt-5 text-4xl md:text-5xl">Последние новости</h2>
            </div>
            <Link href="/journal/" className="text-link self-start sm:self-auto">
              Все новости <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={canonicalInternalHref(`/journal/${article.slug}`)} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eee8de]">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[var(--bronze)]">
                  {article.category} · {formatDate(article.publishedAt)}
                </p>
                <h3 className="font-display mt-2 text-2xl leading-snug transition-colors group-hover:text-[var(--bronze)]">
                  {article.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:py-20 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="rubric" style={{ color: '#d7b982' }}>
              Связаться с VN13
            </p>
            <h2 className="font-display mt-5 text-4xl md:text-6xl">Нужна помощь с выбором?</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#e7e1d8]">
              Позвоните или напишите нам. Расскажем о наличии, размерах и условиях сотрудничества.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5">
            <a href="tel:+79266022089" className="btn" style={{ backgroundColor: '#d7b982', color: '#1d1b18' }}>
              Позвонить: +7 926 602-20-89
            </a>
            <a href="https://t.me/vn13agency" className="btn border border-[#8f867a] text-white hover:bg-[#302d28]">
              Написать в Telegram
            </a>
            <a href="mailto:info@vn-13.com" className="mt-1 text-center text-sm text-[#e7e1d8] underline underline-offset-4">
              info@vn-13.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
