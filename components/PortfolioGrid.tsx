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

export default function PortfolioGrid() {
  const [active, setActive] = useState('all')

  const filters = [
    { key: 'all', label: 'Все бренды' },
    { key: 'france', label: 'Франция' },
    { key: 'italy', label: 'Италия' },
    { key: 'japan', label: 'Япония' },
  ]

  const filtered = active === 'all' ? brandPortfolio : brandPortfolio.filter((brand) => brand.region === active)

  return (
    <section id="portfolio" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="text-base font-medium" style={{ color: '#8a6b3f' }}>Портфель VN13</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-light" style={{ color: '#1d1b18' }}>Другие бренды</h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: '#5d5851' }}>Нажмите на бренд, чтобы посмотреть фотографии и узнать о нём больше.</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActive(filter.key)}
                className="min-h-12 px-4 text-base transition-all duration-200"
                style={{
                  backgroundColor: active === filter.key ? '#1d1b18' : 'transparent',
                  color: active === filter.key ? '#fff' : '#6b6b6b',
                  border: `1px solid ${active === filter.key ? '#1d1b18' : '#e0ddd8'}`,
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brand) => (
            <Link key={brand.slug} href={`/brands/${brand.slug}`} className="group block">
              <article>
                <div className="relative overflow-hidden rounded-[16px] mb-3 bg-[#f6f2ec]" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={responsiveCardImages[brand.slug] ?? brand.cardImage}
                    alt={`${brand.name} — ${brandImageDescriptors[brand.region]} в портфеле VN13`}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-xl mb-1" style={{ color: '#1d1b18' }}>{brand.name}</h3>
                <p className="text-base" style={{ color: '#8a6b3f' }}>{brand.country}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
