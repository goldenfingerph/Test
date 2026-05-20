"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { useVisibleGallery } from "@/store/cms-store";
import type { GalleryCategory } from "@/types";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { Lightbox } from "@/components/gallery/Lightbox";

type CategoryFilter = "all" | GalleryCategory;

const categoryFilters: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "before-after", label: "Before / After" },
  { id: "workshop", label: "Workshop" },
];

export function GalleryPageContent() {
  const gallery = useVisibleGallery();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "all"
      ? gallery
      : gallery.filter((item) => item.category === category);

  return (
    <>
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-100/80 to-transparent py-16 dark:border-white/10 dark:from-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Repair Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Real transformations and behind-the-scenes precision from our Dubai
            workshop.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {categoryFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCategory(f.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  category === f.id
                    ? "bg-royal text-white dark:bg-neon-cyan dark:text-obsidian dark:shadow-glow"
                    : "border border-slate-200 bg-white text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-500">No images yet.</p>
          ) : (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {filtered.map((item) => {
                const globalIndex = gallery.findIndex((g) => g.id === item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-slate-200/80 bg-white/5 text-left transition-all hover:shadow-lg dark:border-white/10 dark:hover:border-neon-cyan/30 dark:hover:shadow-glow"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <GalleryImage
                        id={item.id}
                        src={item.imageUrl}
                        alt={item.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <p className="absolute bottom-0 left-0 right-0 p-4 text-sm font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                        {item.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
