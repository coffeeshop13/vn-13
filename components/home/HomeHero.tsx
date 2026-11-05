import Image from 'next/image'
import Link from 'next/link'

export default function HomeHero() {
  return (
    <section className="bg-[var(--cream)] pt-24 pb-10 md:pt-28 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-6">
          <p className="rubric">Женская одежда и европейские бренды</p>
          <h1 className="font-display mt-6 text-[2.6rem] leading-[1.05] text-balance md:text-6xl lg:text-[4.25rem]">
            Дизайнерская женская одежда, которую легко выбрать и приятно носить
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-[17px]">
            Платья, жакеты, рубашки и другие вещи VN-13. Поможем узнать наличие, размер и состав.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/vn-13-brand/" className="btn btn-dark">
              Каталог женской одежды VN-13
            </Link>
            <a href="tel:+79266022089" className="btn btn-outline">
              Позвонить и спросить
            </a>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">
            Нужна быстрая помощь? Напишите нам в{' '}
            <a className="underline underline-offset-4 hover:text-[var(--bronze)]" href="https://t.me/vn13agency">
              Telegram
            </a>
            .
          </p>
        </div>

        <figure className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-[#ded6ca] lg:aspect-[5/4]">
            <picture className="absolute inset-0">
              <source media="(max-width: 700px)" srcSet="/hero-vn13-showroom-640-v20260913.webp" type="image/webp" />
              <Image
                src="/hero-vn13-showroom-768-v20260913.webp"
                alt="Коллекция дизайнерской женской одежды VN13"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </picture>
          </div>
          <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            Шоурум VN13 · Москва, Большая Дмитровка
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
