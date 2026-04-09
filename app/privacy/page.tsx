import type { Metadata } from 'next'
import { PrivacyContent } from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'VN13 Fashion Agency Privacy Policy. Learn how we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://vn-13.com/privacy',
  },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
