import type { Metadata } from 'next'
import ManufacturingPageContent from '@/components/ManufacturingPageContent'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Производство женской одежды | VN-13 и европейские партнеры',
  description:
    'Производство женской одежды VN-13: европейские производственные партнеры, качественные материалы, капсульные коллекции и контроль качества.',
  path: '/manufacturing',
})

export default function ManufacturingPage() {
  return <ManufacturingPageContent />
}
