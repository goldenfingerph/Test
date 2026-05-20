import Link from "next/link";
import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";
import { trustBadges } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow — dark mode */}
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-neon-cyan/10 blur-3xl dark:block hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-royal/10 blur-3xl dark:hidden"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="animate-slide-up">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-neon-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Dubai&apos;s premium repair studio
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            Premium Device Repair,{" "}
            <span className="bg-gradient-to-r from-royal to-neon-blue bg-clip-text text-transparent dark:from-neon-cyan dark:to-neon-blue">
              Restored to Perfection
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            From cracked screens to board-level diagnostics — Emirates
            Technology PPC delivers Apple-grade precision with same-day
            turnaround and transparent pricing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Book a Repair
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/60 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                {badge.includes("Warranty") ? (
                  <Shield className="h-3.5 w-3.5 text-royal dark:text-neon-cyan" />
                ) : (
                  <Zap className="h-3.5 w-3.5 text-royal dark:text-neon-cyan" />
                )}
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero visual placeholder */}
        <div className="relative animate-fade-in lg:justify-self-end">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-100 to-slate-200/50 p-1 shadow-xl dark:border-white/10 dark:from-white/10 dark:to-white/5 dark:shadow-glow">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-slate-900 sm:aspect-square">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="relative">
                  <div className="h-48 w-28 rounded-[2rem] border-4 border-slate-600 bg-gradient-to-b from-slate-700 to-slate-900 shadow-inner">
                    <div className="mx-auto mt-3 h-2 w-12 rounded-full bg-slate-800" />
                    <div className="mx-auto mt-8 h-24 w-20 rounded-lg bg-gradient-to-br from-neon-cyan/30 to-neon-blue/20" />
                  </div>
                  <div className="absolute -right-4 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-2xl border border-neon-cyan/30 bg-obsidian/90 text-neon-cyan shadow-glow backdrop-blur-md">
                    <Sparkles className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-400">
                  Precision repair workstation
                </p>
                <p className="text-xs text-slate-500">
                  Replace with your shop photography
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
