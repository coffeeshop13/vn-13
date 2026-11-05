'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { brandPortfolio } from '@/lib/brand-portfolio'

const brandImageDescriptors = {
  france: 'Французская дизайнерская одежда',
  italy: 'Итальянская дизайнерская одежда',
  japan: 'Японская дизайнерская одежда',
  uk: 'Британская дизайнерская одежда',
  korea: 'Корейская дизайнерская одежда',
} satisfies Record<(typeof brandPortfolio)[number]['region'], string>

const responsiveCardImages: Record<string, string> = {
  'manuelle-guibal': '/brands/real/manuelle-guibal-card-v20260913-q70-480.webp',
  'hannoh-wessel': '/brands/hannoh-lookbook/hannoh-card-v20260913-q70-480.webp',
  moyuru: '/brands/moyuru-card-v20260913-q70-560.webp',
}

const filters = [
  { key: 'all', label: 'Все' },
  { key: 'france', label: 'Франция' },
  { key: 'italy', label: 'Италия' },
  { key: 'japan', label: 'Япония' },
  { key: 'uk', label: 'Великобритания' },
  { key: 'korea', label: 'Южная Корея' },
] as const

export default function PortfolioGrid() {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all')
  const filtered = active === 'all' ? brandPortfolio : brandPortfolio.filter((brand) => brand.region === active)

  return (
    <section id="portfolio" className="border-t border-[var(--rule)] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:py-14">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="rubric">Портфель VN13</p>
            <h2 className="font-display mt-4 text-3xl leading-tight md:text-4xl">Все марки</h2>
          </div>
          <div className="-mx-5 overflow-x-auto px-5 md:mx-0 md:px-0" role="group" aria-label="Фильтр по стране">
            <div className="flex gap-6 whitespace-nowrap border-b border-[var(--rule)]">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActive(filter.key)}
                  aria-pressed={active === filter.key}
                  className={`-mb-px min-h-11 border-b pb-2 text-[0.9375rem] transition-colors ${
                    active === filter.key ? 'border-[var(--ink)] text-[var(--ink)]' : 'border-transparent text-[var(--muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-3 gap-y-8 md:gap-x-5 lg:grid-cols-4">
          {filtered.map((brand) => (
            <li key={brand.slug}>
              <Link href={`/brands/${brand.slug}/`} className="group block">
                <span className="relative block aspect-[3/4] overflow-hidden bg-[var(--cream)]">
                  <Image
                    src={responsiveCardImages[brand.slug] ?? brand.cardImage}
                    alt={`${brand.name} — ${brandImageDescriptors[brand.region]} в портфеле VN13`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </span>
                <span className="mt-3 flex flex-col gap-1 border-t xl:flex-row xl:items-baseline xl:justify-between xl:gap-3 border-[var(--rule)] pt-3">
                  <span className="font-display text-xl leading-tight md:text-2xl">{brand.name}</span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.14em] text-[var(--bronze)]">{brand.country}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
