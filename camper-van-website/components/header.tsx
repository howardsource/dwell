"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/dwel-logo.svg" 
            alt="dwel campers" 
            width={120} 
            height={45}
            className={`h-10 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link 
            href="/" 
            className={`px-4 py-2 text-xs tracking-wide transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/70 hover:text-background"}`}
          >
            Conversions
          </Link>
          <Link 
            href="/about" 
            className={`px-4 py-2 text-xs tracking-wide transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/70 hover:text-background"}`}
          >
            Bespoke
          </Link>
          <Link 
            href="/about" 
            className={`px-4 py-2 text-xs tracking-wide transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/70 hover:text-background"}`}
          >
            Philosophy
          </Link>
          <Link 
            href="/about#contact" 
            className={`px-4 py-2 text-xs tracking-wide transition-colors ${scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/70 hover:text-background"}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-background"}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background px-8 py-8 flex flex-col gap-4">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Conversions
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Bespoke
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Philosophy
          </Link>
          <Link 
            href="/about#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
