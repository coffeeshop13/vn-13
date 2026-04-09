'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLanguage } from '@/lib/context/LanguageContext'
import { brandGalleries } from '@/lib/data/brandGalleries'

const galleryImages = brandGalleries[5]

export function PostCoContent() {
  const { translations } = useLanguage()
  const breadcrumbItems = [{ label: translations.navPortfolio || 'Portfolio', href: '/#portfolio' }, { label: 'Post & Co' }]

  return (
    <main>
      <Header />
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <img src={galleryImages[0]?.src} alt="Post & Co Brand Cover - Italian Leather Accessories" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
      </section>
      
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="text-xs tracking-[0.2em] uppercase mb-4 mt-8" style={{ color: '#b8935a' }}>Brand</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6" style={{ color: '#0f0f0f' }}>Post & Co</h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>Italian handcrafted leather accessories</p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <article className="mb-20">
            <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#0f0f0f' }}>About the Brand</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>Post & Co represents the finest in Italian leather craftsmanship, specializing in handmade belts and accessories that combine timeless design with exceptional quality.</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>Each piece is crafted using traditional techniques and the finest Italian leathers, ensuring durability and beauty that improves with age.</p></div>
              <div><p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>From studded statement pieces to classic minimalist designs, Post & Co offers a range that caters to diverse aesthetic preferences while maintaining impeccable quality.</p></div>
            </div>
          </article>

          <article className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Italian Leather Mastery</h2>
            <p className="text-base leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>Post & Co sources the finest vegetable-tanned leathers from renowned Italian tanneries, creating accessories that develop a unique patina over time, telling the story of their journey with each wearer.</p>
          </article>

          <section className="mt-20 pt-20 border-t" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <figure key={index} className="relative overflow-hidden" style={{ aspectRatio: '1/1' }}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading={index < 3 ? 'eager' : 'lazy'} />
                </figure>
              ))}
            </div>
          </section>

          <section className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>Discover Post & Co</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>Contact our team to learn more about Post & Co collections and partnership opportunities.</p>
            <CTALink href="/#contact">Get in Touch</CTALink>
          </section>
          <Breadcrumbs items={breadcrumbItems} />
        </div>
      </section>
      <Footer />
    </main>
  )
}
