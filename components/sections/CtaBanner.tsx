import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <RevealOnScroll>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 mesh-gradient bg-card" />
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-wide uppercase leading-none">
                Tu transformación
                <span className="block text-gradient">empieza hoy</span>
              </h2>
              <p className="mt-6 text-muted text-lg max-w-xl mx-auto">
                3 días de prueba gratis. Sin tarjeta. Sin compromiso. Solo vos,
                el hierro y tu mejor versión esperando.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#contacto" size="lg">
                  Reservá tu prueba gratis
                </Button>
                <Button href="#planes" variant="secondary" size="lg">
                  Ver planes
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
