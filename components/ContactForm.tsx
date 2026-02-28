'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/context/LanguageContext'

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  border: '1px solid #e0ddd8',
  backgroundColor: '#fafaf8',
  color: '#0f0f0f',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactForm() {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', message: '' })
    }
  }

  return (
    <section id="contact" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fafaf8' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#b8935a' }}>Contact</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#0f0f0f' }}>{translations.contactTitle}</h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#6b6b6b' }}>
              {translations.contactDescription}
            </p>
            <div className="space-y-4 text-sm" style={{ color: '#6b6b6b' }}>
              <p className="font-medium" style={{ color: '#0f0f0f' }}>{translations.contactCompany}</p>
              <p>{translations.contactEmail}</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex items-center justify-center h-full py-20">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#f0e9dc' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#b8935a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-lg font-light" style={{ color: '#0f0f0f' }}>{translations.formSuccess}</p>
                  <p className="text-sm mt-2" style={{ color: '#6b6b6b' }}>{translations.formSuccessDescription}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: '#6b6b6b' }}>{translations.formName} *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: '#6b6b6b' }}>{translations.formEmail} *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: '#6b6b6b' }}>{translations.formCompany}</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} style={inputStyle} />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: '#6b6b6b' }}>{translations.formMessage} *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{ ...inputStyle, resize: 'none' }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-medium tracking-wide transition-all duration-200"
                  style={{ backgroundColor: '#0f0f0f', color: '#fff' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8935a')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0f0f0f')}
                >
                  {translations.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
