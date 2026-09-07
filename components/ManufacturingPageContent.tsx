'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function ManufacturingPageContent() {
  const { translations } = useLanguage()
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.navManufacturing}</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {translations.manufacturingTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            {translations.manufacturingSubtitle}
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.manufacturingExcellenceTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingExcellenceDesc1}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingExcellenceDesc2}</p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.manufacturingExcellenceDesc3}</p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.manufacturingCraftsmanshipTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingCraftsmanshipDesc1}</p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingCraftsmanshipDesc2}</p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.manufacturingCraftsmanshipDesc3}</p>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>{translations.manufacturingHubsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>{translations.manufacturingItaly}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingItalyDesc}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}><strong>Specialties:</strong> {translations.manufacturingItalySpecialties}</p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>{translations.manufacturingFrance}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingFranceDesc}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}><strong>Specialties:</strong> {translations.manufacturingFranceSpecialties}</p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>{translations.manufacturingPortugal}</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>{translations.manufacturingPortugalDesc}</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}><strong>Specialties:</strong> {translations.manufacturingPortugalSpecialties}</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>{translations.manufacturingStandardsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.manufacturingQualityTitle}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingQualityMulti}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingQualityMultiDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingQualityCompliance}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingQualityComplianceDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingQualityCertification}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingQualityCertificationDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingQualityTesting}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingQualityTestingDesc}</p></div></li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.manufacturingEthicsTitle}</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingEthicsLabor}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingEthicsLaborDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingEthicsEnvironment}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingEthicsEnvironmentDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingEthicsCommunity}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingEthicsCommunityDesc}</p></div></li>
                  <li className="flex gap-4"><span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span><div><p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.manufacturingEthicsImprovement}</p><p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.manufacturingEthicsImprovementDesc}</p></div></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>{translations.manufacturingCTATitle}</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              {translations.manufacturingCTADesc}
            </p>
            <CTALink href="/#contact">Обсудить производство</CTALink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
