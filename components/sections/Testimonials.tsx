"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Testimonios"
          title="Lo que dicen nuestros miembros"
          description="Historias reales de transformación dentro de la comunidad FORGE."
        />

        <div className="max-w-4xl mx-auto relative">
          <Quote
            className="absolute -top-4 -left-2 text-accent/20"
            size={80}
          />

          <AnimatePresence mode="wait">
            <motion.article
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-accent fill-accent"
                  />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl text-white leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-accent">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                  <p className="text-xs text-accent mt-1 font-semibold">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={prev}
              className="p-2 rounded-full glass hover:text-accent transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-accent w-6"
                      : "bg-muted/40 hover:bg-muted"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="p-2 rounded-full glass hover:text-accent transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
