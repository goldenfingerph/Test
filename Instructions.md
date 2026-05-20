# Role & Project Overview
You are an expert full-stack web developer specializing in Next.js, React, Tailwind CSS, and Supabase/MySQL. Your task is to build a modern, high-converting, and visually stunning web application for "Emirates Technology PPC Cellphone Repair Shop". 

The website must be fast, fully responsive, easy to navigate, and include a fully functional Admin Panel for content management.

## Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS (with Shadcn/ui or Radix UI components for a premium look)
- **Icons:** Lucide React
- **Database/Auth:** Supabase (or MySQL with Prisma) for handling admin authentication, services, and gallery images.
- **State Management:** React Context or Zustand for global UI state (like theme toggling).

---

## 1. Design & Theme System
The design should feel premium, high-tech, and trustworthy—resembling a modern Apple or Samsung service center interface combined with a sleek SaaS aesthetic.

- **Theme Toggle:** Implement a global Light/Dark mode switch.
  - **Dark Mode (Default):** Deep obsidian/charcoal background (`#0B0F19`), neon cyan/blue accents (`#00F0FF` or `#3B82F6`), soft white text, and glassmorphism cards (`backdrop-blur-md bg-white/5`).
  - **Light Mode:** Crisp clean white/light gray background, deep navy/slate text, vibrant royal blue accents.
- **UI Elements:** Smooth hover transitions, subtle glow effects on interactive buttons in dark mode, and generous whitespace.

---

## 2. Core Pages & Layout (Public Facing)

### A. Navigation & Footer (Global)
- **Navbar:** Sticky, glassmorphic header containing the Logo ("Emirates Technology PPC"), Nav Links, and a beautiful Theme Toggle Switch (Sun/Moon icon animations).
- **Footer:** Quick links, operating hours, social links, and a mini-map or address placeholder.

### B. Home / Landing Page
- **Hero Section:** A bold catchphrase (e.g., "Premium Device Repair, Restored to Perfection"), high-quality placeholder image of a sleek smartphone repair, a fast "Book a Repair" or "Get a Free Quote" Call-to-Action (CTA) button, and trust badges (e.g., "90-Day Warranty", "Same-Day Fix").
- **Quick Status/Stats:** Interactive counters (Devices Fixed, Happy Clients, Expert Techs).

### C. Services Page
- **Layout:** A grid of clean, modern cards showcasing repair services (e.g., Screen Replacement, Battery Health, Water Damage, Board-level Repair).
- **Features:** Dynamic filtering by device type (iPhone, Android, Tablet, Laptop). Each card should fetch its data dynamically from the database and feature a "Inquire about this fix" button.

### D. Gallery Page
- **Layout:** A masonry or dynamic grid layout displaying "Before/After" repairs or high-tech workshop photos.
- **Features:** Lightbox integration so clicking an image opens a smooth, full-screen overlay. Data must be dynamically populated from the database.

### E. About Us Page
- **Content:** A section highlighting the expertise, tools, precision work, and customer-first philosophy of Emirates Technology PPC. Include a visual "Our Process" timeline (Diagnostic -> Quote -> Repair -> Quality Check -> Delivery).

### F. Contact Us Page
- **Features:** Fully functional contact form, interactive Google Maps embed placeholder, click-to-call numbers, WhatsApp chat integration floating widget, and physical address details.

---

## 3. Admin Panel (Protected Route: `/admin`)
A minimalist, secure dashboard for the shop owner to update site content seamlessly.

- **Authentication:** Simple, secure login page using Supabase Auth (or chosen DB auth).
- **Dashboard Layout:** Sidebar navigation containing:
  1. **Manage Services:** CRUD interface (Create, Read, Update, Delete) to change service names, descriptions, icons, prices, and visibility.
  2. **Manage Gallery:** Image upload interface (integrating with Supabase Storage or an image hosting API) to instantly add/remove images from the live Gallery page.
  3. **Site Settings:** Quick toggle fields to easily update text features like shop announcements, phone numbers, or holiday business hours.

---

## Generation Instructions
1. **File Structure:** Organize the project using standard Next.js App Router conventions (`app/`, `components/`, `lib/`, `hooks/`).
2. **Components:** Create highly reusable components (e.g., `Button.tsx`, `Card.tsx`, `InputField.tsx`).
3. **Mock Data First:** Start by creating the UI layouts using local mock data for the services and gallery, ensuring the layout and Dark/Light styling work perfectly before writing database fetching logic.
4. **Code Quality:** Ensure all code is cleanly commented, uses TypeScript for strict type-safety, and utilizes Tailwind CSS efficiently.

Please begin by generating the root layout, theme provider, and the main landing page with the theme toggle switch.