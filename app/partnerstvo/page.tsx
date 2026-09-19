import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ContactLink } from '@/components/ContactLink'
import { createMetadata, absoluteUrl } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Стать партнёром VN13 | Бренды и бутики',
  description:
    'Партнёрство с VN13 для европейских брендов, бутиков и шоурумов: дистрибуция, оптовые поставки, предзаказ, капсулы и производство малых партий.',
  path: '/partnerstvo',
  keywords: [
    'партнёрство с дистрибьютором одежды',
    'дистрибуция бренда одежды',
    'женская одежда для бутиков',
    'оптовые поставки дизайнерской одежды',
    'представительство бренда одежды',
    'партнеры для бренда одежды',
    'оптовые продажи женской одежды',
    'байер для бутика одежды',
  ],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${absoluteUrl('/partnerstvo')}#contact-page`,
  url: absoluteUrl('/partnerstvo'),
  name: 'Стать партнёром VN13',
  description: 'Партнёрство VN13 с брендами, бутиками и шоурумами.',
  isPartOf: { '@id': `${absoluteUrl('/')}#website` },
}

export default function PartnershipPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="pt-32 pb-20 md:pt-48 md:pb-28 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: '#b8935a' }}>Партнёрство VN13</p>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-8" style={{ color: '#0f0f0f' }}>
            Брендам — дистрибуция. Бутикам — сильный ассортимент.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed" style={{ color: '#686868' }}>
            VN13 соединяет европейские дизайнерские бренды, независимых производителей и розничных партнёров в России и странах СНГ. Мы помогаем запускать коллекции, планировать предзаказ и развивать продажи без потери идентичности бренда.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <article>
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Для брендов</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Выход на рынок через подходящих партнёров</h2>
            <p className="leading-relaxed mb-5" style={{ color: '#686868' }}>VN13 оценивает не только коллекцию, но и её коммерческую роль: позиционирование, ценовой уровень, производственные возможности и совместимость с портфелем.</p>
            <ul className="space-y-3" style={{ color: '#383838' }}>
              <li>— подбор бутиков, шоурумов и концепт-сторов;</li>
              <li>— сезонное планирование и предзаказ;</li>
              <li>— презентация коллекции байерам;</li>
              <li>— развитие дистрибуции в России и СНГ.</li>
            </ul>
          </article>
          <article>
            <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>Для ритейлеров</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>Ассортимент, который работает как коллекция</h2>
            <p className="leading-relaxed mb-5" style={{ color: '#686868' }}>Мы помогаем бутикам находить не случайные модели, а взаимодополняющие бренды и капсулы: с понятной эстетикой, ценовым балансом и возможностью повторных поставок.</p>
            <ul className="space-y-3" style={{ color: '#383838' }}>
              <li>— европейские дизайнерские бренды;</li>
              <li>— оптовые поставки и тестовые капсулы;</li>
              <li>— подбор по стилю и клиентскому профилю;</li>
              <li>— поддержка закупки и презентации коллекции.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#f3efe8', borderTop: '1px solid #e0ddd8' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-8" style={{ color: '#0f0f0f' }}>Как начать</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Опишите бренд или формат магазина', 'Согласуем ассортимент и коммерческую модель', 'Запускаем предзаказ или поставку'].map((step, index) => (
              <div key={step} className="p-7 bg-white" style={{ border: '1px solid #e0ddd8' }}>
                <span className="text-xs tracking-[0.16em]" style={{ color: '#b8935a' }}>0{index + 1}</span>
                <p className="mt-5 leading-relaxed" style={{ color: '#383838' }}>{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <Link href="/contact/" className="inline-flex px-7 py-4 text-sm tracking-[0.08em] uppercase" style={{ backgroundColor: '#0f0f0f', color: '#fff' }}>Обсудить партнёрство</Link>
            <ContactLink href="https://t.me/vn13agency" label="Telegram @vn13agency" />
          </div>
        </div>
      </section>
      <section className="border-t bg-white px-6 py-16 md:py-24" style={{ borderColor: '#e0ddd8' }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <article>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Что важно бренду</p>
            <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Партнёрство начинается с ясной задачи</h2>
            <p className="leading-relaxed" style={{ color: '#686868' }}>
              На первой встрече полезно обсудить эстетику бренда, производственные возможности, ценовой уровень, сезонность и желаемый рынок. Это помогает понять, нужен ли бренду дистрибьютор, агент по продажам, розничные партнёры или запуск ограниченной капсулы.
            </p>
          </article>
          <article>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Что важно бутику</p>
            <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Ассортимент под формат магазина</h2>
            <p className="mb-5 leading-relaxed" style={{ color: '#686868' }}>
              Для ритейлера важны город, аудитория, бюджет закупки, размерная сетка и сроки поставки. VN13 помогает сопоставить эти параметры с коллекцией и выбрать модели, которые можно собрать в коммерческую капсулу.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/optovaya-zhenskaya-odezhda/" className="underline underline-offset-4">Оптовые поставки</Link>
            <Link href="/preorder/" className="underline underline-offset-4">Предзаказ коллекций</Link>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  )
}
