'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { useLanguage } from '@/lib/context/LanguageContext'
import Link from 'next/link'

export default function PreorderPageContent() {
  const { translations } = useLanguage()
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>{translations.navPreorder}</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {translations.preorderTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            {translations.preorderSubtitle}
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.preorderExclusiveAccessTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.preorderExclusiveAccessDesc1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.preorderExclusiveAccessDesc2}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {translations.preorderExclusiveAccessDesc3}
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.preorderStrategicPlanningTitle}</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.preorderStrategicPlanningDesc1}
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.preorderStrategicPlanningDesc2}
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                {translations.preorderStrategicPlanningDesc3}
              </p>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>{translations.preorderProcessTitle}</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>1</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>{translations.preorderProcessBrowse}</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.preorderProcessBrowseDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>2</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>{translations.preorderProcessSelect}</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.preorderProcessSelectDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>3</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>{translations.preorderProcessConfirm}</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.preorderProcessConfirmDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>4</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>{translations.preorderProcessDeliver}</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>{translations.preorderProcessDeliverDesc}</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>{translations.preorderBenefitsTitle}</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.preorderBenefitsBusinessTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitSecure}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitPricing}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitDelivery}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitVolume}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitCommunication}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.preorderBenefitsCustomersTitle}</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitExclusive}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitEarly}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitSelection}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitCraftsmanship}</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>{translations.preorderBenefitInvestment}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>{translations.preorderCTATitle}</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              {translations.preorderCTADesc}
            </p>
            <CTALink href="/#contact">Обсудить предзаказ</CTALink>
          </div>

          <div className="mt-20 pt-20 border-t" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>
              {translations.preorderRelatedTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/optovaya-zhenskaya-odezhda" className="block p-5 border transition-colors hover:bg-[#faf7f2]" style={{ borderColor: '#e0ddd8' }}>
                {translations.preorderRelatedWholesale}
              </Link>
              <Link href="/zhenskaya-odezhda-dlya-butikov" className="block p-5 border transition-colors hover:bg-[#faf7f2]" style={{ borderColor: '#e0ddd8' }}>
                {translations.preorderRelatedBoutiques}
              </Link>
              <Link href="/evropeyskie-brendy-zhenskoy-odezhdy" className="block p-5 border transition-colors hover:bg-[#faf7f2]" style={{ borderColor: '#e0ddd8' }}>
                {translations.preorderRelatedBrands}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
