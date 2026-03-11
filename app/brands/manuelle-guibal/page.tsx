'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { useLanguage } from '@/lib/context/LanguageContext'

export default function ManuelleGuibalPage() {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Brand</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            {translations.brandManuelleGuibalTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            {translations.brandManuelleGuibalSubtitle}
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          
          {/* About Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#0f0f0f' }}>{translations.brandManuelleGuibalAboutTitle}</h2>
            
            <p className="text-base leading-relaxed mb-6" style={{ color: '#6b6b6b', maxWidth: '900px' }}>
              {translations.brandManuelleGuibalHeroDesc}
            </p>
            
            <div className="grid md:grid-cols-3 gap-12 mt-12">
              <div>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalAboutDesc1}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalAboutDesc2}
                </p>
              </div>
              <div>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalAboutDesc3}
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalPhilosophyTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>
              {translations.brandManuelleGuibalPhilosophyDesc}
            </p>
          </div>

          {/* Core Values Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalHeritage}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  {translations.brandManuelleGuibalCraft}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalCraftDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  {translations.brandManuelleGuibalSustainability}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalSustainabilityDesc}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>
                  {translations.brandManuelleGuibalInnovation}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {translations.brandManuelleGuibalInnovationDesc}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalCTATitle}
            </h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              {translations.brandManuelleGuibalCTADesc}
            </p>
            <CTALink href="/#contact">Get in Touch</CTALink>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
