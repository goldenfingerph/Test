import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300",
        "dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:backdrop-blur-md",
        "hover:border-royal/30 dark:hover:border-neon-cyan/30",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
