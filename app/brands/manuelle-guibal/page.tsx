import type { Metadata } from 'next'
import ManuelleGuibalPageContent from '@/components/ManuelleGuibalPageContent'
import { absoluteUrl, createPageMetadata, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Manuelle Guibal | Французская одежда для бутиков | VN13',
  description:
    'Manuelle Guibal в портфеле VN13: французский бренд женской одежды с дизайном в Париже; кашемировый трикотаж производят в Китае, остальные вещи — французские мастера.',
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
        description: 'Manuelle Guibal — французский бренд женской одежды с дизайном в Париже. Кашемировый трикотаж производится в Китае, остальные предметы одежды — французскими мастерами.',
        isPartOf: { '@id': absoluteUrl('/#website') }, about: { '@id': `${pageUrl}#brand` } },
      { '@type': 'Brand', '@id': `${pageUrl}#brand`, name: 'Manuelle Guibal', url: 'https://shop.manuelleguibal.fr/',
        description: 'Французский бренд женской одежды: дизайн создаётся в Париже, кашемировый трикотаж производят в Китае, остальные предметы одежды — французские мастера.',
        sameAs: ['https://shop.manuelleguibal.fr/'] },
    ],
  }
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><ManuelleGuibalPageContent /></>
}
