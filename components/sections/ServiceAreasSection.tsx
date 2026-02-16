"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const serviceAreas = [
  "Palakkad",
  "Ottapalam",
  "Shoranur",
  "Mannarkkad",
  "Thrissur",
  "Malappuram",
  "Coimbatore",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="section-padding">
      <div className="max-w-6xl m-8 ">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
        >
          Service Coverage
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="font-display text-3xl md:text-5xl font-bold mb-8"
        >
          VR & 3D Rendering Services Across Kerala
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-6"
        >
          We provide professional VR event services in Palakkad and across Kerala, including immersive experiences for weddings, exhibitions, corporate functions, and school programs.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12"
        >
          For architects and developers, we deliver high-quality 3D rendering services in Kerala, including exterior visualization, interior rendering, and VR property walkthrough solutions tailored for the Kerala real estate market.
        </motion.p>

        <div className="flex flex-wrap gap-3">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i + 4}
              className="glass-card rounded-full px-5 py-2.5 flex items-center gap-2 glow-border"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
