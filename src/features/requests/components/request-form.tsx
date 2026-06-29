"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RequestItems, {
  RequestItem,
} from "./request-items";

type Props = {
  onSuccess?: () => void;
};

export default function RequestForm({
  onSuccess,
}: Props) {
  const [branch, setBranch] =
    useState("Gandhi Nagar");

  const [requestedBy, setRequestedBy] =
    useState("");

  const [remarks, setRemarks] =
    useState("");

  const [items, setItems] = useState<
    RequestItem[]
  >([
    {
      inventoryItem: "",
      quantity: 1,
      unit: "pcs",
    },
  ]);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log({
      requestNumber: `RQ-${Date.now()}`,
      branch,
      requestedBy,
      requestedOn:
        new Date().toLocaleDateString("en-IN"),
      status: "Pending",
      remarks,
      items,
    });

    setBranch("Gandhi Nagar");
    setRequestedBy("");
    setRemarks("");

    setItems([
      {
        inventoryItem: "",
        quantity: 1,
        unit: "pcs",
      },
    ]);

    onSuccess?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Branch
          </label>

          <Select
            value={branch}
            onValueChange={setBranch}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Head Office">
                Head Office
              </SelectItem>

              <SelectItem value="Gandhi Nagar">
                Gandhi Nagar
              </SelectItem>

              <SelectItem value="Janipur">
                Janipur
              </SelectItem>

              <SelectItem value="Kathua">
                Kathua
              </SelectItem>

              <SelectItem value="Akhnoor">
                Akhnoor
              </SelectItem>

              <SelectItem value="Udhampur">
                Udhampur
              </SelectItem>

              <SelectItem value="Lakhdta Bazaar">
                Lakhdta Bazaar
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Requested By
          </label>

          <Input
            placeholder="Rahul Sharma"
            value={requestedBy}
            onChange={(e) =>
              setRequestedBy(e.target.value)
            }
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Remarks
        </label>

        <Textarea
          rows={3}
          placeholder="Purpose of this request..."
          value={remarks}
          onChange={(e) =>
            setRemarks(e.target.value)
          }
        />
      </div>

      <RequestItems
        items={items}
        setItems={setItems}
      />

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setBranch("Gandhi Nagar");
            setRequestedBy("");
            setRemarks("");

            setItems([
              {
                inventoryItem: "",
                quantity: 1,
                unit: "pcs",
              },
            ]);

            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Submit Request
        </Button>
      </div>
    </form>
  );
}