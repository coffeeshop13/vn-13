import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('soh')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function SohPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533"
      gallery={[
        { src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533', alt: 'SOH editorial look' },
        { src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533', alt: 'SOH detail' },
        { src: 'https://cdn.shopify.com/s/files/1/0191/6390/files/SOHHW030CoatCharcoal-AllStyleClothing-02.jpg?v=1774929533', alt: 'SOH silhouette' },
      ]}
    />
  )
}

