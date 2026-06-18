import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import PortfolioGrid from '@/components/PortfolioGrid'
import SeoHub from '@/components/SeoHub'
import CategorySeoLinks from '@/components/CategorySeoLinks'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <SeoHub />
      <CategorySeoLinks />
      <PortfolioGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}
