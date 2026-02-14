export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">R</span>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Reality 360
              </span>
            </div>
            <p className="text-sm text-muted-foreground/60">
              Immersive Experiences & Architectural Visualization
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-8">
            {[
              { label: "Home", href: "#home" },
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border/20 pt-8 text-center">
          <p className="text-xs text-muted-foreground/50">
            {`\u00A9 ${currentYear} Reality 360 Studios. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
