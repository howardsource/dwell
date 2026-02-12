import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-foreground flex items-center justify-center">
                <span className="font-serif text-sm">D</span>
              </div>
              <span className="text-sm tracking-wide">
                dwel<br/>campers
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Bespoke camper van interiors, handcrafted in Hebden Bridge, Yorkshire.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-muted-foreground mb-4">Navigation</p>
            <div className="flex flex-col gap-3">
              <Link 
                href="/" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                Conversions
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                Bespoke
              </Link>
              <Link 
                href="/about" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                Philosophy
              </Link>
              <Link 
                href="/about#contact" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-muted-foreground mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <Link 
                href="mailto:hello@dwelcampers.co.uk" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                hello@dwelcampers.co.uk
              </Link>
              <Link 
                href="https://instagram.com/dwelcampers" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                @dwelcampers
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} dwel campers
          </p>
          <p className="text-xs text-muted-foreground">
            Hebden Bridge, West Yorkshire
          </p>
        </div>
      </div>
    </footer>
  )
}
