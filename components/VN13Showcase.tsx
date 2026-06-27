'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/context/LanguageContext'

const featuredLooks = [
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-white-layered-dress.webp',
    alt: 'VN13 black jacket with white layered dress',
  },
  {
    src: '/brands/vn13-catalog/vn13-blue-floral-designer-dress.webp',
    alt: 'VN13 blue floral designer dress',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-textured-designer-coat.webp',
    alt: 'VN13 black textured designer coat',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt.webp',
    alt: 'VN13 white oversize designer shirt',
  },
]

export default function VN13Showcase() {
  const { translations } = useLanguage()

  return (
    <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1.05fr_1.4fr] gap-10 lg:gap-14 items-end">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>
              {translations.vn13ShowcaseEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-5 text-balance" style={{ color: '#0f0f0f' }}>
              {translations.vn13ShowcaseTitle}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6b6b6b' }}>
              {translations.vn13ShowcaseDescription}
            </p>
            <Link
              href="/vn-13-brand"
              className="inline-flex items-center justify-center px-7 py-3 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-[#a07e4a]"
              style={{ backgroundColor: '#b8935a', color: '#fff' }}
            >
              {translations.vn13ShowcaseButton}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <Link href="/vn-13-brand" className="group col-span-2 block">
              <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src="/brands/vn13-catalog/vn13-designer-womenswear-collection.webp"
                  alt="VN13 designer womenswear collection"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {featuredLooks.map((look) => (
              <Link key={look.src} href="/vn-13-brand" className="group block">
                <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={look.src}
                    alt={look.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
