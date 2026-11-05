'use client'

import { useEffect, useRef, useState } from 'react'
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

// 1 марка, 2 марки, 5 марок
function plural(n: number, one: string, few: string, many: string) {
  const d = n % 10
  const h = n % 100
  if (d === 1 && h !== 11) return one
  if (d >= 2 && d <= 4 && (h < 12 || h > 14)) return few
  return many
}

const cardImage = (brand: (typeof brandPortfolio)[number]) => responsiveCardImages[brand.slug] ?? brand.cardImage
const altFor = (brand: (typeof brandPortfolio)[number]) =>
  `${brand.name} — ${brandImageDescriptors[brand.region]} в портфеле VN13`

/**
 * Brand portfolio as an index. On desktop with a mouse, hovering a row shows the
 * brand photo next to the cursor; on touch screens each row carries a thumbnail.
 */
export default function HomeBrandIndex() {
  const [active, setActive] = useState<number | null>(null)
  const preview = useRef<HTMLDivElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef<number | null>(null)

  // Ease the preview towards the cursor; the preview is position: fixed, so it
  // stays under the cursor while the page scrolls.
  const tick = () => {
    const c = current.current
    const t = target.current
    c.x += (t.x - c.x) * 0.2
    c.y += (t.y - c.y) * 0.2
    if (preview.current) preview.current.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`
    frame.current = Math.abs(t.x - c.x) + Math.abs(t.y - c.y) > 0.5 ? requestAnimationFrame(tick) : null
  }
  const moveTo = (x: number, y: number, jump: boolean) => {
    target.current = { x, y }
    if (jump) current.current = { x, y }
    if (frame.current === null) frame.current = requestAnimationFrame(tick)
  }
  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current)
  }, [])

  const countries = new Set(brandPortfolio.map((b) => b.country)).size

  return (
    <section id="portfolio" className="border-t border-[var(--rule)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="rubric">
              Портфель VN13 · {brandPortfolio.length} {plural(brandPortfolio.length, 'марка', 'марки', 'марок')} · {countries}{' '}
              {plural(countries, 'страна', 'страны', 'стран')}
            </p>
            <h2 className="font-display mt-5 text-4xl md:text-5xl">Другие бренды</h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-[15px] leading-6 text-[var(--muted)]">
              Нажмите на бренд, чтобы посмотреть фотографии и узнать о нём больше.
            </p>
            <Link href="/brands/" className="text-link mt-4">
              Все бренды <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <ol
          className="brand-index border-b border-[var(--rule)]"
          onMouseMove={(e) => moveTo(e.clientX, e.clientY, false)}
          onMouseLeave={() => setActive(null)}
        >
          {brandPortfolio.map((brand, i) => (
            <li
              key={brand.slug}
              className="brand-row border-t border-[var(--rule)] transition-opacity duration-300"
              onMouseEnter={(e) => {
                moveTo(e.clientX, e.clientY, active === null)
                setActive(i)
              }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-4 md:grid-cols-[1fr_14rem_1.5rem] md:gap-8 md:py-5"
              >
                <span className="relative block aspect-[3/4] overflow-hidden bg-[#f6f2ec] md:hidden">
                  <Image src={cardImage(brand)} alt={altFor(brand)} fill sizes="56px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="font-display block truncate text-[1.75rem] leading-tight transition-transform duration-500 md:text-4xl lg:text-[2.75rem] lg:group-hover:translate-x-3">
                    {brand.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:hidden">
                    {brand.country}
                  </span>
                </span>
                <span className="hidden text-xs uppercase tracking-[0.18em] text-[var(--muted)] md:block">
                  {brand.country}
                </span>
                <span aria-hidden="true" className="text-lg text-[var(--bronze)] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop hover preview; decorative (each row already has a labelled image on mobile) */}
      <div
        ref={preview}
        aria-hidden="true"
        className="brand-preview pointer-events-none fixed left-0 top-0 z-40"
        style={{ transform: 'translate3d(-9999px, -9999px, 0)' }}
      >
        <div
          className="relative -ml-28 -mt-40 aspect-[3/4] w-56 overflow-hidden bg-[#f6f2ec] shadow-2xl shadow-black/20 transition-[opacity,scale] duration-300"
          style={{ opacity: active === null ? 0 : 1, scale: active === null ? '0.9' : '1' }}
        >
          {brandPortfolio.map((brand, i) => (
            <Image
              key={brand.slug}
              src={cardImage(brand)}
              alt=""
              fill
              sizes="224px"
              loading="lazy"
              className={`object-cover transition-opacity duration-300 ${active === i ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
