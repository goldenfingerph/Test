"use client";

import { useCMSStore } from "@/store/cms-store";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { Textarea } from "@/components/ui/Textarea";

export function SettingsManager() {
  const { settings, updateSettings, resetToDefaults } = useCMSStore();

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
        Site Settings
      </h1>

      <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={settings.announcementEnabled}
            onChange={(e) =>
              updateSettings({ announcementEnabled: e.target.checked })
            }
          />
          <span className="text-sm font-medium">Show announcement bar</span>
        </label>
        <Textarea
          label="Announcement"
          value={settings.announcement}
          onChange={(e) => updateSettings({ announcement: e.target.value })}
        />
        <InputField
          label="Phone"
          value={settings.phone}
          onChange={(e) => updateSettings({ phone: e.target.value })}
        />
        <InputField
          label="WhatsApp (numbers only, with country code)"
          value={settings.whatsapp}
          onChange={(e) => updateSettings({ whatsapp: e.target.value })}
          hint="e.g. 971500000000"
        />
        <InputField
          label="Email"
          type="email"
          value={settings.email}
          onChange={(e) => updateSettings({ email: e.target.value })}
        />
        <Textarea
          label="Address"
          value={settings.address}
          onChange={(e) => updateSettings({ address: e.target.value })}
        />
        <InputField
          label="Weekday Hours"
          value={settings.businessHoursWeekday}
          onChange={(e) =>
            updateSettings({ businessHoursWeekday: e.target.value })
          }
        />
        <InputField
          label="Sunday Hours"
          value={settings.businessHoursSunday}
          onChange={(e) =>
            updateSettings({ businessHoursSunday: e.target.value })
          }
        />
        <InputField
          label="Holiday Hours"
          value={settings.holidayHours}
          onChange={(e) => updateSettings({ holidayHours: e.target.value })}
        />
        <p className="text-xs text-slate-500">
          Changes save automatically and appear on the live site instantly.
        </p>
      </div>

      <Button
        variant="ghost"
        onClick={() => {
          if (confirm("Reset all content to defaults? This cannot be undone.")) {
            resetToDefaults();
          }
        }}
      >
        Reset all content to defaults
      </Button>
    </div>
  );
}
