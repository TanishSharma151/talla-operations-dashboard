"use client";

import { useState } from "react";

import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import StoreDialog from "./store-dialog";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function StoreToolbar({
  search,
  setSearch,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search branches..."
            className="pl-10"
          />
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="bg-[#6B103E] hover:bg-[#541032]"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Branch
        </Button>
      </div>

      <StoreDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}