import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | VN13 Fashion Agency',
  description: 'Get in touch with VN13. We\'d love to discuss your fashion partnership needs.',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-16 px-6" style={{ backgroundColor: '#fafaf8' }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-balance" style={{ color: '#0f0f0f' }}>
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl max-w-2xl" style={{ color: '#6b6b6b' }}>
            Whether you're a retailer looking for exclusive European brands or a designer ready to expand globally, we'd love to hear from you.
          </p>
        </div>
      </section>
      
      <ContactForm />
      
      <section className="py-20 md:py-32 px-6" style={{ borderTop: '1px solid #e0ddd8', backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Email</p>
                  <a href="mailto:hello@vn-13.com" className="transition-colors duration-200" style={{ color: '#0f0f0f' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#b8935a')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#0f0f0f')}>hello@vn-13.com</a>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Phone</p>
                  <a href="tel:+33123456789" className="transition-colors duration-200" style={{ color: '#0f0f0f' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#b8935a')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#0f0f0f')}>+33 1 23 45 67 89</a>
                </div>
                <div>
                  <p className="text-sm mb-1" style={{ color: '#6b6b6b' }}>Location</p>
                  <p style={{ color: '#0f0f0f' }}>Paris, France</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light mb-6" style={{ color: '#0f0f0f' }}>Follow Us</h2>
              <div className="space-y-4">
                <a href="#" className="block transition-colors duration-200" style={{ color: '#0f0f0f' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b8935a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0f0f0f')}>Instagram</a>
                <a href="#" className="block transition-colors duration-200" style={{ color: '#0f0f0f' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b8935a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0f0f0f')}>LinkedIn</a>
                <a href="#" className="block transition-colors duration-200" style={{ color: '#0f0f0f' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#b8935a')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#0f0f0f')}>Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
