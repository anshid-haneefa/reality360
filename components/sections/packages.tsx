import { Check, ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"

const vrPackages = [
  {
    name: "Starter Package",
    features: ["2 VR Headsets", "Up to 3 Hours", "On-site Setup & Operator"],
    highlighted: false,
  },
  {
    name: "Premium Package",
    features: ["4 VR Headsets", "Up to 5 Hours", "Full Engagement Setup"],
    highlighted: true,
  },
  {
    name: "Custom Event Solutions",
    features: ["Tailored immersive setups", "Large-scale events", "Custom configuration"],
    highlighted: false,
  },
]

const archPackages = [
  {
    name: "Basic Rendering Package",
    features: ["Exterior or Interior Visualization", "High-quality output", "Quick turnaround"],
    highlighted: false,
  },
  {
    name: "Full Project Visualization",
    features: ["Multiple renders", "Presentation visuals", "Revision rounds included"],
    highlighted: true,
  },
  {
    name: "VR Walkthrough Add-On",
    features: ["Immersive property walkthrough", "Interactive navigation", "Client-ready experience"],
    highlighted: false,
  },
]

function PackageCard({
  name,
  features,
  highlighted,
}: {
  name: string
  features: string[]
  highlighted: boolean
}) {
  return (
    <div
      className={`glass glass-hover relative flex h-full flex-col rounded-2xl p-6 ${
        highlighted ? "glow border-primary/25" : ""
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-6">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20">
            Popular
          </span>
        </div>
      )}
      <h4 className="font-display text-lg font-semibold text-foreground">{name}</h4>
      <ul className="mt-4 flex-1 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PackagesSection() {
  return (
    <section id="packages" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Service Packages
          </h2>
        </AnimateIn>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* VR Event Packages */}
          <AnimateIn delay={0.1}>
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                VR Event Packages
              </h3>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {vrPackages.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Architectural Packages */}
          <AnimateIn delay={0.2}>
            <div>
              <h3 className="mb-6 font-display text-xl font-semibold text-foreground">
                Architectural Packages
              </h3>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {archPackages.map((pkg) => (
                  <PackageCard key={pkg.name} {...pkg} />
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3} className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="#contact">
              Request Pricing Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AnimateIn>
      </div>
    </section>
  )
}
