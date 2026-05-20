"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { useCMSStore } from "@/store/cms-store";
import type { GalleryCategory, GalleryItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";

const emptyItem = (): GalleryItem => ({
  id: `gal-${Date.now()}`,
  title: "",
  category: "before-after",
  imageUrl: "",
  visible: true,
});

export function GalleryManager() {
  const { gallery, addGalleryItem, updateGalleryItem, deleteGalleryItem } =
    useCMSStore();
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    const reader = new FileReader();
    reader.onload = () => {
      setEditing({ ...editing, imageUrl: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!editing?.title.trim() || !editing.imageUrl) return;
    if (isNew) addGalleryItem(editing);
    else updateGalleryItem(editing.id, editing);
    setEditing(null);
    setIsNew(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Manage Gallery
        </h1>
        <Button
          size="sm"
          onClick={() => {
            setEditing(emptyItem());
            setIsNew(true);
          }}
        >
          <Plus className="h-4 w-4" />
          Add Image
        </Button>
      </div>

      {editing && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h2 className="mb-4 font-semibold">
            {isNew ? "New Image" : "Edit Image"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              label="Title"
              value={editing.title}
              onChange={(e) => setEditing({ ...editing, title: e.target.value })}
            />
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Category
              </label>
              <select
                value={editing.category}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    category: e.target.value as GalleryCategory,
                  })
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <option value="before-after">Before / After</option>
                <option value="workshop">Workshop</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <InputField
                label="Image URL"
                value={editing.imageUrl.startsWith("data:") ? "" : editing.imageUrl}
                onChange={(e) =>
                  setEditing({ ...editing, imageUrl: e.target.value })
                }
                placeholder="https://..."
                hint="Or upload an image below (stored locally for demo)"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mt-2 text-sm text-slate-600"
              />
            </div>
            {editing.imageUrl && (
              <div className="relative h-40 w-full overflow-hidden rounded-xl sm:col-span-2">
                <GalleryImage
                  id={editing.id}
                  src={editing.imageUrl}
                  alt="Preview"
                  className="object-cover"
                />
              </div>
            )}
            <label className="flex items-center gap-2 sm:col-span-2">
              <input
                type="checkbox"
                checked={editing.visible}
                onChange={(e) =>
                  setEditing({ ...editing, visible: e.target.checked })
                }
              />
              <span className="text-sm">Visible on public site</span>
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <Button onClick={save}>Save</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
          >
            <div className="relative aspect-video">
              <GalleryImage
                id={item.id}
                src={item.imageUrl}
                alt={item.title}
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between p-3">
              <button
                type="button"
                onClick={() => {
                  setEditing({ ...item });
                  setIsNew(false);
                }}
                className="text-sm font-medium hover:text-royal dark:hover:text-neon-cyan"
              >
                {item.title}
              </button>
              <button
                type="button"
                onClick={() => deleteGalleryItem(item.id)}
                className="text-red-500"
                aria-label="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
