"use client";

import { useEffect, useRef, useState } from "react";
import { siteStats } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  label,
  value,
  suffix,
  animate,
}: {
  label: string;
  value: number;
  suffix: string;
  animate: boolean;
}) {
  const display = useCountUp(value, 2200, animate);

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur-sm transition-all duration-300",
        "dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md",
        "hover:border-royal/40 dark:hover:border-neon-cyan/40 dark:hover:shadow-glow"
      )}
    >
      <p className="text-3xl font-bold tabular-nums text-royal sm:text-4xl dark:text-neon-cyan">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Trusted by thousands across the UAE
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Real results from precision repair and expert care
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {siteStats.map((stat) => (
            <StatCard key={stat.label} {...stat} animate={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
