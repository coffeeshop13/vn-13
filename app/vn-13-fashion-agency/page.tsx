import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'VN13 — fashion agency и европейские бренды', description: 'VN13 — дизайнерская женская одежда и европейские бренды.', path: '/' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/" label="VN13" /> }
