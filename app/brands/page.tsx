import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PortfolioGrid from '@/components/PortfolioGrid'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Наши бренды | Партнёры VN13',
  description:
    'Наши бренды и партнёры VN13: Aequamente, H+ Hannoh Wessel, Manuelle Guibal, Moyuru, Post & Co, Shoto, MJ Watson, Sula и SOH.',
  path: '/brands',
  keywords: ['наши бренды', 'бренды VN13', 'партнёры VN13', 'дизайнерские бренды'],
})

export default function BrandsPage() {
  return (
    <main>
      <Header />
      <section className="border-b" style={{ backgroundColor: '#f8f5ef', borderColor: '#e0ddd8' }}>
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-8 md:px-6 md:pt-44 md:pb-20">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-3 md:mb-5" style={{ color: '#0f0f0f' }}>
            Наши бренды
          </h1>
          <p className="text-base md:text-lg leading-7 md:leading-relaxed max-w-2xl" style={{ color: '#6b6b6b' }}>
            Дизайнерские бренды и партнёры VN13 для бутиков, шоурумов и клиентов.
          </p>
        </div>
      </section>
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
