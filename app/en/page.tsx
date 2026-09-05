import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({ title: 'VN13', description: 'VN13 — designer womenswear and European brands.', path: '/' })
export default function Page() { return <LegacyRedirect destination="/" label="VN13" /> }
