import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-card/20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
             <div className="flex px-2 items-center gap-2">
                      {/* Logo Icon */}
            
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg ">
                        {/* <span className="text-sm font-bold text-primary-foreground">R</span> */}
                        <Image
                          src="/images/vr-logo.png"
                          alt="Logo"
                          width={36}
                          height={36}
                        />
                      </div>
            
                      <a
                        href="#home"
                        className="font-display text-xl font-bold tracking-tight"
                      >
                        Reality <span className="gradient-text">360</span>
                      </a>
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
  );
}
