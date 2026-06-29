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

import DispatchItems, {
  DispatchItem,
} from "./dispatch-items";

type Props = {
  onSuccess?: () => void;
};

export default function DispatchForm({
  onSuccess,
}: Props) {
  const [requestNumber, setRequestNumber] =
    useState("");

  const [branch, setBranch] =
    useState("Gandhi Nagar");

  const [preparedBy, setPreparedBy] =
    useState("");

  const [courier, setCourier] =
    useState("");

  const [trackingNumber, setTrackingNumber] =
    useState("");

  const [status, setStatus] =
    useState("Preparing");

  const [remarks, setRemarks] =
    useState("");

  const [items, setItems] = useState<
    DispatchItem[]
  >([
    {
      inventoryItem: "",
      requestedQuantity: 1,
      dispatchedQuantity: 1,
      unit: "pcs",
    },
  ]);

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    console.log({
      dispatchNumber: `DP-${Date.now()}`,
      requestNumber,
      branch,
      preparedBy,
      courier,
      trackingNumber,
      dispatchedOn:
        new Date().toLocaleDateString("en-IN"),
      status,
      remarks,
      items,
    });

    setRequestNumber("");
    setBranch("Gandhi Nagar");
    setPreparedBy("");
    setCourier("");
    setTrackingNumber("");
    setStatus("Preparing");
    setRemarks("");

    setItems([
      {
        inventoryItem: "",
        requestedQuantity: 1,
        dispatchedQuantity: 1,
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
            Request Number
          </label>

          <Input
            placeholder="RQ-1001"
            value={requestNumber}
            onChange={(e) =>
              setRequestNumber(
                e.target.value
              )
            }
          />
        </div>

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
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Prepared By
          </label>

          <Input
            placeholder="Warehouse Manager"
            value={preparedBy}
            onChange={(e) =>
              setPreparedBy(
                e.target.value
              )
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Courier
          </label>

          <Input
            placeholder="Blue Dart"
            value={courier}
            onChange={(e) =>
              setCourier(
                e.target.value
              )
            }
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Tracking Number
          </label>

          <Input
            placeholder="BD123456789IN"
            value={trackingNumber}
            onChange={(e) =>
              setTrackingNumber(
                e.target.value
              )
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
              <SelectItem value="Preparing">
                Preparing
              </SelectItem>

              <SelectItem value="Packed">
                Packed
              </SelectItem>

              <SelectItem value="Dispatched">
                Dispatched
              </SelectItem>

              <SelectItem value="In Transit">
                In Transit
              </SelectItem>

              <SelectItem value="Delivered">
                Delivered
              </SelectItem>

              <SelectItem value="Received">
                Received
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Remarks
        </label>

        <Textarea
          rows={3}
          placeholder="Additional notes..."
          value={remarks}
          onChange={(e) =>
            setRemarks(
              e.target.value
            )
          }
        />
      </div>

      <DispatchItems
        items={items}
        setItems={setItems}
      />

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => onSuccess?.()}
        >
          Cancel
        </Button>

        <Button type="submit">
          Create Dispatch
        </Button>
      </div>
    </form>
  );
}