import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('post-and-co')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function PostAndCoPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633"
      gallery={[
        { src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633', alt: 'Post & Co accessory image' },
        { src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633', alt: 'Post & Co material detail' },
        { src: 'https://cdn.shopify.com/s/files/1/0650/7495/4506/files/10026_COGNAC_12520.jpg?v=1739745633', alt: 'Post & Co editorial accessory' },
      ]}
    />
  )
}

