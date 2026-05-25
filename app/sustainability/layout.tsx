import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Sustainable Fashion Distribution | VN13',
  description:
    'Explore VN13 sustainability standards for ethical sourcing, slow fashion, responsible packaging, and European designer brand partnerships.',
  path: '/sustainability',
  keywords: ['sustainable fashion distribution', 'ethical fashion sourcing', 'slow fashion wholesale'],
})

export default function SustainabilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
