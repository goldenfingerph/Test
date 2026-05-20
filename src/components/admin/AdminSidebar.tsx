"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Image,
  LayoutDashboard,
  LogOut,
  Settings,
  Smartphone,
  Wrench,
} from "lucide-react";
import { logoutAdmin } from "@/lib/auth";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/services", label: "Services", icon: Wrench },
  { href: "/admin/gallery", label: "Gallery", icon: Image },
  { href: "/admin/settings", label: "Site Settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logoutAdmin();
    router.push("/admin/login");
  };

  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white dark:border-white/10 dark:bg-obsidian">
      <div className="flex items-center gap-2 border-b border-slate-200 px-6 py-5 dark:border-white/10">
        <Smartphone className="h-6 w-6 text-royal dark:text-neon-cyan" />
        <span className="font-semibold text-slate-900 dark:text-white">
          Admin Panel
        </span>
      </div>
      <nav className="flex-1 space-y-1 p-4">
        {links.map((link) => {
          const active =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-royal/10 text-royal dark:bg-neon-cyan/10 dark:text-neon-cyan"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-slate-200 p-4 dark:border-white/10">
        <Link
          href="/"
          className="mb-2 block text-xs text-slate-500 hover:text-royal dark:hover:text-neon-cyan"
        >
          ← View live site
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
        >
          <LogOut className="h-4 w-4" />
          Log out
        </button>
      </div>
    </aside>
  );
}
