import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a repair, get a quote, or visit our Deira Dubai shop.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
