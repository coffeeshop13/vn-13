import type { Metadata } from 'next'
import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us | VN13 Fashion Agency',
  description: 'Get in touch with VN13. We'd love to discuss your fashion partnership needs.',
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="pt-32 pb-16 md:pt-48 md:pb-16 px-4 sm:px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6 text-balance">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
            Whether you're a retailer looking for exclusive European brands or a designer ready to expand globally, we'd love to hear from you.
          </p>
        </div>
      </section>
      
      <ContactForm />
      
      <section className="py-20 md:py-32 px-4 sm:px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-text-secondary mb-1">Email</p>
                  <a href="mailto:hello@vn-13.com" className="hover:text-accent transition">hello@vn-13.com</a>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">Phone</p>
                  <a href="tel:+33123456789" className="hover:text-accent transition">+33 1 23 45 67 89</a>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1">Location</p>
                  <p>Paris, France</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-light mb-6">Follow Us</h2>
              <div className="space-y-4">
                <a href="#" className="block hover:text-accent transition">Instagram</a>
                <a href="#" className="block hover:text-accent transition">LinkedIn</a>
                <a href="#" className="block hover:text-accent transition">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
