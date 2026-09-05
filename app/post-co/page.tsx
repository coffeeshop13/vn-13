import type { Metadata } from 'next'
import LegacyRedirect from '@/components/LegacyRedirect'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({ title: 'Post+Co | VN13', description: 'Бренд Post+Co в портфеле VN13.', path: '/brands/post-and-co' })
export default function Page() { return <LegacyRedirect destination="/brands/post-and-co/" label="Post+Co" /> }
