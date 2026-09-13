'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function ManufacturingPageContent() {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            {translations.navManufacturing}
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {translations.navManufacturing}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            {translations.sustainabilityEthicalSourcingDesc3}
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <article>
              <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                {translations.sustainabilityQualityTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc2}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc3}
              </p>
            </article>

            <article>
              <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                {translations.sustainabilityPillarsTitle}
              </h2>
              <ul className="space-y-4 text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                <li>{translations.sustainabilityCarbon}</li>
                <li>{translations.sustainabilityPackaging}</li>
                <li>{translations.sustainabilityWater}</li>
                <li>{translations.sustainabilityChemicals}</li>
              </ul>
            </article>
          </div>

          <div className="mt-16 pt-10 border-t flex flex-wrap gap-x-8 gap-y-4" style={{ borderColor: '#e0ddd8' }}>
            <Link href="/brands" className="underline underline-offset-4" style={{ color: '#6b5335' }}>
              {translations.navBrands}
            </Link>
            <Link href="/contact" className="underline underline-offset-4" style={{ color: '#6b5335' }}>
              {translations.navContact}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
