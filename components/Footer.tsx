export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#story" className="hover:text-foreground transition">Our Story</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">For Retailers</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition">Browse Brands</a></li>
              <li><a href="#" className="hover:text-foreground transition">Partnerships</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">For Brands</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition">Expand Markets</a></li>
              <li><a href="#" className="hover:text-foreground transition">Get Listed</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4 text-sm">Follow</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-foreground transition">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
            <p>&copy; 2024 VN13. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
