import type { Metadata } from 'next'
import ManufacturingPageContent from '@/components/ManufacturingPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'European Fashion Manufacturing',
  description:
    'Discover VN13 manufacturing partnerships across Europe, with a focus on quality control, artisan production, and premium materials.',
  path: '/manufacturing',
})

export default function ManufacturingPage() {
  return <ManufacturingPageContent />
}
