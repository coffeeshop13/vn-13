import Image from 'next/image'
import Link from 'next/link'

const featuredLooks = [
  {
    src: '/brands/vn13-catalog/vn13-black-jacket-white-layered-dress.webp',
    alt: 'Чёрный жакет VN-13 с белым многослойным платьем',
  },
  {
    src: '/brands/vn13-catalog/vn13-blue-floral-designer-dress.webp',
    alt: 'Синее дизайнерское платье VN-13 с цветочным принтом',
  },
  {
    src: '/brands/vn13-catalog/vn13-black-textured-designer-coat.webp',
    alt: 'VN13 black textured designer coat',
  },
  {
    src: '/brands/vn13-catalog/vn13-white-oversize-designer-shirt.webp',
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
                <Image
                  src="/brands/vn13-catalog/vn13-designer-womenswear-collection.webp"
                  alt="Коллекция дизайнерской женской одежды VN-13"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Link>

            {featuredLooks.map((look) => (
              <Link key={look.src} href="/vn-13-brand" className="group block">
                <div className="relative overflow-hidden bg-[#f6f2ec]" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={look.src}
                    alt={look.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 28vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
