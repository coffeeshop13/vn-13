'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type GalleryImage = {
  src: string
  alt: string
  title?: string
  caption?: string
}

type ProductImageGalleryProps = {
  images: GalleryImage[]
  gridClassName?: string
  imageSizes?: string
  captionClassName?: string
}

export default function ProductImageGallery({
  images,
  gridClassName = 'grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
  imageSizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
  captionClassName = 'mt-4 text-sm leading-relaxed text-[#5f5f5f]',
}: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeImage = activeIndex === null ? null : images[activeIndex]
  const activeLabel = activeImage ? activeImage.title ?? activeImage.caption ?? activeImage.alt : ''

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrevious = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current - 1 + images.length) % images.length))
  }, [images.length])
  const showNext = useCallback(() => {
    setActiveIndex((current) => (current === null ? current : (current + 1) % images.length))
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrevious])

  return (
    <>
      <div className={gridClassName}>
        {images.map((image, index) => (
          <figure key={image.src}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group block w-full text-left"
              aria-label={`Открыть увеличенное фото: ${image.title ?? image.caption ?? image.alt}`}
            >
              <span className="relative block overflow-hidden bg-[#f3f0eb]" style={{ aspectRatio: '2/3' }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={imageSizes}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/55 text-2xl leading-none text-white transition group-hover:bg-white group-hover:text-black" aria-hidden="true">
                  +
                </span>
              </span>
            </button>
            {(image.caption || image.title) && (
              <figcaption className={captionClassName}>
                {image.caption ?? image.title}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6 md:px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Увеличенное фото VN-13"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/45 text-2xl leading-none text-white transition hover:bg-white hover:text-black md:right-8 md:top-8"
            aria-label="Закрыть увеличенное фото"
          >
            ×
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrevious()
                }}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-3xl leading-none text-white transition hover:bg-white hover:text-black md:left-8"
                aria-label="Предыдущее фото"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/45 text-3xl leading-none text-white transition hover:bg-white hover:text-black md:right-8"
                aria-label="Следующее фото"
              >
                ›
              </button>
            </>
          )}

          <div className="relative h-full w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-xl px-4 pb-2 text-center text-sm text-white/80">
              {activeLabel}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
