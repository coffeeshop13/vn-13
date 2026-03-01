'use client'

import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sustainability | VN13 Fashion Agency',
  description: 'Our commitment to sustainable and ethical fashion practices in luxury European brands.',
}

export default function SustainabilityPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Sustainability</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Fashion with Purpose
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            Our commitment to sustainable and ethical fashion practices reflects our belief that luxury and responsibility go hand in hand.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          
          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Ethical Sourcing</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                We partner exclusively with brands that prioritize ethical manufacturing and fair labor practices. Every partner in our portfolio meets rigorous sustainability standards and maintains transparent supply chains from raw materials to finished products.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Our commitment extends beyond compliance to active collaboration with artisans and manufacturers who share our values of craftsmanship and responsibility.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                We conduct regular audits and maintain direct relationships with production facilities to ensure continuous improvement and adherence to our ethical standards.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Quality Over Quantity</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                We believe that true luxury is sustainable. By curating timeless pieces and supporting slow fashion, we reduce waste and promote longevity in an industry traditionally driven by seasonal trends.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Each collection we represent is designed to last generations, encouraging consumers to invest in quality pieces that transcend time rather than disposable fashion.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                Our partners focus on timeless designs, superior materials, and impeccable construction that ensures longevity and reduces the need for frequent replacements.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>100%</div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Ethical Partners</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>All our brands meet international sustainability standards and ethical guidelines.</p>
              </div>
              <div>
                <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>0</div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Single-Use Materials</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Committed to eliminating disposable packaging and reducing environmental impact.</p>
              </div>
              <div>
                <div className="text-4xl font-light mb-3" style={{ color: '#b8935a' }}>10+</div>
                <p className="font-medium mb-2" style={{ color: '#0f0f0f' }}>Years of Commitment</p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Over a decade of dedicated work in sustainable fashion distribution.</p>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>Our Sustainability Pillars</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>Environmental Responsibility</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Carbon-neutral shipping and logistics</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Biodegradable and recycled packaging</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Water conservation in production</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Reduced chemical usage and waste</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4" style={{ color: '#0f0f0f' }}>Social Impact</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Fair wages and worker benefits</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Safe working conditions</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Artisan skill preservation</span>
                  </li>
                  <li className="flex gap-3">
                    <span style={{ color: '#b8935a' }}>•</span>
                    <span style={{ color: '#6b6b6b' }}>Community development support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
