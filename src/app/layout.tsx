import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { CMSHydration } from "@/components/providers/CMSHydration";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Emirates Technology PPC | Premium Cellphone Repair",
    template: "%s | Emirates Technology PPC",
  },
  description:
    "Premium device repair in Dubai — screen replacement, battery health, water damage, and board-level fixes with same-day service and 90-day warranty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <CMSHydration>{children}</CMSHydration>
        </ThemeProvider>
      </body>
    </html>
  );
}
