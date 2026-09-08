import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = { ...createMetadata({ title: 'H+ Hannoh Wessel | VN13', description: 'Бренд H+ Hannoh Wessel в портфеле VN13.', path: '/brands/hannoh-wessel' }), robots: { index: false, follow: true } }
export default function Page() { return <LegacyRedirect destination="/brands/hannoh-wessel/" label="H+ Hannoh Wessel" /> }
