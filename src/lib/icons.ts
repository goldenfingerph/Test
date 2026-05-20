import {
  Battery,
  Camera,
  Cpu,
  Droplets,
  Plug,
  Smartphone,
  Volume2,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/types";

export const serviceIconMap: Record<ServiceIconName, LucideIcon> = {
  Smartphone,
  Battery,
  Droplets,
  Cpu,
  Camera,
  Wifi,
  Volume2,
  Plug,
};

export function getServiceIcon(name: ServiceIconName): LucideIcon {
  return serviceIconMap[name] ?? Smartphone;
}
