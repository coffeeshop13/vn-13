import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'Журнал VN13', description: 'Новости и материалы VN13.', path: '/journal' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/journal/" label="Журнал VN13" /> }
