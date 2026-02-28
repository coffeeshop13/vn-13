import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { ContentSection } from '@/components/ContentSection'

export const metadata: Metadata = {
  title: 'Sustainability | VN13 Fashion Agency',
  description: 'Our commitment to sustainable and ethical fashion practices in luxury European brands.',
}

export default function SustainabilityPage() {
  return (
    <main>
      <Header />
      <PageHero title="Sustainability" subtitle="Our commitment to responsible fashion" />
      
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>Ethical Sourcing</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              We partner exclusively with brands that prioritize ethical manufacturing and fair labor practices. Every partner in our portfolio meets rigorous sustainability standards and maintains transparent supply chains.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              Our commitment extends beyond compliance to active collaboration with artisans and manufacturers who share our values of craftsmanship and responsibility.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>Quality Over Quantity</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              We believe that true luxury is sustainable. By curating timeless pieces and supporting slow fashion, we reduce waste and promote longevity in an industry driven by trends.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              Each collection we represent is designed to last generations, encouraging consumers to invest in quality rather than quantity.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t" style={{ borderColor: '#e0ddd8' }}>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>100%</div>
              <p className="font-medium" style={{ color: '#0f0f0f' }}>Ethical Partners</p>
              <p className="text-sm mt-2" style={{ color: '#6b6b6b' }}>All our brands meet sustainability standards</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>0</div>
              <p className="font-medium" style={{ color: '#0f0f0f' }}>Single-Use Materials</p>
              <p className="text-sm mt-2" style={{ color: '#6b6b6b' }}>Committed to eliminating disposable packaging</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>&infin;</div>
              <p className="font-medium" style={{ color: '#0f0f0f' }}>Timeless Design</p>
              <p className="text-sm mt-2" style={{ color: '#6b6b6b' }}>Collections designed to transcend seasons</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  )
}
