import type { Metadata } from 'next'
import ManuelleGuibalPageContent from '@/components/ManuelleGuibalPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Manuelle Guibal Brand Profile',
  description:
    'View the VN13 brand profile for Manuelle Guibal, including design philosophy, craftsmanship, and collection positioning.',
  path: '/brands/manuelle-guibal',
})

export default function ManuelleGuibalPage() {
  return <ManuelleGuibalPageContent />
}
