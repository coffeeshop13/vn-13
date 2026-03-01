'use client'

import { useLanguage } from '@/lib/context/LanguageContext'

export default function Stats() {
  const { translations } = useLanguage()

  const stats = [
    { value: '20+', label: translations.statsExperience },
    { value: '40+', label: translations.statsPartners },
    { value: '22+', label: translations.statsCities },
    { value: '100+', label: translations.statsRetail },
  ]

  return (
    <section id="story" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>{translations.statsAbout}</p>
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance" style={{ color: '#0f0f0f' }}>
          {translations.statsTitle}
        </h2>
        <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ color: '#6b6b6b' }}>
          {translations.statsDescription}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: '#b8935a' }}>{stat.value}</div>
              <p className="text-sm tracking-wide" style={{ color: '#6b6b6b' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
