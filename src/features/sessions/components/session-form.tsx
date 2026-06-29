"use client";

import { useState } from "react";

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
  onSuccess?: () => void;
};

export default function SessionForm({
  onSuccess,
}: Props) {
  const [user, setUser] = useState("");

  const [role, setRole] =
    useState("Store Manager");

  const [device, setDevice] =
    useState("");

  const [browser, setBrowser] =
    useState("Chrome");

  const [ipAddress, setIpAddress] =
    useState("");

  const [status, setStatus] =
    useState("Active");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log({
      user,
      role,
      device,
      browser,
      ipAddress,
      loginTime: new Date().toLocaleString("en-IN"),
      lastActivity: "Just now",
      status,
    });

    setUser("");
    setRole("Store Manager");
    setDevice("");
    setBrowser("Chrome");
    setIpAddress("");
    setStatus("Active");

    onSuccess?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            User
          </label>

          <Input
            placeholder="Rahul Sharma"
            value={user}
            onChange={(e) =>
              setUser(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Role
          </label>

          <Select
            value={role}
            onValueChange={setRole}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Administrator">
                Administrator
              </SelectItem>

              <SelectItem value="Store Manager">
                Store Manager
              </SelectItem>

              <SelectItem value="Inventory Manager">
                Inventory Manager
              </SelectItem>

              <SelectItem value="Sales Executive">
                Sales Executive
              </SelectItem>

              <SelectItem value="Cashier">
                Cashier
              </SelectItem>

              <SelectItem value="HR">
                HR
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Device
          </label>

          <Input
            placeholder="Dell Latitude 7420"
            value={device}
            onChange={(e) =>
              setDevice(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Browser
          </label>

          <Select
            value={browser}
            onValueChange={setBrowser}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Chrome">
                Chrome
              </SelectItem>

              <SelectItem value="Edge">
                Edge
              </SelectItem>

              <SelectItem value="Firefox">
                Firefox
              </SelectItem>

              <SelectItem value="Safari">
                Safari
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            IP Address
          </label>

          <Input
            placeholder="192.168.1.10"
            value={ipAddress}
            onChange={(e) =>
              setIpAddress(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <Select
            value={status}
            onValueChange={setStatus}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Active">
                Active
              </SelectItem>

              <SelectItem value="Idle">
                Idle
              </SelectItem>

              <SelectItem value="Expired">
                Expired
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setUser("");
            setRole("Store Manager");
            setDevice("");
            setBrowser("Chrome");
            setIpAddress("");
            setStatus("Active");

            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Save Session
        </Button>
      </div>
    </form>
  );
}