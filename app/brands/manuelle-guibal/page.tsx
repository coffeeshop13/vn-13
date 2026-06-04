import type { Metadata } from 'next'
import ManuelleGuibalPageContent from '@/components/ManuelleGuibalPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Manuelle Guibal | Дизайнерская женская одежда через VN13',
  description:
    'Manuelle Guibal в портфеле VN13: французская дизайнерская женская одежда, европейское мастерство и возможности для розничных партнеров.',
  path: '/brands/manuelle-guibal',
})

export default function ManuelleGuibalPage() {
  return <ManuelleGuibalPageContent />
}
