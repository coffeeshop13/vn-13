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
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <p className="text-base font-medium mb-3" style={{ color: '#76531f' }}>{translations.statsAbout}</p>
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-balance" style={{ color: '#0f0f0f' }}>
          Опыт, на который можно положиться
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed mb-10" style={{ color: '#5d5851' }}>
          Мы работаем с дизайнерскими брендами, бутиками и частными клиентами в России и СНГ.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-light mb-1" style={{ color: '#76531f' }}>{stat.value}</div>
              <p className="text-base" style={{ color: '#5d5851' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
