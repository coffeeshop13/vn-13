'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

const brands = [
  { id: 1, name: 'Manuelle Guibal', country: 'Франция', region: 'france', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg', slug: 'manuelle-guibal', isExternal: true },
  { id: 2, name: 'H+ Hannoh Wessel', country: 'Италия', region: 'italy', image: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318', slug: 'hannoh-wessel', isExternal: true },
  { id: 3, name: 'Moyuru', country: 'Япония', region: 'japan', image: 'https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100', slug: 'moyuru', isExternal: true },
  { id: 4, name: 'Shoto', country: 'Италия', region: 'italy', image: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514', slug: 'shoto', isExternal: true },
  { id: 5, name: 'Post & Co', country: 'Италия', region: 'italy', image: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633', slug: 'post-co', isExternal: true },
  { id: 6, name: 'Aequamente', country: 'Италия', region: 'italy', image: 'https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696&width=800', slug: 'aequamente', isExternal: true },
  { id: 7, name: 'MJ Watson', country: 'Италия', region: 'italy', image: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296&width=800', slug: 'mj-watson', isExternal: true },
  { id: 8, name: 'Sula', country: 'Великобритания', region: 'uk', image: '/brands/sula.jpg', slug: 'sula' },
  { id: 9, name: 'SOH', country: 'Южная Корея', region: 'korea', image: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533', slug: 'soh', isExternal: true },
]

export default function PortfolioGrid() {
  const { translations } = useLanguage()
  const [active, setActive] = useState('all')

  const filters = [
    { key: 'all', label: translations.filterAll },
    { key: 'france', label: translations.filterFrance },
    { key: 'italy', label: translations.filterItaly },
    { key: 'japan', label: translations.filterJapan },
  ]

  const filtered = active === 'all' ? brands : brands.filter(b => b.region === active)

  return (
    <section id="portfolio" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>{translations.portfolioTitle}</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ color: '#0f0f0f' }}>{translations.portfolioSubtitle}</h2>
          </div>

          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className="px-5 py-2 text-sm tracking-wide transition-all duration-200"
                style={{
                  backgroundColor: active === f.key ? '#0f0f0f' : 'transparent',
                  color: active === f.key ? '#fff' : '#6b6b6b',
                  border: `1px solid ${active === f.key ? '#0f0f0f' : '#e0ddd8'}`,
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((brand, index) => {
            const BrandCard = (
              <article className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4" style={{ aspectRatio: '3/4' }}>
                  {brand.isExternal ? (
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <h3 className="font-medium text-sm mb-1" style={{ color: '#0f0f0f' }}>{brand.name}</h3>
                <p className="text-xs tracking-wide" style={{ color: '#b8935a' }}>{brand.country}</p>
              </article>
            )

            if (brand.slug) {
              return (
                <Link key={brand.id} href={`/brands/${brand.slug}`}>
                  {BrandCard}
                </Link>
              )
            }

            return <div key={brand.id}>{BrandCard}</div>
          })}
        </div>
      </div>
    </section>
  )
}
