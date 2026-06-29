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

export interface DispatchItem {
  inventoryItem: string;
  requestedQuantity: number;
  dispatchedQuantity: number;
  unit: string;
}

type Props = {
  items: DispatchItem[];
  setItems: React.Dispatch<
    React.SetStateAction<DispatchItem[]>
  >;
};

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

const units = [
  "pcs",
  "boxes",
  "packs",
  "bottles",
  "kg",
  "ltr",
  "rolls",
];

export default function DispatchItems({
  items,
  setItems,
}: Props) {
  function addItem() {
    setItems((prev) => [
      ...prev,
      {
        inventoryItem: "",
        requestedQuantity: 1,
        dispatchedQuantity: 1,
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
    key: keyof DispatchItem,
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
          Dispatch Items
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
          className="grid gap-4 md:grid-cols-[2fr_120px_120px_120px_60px]"
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
            value={item.requestedQuantity}
            onChange={(e) =>
              updateItem(
                index,
                "requestedQuantity",
                Number(e.target.value)
              )
            }
          />

          <Input
            type="number"
            min={0}
            value={item.dispatchedQuantity}
            onChange={(e) =>
              updateItem(
                index,
                "dispatchedQuantity",
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
          No dispatch items added.
        </div>
      )}
    </div>
  );
}