"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Smartphone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-obsidian/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors group-hover:bg-royal/20 dark:bg-neon-cyan/10 dark:text-neon-cyan dark:group-hover:shadow-glow">
            <Smartphone className="h-5 w-5" />
          </span>
          <span className="hidden text-sm sm:inline sm:text-base">
            Emirates Technology{" "}
            <span className="text-royal dark:text-neon-cyan">PPC</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-royal/10 text-royal dark:bg-neon-cyan/10 dark:text-neon-cyan"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button size="sm">Book Repair</Button>
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-700 md:hidden dark:text-slate-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200/60 bg-white/95 px-4 py-4 md:hidden dark:border-white/10 dark:bg-obsidian/95">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-sm font-medium",
                    pathname === link.href
                      ? "bg-royal/10 text-royal dark:bg-neon-cyan/10 dark:text-neon-cyan"
                      : "text-slate-600 dark:text-slate-300"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full" size="sm">
                  Book Repair
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
