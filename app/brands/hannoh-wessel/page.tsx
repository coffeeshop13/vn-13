import type { Metadata } from 'next'
import BrandPortfolioPage from '@/components/BrandPortfolioPage'
import { createPageMetadata } from '@/lib/seo'
import { getBrandPortfolioItem } from '@/lib/brand-portfolio'

const brand = getBrandPortfolioItem('hannoh-wessel')!

export const metadata: Metadata = createPageMetadata({
  title: brand.title,
  description: brand.description,
  path: `/brands/${brand.slug}`,
})

export default function HannohWesselPage() {
  return (
    <BrandPortfolioPage
      brand={brand}
      heroImage="https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318"
      gallery={[
        { src: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318', alt: 'H+ Hannoh Wessel look' },
        { src: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318', alt: 'H+ Hannoh Wessel close-up' },
        { src: 'https://houseofvalerie.com/cdn/shop/files/FE611AAD-35D2-45B2-BFD6-09C735088A5B.jpg?v=1769788318', alt: 'H+ Hannoh Wessel editorial image' },
      ]}
    />
  )
}

