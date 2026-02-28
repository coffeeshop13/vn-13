import { useLanguage } from '@/lib/context/LanguageContext'

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative" style={{ backgroundColor: '#fafaf8', borderTop: '1px solid #e0ddd8' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance mb-4" style={{ color: '#0f0f0f' }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl font-light max-w-2xl" style={{ color: '#6b6b6b' }}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}
