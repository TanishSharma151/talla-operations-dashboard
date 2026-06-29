"use client";

import { useState } from "react";

import { Store, StoreStatus } from "../types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  defaultValues?: Store;

  onSubmit: (store: Store) => void;

  onCancel: () => void;
};

export default function StoreForm({
  defaultValues,
  onSubmit,
  onCancel,
}: Props) {
  const [form, setForm] = useState<Store>(
    defaultValues ?? {
      id: crypto.randomUUID(),

      code: "",

      name: "",

      manager: "",

      phone: "",

      email: "",

      address: "",

      openingTime: "09:00",

      closingTime: "19:00",

      employees: 0,

      inventoryItems: 0,

      status: "ACTIVE",

      createdAt: new Date()
        .toISOString()
        .split("T")[0],
    }
  );

  function update<K extends keyof Store>(
    key: K,
    value: Store[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    onSubmit(form);
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Input
          placeholder="Branch Name"
          value={form.name}
          onChange={(e) =>
            update("name", e.target.value)
          }
        />

        <Input
          placeholder="Branch Code"
          value={form.code}
          onChange={(e) =>
            update("code", e.target.value)
          }
        />

        <Input
          placeholder="Manager"
          value={form.manager}
          onChange={(e) =>
            update("manager", e.target.value)
          }
        />

        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) =>
            update("phone", e.target.value)
          }
        />

        <Input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) =>
            update("email", e.target.value)
          }
        />

        <Input
          placeholder="Address"
          value={form.address}
          onChange={(e) =>
            update("address", e.target.value)
          }
        />

        <Input
          type="time"
          value={form.openingTime}
          onChange={(e) =>
            update(
              "openingTime",
              e.target.value
            )
          }
        />

        <Input
          type="time"
          value={form.closingTime}
          onChange={(e) =>
            update(
              "closingTime",
              e.target.value
            )
          }
        />

        <Input
          type="number"
          placeholder="Employees"
          value={form.employees}
          onChange={(e) =>
            update(
              "employees",
              Number(e.target.value)
            )
          }
        />

        <Input
          type="number"
          placeholder="Inventory Items"
          value={form.inventoryItems}
          onChange={(e) =>
            update(
              "inventoryItems",
              Number(e.target.value)
            )
          }
        />

        <Select
          value={form.status}
          onValueChange={(value) =>
            update(
              "status",
              value as StoreStatus
            )
          }
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="ACTIVE">
              Active
            </SelectItem>

            <SelectItem value="INACTIVE">
              Inactive
            </SelectItem>

            <SelectItem value="TEMPORARILY_CLOSED">
              Temporarily Closed
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          className="bg-[#6B103E] hover:bg-[#541032]"
        >
          Save Branch
        </Button>
      </div>
    </form>
  );
}