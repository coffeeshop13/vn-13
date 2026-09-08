import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'Lookbook VN-13 | Капсульная женская одежда',
  description:
    'Lookbook VN-13: визуальное направление бренда женской одежды, капсульные силуэты, фактуры, европейская эстетика и идеи для бутиков.',
  path: '/lookbook',
  keywords: ['lookbook VN-13', 'капсульная женская одежда', 'lookbook женской одежды', 'дизайнерская женская одежда'],
})

const looks = [
  {
    title: 'Сдержанный городской слой',
    image: '/hero-bg.jpg',
    text: 'Верхний слой, спокойная палитра и фактура, которая работает в повседневном гардеробе бутика.',
  },
  {
    title: 'Французская мягкость',
    image: '/brands/manuelle-guibal.jpg',
    text: 'Свободная посадка, натуральные ткани и ощущение вещи, которую можно носить несколько сезонов.',
  },
  {
    title: 'Капсульный акцент',
    image: '/brands/sula.jpg',
    text: 'Ограниченный ассортимент, который дополняет коммерческое ядро коллекции и усиливает витрину.',
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
            Визуальное направление VN-13
          </h1>
          <p className="text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: '#6b6b6b' }}>
            Первый lookbook фиксирует направление бренда: капсульная женская одежда, спокойная цветовая логика, фактура, свободный силуэт и вещи для бутиков, которым важна не массовость, а характер.
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
      <section className="border-t px-6 py-16 md:py-24" style={{ backgroundColor: '#fff', borderColor: '#e0ddd8' }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Для клиента</p>
            <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Не образ на один выход, а работающий гардероб</h2>
            <p className="leading-relaxed" style={{ color: '#5f5b55' }}>
              Визуальный язык VN-13 строится вокруг вещей, которые соединяются между собой: свободных жакетов, платьев, рубашек, брюк и мягких верхних слоёв. Натуральные ткани, сложные нейтральные оттенки и архитектурный крой помогают собрать спокойную капсулу без ощущения униформы.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Для бутика</p>
            <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Визуальная селекция поддерживает продажи</h2>
            <p className="leading-relaxed" style={{ color: '#5f5b55' }}>
              Lookbook помогает закупщику увидеть не только отдельную модель, но и возможную роль коллекции в магазине: базовое ядро, сезонный акцент или лимитированная капсула. Такой взгляд упрощает байинг, мерчандайзинг и разговор с клиентом о качестве и посадке.
            </p>
          </div>
        </div>
      </section>
      <section className="border-t px-6 py-16 md:py-24" style={{ backgroundColor: '#faf8f4', borderColor: '#e0ddd8' }}>
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em]" style={{ color: '#b8935a' }}>Как читать lookbook</p>
          <h2 className="mb-5 text-3xl font-light md:text-4xl" style={{ color: '#0f0f0f' }}>Капсульная женская одежда как система</h2>
          <p className="mb-6 max-w-3xl leading-relaxed" style={{ color: '#5f5b55' }}>
            Lookbook VN-13 показывает не отдельные эффектные вещи, а логику капсулы: спокойную палитру, свободный силуэт, фактурные материалы и модели, которые можно соединять между собой. Такой подход помогает бутику собирать цельную витрину, а клиенту — понятный гардероб без лишнего количества позиций.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/kapsulnaya-zhenskaya-odezhda" className="underline underline-offset-4">О капсульной одежде</Link>
            <Link href="/vn-13-brand" className="underline underline-offset-4">Каталог VN-13</Link>
            <Link href="/contact" className="underline underline-offset-4">Запросить условия</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
