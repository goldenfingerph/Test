import { Award, Heart, Microscope, Wrench } from "lucide-react";
import { processSteps } from "@/lib/mock-data";

const values = [
  {
    icon: Microscope,
    title: "Precision Diagnostics",
    description:
      "Advanced tools and microscopes for accurate fault detection before any repair begins.",
  },
  {
    icon: Wrench,
    title: "Expert Craftsmanship",
    description:
      "Certified technicians trained on the latest iPhone, Samsung, and laptop platforms.",
  },
  {
    icon: Award,
    title: "Premium Parts",
    description:
      "OEM-grade components sourced for durability, performance, and manufacturer-level fit.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Transparent quotes, honest timelines, and a 90-day warranty on every completed job.",
  },
];

export function AboutPageContent() {
  return (
    <>
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-100/80 to-transparent py-16 dark:border-white/10 dark:from-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            About Emirates Technology PPC
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Dubai&apos;s trusted destination for premium device repair — where
            precision engineering meets exceptional customer care.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Built for devices you depend on
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                At Emirates Technology PPC, we treat every phone, tablet, and
                laptop like a mission-critical tool. Our Deira workshop is
                equipped with ESD-safe benches, micro-soldering stations, and
                OEM-calibrated testing rigs — the same caliber of setup found
                in authorized service centers.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                Whether it&apos;s a shattered flagship screen or a complex
                board-level fault, we deliver honest diagnostics, fair pricing,
                and repairs that last.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
                >
                  <v.icon className="h-8 w-8 text-royal dark:text-neon-cyan" />
                  <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-slate-50/50 py-16 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-slate-900 dark:text-white">
            Our Process
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-slate-600 dark:text-slate-400">
            Five steps from walk-in to worry-free — every time.
          </p>

          <ol className="relative mt-12 space-y-0 md:flex md:justify-between md:gap-4">
            {processSteps.map((step, i) => (
              <li
                key={step.step}
                className="relative flex flex-1 flex-col items-center pb-12 text-center md:pb-0"
              >
                {i < processSteps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-gradient-to-r from-royal/50 to-transparent md:block dark:from-neon-cyan/50"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-royal/30 bg-white text-xl font-bold text-royal shadow-md dark:border-neon-cyan/40 dark:bg-obsidian dark:text-neon-cyan dark:shadow-glow">
                  {step.step}
                </span>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[200px] text-sm text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 h-full w-0.5 bg-gradient-to-b from-royal/40 to-transparent md:hidden dark:from-neon-cyan/40" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
