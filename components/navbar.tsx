"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/30 bg-background/80 backdrop-blur-2xl shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#home" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/20">
              <span className="text-sm font-bold text-primary-foreground">R</span>
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Reality 360
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>

          <button
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/20 bg-background/95 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card/50 hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#contact" onClick={() => setMobileOpen(false)}>Book a Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
