Warning: truncated output (original token count: 3628)
Total output lines: 280

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductImageGallery from '@/components/ProductImageGallery'
import { extendedSeoPages } from '@/lib/extended-seo-pages'
import { absoluteUrl, createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'VN-13 | Дизайнерская женская одежда собственного бренда',
  description:
    'Каталог собственного бренда VN-13: дизайнерские платья, жакеты, рубашки, брюки и верхняя одежда ограниченных серий для клиентов и бутиков России и СНГ.',
  path: '/vn-13-brand',
  image: '/brands/vn13-catalog/vn13-sand-textured-jacket-front.seo.webp',
  keywords: [
    'VN-13 бренд',
    'бренд женской одежды VN-13',
    'собственный бренд женской одежды',
    'дизайнерская женская одежда',
    'каталог женской одежды VN-13',
  ],
})

const values = [
  'Женская одежда с фокусом на силуэт, ткань, посадку и долговечность.',
  'Капсульный подход: вещи должны работать вместе, а не существовать отдельно.',
  'Ограниченные партии и контролируемая дистрибуция для сохранения ценности бренда.',
  'Состав, уход и страна изготовления уточняются по маркировке и данным конкретной модели.',
]

const faq = [
  {
    question: 'Какая женская одежда представлена в каталоге VN-13?',
    answer:
      'В каталоге представлены дизайнерские платья, жакеты, рубашки, брюки, жилеты и верхняя одежда свободного и архитектурного кроя.',
  },
  {
    question: 'Как узнать наличие и размер модели?',
    answer:
      'Напишите команде VN13 в Telegram @vn13agency, приложив фотографию или название категории. Мы уточним актуальное наличие, размеры и состав.',
  },
  {
    question: 'Коллекции VN-13 выпускаются ограниченными сериями?',
    answer:
      'Да. VN-13 делает акцент на небольших партиях и контролируемом ассортименте, поэтому отдельные модели и размеры могут быть доступны ограниченное время.',
  },
  {
    question: 'Можно ли получить консультацию по подбору образа?',
    answer:
      'Да. Команда поможет подобрать совместимые модели, материалы и силуэты из доступной коллекции VN-13.',
  },
]

const catalogImages = [
  {
    src: '/brands/vn13-catalog/vn13-sand-textured-jacket-front.seo.webp',
    alt: 'Песочный фактурный жакет собственного бренда VN13, вид спереди',
    caption: 'Фактурный песочный жакет VN13',
  },
  {
    src: '/brands/vn13-catalog/vn13-sand-textured-jacket-three-quarter.seo.webp',
    alt: 'Песочный фактурный жакет собственного бренда VN13, ракурс три четверти',
    caption: 'Жакет VN13: застёжка и объёмный рукав',
  },
  {
    src: '/brands/vn13-catalog/vn13-sand-textured-jacket-back.seo.webp',
    alt: 'Песочный фактурный жакет собственного бренда VN13, вид со спины',
    caption: 'Жакет VN13: вид со спины',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-white-layered-dress.webp',
    alt: 'Черный дизайнерский жакет VN-13 с белым многослойным платьем',
    caption: 'Черный жакет и белое многослойное платье VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-trousers-white-dress-look.webp',
    alt: 'Капсульный образ VN-13 с черным жакетом, брюками и белым платьем',
    caption: 'Капсульный черно-белый образ VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-layered-designer-dress.webp',
    alt: 'Черное многослойное дизайнерское платье VN-13 свободного кроя',
    caption: 'Черное платье VN-13 с прозрачными деталями',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-white-oversize-shirts.webp',
    alt: 'Черная и белая дизайнерские рубашки oversize собственного бренда VN-13',
    caption: 'Рубашки oversize VN-13 в черном и белом цвете',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-sheer-oversize-shirt.webp',
    alt: 'Черная полупрозрачная рубашка VN-13 свободного архитектурного кроя',
    caption: 'Черная полупрозрачная рубашка VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-designer-shirt.webp',
    alt: 'Черная дизайнерская рубашка VN-13 с контрастной внутренней отделкой',
    caption: 'Черная рубашка VN-13 с натуральными пуговицами',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-textured-designer-coat.webp',
    alt: 'Черное фактурное дизайнерское пальто VN-13 свободного силуэта',
    caption: 'Фактурное черное пальто собственного бренда VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt.webp',
    alt: 'Белая дизайнерская рубашка VN-13 свободного кроя с крупными пуговицами',
    caption: 'Белая рубашка oversize VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-textured-fringe-vest.webp',
    alt: 'Черный фактурный жилет VN-13 с длинной бахромой',
    caption: 'Черный дизайнерский жилет VN-13 с бахромой',
  },
  {
    src: '/brands/vn13-catalog/vn13-blue-floral-designer-dress.webp',
    alt: 'Белое дизайнерское платье VN-13 с голубым цветочным принтом',
    …128 tokens truncated…дизайнерский комплект VN-13 с кожаным жилетом и брюками',
    caption: 'Черный комплект VN-13 с жилетом и брюками',
  },
]

const detailImages = [
  {
    src: '/brands/vn13-catalog/vn13-white-patchwork-trousers-detail.webp',
    alt: 'Деталь белых дизайнерских брюк VN-13 с накладным карманом',
    caption: 'Белые брюки VN-13: конструкция и фактура',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-shirt-natural-buttons-detail.webp',
    alt: 'Натуральные пуговицы на белой дизайнерской рубашке VN-13',
    caption: 'Белая рубашка VN-13: натуральные пуговицы',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-coat-label-detail.webp',
    alt: 'Фирменная этикетка VN-13 на черном фактурном пальто',
    caption: 'Фактурное пальто и этикетка VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-leather-trousers-detail.webp',
    alt: 'Деталь пояса черных дизайнерских кожаных брюк VN-13',
    caption: 'Черные брюки VN-13: пояс и мягкая форма',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-leather-fringe-vest-detail.webp',
    alt: 'Деталь черного дизайнерского жилета VN-13 с фактурной бахромой',
    caption: 'Жилет VN-13: кожа и фактурная бахрома',
  },
  {
    src: '/brands/vn13-catalog/vn13-blue-floral-dress-sleeve-detail.webp',
    alt: 'Деталь рукава платья VN-13 с голубым цветочным принтом',
    caption: 'Цветочное платье VN-13: рукав и завязки',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-patch-pocket-detail.webp',
    alt: 'Контрастный накладной карман черного дизайнерского жакета VN-13',
    caption: 'Черный жакет VN-13: контрастный карман',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-collar-label-detail.webp',
    alt: 'Воротник и фирменная этикетка черного жакета бренда VN-13',
    caption: 'Жакет VN-13: воротник, пуговица и этикетка',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-designer-trousers-waist-detail.webp',
    alt: 'Пояс и натуральная пуговица черных дизайнерских брюк VN-13',
    caption: 'Черные брюки VN-13: конструкция пояса',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-trousers-patch-pocket-detail.webp',
    alt: 'Накладной карман черных дизайнерских брюк VN-13',
    caption: 'Черные брюки VN-13: накладной карман',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-natural-buttons-detail.webp',
    alt: 'Натуральные пуговицы и необработанные края черного жакета VN-13',
    caption: 'Черный жакет VN-13: пуговицы и обработка края',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-shirt-brand-label-detail.webp',
    alt: 'Фирменная этикетка VN-13 на черной дизайнерской рубашке',
    caption: 'Черная рубашка и этикетка VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-dress-sheer-hem-detail.webp',
    alt: 'Прозрачные вставки по низу черного дизайнерского платья VN-13',
    caption: 'Черное платье VN-13: многослойный низ',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-dress-neckline-detail.webp',
    alt: 'Завязки и необработанный край горловины черного платья VN-13',
    caption: 'Черное платье VN-13: деталь горловины',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-shirt-cuff-detail.webp',
    alt: 'Контрастная манжета черной дизайнерской рубашки VN-13',
    caption: 'Черная рубашка VN-13: контрастная манжета',
  },
]

export default function VN13BrandPage() {
  const categoryPages = extendedSeoPages.filter((page) => page.category)
  const allImages = [
    {
      src: '/brands/vn13-catalog/vn13-designer-womenswear-collection.webp',
      alt: 'Коллекция дизайнерской женской одежды собственного бренда VN-13',
      caption: 'Коллекция женской одежды VN-13',
    },
    ...catalogImages,
    ...detailImages,
  ]

  const imageGalleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${absoluteUrl('/vn-13-brand')}#catalog`,
    name: 'Каталог собственного бренда женской одежды VN-13',
    description:
      'Каталог дизайнерской женской одежды VN-13: платья, жакеты, рубашки, брюки, пальто и детали ограниченной коллекции.',
    url: absoluteUrl('/vn-13-brand'),
    associatedMedia: allImages.map((image, index) => ({
      '@type': 'ImageObject',
      position: index + 1,
      contentUrl: absoluteUrl(image.src),
      caption: image.alt,
      representativeOfPage: index === 0,
      width: index === 0 ? 2000 : 1600,
      height: index === 0 ? 1333 : 2400,
    })),
  }

  const catalogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${absoluteUrl('/vn-13-brand')}#collection`,
        url: absoluteUrl('/vn-13-brand'),
        name: 'Каталог дизайнерской женской одежды VN-13',
        description:
          'Каталог собственного бренда VN-13: дизайнерские платья, жакеты, рубашки, брюки, жилеты и верхняя одежда ограниченных серий.',
        inLanguage: 'ru',
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: categoryPages.length,
          itemListElement: categoryPages.map((page, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: page.cluster,
            url: absoluteUrl(page.path),
          })),
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <main>
      <script
