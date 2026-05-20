"use client";

import Link from "next/link";
import { Image, Settings, Wrench } from "lucide-react";
import { useCMSStore } from "@/store/cms-store";

export default function AdminDashboardPage() {
  const services = useCMSStore((s) => s.services);
  const gallery = useCMSStore((s) => s.gallery);

  const cards = [
    {
      href: "/admin/services",
      label: "Services",
      count: services.length,
      visible: services.filter((s) => s.visible).length,
      icon: Wrench,
    },
    {
      href: "/admin/gallery",
      label: "Gallery Images",
      count: gallery.length,
      visible: gallery.filter((g) => g.visible).length,
      icon: Image,
    },
    {
      href: "/admin/settings",
      label: "Site Settings",
      count: null,
      visible: null,
      icon: Settings,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Dashboard
      </h1>
      <p className="mt-1 text-slate-600 dark:text-slate-400">
        Manage your shop&apos;s content — changes appear on the live site
        instantly.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-royal/50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-neon-cyan/50"
          >
            <card.icon className="h-8 w-8 text-royal dark:text-neon-cyan" />
            <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
              {card.label}
            </h2>
            {card.count !== null && (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {card.count} total · {card.visible} visible
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
