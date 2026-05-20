import type { Metadata } from "next";
import { GalleryPageContent } from "@/components/gallery/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Before and after repair photos from Emirates Technology PPC workshop.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
