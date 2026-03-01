import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CTALink } from '@/components/CTALink'

export const metadata: Metadata = {
  title: 'Manufacturing | VN13 Fashion Agency',
  description: 'Our European manufacturing partners and commitment to quality craftsmanship.',
}

export default function ManufacturingPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Manufacturing</p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Crafted with Precision in Europe
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            Every piece is manufactured in Europe by skilled artisans committed to exceptional quality and traditional craftsmanship.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          
          {/* Two Column Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>European Excellence</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                All our partner brands are manufactured in Europe, where centuries of craftsmanship traditions ensure exceptional quality. From Italy's legendary leather workshops to France's renowned textile mills, we support the continent's finest producers.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                This strategic commitment guarantees not only superior quality and uncompromising attention to detail but also reduces carbon footprints through local production and supports thriving economies across Europe.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                European manufacturing represents a commitment to standards that have been refined over generations, ensuring pieces that last a lifetime.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Artisan Craftsmanship</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                We partner exclusively with manufacturers who employ skilled artisans preserving and advancing traditional techniques. Each piece reflects generations of expertise, dedication, and an unwavering pursuit of perfection.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                Quality control at every step ensures that only the finest pieces reach our retail partners and their discerning customers.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                From raw material selection to final finishing, every decision prioritizes longevity, beauty, and the integrity of the craft.
              </p>
            </div>
          </div>

          {/* Regions Section */}
          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-12" style={{ color: '#0f0f0f' }}>Our Manufacturing Hubs</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>Italy</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                  Home to the world's most renowned leather goods, artisanal knitwear, and handcrafted footwear manufacturing. Italian craftsmanship is celebrated globally for precision, durability, and timeless design.
                </p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>
                  <strong>Specialties:</strong> Leather accessories, footwear, luxury knitwear, handbags
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>France</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                  The undisputed center of haute couture and premium textile production. French manufacturers maintain the highest standards of elegance, innovation, and technical excellence in every category.
                </p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>
                  <strong>Specialties:</strong> Haute couture, premium textiles, fine fabrics, ready-to-wear
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4" style={{ color: '#b8935a' }}>Portugal</h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                  An emerging hub for innovative sustainable manufacturing. Portuguese producers combine time-honored traditional techniques with cutting-edge technology, creating unique opportunities.
                </p>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>
                  <strong>Specialties:</strong> Sustainable production, innovative techniques, artisan goods
                </p>
              </div>
            </div>
          </div>

          {/* Standards Section */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-12 text-balance" style={{ color: '#0f0f0f' }}>Quality & Production Standards</h2>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Quality Assurance</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Multi-Stage Inspections</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Rigorous quality control at raw materials, production, and finishing stages</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>International Compliance</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Adherence to ISO standards and international regulatory requirements</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Material Certification</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Full traceability and certification of all materials used in production</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Durability Testing</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Comprehensive testing to ensure longevity and performance standards</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Production Ethics</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Fair Labor Practices</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Competitive wages, benefits, and safe working conditions for all employees</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Environmental Protection</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Sustainable practices including waste reduction and energy efficiency</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Community Engagement</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Active involvement in local communities and skill development programs</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span style={{ color: '#b8935a', fontSize: '20px' }}>✓</span>
                    <div>
                      <p className="font-medium" style={{ color: '#0f0f0f' }}>Continuous Improvement</p>
                      <p className="text-sm" style={{ color: '#6b6b6b' }}>Regular audits and collaboration to enhance production standards</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 pt-20 border-t text-center" style={{ borderColor: '#e0ddd8' }}>
            <h3 className="text-2xl font-light mb-4" style={{ color: '#0f0f0f' }}>Learn More About Our Manufacturing Standards</h3>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#6b6b6b' }}>
              Contact our team to discuss manufacturing partnerships and visit our production facilities.
            </p>
            <CTALink href="/#contact">Get in Touch</CTALink>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
