import type { Metadata } from "next";
import { ServicesPageContent } from "@/components/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description: "Screen replacement, battery repair, water damage, and board-level fixes in Dubai.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
