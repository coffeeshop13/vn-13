'use client'

import { useLanguage } from '@/lib/context/LanguageContext'

export default function ContactForm() {
  const { translations } = useLanguage()

  return (
    <section id="contact" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>Contact</p>
          <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ color: '#0f0f0f' }}>{translations.contactTitle}</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#6b6b6b' }}>
            {translations.contactDescription}
          </p>
          <div className="space-y-4 text-base" style={{ color: '#6b6b6b' }}>
            <div>
              <p className="text-sm uppercase tracking-wide mb-2" style={{ color: '#b8935a' }}>Phone</p>
              <a href="tel:+79266022089" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#0f0f0f' }}>
                +7 926 602 20 89
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-wide mb-2" style={{ color: '#b8935a' }}>Email</p>
              <a href="mailto:info@vn-13.com" className="font-medium hover:opacity-70 transition-opacity" style={{ color: '#0f0f0f' }}>
                info@vn-13.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
