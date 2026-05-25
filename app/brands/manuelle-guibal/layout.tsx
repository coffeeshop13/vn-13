import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

const image =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg'

export const metadata: Metadata = createMetadata({
  title: 'Manuelle Guibal Distribution | VN13',
  description:
    'Discover Manuelle Guibal through VN13: French craftsmanship, timeless designer collections, and retail partnership opportunities.',
  path: '/brands/manuelle-guibal',
  image,
  keywords: ['Manuelle Guibal distributor', 'French designer fashion wholesale', 'Manuelle Guibal VN13'],
})

export default function ManuelleGuibalLayout({ children }: { children: React.ReactNode }) {
  return children
}
