"use client";

import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useCMSStore } from "@/store/cms-store";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";

function ContactFormFallback() {
  return <div className="h-96 animate-pulse rounded-2xl bg-slate-200 dark:bg-white/5" />;
}

export function ContactPageContent() {
  const settings = useCMSStore((s) => s.settings);

  return (
    <>
      <section className="border-b border-slate-200/60 bg-gradient-to-b from-slate-100/80 to-transparent py-16 dark:border-white/10 dark:from-white/5">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">
            Book a repair, request a quote, or ask a question — we respond fast.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <Card>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Send a message
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Fill out the form and our team will reach out within hours.
            </p>
            <div className="mt-6">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>
          </Card>

          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Visit our shop
              </h2>
              <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-royal dark:text-neon-cyan" />
                  {settings.address}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-royal dark:text-neon-cyan" />
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    className="font-medium hover:text-royal dark:hover:text-neon-cyan"
                  >
                    {settings.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-royal dark:text-neon-cyan" />
                  <a
                    href={`mailto:${settings.email}`}
                    className="hover:text-royal dark:hover:text-neon-cyan"
                  >
                    {settings.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-royal dark:text-neon-cyan" />
                  {settings.businessHoursWeekday}
                </li>
                <li className="flex items-center gap-3 pl-8">
                  {settings.businessHoursSunday}
                </li>
              </ul>
              {settings.holidayHours && (
                <p className="mt-4 text-xs text-slate-500">{settings.holidayHours}</p>
              )}
            </Card>

            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
              <iframe
                title="Emirates Technology PPC location"
                src="https://maps.google.com/maps?q=Deira+Dubai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0 grayscale-[30%] dark:grayscale-[50%] dark:invert-[90%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
