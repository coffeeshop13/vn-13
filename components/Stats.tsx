const stats = [
  { value: '20+', label: 'Лет опыта' },
  { value: '40+', label: 'Партнеров' },
  { value: '22+', label: 'Крупных городов' },
  { value: '100+', label: 'Розничных партнеров' },
]

export default function Stats() {
  return (
    <section id="story" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>О нас</p>
        <h2 className="text-3xl md:text-4xl font-light mb-6 text-balance" style={{ color: '#0f0f0f' }}>
          Стратегическое партнерство,<br className="hidden md:block" /> построенное на доверии
        </h2>
        <p className="max-w-2xl text-base leading-relaxed mb-16" style={{ color: '#6b6b6b' }}>
          Более десяти лет мы являемся мостом между исключительными европейскими мастерами и самыми престижными ритейлерами в России и странах СНГ. Мы не просто продаём одежду — мы рассказываем истории мастерства, наследия и вневременного стиля.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: '#b8935a' }}>{stat.value}</div>
              <p className="text-sm tracking-wide" style={{ color: '#6b6b6b' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
