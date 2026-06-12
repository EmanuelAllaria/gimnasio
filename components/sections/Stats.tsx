import { stats } from "@/data/gym";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function Stats() {
  return (
    <section id="stats" className="relative border-y border-card-border bg-card/50">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
