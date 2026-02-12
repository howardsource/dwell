import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About | dwel campers",
  description: "Learn about dwel campers - bespoke camper van interiors handcrafted in Hebden Bridge, Yorkshire.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero - Simple text hero with scroll space */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs text-muted-foreground mb-6">About</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95] max-w-4xl">
            Crafted for the journey.
          </h1>
        </div>
      </section>

      {/* Story Section - Editorial layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Our approach.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  dwel was founded in Hebden Bridge with a singular focus: creating van interiors that marry form with function. We believe that thoughtful design enables simpler living.
                </p>
                <p>
                  Our approach draws from traditional joinery and contemporary minimalism. Every surface, every joint, every detail is considered not just for aesthetics but for how it will serve you on the road.
                </p>
                <p>
                  We work primarily in quality hardwoods and birch ply, materials chosen for their durability, warmth, and ability to age gracefully.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/workshop.jpg"
                  alt="Our workshop in Hebden Bridge"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/images/gallery-1.jpg"
                  alt="Joinery detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-24 md:py-40 bg-secondary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Philosophy.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Three principles guide everything we create. They are not rules but rather a framework for decision-making that keeps our work honest and purposeful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <p className="text-xs text-muted-foreground mb-4">01</p>
              <h3 className="text-foreground mb-3">Simplicity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We remove what is unnecessary. Every element earns its place through function or by bringing joy. Nothing more, nothing less.
              </p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-4">02</p>
              <h3 className="text-foreground mb-3">Natural Materials</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wood, wool, linen, leather. Materials that feel good, age beautifully, and connect you to the world outside your windows.
              </p>
            </div>
            
            <div>
              <p className="text-xs text-muted-foreground mb-4">03</p>
              <h3 className="text-foreground mb-3">Considered Ergonomics</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Small spaces demand intelligent design. Every dimension is tested, every reach is measured, every movement is anticipated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-40 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                The project stages.
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <p className="text-xs text-muted-foreground w-6 pt-1">01</p>
                  <div>
                    <h3 className="text-foreground mb-2">Consultation</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We begin with a conversation about how you travel, what you need, and what you dream of. This shapes everything.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <p className="text-xs text-muted-foreground w-6 pt-1">02</p>
                  <div>
                    <h3 className="text-foreground mb-2">Design</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We create detailed plans and 3D models. You see exactly what you will receive before any wood is cut.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <p className="text-xs text-muted-foreground w-6 pt-1">03</p>
                  <div>
                    <h3 className="text-foreground mb-2">Build</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The hands-on work begins. You are welcome to visit the workshop and watch your van take shape.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <p className="text-xs text-muted-foreground w-6 pt-1">04</p>
                  <div>
                    <h3 className="text-foreground mb-2">Handover</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We walk through every detail together. Then the road awaits. We remain available for questions and support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-1/2 aspect-[3/4] relative overflow-hidden mt-12">
                <Image
                  src="/images/gallery-2.jpg"
                  alt="Build process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-1/2 aspect-[3/4] relative overflow-hidden">
                <Image
                  src="/images/gallery-3.jpg"
                  alt="Finished interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-card scroll-mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Contact.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you have a clear vision or just the first sparks of an idea, we would love to hear from you.
              </p>
              
              <div className="space-y-8">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Address</p>
                  <address className="text-foreground not-italic leading-relaxed">
                    Unit 2 Victoria Works<br />
                    Victoria Road<br />
                    Hebden Bridge<br />
                    HX7 8JX
                  </address>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Email</p>
                  <Link 
                    href="mailto:hello@dwelcampers.co.uk" 
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    hello@dwelcampers.co.uk
                  </Link>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Social</p>
                  <Link 
                    href="https://instagram.com/dwelcampers" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-70 transition-opacity"
                  >
                    @dwelcampers
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs text-muted-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs text-muted-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="vehicle" className="block text-xs text-muted-foreground mb-2">
                    Vehicle (if known)
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                    placeholder="e.g. VW T6, Mercedes Sprinter"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs text-muted-foreground mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-foreground text-background px-10 py-4 text-sm tracking-wide hover:bg-foreground/90 transition-colors mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
