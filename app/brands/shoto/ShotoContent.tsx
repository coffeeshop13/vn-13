'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLanguage } from '@/lib/context/LanguageContext'
import { brandGalleries } from '@/lib/data/brandGalleries'

const galleryImages = brandGalleries[4]

export function ShotoContent() {
  const { translations } = useLanguage()
  const breadcrumbItems = [{ label: translations.navPortfolio || 'Portfolio', href: '/#portfolio' }, { label: 'Shoto' }]

  return (
    <main>
      <Header />
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img src={galleryImages[0]?.src} alt="Shoto Brand Cover - Italian Luxury Footwear" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>
      
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="text-xs tracking-[0.2em] uppercase mb-4 mt-8" style={{ color: '#b8935a' }}>Brand</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ color: '#0f0f0f' }}>Shoto</h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>Italian artisanal footwear since the 1960s</p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <article className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#0f0f0f' }}>About the Brand</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>Shoto represents over six decades of Italian shoemaking excellence. Founded in the Marche region, each pair embodies the pinnacle of artisanal craftsmanship.</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>Using only the finest leathers and traditional techniques passed down through generations, Shoto creates footwear that ages beautifully with time.</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>Every shoe is hand-finished by master craftsmen, ensuring unparalleled quality and attention to detail that defines true Italian luxury.</p></div>
            </div>
          </article>

          <article className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Heritage & Craftsmanship</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>Shoto&apos;s commitment to traditional Italian shoemaking means each pair is constructed using time-honored techniques - from hand-cutting the leather to the final burnishing that gives every shoe its distinctive character.</p>
          </article>

          <section className="mt-20 pt-20 border-t" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <figure key={index} className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading={index < 3 ? 'eager' : 'lazy'} />
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>Discover Shoto</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>Contact our team to learn more about Shoto collections and partnership opportunities.</p>
            <CTALink href="/#contact">Get in Touch</CTALink>
          </section>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
