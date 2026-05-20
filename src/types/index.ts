export type DeviceType = "iphone" | "android" | "tablet" | "laptop";

export type ServiceIconName =
  | "Smartphone"
  | "Battery"
  | "Droplets"
  | "Cpu"
  | "Camera"
  | "Wifi"
  | "Volume2"
  | "Plug";

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: ServiceIconName;
  price: string;
  deviceTypes: DeviceType[];
  visible: boolean;
}

export type GalleryCategory = "before-after" | "workshop";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  visible: boolean;
}

export interface SiteSettings {
  announcement: string;
  announcementEnabled: boolean;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  holidayHours: string;
  businessHoursWeekday: string;
  businessHoursSunday: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  device: string;
  message: string;
}
