import type { Metadata } from 'next'
import Link from 'next/link'
import { absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Каталог женской одежды VN-13',
  description: 'Каталог дизайнерской женской одежды VN-13 перенесен в единый раздел бренда.',
  alternates: {
    canonical: absoluteUrl('/vn-13-brand'),
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function WomensClothingRedirectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[#fafaf8]">
      <script
        dangerouslySetInnerHTML={{
          __html: "window.location.replace('/vn-13-brand/');",
        }}
      />
      <div className="text-center">
        <h1 className="text-3xl font-light mb-4 text-[#0f0f0f]">Каталог VN-13</h1>
        <p className="mb-6 text-[#686868]">Каталог перенесен в единый раздел бренда.</p>
        <Link href="/vn-13-brand" className="underline underline-offset-4">
          Перейти к каталогу
        </Link>
      </div>
    </main>
  )
}
