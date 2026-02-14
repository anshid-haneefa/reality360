import { AnimateIn } from "@/components/animate-in"

export function TestimonialSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Impact
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Creating Impact Through Immersion</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We help event organizers create unforgettable experiences and assist architects and
            developers in presenting projects with clarity and confidence.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground/70">
            Our immersive solutions enhance engagement, improve communication, and elevate brand
            perception.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { value: "50+", label: "Events Delivered" },
            { value: "100+", label: "Projects Visualized" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="glass glass-hover rounded-2xl p-6">
              <p className="font-display text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </AnimateIn>
      </div>
    </section>
  )
}
