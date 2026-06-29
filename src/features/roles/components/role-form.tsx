"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  onSuccess?: () => void;
};

const permissions = [
  "Dashboard",
  "Users",
  "Consumables",
  "Allotments",
  "Checklists",
  "Reports",
  "Settings",
];

export default function RoleForm({
  onSuccess,
}: Props) {
  const [name, setName] = useState("");

  const [description, setDescription] =
    useState("");

  const [selectedPermissions, setSelectedPermissions] =
    useState<string[]>([]);

  function togglePermission(permission: string) {
    setSelectedPermissions((prev) =>
      prev.includes(permission)
        ? prev.filter((p) => p !== permission)
        : [...prev, permission]
    );
  }

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const data = {
      name,
      description,
      users: 0,
      permissions: selectedPermissions,
    };

    console.log(data);

    setName("");
    setDescription("");
    setSelectedPermissions([]);

    onSuccess?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Role Name
          </label>

          <Input
            placeholder="Store Manager"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <Input
            placeholder="Responsible for daily showroom operations"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium">
          Permissions
        </label>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {permissions.map((permission) => (
            <label
              key={permission}
              className="flex cursor-pointer items-center gap-2 rounded-lg border p-3 transition hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={selectedPermissions.includes(
                  permission
                )}
                onChange={() =>
                  togglePermission(permission)
                }
              />

              <span className="text-sm">
                {permission}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setName("");
            setDescription("");
            setSelectedPermissions([]);

            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Create Role
        </Button>
      </div>
    </form>
  );
}