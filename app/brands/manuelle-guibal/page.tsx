import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'
import { createPageMetadata } from '@/lib/seo'

const brand = getBrandPortfolioItem('manuelle-guibal')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
  keywords: ['Manuelle Guibal', 'французская женская одежда', 'дизайнерская женская одежда', 'одежда для бутиков', 'европейские бренды одежды'],
  image: '/brands/manuelle-guibal.jpg',
  imageAlt: 'Manuelle Guibal — французская дизайнерская женская одежда',
})

export default function ManuelleGuibalPage() {
  return <BrandPortfolioPage brand={brand} />
}
