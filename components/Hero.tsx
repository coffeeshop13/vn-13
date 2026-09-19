import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-28 pb-10 md:pt-36 md:pb-16" style={{ backgroundColor: '#f7f4ee' }}>
      <div className="max-w-7xl mx-auto px-6 grid gap-9 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-base font-medium" style={{ color: '#76531f' }}>
            Женская одежда и европейские бренды
          </p>
          <h1 className="text-4xl md:text-6xl font-light leading-[1.08] text-balance" style={{ color: '#1d1b18' }}>
            Дизайнерская женская одежда, которую легко выбрать и приятно носить
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: '#56514a' }}>
            Платья, жакеты, рубашки и другие вещи VN-13. Поможем узнать наличие, размер и состав.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/vn-13-brand/"
              className="inline-flex min-h-[52px] items-center justify-center rounded-sm px-6 text-base font-medium transition-colors hover:bg-[#8a6b3f]"
              style={{ backgroundColor: '#1d1b18', color: '#fff' }}
            >
              Смотреть одежду
            </Link>
            <a
              href="tel:+79266022089"
              className="inline-flex min-h-[52px] items-center justify-center rounded-sm border px-6 text-base font-medium transition-colors hover:bg-white"
              style={{ borderColor: '#b8ad9c', color: '#1d1b18' }}
            >
              Позвонить и спросить
            </a>
          </div>
          <p className="mt-5 text-base" style={{ color: '#56514a' }}>
            Нужна быстрая помощь? Напишите нам в <a className="underline underline-offset-4" href="https://t.me/vn13agency">Telegram</a>.
          </p>
        </div>

        <div className="relative min-h-[370px] overflow-hidden rounded-[2px] bg-[#ded6ca] md:min-h-[510px]">
          <Image
            src="/hero-vn13-showroom-768-v20260913.webp"
            alt="Коллекция дизайнерской женской одежды VN13"
            width={768}
            height={432}
            priority
            fetchPriority="high"
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  )
}
