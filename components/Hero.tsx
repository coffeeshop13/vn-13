'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Hero() {
  const { translations } = useLanguage()
  const [retailerHover, setRetailerHover] = useState(false)
  const [brandHover, setBrandHover] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-end" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-vn13-showroom.jpg"
          alt="VN13 Fashion Agency"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.45 }}
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-32 pt-36 w-full">
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#b8935a' }}>
          {translations.heroSubtitle}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-6 text-white text-balance" style={{ letterSpacing: '-0.02em' }}>
          {translations.heroTitle}
        </h1>
        <p className="text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          {translations.heroDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ backgroundColor: retailerHover ? '#a07e4a' : '#b8935a', color: '#fff' }}
            onMouseEnter={() => setRetailerHover(true)}
            onMouseLeave={() => setRetailerHover(false)}
          >
            {translations.heroButtonRetailers}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.5)', color: '#fff', backgroundColor: brandHover ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            onMouseEnter={() => setBrandHover(true)}
            onMouseLeave={() => setBrandHover(false)}
          >
            {translations.heroButtonBrands}
          </a>
        </div>
      </div>
    </section>
  )
}
