'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { useLanguage } from '@/lib/context/LanguageContext'
import type { BrandPortfolioItem } from '@/lib/brand-portfolio'

type BrandPortfolioPageProps = {
  brand: BrandPortfolioItem
  heroImage: string
  gallery: Array<{ src: string; alt: string }>
}

export default function BrandPortfolioPage({ brand, heroImage, gallery }: BrandPortfolioPageProps) {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />

      <section className="relative w-full h-[80vh] min-h-[640px] flex items-end overflow-hidden">
        <img src={heroImage} alt={brand.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
        <div className="relative z-10 max-w-5xl mx-auto w-full px-6 pb-16 md:pb-20 text-white">
          <p className="text-xs tracking-[0.22em] uppercase mb-3 opacity-80">Brand portfolio</p>
          <h1 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl">{brand.title}</h1>
        </div>
      </section>

      <section className="pt-24 pb-16 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            {brand.country}
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
            {brand.name}
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: '#6b6b6b' }}>
            {brand.description}
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                Позиционирование
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {brand.positioning}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                Почему это важно для VN13
              </h3>
              <ul className="space-y-3 text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {brand.whyItFits.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                Поисковые акценты
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {brand.keywords.join(', ')}
              </p>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalAboutTitle}
            </h3>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: '#6b6b6b' }}>
              {brand.intro}
            </p>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>
              Collection
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((image) => (
                <div key={image.src} className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalCTATitle}
            </h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              {translations.brandManuelleGuibalCTADesc}
            </p>
            <CTALink href="/#contact">Связаться</CTALink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

