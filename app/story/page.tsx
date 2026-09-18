import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createMetadata } from '@/lib/seo'

export const metadata: Metadata = createMetadata({
  title: 'История VN13 | Дистрибуция и бренд женской одежды VN-13',
  description:
    'История VN13: дистрибуция европейских дизайнерских брендов, развитие собственного бренда женской одежды VN-13 и партнерства с бутиками.',
  path: '/story',
  keywords: ['история VN13', 'бренд женской одежды VN-13', 'дистрибуция женской одежды'],
})

export default function StoryPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-12 text-balance">
            История VN13
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-text-secondary">
            <p>
              VN13 строится на простой идее: сильные европейские дизайнерские бренды должны находить свою аудиторию, а бутики — получать не случайный ассортимент, а ясную и качественную селекцию. Более десяти лет мы соединяем марки, производственные партнёрства и розницу.
            </p>
            
            <p>
              Мы понимаем обе стороны fashion-рынка: дизайнеров и производственные команды, для которых важны материал, посадка и идея коллекции, а также ритейлеров, которым нужен ассортимент, понятный их клиенту и экономике магазина.
            </p>
            
            <p>
              VN13 не ограничивается знакомством бренда с ритейлером. Мы выстраиваем партнёрства вокруг качества продукта, соответствия рынку, предзаказа, контролируемой дистрибуции и долгосрочной работы с коллекцией.
            </p>
            
            <div className="border-l-4 border-accent pl-6 py-6">
              <p className="text-foreground text-xl font-light">
                «Каждое партнёрство — это история о ремесле, точном выборе и взаимном росте».
              </p>
            </div>
            
            <p>
              В портфеле VN13 — европейские дизайнерские марки и собственное направление VN-13. Мы работаем с бутиками, шоурумами и клиентами в России и странах СНГ, чтобы редкие и хорошо сделанные вещи попадали в правильный контекст и сохраняли свою ценность.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-border bg-accent-light/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-12">Принципы VN13</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-medium text-lg mb-4">Качество</h3>
              <p className="text-text-secondary leading-relaxed">Мы выбираем бренды, в которых качество материала, посадки и производства подтверждается самой коллекцией.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Подлинность</h3>
              <p className="text-text-secondary leading-relaxed">У каждой коллекции должен быть собственный язык, история и понятная дизайнерская логика.</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Партнёрство</h3>
              <p className="text-text-secondary leading-relaxed">Мы инвестируем в долгие отношения с брендами и розничными партнёрами, основанные на прозрачности и общем результате.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t px-4 py-20 sm:px-6 md:py-28">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-5 text-3xl font-light md:text-4xl">От дистрибуции к собственной капсуле</h2>
            <p className="leading-relaxed text-text-secondary">
              Опыт работы с европейскими дизайнерами помогает VN13 точнее формировать собственные коллекции VN-13: выбирать ткани, проверять посадку, планировать небольшие серии и понимать, какая вещь действительно нужна гардеробу клиента или ассортименту бутика.
            </p>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-light md:text-4xl">Партнёрство на долгий срок</h2>
            <p className="mb-5 leading-relaxed text-text-secondary">
              Сегодня VN13 соединяет селекцию брендов, оптовые поставки, предзаказ и производственные проекты. Мы оцениваем не только эстетику, но и качество процесса: сроки, коммуникацию, повторяемость и потенциал развития марки.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/brands" className="underline underline-offset-4">Бренды в портфеле</Link>
              <Link href="/proizvoditel-zhenskoy-odezhdy" className="underline underline-offset-4">Производство VN-13</Link>
              <Link href="/optovaya-zhenskaya-odezhda" className="underline underline-offset-4">Оптовая одежда для бутиков</Link>
              <Link href="/partnerstvo" className="underline underline-offset-4">Партнёрство</Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
