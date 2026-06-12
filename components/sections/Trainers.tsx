import Image from "next/image";
import { trainers } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Trainers() {
  return (
    <section id="equipo" className="section-padding bg-card/30">
      <div className="container-custom">
        <SectionHeading
          label="Equipo"
          title="Conocé a los coaches"
          description="Profesionales certificados que viven el fitness y te llevan al siguiente nivel."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, i) => (
            <RevealOnScroll key={trainer.name} delay={i * 0.1}>
              <article className="group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name}, ${trainer.role} en FORGE Fitness`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                      {trainer.specialty}
                    </span>
                    <h3 className="font-display text-2xl text-white tracking-wider mt-1">
                      {trainer.name}
                    </h3>
                    <p className="text-sm text-muted">{trainer.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {trainer.bio}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs bg-card border border-card-border rounded-full px-3 py-1 text-muted"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
