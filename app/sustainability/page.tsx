import type { Metadata } from 'next'
import SustainabilityPageContent from '@/components/SustainabilityPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Устойчивая женская одежда | VN-13 и ответственные партнерства',
  description:
    'VN13 и VN-13 развивают устойчивую женскую одежду: качественные материалы, долговечные коллекции, ответственные производственные партнеры.',
  path: '/sustainability',
  keywords: ['устойчивая женская одежда', 'ответственное производство одежды', 'slow fashion', 'натуральные ткани', 'долговечная одежда'],
})

export default function SustainabilityPage() {
  return <SustainabilityPageContent />
}
