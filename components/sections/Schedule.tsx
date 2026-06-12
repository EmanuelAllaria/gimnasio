import { Clock, Calendar } from "lucide-react";
import { schedule } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Schedule() {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-custom">
        <SectionHeading
          label="Horarios"
          title="Siempre hay un momento para entrenar"
          description="Horarios extendidos para que el gym se adapte a tu vida, no al revés."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {schedule.map((item, i) => (
            <RevealOnScroll key={item.days} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center hover:border-accent/30 transition-colors">
                <Calendar className="mx-auto text-accent mb-4" size={28} />
                <h3 className="font-display text-lg text-white tracking-wider uppercase">
                  {item.days}
                </h3>
                <div className="mt-3 flex items-center justify-center gap-2 text-muted">
                  <Clock size={16} className="text-accent" />
                  <span className="text-sm font-semibold text-white">
                    {item.hours}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-10 text-center">
          <p className="text-sm text-muted">
            Plan <span className="text-accent font-semibold">Elite</span> incluye
            acceso 24/7 todos los días del año.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
