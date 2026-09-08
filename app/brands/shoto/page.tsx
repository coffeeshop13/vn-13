import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('shoto')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
  keywords: brand.keywords,
  image: brand.heroImage.src,
  imageAlt: brand.heroImage.alt,
})

export default function ShotoPage() {
  return <BrandPortfolioPage brand={brand} />
}
