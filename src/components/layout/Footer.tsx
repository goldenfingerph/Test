"use client";

import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Lock,
  MapPin,
  Phone,
  Smartphone,
} from "lucide-react";
import { useCMSStore } from "@/store/cms-store";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const settings = useCMSStore((s) => s.settings);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
              <Smartphone className="h-5 w-5 text-royal dark:text-neon-cyan" />
              Emirates Technology PPC
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Premium cellphone repair with precision diagnostics, expert
              technicians, and same-day service you can trust.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-royal dark:hover:bg-white/10 dark:hover:text-neon-cyan"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-royal dark:hover:bg-white/10 dark:hover:text-neon-cyan"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-royal dark:text-slate-400 dark:hover:text-neon-cyan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-royal dark:text-neon-cyan" />
                {settings.businessHoursWeekday}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-royal dark:text-neon-cyan" />
                {settings.businessHoursSunday}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-royal dark:text-neon-cyan" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-royal dark:text-neon-cyan" />
                <a
                  href={`tel:${(settings.phone ?? "").replace(/\s/g, "")}`}
                  className="hover:text-royal dark:hover:text-neon-cyan"
                >
                  {settings.phone}
                </a>
              </li>
            </ul>
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-white/10">
              <iframe
                title="Map"
                src="https://maps.google.com/maps?q=Deira+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-28 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-white/10">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Emirates Technology PPC. All rights
            reserved.
          </p>
          <Link
            href="/admin/login"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-royal/50 hover:text-royal dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-neon-cyan/50 dark:hover:text-neon-cyan"
          >
            <Lock className="h-4 w-4" />
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
