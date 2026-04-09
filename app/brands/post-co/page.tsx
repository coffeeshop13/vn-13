import type { Metadata } from 'next'
import { PostCoContent } from './PostCoContent'

export const metadata: Metadata = {
  title: 'Post & Co | VN13 Fashion Agency - Italian Leather Accessories',
  description: 'Post & Co - Italian leather accessories brand specializing in handcrafted belts and leather goods. Official distributor VN13.',
  keywords: ['Post & Co', 'Post and Co', 'Italian leather belts', 'handcrafted accessories', 'luxury leather goods', 'VN13 brands'],
  openGraph: { type: 'website', url: 'https://vn-13.com/brands/post-co', title: 'Post & Co | VN13', description: 'Italian handcrafted leather accessories.', siteName: 'VN13' },
  alternates: { canonical: 'https://vn-13.com/brands/post-co' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Brand', name: 'Post & Co', description: 'Italian leather accessories brand', url: 'https://vn-13.com/brands/post-co', foundingLocation: { '@type': 'Place', name: 'Italy' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vn-13.com' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://vn-13.com/#portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Post & Co', item: 'https://vn-13.com/brands/post-co' },
    ]},
  ],
}

export default function PostCoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PostCoContent />
    </>
  )
}
