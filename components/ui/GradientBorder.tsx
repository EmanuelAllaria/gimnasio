import { cn } from "@/lib/utils";

type GradientBorderProps = {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
};

export function GradientBorder({
  children,
  className,
  active = false,
}: GradientBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-[1px]",
        active
          ? "bg-gradient-to-br from-accent via-accent-light to-amber-400"
          : "bg-card-border",
        className,
      )}
    >
      <div className="relative h-full rounded-2xl bg-card">{children}</div>
    </div>
  );
}
