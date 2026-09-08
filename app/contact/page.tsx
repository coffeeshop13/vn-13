import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { ContactLink } from '@/components/ContactLink'
import { absoluteUrl, createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Контакты VN13 | Женская одежда, производство и дистрибуция',
  description:
    'Свяжитесь с VN13, чтобы обсудить женскую одежду VN-13, производство коллекций, оптовые поставки, предзаказ и дистрибуцию европейских брендов.',
  path: '/contact',
  keywords: [
    'контакты VN13',
    'связаться с дистрибьютором одежды',
    'оптовый поставщик женской одежды',
    'производство женской одежды',
    'дистрибуция одежды',
  ],
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${absoluteUrl('/contact')}#contact-page`,
      url: absoluteUrl('/contact'),
      name: 'Контакты VN13',
      description:
        'Контакты VN13 для обсуждения оптовых поставок, дистрибуции, предзаказа и производства женской одежды.',
      inLanguage: 'ru',
      isPartOf: { '@id': `${absoluteUrl('/')}#website` },
      mainEntity: { '@id': `${absoluteUrl('/')}#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'VN13', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Контакты', item: absoluteUrl('/contact') },
      ],
    },
  ],
}

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-16 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Связаться с VN13
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            Обсудим дизайнерскую женскую одежду VN-13, европейские бренды, оптовые поставки для бутика, предзаказ или запуск коллекции.
          </p>
        </div>
      </section>
      
      <ContactForm />

      <section className="py-20 md:py-28 px-6" style={{ backgroundColor: '#f5f4f1' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                С какими запросами обращаются в VN13
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#555' }}>
                Команда VN13 помогает связать задачу ритейлера или бренда с подходящим форматом работы: от подбора европейских брендов для бутика до собственного направления VN-13 и производства капсульных коллекций.
              </p>
              <ul className="space-y-3 leading-relaxed" style={{ color: '#333' }}>
                <li>— оптовая женская одежда для бутиков, шоурумов и концепт-сторов;</li>
                <li>— дистрибуция и представительство дизайнерских брендов;</li>
                <li>— предзаказ коллекций и планирование ассортимента;</li>
                <li>— производство женской одежды и капсул малыми партиями.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-light mb-6" style={{ color: '#0f0f0f' }}>
                Как проходит первый контакт
              </h2>
              <ol className="space-y-5 leading-relaxed" style={{ color: '#333' }}>
                <li>
                  <strong className="font-normal" style={{ color: '#0f0f0f' }}>1. Опишите задачу.</strong>{' '}
                  Расскажите о формате магазина или бренда, аудитории и нужных категориях одежды.
                </li>
                <li>
                  <strong className="font-normal" style={{ color: '#0f0f0f' }}>2. Обсудим подходящий формат.</strong>{' '}
                  Уточним, нужен ли вам подбор брендов, предзаказ, дистрибуция или собственная капсула.
                </li>
                <li>
                  <strong className="font-normal" style={{ color: '#0f0f0f' }}>3. Сформируем следующий шаг.</strong>{' '}
                  Подскажем, какие материалы и сведения нужны для предметного разговора о коллекции и сотрудничестве.
                </li>
              </ol>
              <p className="mt-7 leading-relaxed" style={{ color: '#555' }}>
                Если вы пока изучаете направление, начните с материалов о{' '}
                <Link href="/optovaya-zhenskaya-odezhda" className="underline underline-offset-4" style={{ color: '#0f0f0f' }}>
                  оптовой женской одежде
                </Link>{' '}
                или{' '}
                <Link href="/evropeyskie-brendy-zhenskoy-odezhdy" className="underline underline-offset-4" style={{ color: '#0f0f0f' }}>
                  европейских брендах для бутика
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 px-6" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Контактная информация</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Электронная почта</p>
                  <ContactLink href="mailto:info@vn-13.com" label="info@vn-13.com" />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Телефон</p>
                  <ContactLink href="tel:+79266022089" label="+7 926 602 20 89" />
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Рынки работы</p>
                  <p style={{ color: '#0f0f0f' }}>Россия и страны СНГ</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Социальные сети</h2>
              <div className="space-y-4">
                <p style={{ color: '#6b6b6b' }}>
                  Для оперативной связи с командой VN13 используйте Telegram.
                </p>
                <ContactLink href="https://t.me/vn13agency" label="Telegram @vn13agency" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
