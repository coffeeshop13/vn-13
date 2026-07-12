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
  image: '/brands/vn13-catalog/vn13-designer-womenswear-collection.webp',
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
  'Производственная логика, основанная на европейских партнерах и строгом контроле качества.',
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
    caption: 'Платье VN-13 с голубым цветочным принтом',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-cropped-jacket-floral-dress.webp',
    alt: 'Черный укороченный жакет VN-13 поверх платья с голубым цветочным принтом',
    caption: 'Укороченный жакет и цветочное платье VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-leather-vest-trousers-look.webp',
    alt: 'Черный дизайнерский комплект VN-13 с кожаным жилетом и брюками',
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <Header />
      <section className="relative min-h-screen flex items-end" style={{ backgroundColor: '#0f0f0f' }}>
        <Image
          src="/brands/vn13-catalog/vn13-designer-womenswear-collection.webp"
          alt="Коллекция дизайнерской женской одежды собственного бренда VN-13"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-32 pt-36 w-full">
          <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#b8935a' }}>
            Собственный бренд
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-6 text-white text-balance">
            VN-13
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Женская одежда, построенная вокруг сдержанной эстетики, качественных материалов, ограниченных коллекций и европейского производственного подхода.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/lookbook" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide" style={{ backgroundColor: '#b8935a', color: '#fff' }}>
              Смотреть lookbook
            </Link>
            <Link href="/proizvoditel-zhenskoy-odezhdy" className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide" style={{ border: '1px solid rgba(255,255,255,0.5)', color: '#fff' }}>
              Производство VN-13
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e0ddd8] bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase mb-3 text-[#b8935a]">
              Каталог VN-13
            </p>
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-[#0f0f0f]">
              Дизайнерская женская одежда ограниченной серии
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#686868]">
              В коллекции VN-13 соединяются свободный архитектурный крой, черно-белая палитра, цветочные акценты и выразительные фактуры. Представлены дизайнерские платья, жакеты, рубашки, брюки, жилеты и пальто.
            </p>
          </div>

          <ProductImageGallery
            images={catalogImages}
            gridClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-0 md:gap-x-6 gap-y-5 md:gap-y-12"
            imageSizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            mobileFullBleed
          />
        </div>
      </section>

      <section className="border-t border-[#e0ddd8] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20 mb-14">
            <h2 className="text-3xl md:text-5xl font-light text-[#0f0f0f]">
              Материалы и конструкция
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#686868]">
              Детали показывают подход VN-13 к изделию: натуральные пуговицы, контрастные карманы, открытые края, многослойные прозрачные вставки и фирменная маркировка. Эти элементы формируют узнаваемый характер коллекции без демонстративного декора.
            </p>
          </div>

          <ProductImageGallery
            images={detailImages}
            gridClassName="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-0 md:gap-x-4 gap-y-5 md:gap-y-10"
            imageSizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            captionClassName="mt-2 md:mt-3 text-xs leading-relaxed text-[#686868]"
            mobileFullBleed
          />
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Бренд внутри дистрибуционной экспертизы
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                VN-13 развивается внутри экосистемы VN13, где команда видит полный путь одежды: от идеи и производства до закупки, презентации, дистрибуции и продажи в бутике.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                Это дает бренду практическую основу: коллекция проектируется не только для фотографии, но и для реального гардероба, розничной витрины и долгосрочного спроса.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Эстетика VN-13
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: '#6b6b6b' }}>
                В основе VN-13 — лаконичные формы, натуральные фактуры, спокойная палитра, архитектурный крой и вещи, которые можно носить дольше одного сезона.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                Бренд не стремится конкурировать с массовой модой. Его задача — создавать ограниченный ассортимент для клиентов и магазинов, которым важны качество, редкость и цельная история.
              </p>
            </div>
          </div>

          <div className="py-16 border-t border-b" style={{ borderColor: '#e0ddd8' }}>
            <h2 className="text-3xl md:text-4xl font-light mb-10" style={{ color: '#0f0f0f' }}>
              Принципы бренда
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value} className="flex gap-4">
                  <span style={{ color: '#b8935a', fontSize: '20px' }}>•</span>
                  <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20">
            <h2 className="text-3xl md:text-4xl font-light mb-10" style={{ color: '#0f0f0f' }}>
              Частые вопросы о коллекции VN-13
            </h2>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
              {faq.map((item) => (
                <article key={item.question}>
                  <h3 className="text-xl font-medium mb-3" style={{ color: '#0f0f0f' }}>
                    {item.question}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-14">
              <a
                href="https://t.me/vn13agency"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide"
                style={{ backgroundColor: '#0f0f0f', color: '#fff' }}
              >
                Уточнить наличие в Telegram
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
            Связанные страницы
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/платья" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
              Дизайнерские платья
            </Link>
            <Link href="/lookbook" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
              Lookbook VN-13
            </Link>
            <Link href="/proizvoditel-zhenskoy-odezhdy" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
              Производство VN-13
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e0ddd8] bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-20">
          <div className="max-w-3xl mb-6 md:mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 md:mb-3 text-[#b8935a]">
              Категории
            </p>
            <h2 className="text-2xl md:text-5xl font-light mb-3 md:mb-5 text-[#0f0f0f]">
              Смотреть женскую одежду VN-13
            </h2>
            <p className="text-sm md:text-lg leading-relaxed text-[#686868]">
              Перейдите к нужной категории, чтобы посмотреть характерные силуэты, материалы и рекомендации по выбору. Актуальное наличие конкретных моделей уточняется у команды VN13.
            </p>
          </div>

          <nav aria-label="Категории женской одежды VN-13" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
            {categoryPages.map((page) => (
              <Link
                key={page.path}
                href={page.path}
                className="group flex min-h-20 md:min-h-32 items-end justify-between gap-4 md:gap-6 border border-[#ded9d1] bg-white p-4 md:p-6 transition-colors hover:bg-[#f2ede5]"
              >
                <span className="text-base md:text-xl font-light text-[#171717]">{page.cluster}</span>
                <span aria-hidden="true" className="text-[#b8935a] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </section>
      <Footer />
    </main>
  )
}
