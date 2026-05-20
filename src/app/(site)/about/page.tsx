import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Expert technicians, premium parts, and a customer-first repair process in Dubai.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
