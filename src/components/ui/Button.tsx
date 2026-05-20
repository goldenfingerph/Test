import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-offset-obsidian",
  {
    variants: {
      variant: {
        primary:
          "bg-royal text-white hover:bg-royal-dark dark:bg-neon-cyan dark:text-obsidian dark:hover:shadow-glow dark:hover:brightness-110",
        secondary:
          "border border-slate-300 bg-white/80 text-slate-800 hover:bg-slate-50 dark:border-white/20 dark:bg-white/5 dark:text-white dark:backdrop-blur-md dark:hover:border-neon-cyan/50 dark:hover:bg-white/10",
        ghost:
          "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10",
        outline:
          "border-2 border-royal text-royal hover:bg-royal/10 dark:border-neon-cyan dark:text-neon-cyan dark:hover:bg-neon-cyan/10 dark:hover:shadow-glow",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
