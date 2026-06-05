import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'VN-13 | Собственный бренд женской одежды',
  description:
    'VN-13 — собственный бренд женской одежды от VN13: капсульные коллекции, европейское производство, ограниченные тиражи и дистрибуция для бутиков.',
  path: '/vn-13-brand',
  keywords: ['VN-13 бренд', 'бренд женской одежды VN-13', 'собственный бренд женской одежды', 'дизайнерская женская одежда'],
})

const values = [
  'Женская одежда с фокусом на силуэт, ткань, посадку и долговечность.',
  'Капсульный подход: вещи должны работать вместе, а не существовать отдельно.',
  'Ограниченные партии и контролируемая дистрибуция для сохранения ценности бренда.',
  'Производственная логика, основанная на европейских партнерах и строгом контроле качества.',
]

export default function VN13BrandPage() {
  return (
    <main>
      <Header />
      <section className="relative min-h-screen flex items-end" style={{ backgroundColor: '#0f0f0f' }}>
        <Image
          src="/hero-bg.jpg"
          alt="VN-13 собственный бренд женской одежды"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.42 }}
        />
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
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>
            Связанные страницы
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/zhenskaya-odezhda" className="p-4" style={{ border: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
              Женская одежда VN-13
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
      <Footer />
    </main>
  )
}
