import Link from 'next/link'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { canonicalInternalHref } from '@/lib/seo-links'

/** Catalogue categories as an index of links. */
export default function HomeCategories() {
  const categories = extendedSeoPages.filter((page) => page.category)

  return (
    <section className="border-t border-[var(--rule)] bg-[var(--cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <p className="rubric">Каталог VN-13</p>
          <h2 className="font-display mt-5 text-4xl leading-[1.1] text-balance md:text-5xl">Выберите, что хотите посмотреть</h2>
          <p className="mt-5 text-[15px] leading-6 text-[var(--muted)]">
            Откройте нужную категорию. Если сомневаетесь, мы поможем с выбором.
          </p>
          <div className="mt-7 flex flex-col items-start gap-4">
            <Link href="/vn-13-brand/" className="text-link">
              Открыть весь каталог <span aria-hidden="true">→</span>
            </Link>
            <Link href="/japanese-style/" className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--bronze)]">
              Японская дизайнерская одежда: стиль, крой и бренды
            </Link>
          </div>
        </div>

        <nav aria-label="Категории дизайнерской одежды" className="lg:col-span-8">
          <ul className="grid border-b border-[var(--rule)] sm:grid-cols-2 sm:gap-x-10">
            {categories.map((page) => (
              <li key={page.path} className="border-t border-[var(--rule)]">
                <Link
                  href={canonicalInternalHref(page.path)}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3"
                >
                  <span className="font-display text-[1.375rem] leading-tight transition-colors group-hover:text-[var(--bronze)]">
                    {page.cluster}
                  </span>
                  <span aria-hidden="true" className="text-[var(--bronze)] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
