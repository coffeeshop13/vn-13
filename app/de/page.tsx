import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'VN13 — Designer-Damenmode und europäische Marken', description: 'VN13 — Designer-Damenmode und europäische Marken.', path: '/' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/" label="VN13" /> }
