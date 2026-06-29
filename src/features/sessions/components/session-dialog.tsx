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

import SessionForm from "./session-form";

export default function SessionDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Session
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Create Session
          </DialogTitle>

          <DialogDescription>
            Create a new user session.
          </DialogDescription>
        </DialogHeader>

        <SessionForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}