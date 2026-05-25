import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Our Story',
  description:
    'Learn how VN13 built long-term partnerships between European fashion brands and premium retail partners.',
  path: '/story',
})

export default function StoryPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-12 text-balance">
            Our Story
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-text-secondary">
            <p>
              VN13 was founded on a simple belief: exceptional European fashion deserves a global platform. For over a decade, we've been the trusted bridge between master craftspeople and visionary retailers across France, Italy, Japan, and beyond.
            </p>
            
            <p>
              Our mission is to create meaningful partnerships that transcend borders. We understand both sides of the fashion industry—the artisans who create with passion and precision, and the retailers who curate collections that resonate with customers.
            </p>
            
            <p>
              What sets us apart is our deep network and intimate knowledge of regional markets. We don't just connect brands with retailers; we cultivate relationships built on trust, quality, and shared vision.
            </p>
            
            <div className="border-l-4 border-accent pl-6 py-6">
              <p className="text-foreground text-xl font-light">
                "Every partnership we facilitate tells a story of cultural exchange, craftsmanship, and mutual growth."
              </p>
            </div>
            
            <p>
              With 40+ partner brands and presence in 22+ cities worldwide, VN13 continues to define the future of fashion partnerships. We believe in the power of collaboration and the transformative potential of bringing exceptional products to the right markets at the right time.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-border bg-accent-light/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-medium text-lg mb-4">Excellence</h3>
              <p className="text-text-secondary leading-relaxed">We partner only with brands that meet the highest standards of quality and craftsmanship.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Authenticity</h3>
              <p className="text-text-secondary leading-relaxed">Every collection represents genuine heritage and design philosophy of its makers.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Partnership</h3>
              <p className="text-text-secondary leading-relaxed">We invest in long-term relationships built on transparency and mutual success.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
