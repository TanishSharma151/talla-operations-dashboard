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

import UserForm from "./user-form";

export default function UserDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>

          <DialogDescription>
            Fill in the details below to create a new user.
          </DialogDescription>
        </DialogHeader>

        <UserForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}