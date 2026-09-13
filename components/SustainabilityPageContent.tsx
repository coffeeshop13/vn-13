'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function SustainabilityPageContent() {
  const { translations } = useLanguage()
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.navSustainability}</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {translations.sustainabilityTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            {translations.sustainabilitySubtitle}
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.sustainabilityEthicalSourcingTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityEthicalSourcingDesc1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityEthicalSourcingDesc2}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityEthicalSourcingDesc3}
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.sustainabilityQualityTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc2}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {translations.sustainabilityQualityDesc3}
              </p>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>{translations.sustainabilityStatsEthical}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.sustainabilityStatsEthicalDesc}</p>
              </div>
              <div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>{translations.sustainabilityStatsZero}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.sustainabilityStatsZeroDesc}</p>
              </div>
              <div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>{translations.sustainabilityStatsYears}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.sustainabilityStatsYearsDesc}</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>{translations.sustainabilityPillarsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.sustainabilityEnvironmental}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityCarbon}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityPackaging}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityWater}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityChemicals}</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.sustainabilitySocial}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityWages}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilitySafe}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityArtisan}</span></li>
                  <li className="flex gap-3"><span style={{ color: '#b8935a' }}>•</span><span style={{ color: '#6b6b6b' }}>{translations.sustainabilityCommunity}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
