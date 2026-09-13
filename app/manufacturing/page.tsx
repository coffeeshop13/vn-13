import type { Metadata } from 'next'
import ManufacturingPageContent from '@/components/ManufacturingPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Производство одежды брендов: маркировка и материалы | VN-13',
  description:
    'Как проверить состав, уход, сертификаты и страну производства конкретной модели. Сведения о производстве различаются по брендам и изделиям.',
  path: '/manufacturing',
  keywords: ['страна производства одежды', 'производство одежды брендов', 'состав и уход за одеждой', 'маркировка одежды'],
})

export default function ManufacturingPage() {
  return <ManufacturingPageContent />
}
