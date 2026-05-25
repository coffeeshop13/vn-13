import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import PortfolioGrid from '@/components/PortfolioGrid'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <PortfolioGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
