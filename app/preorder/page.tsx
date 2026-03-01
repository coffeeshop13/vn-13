import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'Pre-Order | VN13 Fashion Agency',
  description: 'Exclusive pre-order access to upcoming collections from our European brand partners.',
}

export default function PreorderPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Pre-Order</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            First Access to Exclusive Collections
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            Secure your pieces before the official market release and maximize your competitive advantage with VN13 pre-order access.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          
          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Exclusive Access for Retailers</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Through VN13, retailers gain early access to upcoming collections before official market release. Pre-order periods allow for strategic inventory planning and securing the most sought-after pieces before they sell out.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Our pre-order process is streamlined and transparent, with detailed specifications, sizing information, pricing, and guaranteed delivery timelines for each collection.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                Benefit from competitive pre-order pricing and secure your stock before competitors gain access to the collection.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Strategic Planning & Insights</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                We provide comprehensive market insights and trend analysis to help retailers make informed pre-order decisions. Each collection comes with detailed retail recommendations, styling suggestions, and marketing materials.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Our team works directly with retailers to understand their needs and help them select pieces that align with their customer base and market positioning.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                Secure competitive pricing and maximize your margins with our flexible pre-order pricing structure and volume discounts.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>How Pre-Order Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>1</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>Browse Collections</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>View detailed images, specifications, and pricing for upcoming collections</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>2</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>Select Pieces</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Choose specific items, sizes, and quantities for your order</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>3</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>Confirm Order</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Lock in your order with guaranteed pricing and delivery date</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#f0e9dc' }}>
                  <span style={{ color: '#b8935a', fontSize: '28px', fontWeight: 'bold' }}>4</span>
                </div>
                <h3 className="text-lg font-medium mb-3" style={{ color: '#0f0f0f' }}>Receive Collection</h3>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Your pre-ordered pieces arrive at your store on the guaranteed date</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>Pre-Order Benefits</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>For Your Business</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Secure inventory before public release</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Competitive pre-order pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Guaranteed delivery dates</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Volume discount opportunities</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Direct communication with brands</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>For Your Customers</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Exclusive access to limited collections</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Early ownership of new designs</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Complete size and color selection</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Authentic European craftsmanship</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>✓</span>
                    <span style={{ color: '#6b6b6b' }}>Investment in timeless pieces</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>Ready to Join Our Pre-Order Program?</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              Contact our team to discuss your pre-order needs and access our upcoming collections.
            </p>
            <CTALink href="/#contact">Get Started</CTALink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
