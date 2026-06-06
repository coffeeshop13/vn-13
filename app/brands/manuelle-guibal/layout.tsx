import type { Metadata } from 'next'
import { createMetadata } from '@/lib/seo'

const image =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Manuelle%20Guibal%2C%20VN13%208-83OfinjdVGj3Fmyxq0y8DWMBfwXShu.jpg'

export const metadata: Metadata = createMetadata({
  title: 'Manuelle Guibal | Дистрибуция дизайнерской женской одежды VN13',
  description:
    'Manuelle Guibal через VN13: французская дизайнерская женская одежда, европейское мастерство, коллекции для бутиков и партнерство.',
  path: '/brands/manuelle-guibal',
  image,
  keywords: ['Manuelle Guibal', 'дизайнерская женская одежда', 'французская женская одежда', 'Manuelle Guibal VN13'],
})

export default function ManuelleGuibalLayout({ children }: { children: React.ReactNode }) {
  return children
}
