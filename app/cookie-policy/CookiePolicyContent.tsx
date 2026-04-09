'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLanguage } from '@/lib/context/LanguageContext'

export function CookiePolicyContent() {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />
      
      <article className="pt-32 pb-20 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: translations.cookieTitle || 'Cookie Policy' }]} />
          
          <p className="text-xs tracking-[0.2em] uppercase mb-4 mt-8" style={{ color: '#b8935a' }}>
            {translations.cookieLabel}
          </p>
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-8" style={{ color: '#0f0f0f' }}>
            {translations.cookieTitle}
          </h1>
          <p className="text-sm mb-12" style={{ color: '#6b6b6b' }}>
            {translations.cookieUpdated}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.cookieIntroTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.cookieIntroDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.cookieTypesTitle}
              </h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-light mb-3" style={{ color: '#0f0f0f' }}>
                  {translations.cookieEssentialTitle}
                </h3>
                <p className="text-base leading-relaxed mb-2" style={{ color: '#6b6b6b' }}>
                  {translations.cookieEssentialDesc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-light mb-3" style={{ color: '#0f0f0f' }}>
                  {translations.cookieAnalyticsTitle}
                </h3>
                <p className="text-base leading-relaxed mb-2" style={{ color: '#6b6b6b' }}>
                  {translations.cookieAnalyticsDesc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-light mb-3" style={{ color: '#0f0f0f' }}>
                  {translations.cookieFunctionalTitle}
                </h3>
                <p className="text-base leading-relaxed mb-2" style={{ color: '#6b6b6b' }}>
                  {translations.cookieFunctionalDesc}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.cookieManageTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.cookieManageDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.cookieThirdPartyTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.cookieThirdPartyDesc}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
                {translations.cookieContactTitle}
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                {translations.cookieContactDesc}
              </p>
              <p className="text-base" style={{ color: '#0f0f0f' }}>
                <a href="mailto:info@vn-13.com" className="hover:opacity-70 transition-opacity" style={{ color: '#b8935a' }}>
                  info@vn-13.com
                </a>
              </p>
            </section>
          </div>
          
          <Breadcrumbs items={[{ label: translations.cookieTitle || 'Cookie Policy' }]} />
        </div>
      </article>

      <Footer />
    </main>
  )
}
