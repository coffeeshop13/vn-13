import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('sula')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function SulaPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="/brands/sula.jpg"
      gallery={[
        { src: '/brands/sula.jpg', alt: 'Sula editorial look' },
        { src: '/brands/sula.jpg', alt: 'Sula product detail' },
        { src: '/brands/sula.jpg', alt: 'Sula silhouette' },
      ]}
    />
  )
}

