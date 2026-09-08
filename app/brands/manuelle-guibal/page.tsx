import type { Metadata } from 'next'
import ManuelleGuibalPageContent from '@/components/ManuelleGuibalPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Manuelle Guibal | Дизайнерская женская одежда через VN13',
  description:
    'Manuelle Guibal в портфеле VN13: французская дизайнерская женская одежда, европейское мастерство и возможности для розничных партнеров.',
  path: '/brands/manuelle-guibal',
  keywords: ['Manuelle Guibal', 'французская женская одежда', 'дизайнерская женская одежда', 'одежда для бутиков', 'европейские бренды одежды'],
  image: '/brands/manuelle-guibal.jpg',
  imageAlt: 'Manuelle Guibal — французская дизайнерская женская одежда',
})

export default function ManuelleGuibalPage() {
  return <ManuelleGuibalPageContent />
}
