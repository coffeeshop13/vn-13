'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function Hero() {
  const { translations } = useLanguage()

  return (
    <section className="relative min-h-[78vh] flex flex-col justify-end" style={{ backgroundColor: '#0f0f0f' }}>
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 md:pb-20 pt-28 w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-none mb-5 text-white text-balance" style={{ letterSpacing: '-0.02em' }}>
          {translations.heroTitle}
        </h1>
        <p className="text-base md:text-lg font-light max-w-xl mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          {translations.heroDescription}
        </p>
      </div>
    </section>
  )
}
