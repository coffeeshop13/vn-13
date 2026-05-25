import type { Metadata } from 'next'
import SustainabilityPageContent from '@/components/SustainabilityPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Sustainable Fashion Partnerships',
  description:
    'Explore how VN13 works with ethical European fashion partners focused on responsible sourcing and long-lasting quality.',
  path: '/sustainability',
})

export default function SustainabilityPage() {
  return <SustainabilityPageContent />
}
