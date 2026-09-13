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
    alt: 'VN13 black textured designer coat',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-800.webp',
    srcSet: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-400.webp 400w, /brands/vn13-catalog/vn13-white-oversize-designer-shirt-card-v20260913-800.webp 800w',
    alt: 'Белая объёмная дизайнерская рубашка VN-13',
  },
]

export default function VN13Showcase() {
  return (
    <section style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-18">
        <div className="grid lg:grid-cols-[0.9fr_1.45fr] gap-8 lg:gap-10 items-start">
          <div className="max-w-xl">
            <p className="mb-3 text-base" style={{ color: '#9b7541' }}>
              Собственный бренд VN-13
            </p>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-balance" style={{ color: '#0f0f0f' }}>
              Одежда VN-13
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#5f5b55' }}>
              Жакеты, платья, рубашки и вещи с характером. Если сомневаетесь — просто спросите, мы поможем с выбором.
            </p>
            <Link
              href="/vn-13-brand"
              className="inline-flex min-h-[52px] items-center justify-center px-7 text-base font-medium transition-colors duration-200 hover:bg-[#a07e4a]"
              style={{ backgroundColor: '#9b7541', color: '#fff' }}
            >
              Смотреть одежду
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Link href="/vn-13-brand" className="group col-span-2 block">
              <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '16 / 9' }}>
                <picture className="block h-full w-full">
                  <source
                    srcSet="/brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-640.webp 640w, /brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-1000.webp 1000w"
                    sizes="(max-width: 1024px) calc(100vw - 3rem), 58vw"
                    type="image/webp"
                  />
                  <Image
                    src="/brands/vn13-catalog/vn13-designer-womenswear-collection-hero-v20260913-1000.webp"
                    alt="Коллекция дизайнерской женской одежды VN-13"
                    width={1000}
                    height={667}
                    sizes="(max-width: 1024px) calc(100vw - 3rem), 58vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
              </div>
            </Link>

            {featuredLooks.map((look) => (
              <Link key={look.src} href="/vn-13-brand" className="group block">
              <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '3 / 4' }}>
                <picture className="block h-full w-full">
                  <source
                    srcSet={look.srcSet}
                    sizes="(max-width: 640px) calc((100vw - 3.75rem) / 2), (max-width: 1024px) 45vw, 28vw"
                    type="image/webp"
                  />
                  <Image
                    src={look.src}
                    alt={look.alt}
                    width={800}
                    height={1200}
                    sizes="(max-width: 640px) calc((100vw - 3.75rem) / 2), (max-width: 1024px) 45vw, 28vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </picture>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
