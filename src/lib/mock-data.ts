import type { GalleryItem, Service, SiteSettings } from "@/types";

export const siteStats = [
  { label: "Devices Fixed", value: 12500, suffix: "+" },
  { label: "Happy Clients", value: 9800, suffix: "+" },
  { label: "Expert Techs", value: 18, suffix: "" },
] as const;

export const trustBadges = [
  "90-Day Warranty",
  "Same-Day Fix",
  "Genuine Parts",
  "Free Diagnostics",
] as const;

export const initialServices: Service[] = [
  {
    id: "svc-1",
    name: "Screen Replacement",
    description:
      "Crystal-clear OLED & LCD replacements with factory-calibrated True Tone and touch sensitivity testing.",
    icon: "Smartphone",
    price: "From AED 199",
    deviceTypes: ["iphone", "android", "tablet"],
    visible: true,
  },
  {
    id: "svc-2",
    name: "Battery Health Restore",
    description:
      "Genuine-grade cells installed with full cycle testing — restore all-day power and safe charging.",
    icon: "Battery",
    price: "From AED 149",
    deviceTypes: ["iphone", "android", "tablet", "laptop"],
    visible: true,
  },
  {
    id: "svc-3",
    name: "Water Damage Recovery",
    description:
      "Ultrasonic board cleaning, corrosion treatment, and micro-soldering to revive liquid-damaged devices.",
    icon: "Droplets",
    price: "From AED 249",
    deviceTypes: ["iphone", "android"],
    visible: true,
  },
  {
    id: "svc-4",
    name: "Board-Level Repair",
    description:
      "Chip-level diagnostics, PMIC replacement, and trace repair for devices other shops write off.",
    icon: "Cpu",
    price: "From AED 399",
    deviceTypes: ["iphone", "android", "tablet", "laptop"],
    visible: true,
  },
  {
    id: "svc-5",
    name: "Camera Module Fix",
    description:
      "Front & rear camera replacement with autofocus calibration and portrait mode verification.",
    icon: "Camera",
    price: "From AED 179",
    deviceTypes: ["iphone", "android"],
    visible: true,
  },
  {
    id: "svc-6",
    name: "Connectivity Repair",
    description:
      "Wi-Fi, Bluetooth, and cellular antenna repairs — restore signal strength and stable connections.",
    icon: "Wifi",
    price: "From AED 159",
    deviceTypes: ["iphone", "android", "tablet", "laptop"],
    visible: true,
  },
  {
    id: "svc-7",
    name: "Speaker & Mic Repair",
    description:
      "Earpiece, loudspeaker, and microphone replacement with audio loop testing on every job.",
    icon: "Volume2",
    price: "From AED 129",
    deviceTypes: ["iphone", "android", "tablet"],
    visible: true,
  },
  {
    id: "svc-8",
    name: "Charging Port Service",
    description:
      "USB-C, Lightning, and wireless charging coil repairs — fast charge verified before handoff.",
    icon: "Plug",
    price: "From AED 119",
    deviceTypes: ["iphone", "android", "tablet", "laptop"],
    visible: true,
  },
];

/** Stable placeholder images (picsum) — avoids Unsplash 404s in Next.js image proxy */
export function getDefaultGalleryImage(id: string): string {
  return `https://picsum.photos/seed/etppc-${id}/800/600`;
}

const BROKEN_IMAGE_HOSTS = ["images.unsplash.com", "unsplash.com"];

export function isBrokenGalleryUrl(url: string): boolean {
  if (!url || url.trim() === "") return true;
  return BROKEN_IMAGE_HOSTS.some((host) => url.includes(host));
}

export function repairGalleryItems(items: GalleryItem[]): GalleryItem[] {
  return items.map((item) => ({
    ...item,
    imageUrl: isBrokenGalleryUrl(item.imageUrl)
      ? getDefaultGalleryImage(item.id)
      : item.imageUrl,
  }));
}

export const initialGallery: GalleryItem[] = [
  {
    id: "gal-1",
    title: "iPhone 15 Pro — Shattered to Flawless",
    category: "before-after",
    imageUrl: getDefaultGalleryImage("gal-1"),
    visible: true,
  },
  {
    id: "gal-2",
    title: "Samsung S24 Ultra Screen Restore",
    category: "before-after",
    imageUrl: getDefaultGalleryImage("gal-2"),
    visible: true,
  },
  {
    id: "gal-3",
    title: "Micro-soldering Station",
    category: "workshop",
    imageUrl: getDefaultGalleryImage("gal-3"),
    visible: true,
  },
  {
    id: "gal-4",
    title: "Water Damage Board Revival",
    category: "before-after",
    imageUrl: getDefaultGalleryImage("gal-4"),
    visible: true,
  },
  {
    id: "gal-5",
    title: "Precision Tool Bench",
    category: "workshop",
    imageUrl: getDefaultGalleryImage("gal-5"),
    visible: true,
  },
  {
    id: "gal-6",
    title: "iPad Pro Display Replacement",
    category: "before-after",
    imageUrl: getDefaultGalleryImage("gal-6"),
    visible: true,
  },
  {
    id: "gal-7",
    title: "Diagnostic & QA Zone",
    category: "workshop",
    imageUrl: getDefaultGalleryImage("gal-7"),
    visible: true,
  },
  {
    id: "gal-8",
    title: "MacBook Logic Board Repair",
    category: "before-after",
    imageUrl: getDefaultGalleryImage("gal-8"),
    visible: true,
  },
];

export const initialSiteSettings: SiteSettings = {
  announcement:
    "🎉 Free diagnostics this week — walk in or WhatsApp us for same-day quotes!",
  announcementEnabled: true,
  phone: "+971500000000",
  whatsapp: "971500000000",
  email: "hello@emiratestechnology.ae",
  address: "Al Rigga Street, Deira, Dubai, United Arab Emirates",
  holidayHours: "Eid & National holidays: 10:00 AM – 4:00 PM",
  businessHoursWeekday: "Mon – Sat: 9:00 AM – 9:00 PM",
  businessHoursSunday: "Sunday: 10:00 AM – 6:00 PM",
};

export const processSteps = [
  {
    step: 1,
    title: "Diagnostic",
    description:
      "Free multi-point inspection with transparent fault reporting — no hidden fees.",
  },
  {
    step: 2,
    title: "Quote",
    description:
      "Fixed-price quote before any work begins. You approve, then we repair.",
  },
  {
    step: 3,
    title: "Repair",
    description:
      "Expert technicians using OEM-grade parts in ESD-safe workstations.",
  },
  {
    step: 4,
    title: "Quality Check",
    description:
      "48-point QA checklist — display, battery, cameras, sensors, and connectivity.",
  },
  {
    step: 5,
    title: "Delivery",
    description:
      "Device returned with 90-day warranty and care tips for lasting performance.",
  },
] as const;

export const deviceFilters = [
  { id: "all" as const, label: "All Devices" },
  { id: "iphone" as const, label: "iPhone" },
  { id: "android" as const, label: "Android" },
  { id: "tablet" as const, label: "Tablet" },
  { id: "laptop" as const, label: "Laptop" },
];
