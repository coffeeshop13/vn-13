import Link from 'next/link'
import { extendedSeoPages } from '@/lib/extended-seo-pages'

export default function CategorySeoLinks() {
  return (
    <section className="border-t border-[#e0ddd8] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-3 text-[#b8935a]">
              Каталог и эстетика
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-balance text-[#0f0f0f]">
              Дизайнерская одежда по категориям
            </h2>
            <p className="leading-relaxed text-[#686868]">
              Изучите подборки VN13 по типу изделия, материалу и эстетике. Наличие конкретных моделей и размеры уточняются напрямую у команды.
            </p>
          </div>

          <nav aria-label="Категории дизайнерской одежды" className="grid sm:grid-cols-2 gap-px bg-[#e0ddd8] border border-[#e0ddd8]">
            {extendedSeoPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="flex items-center justify-between gap-4 p-4 bg-[#fafaf8] transition-colors hover:bg-[#f3efe8]"
              >
                <span className="text-sm text-[#262626]">{page.cluster}</span>
                <span aria-hidden="true" className="text-[#b8935a]">↗</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
