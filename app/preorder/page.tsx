import type { Metadata } from 'next'
import PreorderPageContent from '@/components/PreorderPageContent'
import { absoluteUrl, createPageMetadata, SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata({
  title: 'Предзаказ женской одежды для бутиков | VN13',
  description:
    'Предзаказ женской одежды VN-13 и европейских дизайнерских коллекций для бутиков, шоурумов и розничных партнёров: подбор ассортимента, размеры и планирование поставки.',
  path: '/preorder',
  keywords: ['предзаказ женской одежды', 'предзаказ коллекций одежды', 'заказ одежды для бутика', 'европейские коллекции одежды', 'оптовая женская одежда'],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE_NAME, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Предзаказ женской одежды', item: absoluteUrl('/preorder') },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${absoluteUrl('/preorder')}#service`,
      name: 'Предзаказ женской одежды для бутиков',
      serviceType: 'Предзаказ дизайнерских коллекций женской одежды',
      description: 'Подбор и планирование предзаказа европейских дизайнерских коллекций и собственного бренда VN-13 для бутиков, шоурумов и розничных партнёров.',
      provider: { '@id': `${absoluteUrl('/')}#organization` },
      areaServed: ['Russia', 'CIS countries'],
      url: absoluteUrl('/preorder'),
    },
  ],
}

export default function PreorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PreorderPageContent />
    </>
  )
}
