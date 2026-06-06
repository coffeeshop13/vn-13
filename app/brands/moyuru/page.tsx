import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('moyuru')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function MoyuruPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100"
      gallery={[
        { src: 'https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100', alt: 'Moyuru editorial look' },
        { src: 'https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100', alt: 'Moyuru texture detail' },
        { src: 'https://decemberthieves.com/cdn/shop/files/3_10_26_Edits-7.jpg?crop=center&height=3000&v=1773184096&width=2100', alt: 'Moyuru silhouette' },
      ]}
    />
  )
}

