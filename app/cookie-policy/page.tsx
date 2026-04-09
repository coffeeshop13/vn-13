import type { Metadata } from 'next'
import { CookiePolicyContent } from './CookiePolicyContent'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'VN13 Fashion Agency Cookie Policy. Learn about the cookies we use and how to manage them.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://vn-13.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return <CookiePolicyContent />
}
