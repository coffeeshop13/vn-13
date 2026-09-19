import Link from 'next/link'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { canonicalInternalHref } from '@/lib/seo-links'

export default function CategorySeoLinks() {
  const categories = extendedSeoPages.filter((page) => page.category)

  return (
    <section className="border-t border-[#e0ddd8] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
          <div>
            <p className="text-base font-medium mb-3 text-[#8a6b3f]">Каталог VN-13</p>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-balance text-[#1d1b18]">Выберите, что хотите посмотреть</h2>
            <p className="text-base leading-relaxed text-[#5d5851]">Откройте нужную категорию. Если сомневаетесь, мы поможем с выбором.</p>
            <Link href="/vn-13-brand/" className="inline-block mt-6 text-base font-medium underline underline-offset-4 text-[#1d1b18]">
              Открыть весь каталог
            </Link>
          </div>

          <nav aria-label="Категории дизайнерской одежды" className="grid sm:grid-cols-2 gap-px bg-[#e0ddd8] border border-[#e0ddd8]">
            {categories.map((page) => (
              <Link
                key={page.path}
                href={canonicalInternalHref(page.path)}
                className="flex min-h-15 items-center justify-between gap-4 p-5 bg-[#fafaf8] transition-colors hover:bg-[#f3efe8]"
              >
                <span className="text-base text-[#262626]">{page.cluster}</span>
                <span aria-hidden="true" className="text-xl text-[#8a6b3f]">→</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  )
}
