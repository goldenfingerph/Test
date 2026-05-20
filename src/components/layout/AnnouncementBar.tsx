"use client";

import { useCMSStore } from "@/store/cms-store";

export function AnnouncementBar() {
  const { announcement, announcementEnabled } = useCMSStore((s) => s.settings);

  if (!announcementEnabled || !announcement) return null;

  return (
    <div className="bg-royal px-4 py-2 text-center text-sm font-medium text-white dark:bg-neon-cyan/10 dark:text-neon-cyan">
      {announcement}
    </div>
  );
}
