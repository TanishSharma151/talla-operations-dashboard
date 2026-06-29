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

import RequestForm from "./request-form";

export default function RequestDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Request
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-5xl">
        <DialogHeader>
          <DialogTitle>
            Create Inventory Request
          </DialogTitle>

          <DialogDescription>
            Submit an inventory request to the Head Office for approval.
          </DialogDescription>
        </DialogHeader>

        <RequestForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}