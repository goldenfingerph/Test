"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { getDefaultGalleryImage } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
  id?: string;
}

export function GalleryImage({
  src,
  alt,
  className,
  id = "fallback",
}: GalleryImageProps) {
  const fallback = getDefaultGalleryImage(id);
  const [imgSrc, setImgSrc] = useState(src || fallback);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-white/10",
          className
        )}
      >
        <ImageIcon className="h-10 w-10 text-slate-400" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn("absolute inset-0 h-full w-full", className)}
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
        else setFailed(true);
      }}
    />
  );
}
