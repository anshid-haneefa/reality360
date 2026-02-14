import { PartyPopper, Landmark, Users, GraduationCap, Gamepad2, Home, Eye, PresentationIcon, Lightbulb, Palette, ArrowRight } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"
import { Button } from "@/components/ui/button"

const vrFeatures = [
  { icon: PartyPopper, label: "Wedding & Engagement VR Booths" },
  { icon: Landmark, label: "Exhibition & Trade Show Attractions" },
  { icon: Users, label: "Corporate Event Engagement" },
  { icon: GraduationCap, label: "School & College VR Sessions" },
  { icon: Gamepad2, label: "Multiplayer VR Experiences" },
]

const archFeatures = [
  { icon: Home, label: "Exterior & Interior 3D Rendering" },
  { icon: Eye, label: "VR Property Walkthroughs" },
  { icon: PresentationIcon, label: "Real Estate Sales Presentations" },
  { icon: Lightbulb, label: "Concept Visualization" },
  { icon: Palette, label: "Interior Design Previews" },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[180px]" />
        <div className="animate-pulse-glow absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[160px]" style={{ animationDelay: "2s" }} />
      </div>
      {/* Divider */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
        </AnimateIn>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* VR Entertainment */}
          <AnimateIn delay={0.1}>
            <div className="glass glass-hover group flex h-full flex-col rounded-2xl p-8 glow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Gamepad2 className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                VR Experiences for Events & Exhibitions
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We create interactive virtual reality attractions that elevate weddings, exhibitions,
                corporate events, school programs, and festivals.
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {vrFeatures.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <f.icon className="h-4 w-4" />
                    </div>
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-border/50 bg-card/30 text-foreground hover:bg-card/50 hover:text-foreground"
                >
                  <a href="#contact">
                    Plan Your Event Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Architectural Visualization */}
          <AnimateIn delay={0.2}>
            <div className="glass glass-hover group flex h-full flex-col rounded-2xl p-8 glow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Building2Icon />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Architectural 3D Rendering & VR Walkthroughs
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We help architects, builders, and developers present projects with photorealistic 3D
                renders and immersive VR walkthrough experiences.
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {archFeatures.map((f) => (
                  <li key={f.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                      <f.icon className="h-4 w-4" />
                    </div>
                    {f.label}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-border/50 bg-card/30 text-foreground hover:bg-card/50 hover:text-foreground"
                >
                  <a href="#contact">
                    Visualize Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

function Building2Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}
