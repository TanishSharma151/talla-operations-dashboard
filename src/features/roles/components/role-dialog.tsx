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

import RoleForm from "./role-form";

export default function RoleDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Role
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            Create Role
          </DialogTitle>

          <DialogDescription>
            Create a new role and assign permissions.
          </DialogDescription>
        </DialogHeader>

        <RoleForm
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
}