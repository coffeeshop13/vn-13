import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Устойчивая мода и ответственное производство | VN13',
  description:
    'Подход VN13 к устойчивой моде: ответственное производство, долговечные коллекции, качество материалов и партнёрства с европейскими дизайнерскими брендами.',
  path: '/sustainability',
  keywords: ['устойчивая мода', 'ответственное производство одежды', 'slow fashion', 'дизайнерская женская одежда'],
})

export default function SustainabilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
