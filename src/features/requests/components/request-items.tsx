"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface RequestItem {
  inventoryItem: string;
  quantity: number;
  unit: string;
}

type Props = {
  items: RequestItem[];
  setItems: React.Dispatch<
    React.SetStateAction<RequestItem[]>
  >;
};

const units = [
  "pcs",
  "kg",
  "ltr",
  "boxes",
  "packs",
  "rolls",
  "bottles",
];

const inventoryItems = [
  "Coffee Beans",
  "Tea Bags",
  "Sugar",
  "Printer Paper",
  "Pens",
  "Markers",
  "Bubble Wrap",
  "Packing Tape",
  "Carton Boxes",
  "Hand Wash",
  "Phenyl",
  "Toilet Cleaner",
];

export default function RequestItems({
  items,
  setItems,
}: Props) {
  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        inventoryItem: "",
        quantity: 1,
        unit: "pcs",
      },
    ]);
  }

  function removeItem(index: number) {
    setItems((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  function updateItem(
    index: number,
    key: keyof RequestItem,
    value: string | number
  ) {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              [key]: value,
            }
          : item
      )
    );
  }

  return (
    <div className="space-y-4 rounded-xl border p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Requested Items
        </h3>

        <Button
          type="button"
          onClick={addItem}
        >
          Add Item
        </Button>
      </div>

      {items.map((item, index) => (
        <div
          key={index}
          className="grid gap-4 md:grid-cols-[2fr_120px_140px_60px]"
        >
          <Select
            value={item.inventoryItem}
            onValueChange={(value) =>
              updateItem(
                index,
                "inventoryItem",
                value
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Inventory Item" />
            </SelectTrigger>

            <SelectContent>
              {inventoryItems.map((inventory) => (
                <SelectItem
                  key={inventory}
                  value={inventory}
                >
                  {inventory}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) =>
              updateItem(
                index,
                "quantity",
                Number(e.target.value)
              )
            }
          />

          <Select
            value={item.unit}
            onValueChange={(value) =>
              updateItem(
                index,
                "unit",
                value
              )
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              {units.map((unit) => (
                <SelectItem
                  key={unit}
                  value={unit}
                >
                  {unit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() =>
              removeItem(index)
            }
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>
      ))}

      {items.length === 0 && (
        <div className="rounded-lg border border-dashed py-8 text-center text-sm text-slate-500">
          No items added yet.
        </div>
      )}
    </div>
  );
}