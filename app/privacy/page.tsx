'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function PrivacyPage() {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />
      
      <article className="pt-32 pb-20 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            {translations.privacyLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ color: '#0f0f0f' }}>
            {translations.privacyTitle}
          </h1>
          <p className="text-sm mb-12" style={{ color: '#6b6b6b' }}>
            {translations.privacyUpdated}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacyIntroTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacyIntroDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacyCollectionTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacyCollectionDesc}
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyCollectionPersonal}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyCollectionContact}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyCollectionBusiness}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyCollectionUsage}</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacyUseTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacyUseDesc}
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyUseService}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyUseCommunication}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyUseImprovement}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyUseLegal}</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacySharingTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacySharingDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacySecurityTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacySecurityDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacyRightsTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacyRightsDesc}
              </p>
              <ul className="space-y-2 ml-6 mb-4">
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyRightsAccess}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyRightsCorrection}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyRightsDeletion}</li>
                <li className="text-base" style={{ color: '#6b6b6b' }}>{translations.privacyRightsObject}</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.privacyContactTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.privacyContactDesc}
              </p>
              <p className="text-base" style={{ color: '#0f0f0f' }}>
                <a href="mailto:info@vn-13.com" className="hover:opacity-70 transition-opacity" style={{ color: '#b8935a' }}>
                  info@vn-13.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
