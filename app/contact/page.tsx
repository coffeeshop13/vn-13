import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { ContactLink } from '@/components/ContactLink'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Контакты VN13 | Женская одежда, производство и дистрибуция',
  description:
    'Свяжитесь с VN13, чтобы обсудить женскую одежду VN-13, производство коллекций, оптовые поставки, предзаказ и дистрибуцию европейских брендов.',
  path: '/contact',
  keywords: ['контакты VN13', 'женская одежда VN-13', 'производство женской одежды', 'дистрибуция одежды'],
})

export default function ContactPage() {
  return (
    <main>
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
