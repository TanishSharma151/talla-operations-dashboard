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

export default function ConsumableForm({
  onSuccess,
}: Props) {
  const [name, setName] = useState("");
  const [supplier, setSupplier] = useState("");

  const [category, setCategory] =
    useState("Pantry");

  const [store, setStore] =
    useState("Head Office");

  const [quantity, setQuantity] =
    useState(0);

  const [minimumQuantity, setMinimumQuantity] =
    useState(5);

  const [unit, setUnit] =
    useState("pcs");

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const data = {
      name,
      supplier,
      category,
      store,
      quantity,
      minimumQuantity,
      unit,
    };

    console.log(data);

    setName("");
    setSupplier("");
    setCategory("Pantry");
    setStore("Head Office");
    setQuantity(0);
    setMinimumQuantity(5);
    setUnit("pcs");

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
            Item Name
          </label>

          <Input
            placeholder="Coffee Beans"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Supplier
          </label>

          <Input
            placeholder="CCD Wholesale"
            value={supplier}
            onChange={(e) =>
              setSupplier(e.target.value)
            }
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <Select
            value={category}
            onValueChange={setCategory}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Pantry">
                Pantry
              </SelectItem>

              <SelectItem value="Housekeeping">
                Housekeeping
              </SelectItem>

              <SelectItem value="Office">
                Office
              </SelectItem>

              <SelectItem value="Packaging">
                Packaging
              </SelectItem>

              <SelectItem value="Electrical">
                Electrical
              </SelectItem>

              <SelectItem value="Miscellaneous">
                Miscellaneous
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

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
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Quantity
          </label>

          <Input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Number(e.target.value))
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Minimum Quantity
          </label>

          <Input
            type="number"
            value={minimumQuantity}
            onChange={(e) =>
              setMinimumQuantity(
                Number(e.target.value)
              )
            }
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Unit
          </label>

          <Select
            value={unit}
            onValueChange={setUnit}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="pcs">
                pcs
              </SelectItem>

              <SelectItem value="boxes">
                boxes
              </SelectItem>

              <SelectItem value="packs">
                packs
              </SelectItem>

              <SelectItem value="bottles">
                bottles
              </SelectItem>

              <SelectItem value="kg">
                kg
              </SelectItem>

              <SelectItem value="ltr">
                ltr
              </SelectItem>

              <SelectItem value="rolls">
                rolls
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
            setName("");
            setSupplier("");
            setCategory("Pantry");
            setStore("Head Office");
            setQuantity(0);
            setMinimumQuantity(5);
            setUnit("pcs");

            onSuccess?.();
          }}
        >
          Cancel
        </Button>

        <Button type="submit">
          Save Item
        </Button>
      </div>
    </form>
  );
}