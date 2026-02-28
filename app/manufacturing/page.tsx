import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { ContentSection } from '@/components/ContentSection'

export const metadata: Metadata = {
  title: 'Manufacturing | VN13 Fashion Agency',
  description: 'Our European manufacturing partners and commitment to quality craftsmanship.',
}

export default function ManufacturingPage() {
  return (
    <main>
      <Header />
      <PageHero title="Manufacturing" subtitle="Crafted with precision in Europe" />
      
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>European Excellence</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              All our partner brands are manufactured in Europe, where centuries of craftsmanship traditions ensure exceptional quality. From Italy's leather workshops to France's textile mills, we support the continent's finest producers.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              This commitment guarantees not only superior quality but also reduces carbon footprints and supports local economies across Europe.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>Artisan Craftsmanship</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              We partner with manufacturers who employ skilled artisans preserving traditional techniques. Each piece reflects generations of expertise and dedication to perfection.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              Quality control at every step ensures that only the finest pieces reach our retail partners and their customers.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t" style={{ borderColor: '#e0ddd8' }}>
          <h3 className="text-2xl font-light mb-8" style={{ color: '#0f0f0f' }}>Our Manufacturing Regions</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-light mb-3" style={{ color: '#b8935a' }}>Italy</h4>
              <p style={{ color: '#6b6b6b' }}>Home to luxury leather goods, knitwear, and footwear manufacturing. Italian craftsmanship is renowned worldwide for precision and durability.</p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-3" style={{ color: '#b8935a' }}>France</h4>
              <p style={{ color: '#6b6b6b' }}>Center of haute couture and premium textile production. French manufacturers maintain the highest standards of elegance and innovation.</p>
            </div>
            <div>
              <h4 className="text-xl font-light mb-3" style={{ color: '#b8935a' }}>Portugal</h4>
              <p style={{ color: '#6b6b6b' }}>Emerging hub for innovative sustainable manufacturing. Portuguese producers combine traditional techniques with modern technology.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t" style={{ borderColor: '#e0ddd8' }}>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Quality Assurance</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Multi-stage quality control inspections</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Compliance with international standards</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Material certification and testing</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Sustainable production practices</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Production Standards</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Fair labor practices and safe working conditions</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Environmental protection measures</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Waste reduction and recycling programs</span>
                </li>
                <li className="flex gap-3">
                  <span style={{ color: '#b8935a' }}>✓</span>
                  <span style={{ color: '#6b6b6b' }}>Continuous improvement initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  )
}
