import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'Sula | VN13', description: 'Бренд Sula в портфеле VN13.', path: '/brands/sula' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/brands/sula/" label="Sula" /> }
