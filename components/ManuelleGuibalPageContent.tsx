'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { useLanguage } from '@/lib/context/LanguageContext'

const lookbookImages = [
  {
    src: '/brands/manuelle-lookbook/lookbook-01.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 1',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-02.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 2',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-03.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 3',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-04.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 4',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-05.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 5',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-06.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 6',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-07.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 7',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-08.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 8',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-09.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 9',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-10.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 10',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-11.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 11',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-12.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 12',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-13.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 13',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-14.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 14',
  },
  {
    src: '/brands/manuelle-lookbook/lookbook-15.seo.webp',
    alt: 'Manuelle Guibal summer lookbook image 15',
  },
]

export default function ManuelleGuibalPageContent() {
  const { translations } = useLanguage()

  return (
    <main>
      <Header />

      <section className="lg:hidden bg-[#fafaf8] px-2 pb-0 pt-[88px]" aria-label="Manuelle Guibal lookbook">
        <h1 className="text-4xl font-light leading-tight" style={{ color: '#0f0f0f' }}>
          {translations.brandManuelleGuibalTitle}
        </h1>
        <p className="mt-4 pb-6 text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
          {translations.brandManuelleGuibalSubtitle}
        </p>
        <div className="-mx-2">
          {lookbookImages.map((image, index) => (
            <Image
              key={`mobile-${image.src}`}
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1600}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="block w-full h-auto"
            />
          ))}
        </div>
      </section>

      <section className="relative hidden w-full h-screen items-center justify-center overflow-hidden lg:flex">
        <Image
          src="/brands/manuelle-lookbook/lookbook-03.seo.webp"
          alt="Manuelle Guibal summer lookbook cover"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      <section className="hidden pt-32 pb-16 md:pt-48 md:pb-24 px-6 lg:block" style={{ backgroundColor: '#fafaf8' }}>
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

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#0f0f0f' }}>{translations.brandManuelleGuibalAboutTitle}</h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#6b6b6b', maxWidth: '900px' }}>
              {translations.brandManuelleGuibalHeroDesc}
            </p>
            <div className="grid md:grid-cols-3 gap-12 mt-12">
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalAboutDesc1}</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalAboutDesc2}</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalAboutDesc3}</p></div>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalPhilosophyTitle}
            </h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>
              {translations.brandManuelleGuibalPhilosophyDesc}
            </p>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>
              {translations.brandManuelleGuibalHeritage}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div><h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.brandManuelleGuibalCraft}</h3><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalCraftDesc}</p></div>
              <div><h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.brandManuelleGuibalSustainability}</h3><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalSustainabilityDesc}</p></div>
              <div><h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>{translations.brandManuelleGuibalInnovation}</h3><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>{translations.brandManuelleGuibalInnovationDesc}</p></div>
            </div>
          </div>

          <div className="mt-20 hidden border-t pt-20 lg:block" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>
              Lookbook Eté
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-10" style={{ color: '#6b6b6b' }}>
              Подборка из официального летнего lookbook Manuelle Guibal. Здесь собраны реальные редакционные кадры бренда, чтобы страница показывала фактическую эстетику коллекции, а не ограничивалась несколькими повторяющимися изображениями.
            </p>
            <div className="columns-1 sm:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
              {lookbookImages.map((image, index) => (
                <div key={image.src} className={`mb-6 break-inside-avoid overflow-hidden ${index < 2 ? 'rounded-[28px]' : 'rounded-[22px]'}`}>
                  <Image src={image.src} alt={image.alt} width={1200} height={1600} loading="lazy" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>

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
