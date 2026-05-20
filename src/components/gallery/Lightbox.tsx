"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/types";
import { GalleryImage } from "@/components/gallery/GalleryImage";

interface LightboxProps {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const item = items[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(Math.max(0, index - 1));
      if (e.key === "ArrowRight")
        onNavigate(Math.min(items.length - 1, index + 1));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <X className="h-6 w-6" />
      </button>

      {index > 0 && (
        <button
          type="button"
          onClick={() => onNavigate(index - 1)}
          className="absolute left-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      {index < items.length - 1 && (
        <button
          type="button"
          onClick={() => onNavigate(index + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-16"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div className="relative max-h-[85vh] w-full max-w-4xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <GalleryImage
            id={item.id}
            src={item.imageUrl}
            alt={item.title}
            className="object-contain"
          />
        </div>
        <p className="mt-4 text-center text-lg font-medium text-white">
          {item.title}
        </p>
        <p className="mt-1 text-center text-sm text-slate-400">
          {index + 1} / {items.length}
        </p>
      </div>
    </div>
  );
}
