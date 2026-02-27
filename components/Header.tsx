export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wider">VN13</div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#story" className="hover:text-accent transition">Our Story</a>
          <a href="#portfolio" className="hover:text-accent transition">Portfolio</a>
          <a href="/contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <div className="md:hidden">
          <button className="p-2 hover:bg-accent-light rounded transition">
            <span className="text-2xl">≡</span>
          </button>
        </div>
      </div>
    </header>
  )
}
