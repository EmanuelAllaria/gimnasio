import { services } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services() {
  return (
    <section id="servicios" className="section-padding bg-card/30">
      <div className="container-custom">
        <SectionHeading
          label="Servicios"
          title="Todo lo que necesitás"
          description="8 disciplinas, un solo objetivo: llevarte más lejos de lo que creías posible."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <RevealOnScroll key={service.title} delay={i * 0.05}>
                <article className="group glass rounded-2xl p-6 h-full hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-white tracking-wider uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold text-accent uppercase tracking-wider">
                    {service.highlight}
                  </span>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
