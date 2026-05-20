"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Smartphone } from "lucide-react";
import { isAdminAuthenticated, loginAdmin } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") ?? "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAdminAuthenticated()) router.replace(redirect);
  }, [redirect, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(email, password)) {
      router.push(redirect);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 dark:bg-obsidian">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-white/10 dark:bg-white/5">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Smartphone className="h-8 w-8 text-royal dark:text-neon-cyan" />
          <span className="text-xl font-bold text-slate-900 dark:text-white">
            Admin Login
          </span>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-500">
          Authorized staff only. Contact the shop owner if you need access.
        </p>
      </div>
    </div>
  );
}
