import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('shoto')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function ShotoPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514"
      gallery={[
        { src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514', alt: 'Shoto product image' },
        { src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514', alt: 'Shoto close-up' },
        { src: 'https://cdn.shopify.com/s/files/1/0672/5510/7848/files/193A3762.jpg?v=1771570514', alt: 'Shoto editorial view' },
      ]}
    />
  )
}

