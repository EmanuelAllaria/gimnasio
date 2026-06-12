"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { pricingPlans, annualDiscount } from "@/data/gym";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { formatPrice, cn } from "@/lib/utils";

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="planes" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Membresías"
          title="Elegí tu plan"
          description="Sin contratos eternos. Sin letra chica. Solo resultados."
        />

        <RevealOnScroll className="flex justify-center mb-12">
          <div className="glass rounded-full p-1 flex items-center gap-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                !annual ? "bg-accent text-white" : "text-muted hover:text-white",
              )}
            >
              Mensual
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2",
                annual ? "bg-accent text-white" : "text-muted hover:text-white",
              )}
            >
              Anual
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                -{annualDiscount * 100}%
              </span>
            </button>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, i) => {
            const price = annual
              ? Math.round(plan.monthlyPrice * (1 - annualDiscount))
              : plan.monthlyPrice;

            return (
              <RevealOnScroll key={plan.id} delay={i * 0.1}>
                <GradientBorder
                  active={plan.highlighted}
                  className={cn(
                    "h-full",
                    plan.highlighted && "md:scale-105 md:-my-4",
                  )}
                >
                  <div className="p-8 h-full flex flex-col">
                    {plan.badge && (
                      <span className="inline-block self-start bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                        {plan.badge}
                      </span>
                    )}

                    <h3 className="font-display text-3xl text-white tracking-wider uppercase">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{plan.description}</p>

                    <div className="mt-6 mb-8">
                      <span className="font-display text-5xl text-white">
                        {formatPrice(price)}
                      </span>
                      <span className="text-muted text-sm">/mes</span>
                      {annual && (
                        <p className="text-xs text-muted mt-1">
                          Facturado anualmente ({formatPrice(price * 12)}/año)
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check
                            size={18}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span className="text-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href="#contacto"
                      variant={plan.highlighted ? "primary" : "secondary"}
                      className="w-full mt-8"
                    >
                      Elegir {plan.name}
                    </Button>
                  </div>
                </GradientBorder>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
