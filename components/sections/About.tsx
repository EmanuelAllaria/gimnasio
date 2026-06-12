import Image from "next/image";
import { about, gym } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function About() {
  return (
    <section id="nosotros" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Nosotros"
          title={about.title}
          align="left"
          className="max-w-xl"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <RevealOnScroll direction="left">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-muted text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="grid sm:grid-cols-3 gap-6 pt-6">
                {about.values.map((value) => (
                  <div
                    key={value.title}
                    className="glass rounded-xl p-5 hover:border-accent/30 transition-colors"
                  >
                    <h3 className="font-display text-xl text-accent tracking-wider uppercase">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right" delay={0.2}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={about.image}
                alt={about.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-4">
                <p className="font-display text-2xl text-white tracking-wider">
                  DESDE {gym.founded}
                </p>
                <p className="text-sm text-muted mt-1">
                  Forjando campeones en Buenos Aires
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
