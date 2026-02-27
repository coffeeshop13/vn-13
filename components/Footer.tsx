export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f0f0f', borderTop: '1px solid #1f1f1f' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#fff' }}>VN13</p>
            <p className="text-sm leading-relaxed" style={{ color: '#6b6b6b' }}>
              Эксклюзивная европейская дистрибьюция в России и СНГ.
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>Компания</p>
            <ul className="space-y-3">
              <li><a href="#story" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Наша история</a></li>
              <li><a href="#portfolio" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Портфолио</a></li>
              <li><a href="#contact" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Контакты</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>Партнерство</p>
            <ul className="space-y-3">
              <li><a href="#contact" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Для ритейлеров</a></li>
              <li><a href="#contact" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Для брендов</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.15em] uppercase mb-4" style={{ color: '#b8935a' }}>Социальные сети</p>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>Instagram</a></li>
              <li><a href="#" className="text-sm transition-colors duration-200" style={{ color: '#999' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#999')}>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid #1f1f1f' }}>
          <p className="text-xs" style={{ color: '#555' }}>&copy; 2024 VN13. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#555' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#999')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}>Политика конфиденциальности</a>
            <a href="#" className="text-xs transition-colors duration-200" style={{ color: '#555' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#999')}
              onMouseLeave={e => (e.currentTarget.style.color = '#555')}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
