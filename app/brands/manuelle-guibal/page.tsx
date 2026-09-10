import type { Metadata } from 'next'
import ManuelleGuibalPageContent from '@/components/ManuelleGuibalPageContent'
import { absoluteUrl, createPageMetadata, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Manuelle Guibal | Французская одежда для бутиков | VN13',
  description:
    'Manuelle Guibal в портфеле VN13: французская дизайнерская женская одежда, европейское мастерство, коллекции и дистрибуция для бутиков.',
  path: '/brands/manuelle-guibal',
  keywords: ['Manuelle Guibal', 'французская женская одежда', 'дизайнерская женская одежда', 'одежда для бутиков', 'европейские бренды одежды'],
  image: '/brands/manuelle-guibal.jpg',
  imageAlt: 'Manuelle Guibal — французская дизайнерская женская одежда',
})

export default function ManuelleGuibalPage() {
  const pageUrl = absoluteUrl('/brands/manuelle-guibal')
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE_NAME, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Бренды', item: absoluteUrl('/brands') },
        { '@type': 'ListItem', position: 3, name: 'Manuelle Guibal', item: pageUrl },
      ] },
      { '@type': 'WebPage', '@id': pageUrl, url: pageUrl, name: 'Manuelle Guibal | Французская одежда для бутиков | VN13',
        description: 'Французская дизайнерская женская одежда Manuelle Guibal: эстетика бренда, европейское производство и возможности для бутиков через VN13.',
        isPartOf: { '@id': absoluteUrl('/#website') }, about: { '@id': `${pageUrl}#brand` } },
      { '@type': 'Brand', '@id': `${pageUrl}#brand`, name: 'Manuelle Guibal', url: 'https://shop.manuelleguibal.fr/',
        description: 'Французский бренд дизайнерской женской одежды с минималистичной эстетикой и европейским производством.',
        sameAs: ['https://shop.manuelleguibal.fr/'] },
    ],
  }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ManuelleGuibalPageContent /></>
}
