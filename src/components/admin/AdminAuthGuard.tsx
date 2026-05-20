"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";

export function AdminAuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.replace(`/admin/login?redirect=${encodeURIComponent(pathname)}`);
    } else {
      setChecked(true);
    }
  }, [pathname, router]);

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-obsidian">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-royal border-t-transparent dark:border-neon-cyan" />
      </div>
    );
  }

  return <>{children}</>;
}
