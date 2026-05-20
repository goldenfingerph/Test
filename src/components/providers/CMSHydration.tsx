"use client";

import { useEffect } from "react";
import { useCMSStore } from "@/store/cms-store";

/** Rehydrates persisted CMS data on the client without blocking page render */
export function CMSHydration({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useCMSStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
