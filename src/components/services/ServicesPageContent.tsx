"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { deviceFilters } from "@/lib/mock-data";
import { getServiceIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useVisibleServices } from "@/store/cms-store";
import type { DeviceType } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FilterId = "all" | DeviceType;

export function ServicesPageContent() {
  const services = useVisibleServices();
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return services;
    return services.filter((s) => s.deviceTypes.includes(filter));
  }, [services, filter]);

  return (
    <>
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-100/80 to-transparent py-16 dark:border-white/10 dark:from-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Repair Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Expert fixes for every device — transparent pricing, genuine parts,
            and same-day turnaround on most jobs.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {deviceFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  filter === f.id
                    ? "bg-royal text-white shadow-md dark:bg-neon-cyan dark:text-obsidian dark:shadow-glow"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-royal/50 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-neon-cyan/50"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-500">
              No services match this filter. Try another device type.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((service) => {
                const Icon = getServiceIcon(service.icon);
                return (
                  <Card
                    key={service.id}
                    className="flex flex-col hover:shadow-lg dark:hover:shadow-glow"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal dark:bg-neon-cyan/10 dark:text-neon-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {service.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-royal dark:text-neon-cyan">
                      {service.price}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {service.deviceTypes.map((d) => (
                        <span
                          key={d}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs capitalize text-slate-600 dark:bg-white/10 dark:text-slate-400"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="mt-4"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <MessageCircle className="h-4 w-4" />
                        Inquire about this fix
                      </Button>
                    </Link>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
