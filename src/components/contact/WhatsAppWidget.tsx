"use client";

import { MessageCircle } from "lucide-react";
import { useCMSStore } from "@/store/cms-store";

export function WhatsAppWidget() {
  const whatsapp = useCMSStore((s) => s.settings.whatsapp);
  const href = `https://wa.me/${(whatsapp ?? "").replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi Emirates Technology PPC! I'd like to inquire about a repair."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
