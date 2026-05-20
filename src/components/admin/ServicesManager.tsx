"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { getServiceIcon } from "@/lib/icons";
import { useCMSStore } from "@/store/cms-store";
import type { DeviceType, Service, ServiceIconName } from "@/types";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { Textarea } from "@/components/ui/Textarea";

const iconOptions: ServiceIconName[] = [
  "Smartphone",
  "Battery",
  "Droplets",
  "Cpu",
  "Camera",
  "Wifi",
  "Volume2",
  "Plug",
];

const deviceOptions: DeviceType[] = ["iphone", "android", "tablet", "laptop"];

const emptyService = (): Service => ({
  id: `svc-${Date.now()}`,
  name: "",
  description: "",
  icon: "Smartphone",
  price: "",
  deviceTypes: ["iphone"],
  visible: true,
});

export function ServicesManager() {
  const { services, addService, updateService, deleteService } = useCMSStore();
  const [editing, setEditing] = useState<Service | null>(null);
  const [isNew, setIsNew] = useState(false);

  const startEdit = (service: Service) => {
    setEditing({ ...service });
    setIsNew(false);
  };

  const startNew = () => {
    setEditing(emptyService());
    setIsNew(true);
  };

  const save = () => {
    if (!editing?.name.trim()) return;
    if (isNew) addService(editing);
    else updateService(editing.id, editing);
    setEditing(null);
    setIsNew(false);
  };

  const toggleDevice = (d: DeviceType) => {
    if (!editing) return;
    const types = editing.deviceTypes.includes(d)
      ? editing.deviceTypes.filter((t) => t !== d)
      : [...editing.deviceTypes, d];
    setEditing({ ...editing, deviceTypes: types.length ? types : [d] });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Manage Services
        </h1>
        <Button size="sm" onClick={startNew}>
          <Plus className="h-4 w-4" />
          Add Service
        </Button>
      </div>

      {editing && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
          <h2 className="mb-4 font-semibold text-slate-900 dark:text-white">
            {isNew ? "New Service" : "Edit Service"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <InputField
              label="Name"
              value={editing.name}
              onChange={(e) => setEditing({ ...editing, name: e.target.value })}
            />
            <InputField
              label="Price"
              value={editing.price}
              onChange={(e) => setEditing({ ...editing, price: e.target.value })}
              placeholder="From AED 199"
            />
            <div className="sm:col-span-2">
              <Textarea
                label="Description"
                value={editing.description}
                onChange={(e) =>
                  setEditing({ ...editing, description: e.target.value })
                }
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Icon
              </label>
              <select
                value={editing.icon}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    icon: e.target.value as ServiceIconName,
                  })
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                {iconOptions.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                Device Types
              </label>
              <div className="flex flex-wrap gap-2">
                {deviceOptions.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggleDevice(d)}
                    className={`rounded-lg px-3 py-1 text-xs capitalize ${
                      editing.deviceTypes.includes(d)
                        ? "bg-royal text-white dark:bg-neon-cyan dark:text-obsidian"
                        : "bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-400"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 sm:col-span-2">
              <input
                type="checkbox"
                checked={editing.visible}
                onChange={(e) =>
                  setEditing({ ...editing, visible: e.target.checked })
                }
                className="rounded"
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                Visible on public site
              </span>
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <Button onClick={save}>Save</Button>
            <Button variant="ghost" onClick={() => setEditing(null)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 dark:bg-white/5">
            <tr>
              <th className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">
                Service
              </th>
              <th className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">
                Price
              </th>
              <th className="px-4 py-3 font-medium text-slate-600 dark:text-slate-400">
                Visible
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {services.map((svc) => {
              const Icon = getServiceIcon(svc.icon);
              return (
                <tr
                  key={svc.id}
                  className="border-t border-slate-100 dark:border-white/5"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-royal dark:text-neon-cyan" />
                      <button
                        type="button"
                        onClick={() => startEdit(svc)}
                        className="font-medium hover:text-royal dark:hover:text-neon-cyan"
                      >
                        {svc.name}
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">
                    {svc.price}
                  </td>
                  <td className="px-4 py-3">
                    {svc.visible ? (
                      <span className="text-green-600 dark:text-green-400">Yes</span>
                    ) : (
                      <span className="text-slate-400">Hidden</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => deleteService(svc.id)}
                      className="text-red-500 hover:text-red-600"
                      aria-label={`Delete ${svc.name}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
