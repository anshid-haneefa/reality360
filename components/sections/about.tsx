import { Headset, Building2, Eye, MapPin } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const highlights = [
  {
    icon: Headset,
    title: "Immersive VR Event Experiences",
    description: "Interactive VR attractions for weddings, exhibitions, and corporate events.",
  },
  {
    icon: Building2,
    title: "Architectural 3D Rendering",
    description: "Photorealistic 3D visualization for architects, builders, and developers.",
  },
  {
    icon: Eye,
    title: "VR Property Walkthroughs",
    description: "Immersive virtual property tours that bring designs to life.",
  },
  {
    icon: MapPin,
    title: "Mobile Setup Across Kerala",
    description: "We bring our full setup directly to your venue or office.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Divider line */}
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            About Us
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Who We Are</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Reality 360 Studios is a Palakkad-based immersive technology studio delivering premium
            virtual reality experiences for events and high-quality 3D architectural visualization
            solutions for professionals.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground/70">
            We combine creative storytelling, spatial design, and immersive technology to transform
            how people experience entertainment and how developers present their projects.
          </p>
        </AnimateIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.1}>
              <div className="glass glass-hover group rounded-2xl p-6 glow-sm h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
