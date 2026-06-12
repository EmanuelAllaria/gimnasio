import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "flex flex-col gap-4",
          align === "center" && "items-center text-center",
        )}
      >
        {label && (
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em]">
            {label}
          </span>
        )}
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-white uppercase leading-none">
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "text-muted text-lg max-w-2xl leading-relaxed",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
