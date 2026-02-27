export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 text-balance">
          Strategic Partnership
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 leading-relaxed">
          We bridge European fashion masters with global retailers, creating partnerships that transcend borders and elevate brands for over a decade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-foreground text-background hover:bg-accent hover:text-background transition font-medium text-sm">
            For Retailers
          </button>
          <button className="px-8 py-3 border border-foreground hover:bg-accent-light transition font-medium text-sm">
            For Brands
          </button>
        </div>
      </div>
    </section>
  )
}
