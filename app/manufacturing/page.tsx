import type { Metadata } from 'next'
import ManufacturingPageContent from '@/components/ManufacturingPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Маркировка одежды: состав и страна производства | VN13',
  description:
    'Как проверить состав ткани, уход и страну производства по ярлыку и документам модели. Практический гид для покупателей и бутиков VN13.',
  path: '/manufacturing',
  keywords: ['маркировка одежды', 'состав ткани одежды', 'страна производства одежды', 'сертификаты на одежду', 'ярлык одежды'],
})

export default function ManufacturingPage() {
  return <ManufacturingPageContent />
}
