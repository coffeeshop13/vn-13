import LegacyRedirect from '@/components/LegacyRedirect'

export const metadata = {
  title: 'VN13 — журнал о моде',
  description: 'Архивный материал VN13 о ключевых трендах мировой индустрии моды.',
  alternates: { canonical: 'https://vn-13.com/journal/' },
  robots: { index: false, follow: true },
}

export default function LegacyArticlePage() {
  return <LegacyRedirect destination="/journal/" label="архив VN13" />
}
