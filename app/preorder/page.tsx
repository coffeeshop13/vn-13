import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { PageHero } from '@/components/PageHero'
import { ContentSection } from '@/components/ContentSection'

export const metadata: Metadata = {
  title: 'Pre-Order | VN13 Fashion Agency',
  description: 'Exclusive pre-order access to upcoming collections from our European brand partners.',
}

export default function PreorderPage() {
  return (
    <main>
      <Header />
      <PageHero title="Pre-Order" subtitle="First access to exclusive collections" />
      
      <ContentSection>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>Exclusive Access</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              Through VN13, retailers gain early access to upcoming collections before official market release. Pre-order periods allow for strategic inventory planning and competitive advantage.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              Our pre-order process is streamlined and transparent, with detailed specifications, pricing, and delivery timelines for each collection.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>Strategic Planning</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
              We provide comprehensive market insights and trend analysis to help retailers make informed pre-order decisions. Each collection comes with retail recommendations and styling suggestions.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
              Secure your pieces early and maximize your margins with our competitive pre-order pricing structure.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t" style={{ borderColor: '#e0ddd8' }}>
          <h3 className="text-2xl font-light mb-8" style={{ color: '#0f0f0f' }}>How It Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0e9dc' }}>
                <span style={{ color: '#b8935a', fontSize: '20px', fontWeight: 'bold' }}>1</span>
              </div>
              <h4 className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Browse</h4>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Explore upcoming collections</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0e9dc' }}>
                <span style={{ color: '#b8935a', fontSize: '20px', fontWeight: 'bold' }}>2</span>
              </div>
              <h4 className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Select</h4>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Choose pieces and sizes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0e9dc' }}>
                <span style={{ color: '#b8935a', fontSize: '20px', fontWeight: 'bold' }}>3</span>
              </div>
              <h4 className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Confirm</h4>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Lock in your order</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0e9dc' }}>
                <span style={{ color: '#b8935a', fontSize: '20px', fontWeight: 'bold' }}>4</span>
              </div>
              <h4 className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Deliver</h4>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Receive your collection</p>
            </div>
          </div>
        </div>
      </ContentSection>

      <Footer />
    </main>
  )
}
