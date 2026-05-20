"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send } from "lucide-react";
import type { ContactFormData } from "@/types";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { Textarea } from "@/components/ui/Textarea";

export function ContactForm() {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service") ?? "";

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    device: serviceQuery,
    message: serviceQuery
      ? `I'd like to inquire about: ${serviceQuery}`
      : "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const validate = () => {
    const next: Partial<Record<keyof ContactFormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      next.email = "Valid email is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }
    // Mock submit — wire to API / Supabase later
    setStatus("success");
    setForm({ name: "", email: "", phone: "", device: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <InputField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        error={errors.name}
        required
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        error={errors.email}
        required
      />
      <InputField
        label="Phone"
        name="phone"
        type="tel"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        error={errors.phone}
        required
      />
      <InputField
        label="Device / Service"
        name="device"
        value={form.device}
        onChange={(e) => setForm({ ...form, device: e.target.value })}
        placeholder="e.g. iPhone 15 Pro — screen replacement"
      />
      <Textarea
        label="Message"
        name="message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        error={errors.message}
        required
      />

      {status === "success" && (
        <p className="rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
          Thank you! We&apos;ll get back to you shortly.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </Button>
    </form>
  );
}
