import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('mj-watson')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function MJWatsonPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296&width=800"
      gallery={[
        { src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296&width=800', alt: 'MJ Watson editorial look' },
        { src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296&width=800', alt: 'MJ Watson detail' },
        { src: 'https://cdn.shopify.com/s/files/1/0363/7696/9348/files/IMG_7362.jpg?v=1770045296&width=800', alt: 'MJ Watson silhouette' },
      ]}
    />
  )
}

