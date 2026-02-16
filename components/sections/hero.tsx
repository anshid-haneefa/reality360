"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // IntersectionObserver for performance - only animate when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Only calculate parallax when hero is visible
            if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
              // Normalize scroll position (0 to 1) within the hero section
              const scrollProgress = Math.max(0, Math.min(1, -sectionTop / sectionHeight));
              setScrollY(scrollProgress);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion, isInView]);

  // Calculate parallax transforms based on screen size
  const getParallaxTransform = () => {
    if (prefersReducedMotion) return {};

    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const isTablet = typeof window !== "undefined" && window.innerWidth >= 640 && window.innerWidth < 1024;

    // Mobile: minimal parallax (20% speed)
    // Tablet: moderate parallax (40% speed)
    // Desktop: full parallax (60% speed)
    const parallaxIntensity = isMobile ? 0.2 : isTablet ? 0.4 : 0.6;
    const translateY = scrollY * 100 * parallaxIntensity;

    return {
      transform: `translate3d(0, ${translateY}px, 0)`,
      willChange: isInView ? "transform" : "auto",
    };
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Floating Background Layer with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 hero-floating-bg"
        style={getParallaxTransform()}
      >
        <div className="absolute inset-0 scale-110">
          <Image
            src="/images/hero-vr3.png"
            alt=""
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Animated glow orbs - foreground layer (no parallax) */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <div className="animate-pulse-glow absolute -left-48 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[160px]" />
        <div
          className="animate-pulse-glow absolute -right-48 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[140px]"
          style={{ animationDelay: "2.5s" }}
        />
        <div
          className="animate-pulse-glow absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/8 blur-[180px]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(217 80% 56% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 80% 56% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content - foreground layer */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2 rounded-full border border-border/40 bg-card/30 px-4 py-1.5 opacity-0 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Immersive Technology Studio
          </span>
        </div>

        <h1 className="animate-fade-in-up stagger-1 font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground opacity-0 sm:text-6xl lg:text-8xl">
          <span className="text-balance">Reality 360</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Studios
          </span>
        </h1>

        <p className="animate-fade-in-up stagger-2 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground opacity-0 sm:text-xl">
          Immersive VR Experiences & Architectural Visualization
        </p>

        {/* <p className="animate-fade-in-up stagger-3 mx-auto mt-3 max-w-xl text-base text-muted-foreground/60 opacity-0">
          Bringing Spaces and Experiences to Life — Virtually.
        </p> */}

        <p
          
          className="animate-fade-in-up stagger-3 mt-3 text-muted-foreground/80 text-sm mb-10 max-w-2xl mx-auto leading-relaxed opacity-0"
        >
          Reality 360 Studios is a leading VR services company in Palakkad, Kerala, specializing in immersive VR event experiences and professional architectural 3D rendering solutions across Kerala.
        </p>

        <div className="animate-fade-in-up stagger-4 mt-12 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
          >
            <a href="#contact">
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-border/40 bg-card/20 text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-card/40 hover:text-foreground"
          >
            <a href="#services">View Our Services</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
