import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Full viewport */}
      <section className="relative h-screen flex items-end pb-20 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-camper.jpg"
            alt="Bespoke camper van interior with handcrafted wooden cabinetry"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <p className="text-xs text-background/60 mb-4">
            Bespoke Van Interiors - Hebden Bridge - Yorkshire
          </p>
          <div className="flex items-end justify-between">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.9] max-w-4xl">
              dwel<br/>campers
            </h1>
          </div>
        </div>
      </section>

      {/* Introduction with centered text */}
      <section className="py-24 md:py-40 bg-background">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-muted-foreground text-sm mb-6">Chez</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10 leading-tight">
            dwel campers
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            we create bespoke wooden interiors, designed to transform each vehicle into a true nomadic living space. Our guiding philosophy: live simply and in complete freedom.
          </p>
        </div>
      </section>

      {/* Featured Project - Staggered image pair */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-6 md:gap-8">
            {/* Left image - larger */}
            <div className="w-1/2 md:w-3/5">
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Custom kitchen area with oak cabinetry"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            {/* Right image - smaller, offset down */}
            <div className="w-1/2 md:w-2/5 pt-16 md:pt-32">
              <div className="relative aspect-[3/4] overflow-hidden group">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Cozy sleeping area with custom wood paneling"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* New badge + text */}
          <div className="mt-12 md:mt-16">
            <p className="text-xs text-accent mb-3">New.</p>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              <Link href="/about" className="hover:opacity-70 transition-opacity">
                Full Conversions.
              </Link>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              We offer complete van conversions tailored to your lifestyle. Each build combines our craftsmanship expertise with careful attention to your specific needs. From weekenders to full-time living, we create spaces that inspire adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Project Card with metadata */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/gallery-3.jpg"
                alt="Bespoke seating area with panoramic views"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src="/images/workshop.jpg"
                alt="Workshop craftsmanship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Project info bar */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="text-foreground">Volkswagen Transporter</span>
            <span className="text-muted-foreground">/2024/</span>
            <span className="text-muted-foreground">H1L1</span>
            <span className="text-muted-foreground">The Pennine</span>
            <Link href="/about" className="text-foreground hover:opacity-70 transition-opacity ml-auto">
              View the project
            </Link>
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-24 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  Bespoke builds.
                </Link>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Alongside our standard configurations, we also undertake fully bespoke projects. In these cases, we approach each van conversion as an architectural project. We listen closely to our clients to create an interior perfectly adapted to their desires and the type of journeys they wish to undertake.
              </p>
              <p className="text-sm text-muted-foreground">
                Understand <Link href="/about" className="text-foreground hover:opacity-70 transition-opacity">the project stages</Link>, and see <Link href="/about" className="text-foreground hover:opacity-70 transition-opacity">our work</Link>.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 aspect-[3/4] relative overflow-hidden group">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Interior detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-1/2 aspect-[3/4] relative overflow-hidden group mt-8">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Interior detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 bg-card">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square relative overflow-hidden group">
                <Image
                  src="/images/workshop.jpg"
                  alt="Craftsman at work"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Philosophy.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We create minimalist interiors, guided by principles of ergonomics and the use of natural materials. We always seek to avoid the superfluous, instead favouring a pursuit of simplicity and restraint.
              </p>
              <Link 
                href="/about" 
                className="text-sm text-foreground hover:opacity-70 transition-opacity"
              >
                Learn more.
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-foreground">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-background mb-6">
            Start your project.
          </h2>
          <p className="text-background/60 text-lg mb-10 max-w-xl mx-auto">
            Get in touch to discuss your vision. We would love to hear about your adventure plans.
          </p>
          <Link 
            href="/about#contact" 
            className="inline-block bg-background text-foreground px-10 py-4 text-sm tracking-wide hover:bg-background/90 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
