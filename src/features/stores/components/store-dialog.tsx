"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import StoreForm from "./store-form";
import { Store } from "../types";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  defaultValues?: Store;

  onSubmit?: (store: Store) => void;
};

export default function StoreDialog({
  open,
  onOpenChange,
  defaultValues,
  onSubmit,
}: Props) {
  function handleSubmit(store: Store) {
    onSubmit?.(store);

    onOpenChange(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {defaultValues
              ? "Edit Branch"
              : "Create Branch"}
          </DialogTitle>

          <DialogDescription>
            Manage your jewellery showroom and
            branch information.
          </DialogDescription>
        </DialogHeader>

        <StoreForm
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          onCancel={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
}