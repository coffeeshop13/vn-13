import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('aequamente')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function AequamentePage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696&width=800"
      gallery={[
        { src: 'https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696&width=800', alt: 'Aequamente editorial look' },
        { src: 'https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696&width=800', alt: 'Aequamente texture detail' },
        { src: 'https://thedesign.pt/cdn/shop/files/03_1c5c14c7-9e5b-4c64-b7c2-effa5e0a5bca.jpg?v=1706535696&width=800', alt: 'Aequamente silhouette' },
      ]}
    />
  )
}

