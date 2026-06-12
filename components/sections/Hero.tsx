"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { gym, heroImage } from "@/data/gym";
import { Button } from "@/components/ui/Button";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Atleta entrenando en FORGE Fitness Club"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 mesh-gradient" />
      </div>

      <div className="relative z-10 container-custom text-center pt-24 pb-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-6"
          >
            {gym.tagline}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-wide text-white uppercase max-w-5xl"
          >
            {gym.headline.split(". ").map((line, i) => (
              <span key={i} className="block">
                {line}
                {i < gym.headline.split(". ").length - 1 ? "." : ""}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            {gym.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button href="#planes" size="lg">
              Empezá hoy
            </Button>
            <Button href="#servicios" variant="secondary" size="lg">
              Tour virtual
            </Button>
          </motion.div>
        </motion.div>

        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors animate-float"
          aria-label="Scroll hacia abajo"
        >
          <ChevronDown size={32} />
        </motion.a>
      </div>
    </section>
  );
}
