import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Предзаказ дизайнерских коллекций для бутиков | VN13',
  description:
    'Предзаказ европейских дизайнерских коллекций через VN13: ранний доступ, ассортиментное планирование и поддержка оптовых поставок для бутиков.',
  path: '/preorder',
  keywords: ['предзаказ женской одежды', 'предзаказ дизайнерских коллекций', 'закупка одежды для бутиков'],
})

export default function PreorderLayout({ children }: { children: React.ReactNode }) {
  return children
}
