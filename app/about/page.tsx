import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'О VN13', description: 'История и подход VN13.', path: '/story' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/story/" label="О VN13" /> }
