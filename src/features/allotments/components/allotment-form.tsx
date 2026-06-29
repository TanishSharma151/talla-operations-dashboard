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

export default function AllotmentForm({
  onSuccess,
}: Props) {
  const [employee, setEmployee] =
    useState("");

  const [item, setItem] =
    useState("");

  const [store, setStore] =
    useState("Head Office");

  const [quantity, setQuantity] =
    useState(1);

  const [status, setStatus] =
    useState("Active");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const data = {
      employee,
      item,
      store,
      quantity,
      allottedOn: new Date().toLocaleDateString(
        "en-IN"
      ),
      status,
    };

    console.log(data);

    setEmployee("");
    setItem("");
    setStore("Head Office");
    setQuantity(1);
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
            Employee
          </label>

          <Input
            placeholder="Rahul Sharma"
            value={employee}
            onChange={(e) =>
              setEmployee(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Item
          </label>

          <Input
            placeholder="Dell Latitude Laptop"
            value={item}
            onChange={(e) =>
              setItem(e.target.value)
            }
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Store
          </label>

          <Select
            value={store}
            onValueChange={setStore}
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
            Quantity
          </label>

          <Input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
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

              <SelectItem value="Returned">
                Returned
              </SelectItem>

              <SelectItem value="Damaged">
                Damaged
              </SelectItem>

              <SelectItem value="Lost">
                Lost
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setEmployee("");
            setItem("");
            setStore("Head Office");
            setQuantity(1);
            setStatus("Active");

            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Create Allotment
        </Button>
      </div>
    </form>
  );
}