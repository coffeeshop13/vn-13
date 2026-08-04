import type { Metadata } from 'next'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Lookbook VN13 | Жакет с фактурой',
  description:
    'Lookbook VN13: жакет с выразительной фактурой — фронтальный, боковой и задний ракурсы для капсульной женской коллекции.',
  path: '/lookbook',
  keywords: ['lookbook VN13', 'жакет VN13', 'капсульная женская одежда', 'дизайнерская женская одежда'],
})

const looks = [
  {
    title: 'Жакет VN13 — фронтальный ракурс',
    image: '/lookbook/vn13-jacket/vn13-jacket-front.png',
    text: 'Выразительная объёмная фактура, высокая стойка и мягкий силуэт для городского капсульного гардероба.',
  },
  {
    title: 'Жакет VN13 — ракурс 3/4',
    image: '/lookbook/vn13-jacket/vn13-jacket-three-quarter.png',
    text: 'Детали застёжки и присборенные манжеты раскрывают характер модели при движении.',
  },
  {
    title: 'Жакет VN13 — вид со спины',
    image: '/lookbook/vn13-jacket/vn13-jacket-back.png',
    text: 'Цельная спинка подчёркивает фактуру ткани и свободную архитектуру силуэта.',
  },
]

export default function LookbookPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#b8935a' }}>
            Lookbook
          </p>
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Жакет VN13
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
            Новая модель VN13 в трёх ракурсах: спокойный песочный оттенок, тактильная фактура и свободный силуэт, созданный для собранного городского образа.
          </p>
        </div>
      </section>

      <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-6">
            {looks.map((look, index) => (
              <article key={look.title}>
                <div className="relative overflow-hidden mb-5" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-light mb-3" style={{ color: '#0f0f0f' }}>
                  {look.title}
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#6b6b6b' }}>
                  {look.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
