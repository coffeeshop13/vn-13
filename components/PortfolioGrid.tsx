'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'
import { brandPortfolio } from '@/lib/brand-portfolio'

export default function PortfolioGrid() {
  const { translations } = useLanguage()
  const [active, setActive] = useState('all')

  const filters = [
    { key: 'all', label: translations.filterAll },
    { key: 'france', label: translations.filterFrance },
    { key: 'italy', label: translations.filterItaly },
    { key: 'japan', label: translations.filterJapan },
  ]

  const filtered = active === 'all' ? brandPortfolio : brandPortfolio.filter((brand) => brand.region === active)

  return (
    <section id="portfolio" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#0f0f0f' }}>
              {translations.portfolioSubtitle}
            </h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActive(filter.key)}
                className="px-4 py-2 text-sm tracking-wide transition-all duration-200"
                style={{
                  backgroundColor: active === filter.key ? '#0f0f0f' : 'transparent',
                  color: active === filter.key ? '#fff' : '#6b6b6b',
                  border: `1px solid ${active === filter.key ? '#0f0f0f' : '#e0ddd8'}`,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brand, index) => (
            <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group block">
              <article>
                <div className="relative overflow-hidden rounded-[16px] mb-3 bg-[#f6f2ec]" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={brand.cardImage}
                    alt={`${brand.name} — ${brand.country.toLowerCase()} дизайнерская одежда в портфеле VN13`}
                    fill
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1" style={{ color: '#0f0f0f' }}>{brand.name}</h3>
                <p className="text-xs tracking-[0.18em] uppercase" style={{ color: '#b8935a' }}>{brand.country}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
