import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Европейское производство женской одежды | VN13',
  description:
    'VN13 соединяет бренды с европейскими производственными партнёрами в Италии, Франции и Португалии: качество, прослеживаемость и ответственное производство одежды.',
  path: '/manufacturing',
  keywords: ['европейское производство одежды', 'производство женской одежды', 'пошив одежды в Европе'],
})

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children
}
