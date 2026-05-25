import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Fashion Pre-Order Access for Retailers | VN13',
  description:
    'Secure exclusive European designer collections before market release with VN13 pre-order access, retail planning, and wholesale distribution support.',
  path: '/preorder',
  keywords: ['fashion pre-order', 'designer collection pre-order', 'retail buying fashion'],
})

export default function PreorderLayout({ children }: { children: React.ReactNode }) {
  return children
}
