"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import {
  getDefaultGalleryImage,
  initialGallery,
  initialServices,
  initialSiteSettings,
  repairGalleryItems,
} from "@/lib/mock-data";
import type { GalleryItem, Service, SiteSettings } from "@/types";

interface CMSState {
  services: Service[];
  gallery: GalleryItem[];
  settings: SiteSettings;
  addService: (service: Service) => void;
  updateService: (id: string, data: Partial<Service>) => void;
  deleteService: (id: string) => void;
  addGalleryItem: (item: GalleryItem) => void;
  updateGalleryItem: (id: string, data: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  updateSettings: (data: Partial<SiteSettings>) => void;
  resetToDefaults: () => void;
}

type PersistedCMS = Pick<CMSState, "services" | "gallery" | "settings">;

function normalizePersisted(persisted: unknown): PersistedCMS | null {
  if (!persisted || typeof persisted !== "object") return null;
  const data = persisted as Partial<PersistedCMS>;

  const gallery =
    Array.isArray(data.gallery) && data.gallery.length > 0
      ? repairGalleryItems(data.gallery)
      : initialGallery;

  return {
    services:
      Array.isArray(data.services) && data.services.length > 0
        ? data.services
        : initialServices,
    gallery,
    settings:
      data.settings &&
      typeof data.settings === "object" &&
      "phone" in data.settings
        ? { ...initialSiteSettings, ...data.settings }
        : initialSiteSettings,
  };
}

export const useCMSStore = create<CMSState>()(
  persist(
    (set) => ({
      services: initialServices,
      gallery: initialGallery,
      settings: initialSiteSettings,

      addService: (service) =>
        set((s) => ({ services: [...s.services, service] })),

      updateService: (id, data) =>
        set((s) => ({
          services: s.services.map((svc) =>
            svc.id === id ? { ...svc, ...data } : svc
          ),
        })),

      deleteService: (id) =>
        set((s) => ({
          services: s.services.filter((svc) => svc.id !== id),
        })),

      addGalleryItem: (item) =>
        set((s) => ({
          gallery: [
            ...s.gallery,
            {
              ...item,
              imageUrl: item.imageUrl || getDefaultGalleryImage(item.id),
            },
          ],
        })),

      updateGalleryItem: (id, data) =>
        set((s) => ({
          gallery: s.gallery.map((item) =>
            item.id === id ? { ...item, ...data } : item
          ),
        })),

      deleteGalleryItem: (id) =>
        set((s) => ({
          gallery: s.gallery.filter((item) => item.id !== id),
        })),

      updateSettings: (data) =>
        set((s) => ({ settings: { ...s.settings, ...data } })),

      resetToDefaults: () =>
        set({
          services: initialServices,
          gallery: initialGallery,
          settings: initialSiteSettings,
        }),
    }),
    {
      name: "etppc-cms-storage-v3",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({
        services: state.services,
        gallery: state.gallery,
        settings: state.settings,
      }),
      merge: (persisted, current) => {
        const normalized = normalizePersisted(persisted);
        if (!normalized) return current;
        return { ...current, ...normalized };
      },
    }
  )
);

export function useVisibleServices() {
  return useCMSStore((s) =>
    (s.services ?? initialServices).filter((svc) => svc.visible)
  );
}

export function useVisibleGallery() {
  return useCMSStore((s) =>
    repairGalleryItems(s.gallery ?? initialGallery).filter((item) => item.visible)
  );
}
