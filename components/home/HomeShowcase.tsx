import Image from 'next/image'
import Link from 'next/link'

const featuredLooks = [
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-white-layered-dress-card-v20260913-800.webp',
    srcSet: '/brands/vn13-catalog/vn13-black-jacket-white-layered-dress-card-v20260913-400.webp 400w, /brands/vn13-catalog/vn13-black-jacket-white-layered-dress-card-v20260913-800.webp 800w',
    alt: 'Чёрный жакет VN-13 с белым многослойным платьем',
  },
  {
    src: '/brands/vn13-catalog/vn13-blue-floral-designer-dress-card-v20260913-800.webp',
    srcSet: '/brands/vn13-catalog/vn13-blue-floral-designer-dress-card-v20260913-400.webp 400w, /brands/vn13-catalog/vn13-blue-floral-designer-dress-card-v20260913-800.webp 800w',
    alt: 'Синее дизайнерское платье VN-13 с цветочным принтом',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-textured-designer-coat-card-v20260913-800.webp',
    srcSet: '/brands/vn13-catalog/vn13-black-textured-designer-coat-card-v20260913-400.webp 400w, /brands/vn13-catalog/vn13-black-textured-designer-coat-card-v20260913-800.webp 800w',
    alt: 'Чёрное фактурное дизайнерское пальто VN-13',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-800.webp',
    srcSet: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-400.webp 400w, /brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-800.webp 800w',
    alt: 'Белая объёмная дизайнерская рубашка VN-13',
  },
]

const lookSizes = '(max-width: 768px) calc((100vw - 3.75rem) / 2), 22vw'

/** Own label VN-13: a wide collection shot and four looks. */
export default function HomeShowcase() {
  return (
    <section className="border-t border-[var(--rule)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-5">
            <p className="rubric">Собственный бренд VN-13</p>
            <h2 className="font-display mt-5 text-4xl md:text-5xl">Одежда VN-13</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-xl text-base leading-7 text-[var(--muted)] md:text-[17px]">
              Жакеты, платья, рубашки и вещи с характером. Если сомневаетесь — просто спросите, мы поможем с выбором.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/vn-13-brand/" className="btn btn-dark">
                Смотреть каталог VN-13
              </Link>
              <Link href="/vn-13-brand/" className="text-sm text-[var(--muted)] underline underline-offset-4 hover:text-[var(--bronze)]">
                Бренд одежды 13 (VN13)
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <Link href="/vn-13-brand/" className="group col-span-2 block md:col-span-4">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#f6f2ec] md:aspect-[3/1]">
              <picture className="block h-full w-full">
                <source
                  srcSet="/brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-640.webp 640w, /brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-800.webp 800w, /brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-1000.webp 1000w"
                  sizes="(max-width: 1280px) calc(100vw - 3rem), 1232px"
                  type="image/webp"
                />
                <Image
                  src="/brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-800.webp"
                  alt="Коллекция дизайнерской женской одежды VN-13"
                  width={800}
                  height={534}
                  sizes="(max-width: 1280px) calc(100vw - 3rem), 1232px"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </picture>
            </div>
          </Link>

          {featuredLooks.map((look) => (
            <Link key={look.src} href="/vn-13-brand/" className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f6f2ec]">
                <picture className="block h-full w-full">
                  <source srcSet={look.srcSet} sizes={lookSizes} type="image/webp" />
                  <Image
                    src={look.src}
                    alt={look.alt}
                    width={800}
                    height={1200}
                    sizes={lookSizes}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </picture>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
