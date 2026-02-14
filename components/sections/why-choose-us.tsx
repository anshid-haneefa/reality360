import { Cpu, ShieldCheck, Sparkles, Truck, Award } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const reasons = [
  {
    icon: Cpu,
    title: "Immersive Technology",
    description: "We use advanced VR systems to deliver smooth, high-impact experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Execution",
    description: "Structured setup, trained operators, reliable delivery.",
  },
  {
    icon: Sparkles,
    title: "Designed for Engagement",
    description:
      "Increase guest interaction at events and enhance client presentations for developers.",
  },
  {
    icon: Truck,
    title: "Mobile & Flexible",
    description:
      "We bring immersive solutions directly to your venue or office across Kerala.",
  },
  {
    icon: Award,
    title: "Premium Brand Experience",
    description: "Modern presentation that elevates your event or project image.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Why Us
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">{"Why Reality 360 Studios?"}</span>
          </h2>
        </AnimateIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <AnimateIn key={reason.title} delay={i * 0.08}>
              <div className="glass glass-hover group rounded-2xl p-6 glow-sm h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
