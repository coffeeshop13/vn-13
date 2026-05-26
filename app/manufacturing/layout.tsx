import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'European Fashion Manufacturing Network | VN13',
  description:
    'VN13 connects fashion partners with European manufacturing expertise across Italy, France, and Portugal for quality, traceability, and responsible production.',
  path: '/manufacturing',
  keywords: ['European fashion manufacturing', 'garment manufacturing Europe', 'fashion production network'],
})

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children
}
