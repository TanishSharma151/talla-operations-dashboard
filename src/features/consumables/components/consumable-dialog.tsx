"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ConsumableForm from "./consumable-form";

export default function ConsumableDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Add Consumable
          </DialogTitle>

          <DialogDescription>
            Create a new consumable item for your stores.
          </DialogDescription>
        </DialogHeader>

        <ConsumableForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}