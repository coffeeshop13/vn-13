import type { Metadata } from 'next'
import PreorderPageContent from '@/components/PreorderPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Pre-Order Fashion Collections',
  description:
    'Access upcoming European fashion collections early through VN13 pre-order programs for premium retailers.',
  path: '/preorder',
})

export default function PreorderPage() {
  return <PreorderPageContent />
}
