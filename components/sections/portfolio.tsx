import Image from "next/image"
import { AnimateIn } from "@/components/animate-in"

const portfolioItems = [
  {
    src: "/images/portfolio-wedding.jpg",
    title: "VR Booth Setup",
    category: "Wedding Event",
  },
  {
    src: "/images/portfolio-exhibition.jpg",
    title: "VR Experience",
    category: "Public Exhibition",
  },
  {
    src: "/images/portfolio-corporate.jpg",
    title: "Corporate Engagement",
    category: "Corporate Setup",
  },
  {
    src: "/images/portfolio-exterior.jpg",
    title: "Residential Exterior",
    category: "3D Rendering",
  },
  {
    src: "/images/portfolio-interior.jpg",
    title: "Interior Visualization",
    category: "3D Concept",
  },
  {
    src: "/images/portfolio-walkthrough.jpg",
    title: "VR Walkthrough",
    category: "Property Preview",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Work
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Selected Work
          </h2>
        </AnimateIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/30 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={`${item.title} — ${item.category}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
