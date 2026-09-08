import type { Metadata } from 'next'
import PreorderPageContent from '@/components/PreorderPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Предзаказ женской одежды | VN13 и VN-13',
  description:
    'Предзаказ женской одежды VN-13 и европейских дизайнерских коллекций для бутиков, шоурумов и розничных партнеров.',
  path: '/preorder',
  keywords: ['предзаказ женской одежды', 'предзаказ коллекций одежды', 'заказ одежды для бутика', 'европейские коллекции одежды', 'оптовая женская одежда'],
})

export default function PreorderPage() {
  return <PreorderPageContent />
}
