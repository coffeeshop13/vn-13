import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({ title: 'VN13', description: 'Свяжитесь с VN13.', path: '/contact' })
export default function Page() { return <LegacyRedirect destination="/contact/" label="Контакты VN13" /> }
