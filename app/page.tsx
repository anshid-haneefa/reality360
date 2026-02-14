import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ServicesSection } from "@/components/sections/services"
import { WhyChooseUsSection } from "@/components/sections/why-choose-us"
import { PortfolioSection } from "@/components/sections/portfolio"
import { PackagesSection } from "@/components/sections/packages"
import { TestimonialSection } from "@/components/sections/testimonial"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <PackagesSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
