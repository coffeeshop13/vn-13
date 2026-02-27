import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-bg.jpg"
          alt="VN13 Fashion Agency"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.45 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 md:pb-32 pt-36 w-full">
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#b8935a' }}>
          Эксклюзивная европейская дистрибьюция
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-6 text-white text-balance" style={{ letterSpacing: '-0.02em' }}>
          VN13
        </h1>
        <p className="text-lg md:text-xl font-light max-w-xl mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Ваш операционный партнёр на европейском рынке моды
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-200"
            style={{ backgroundColor: '#b8935a', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#a07e4a')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#b8935a')}
          >
            Для ритейлеров
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.5)', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Для брендов
          </a>
        </div>
      </div>
    </section>
  )
}
