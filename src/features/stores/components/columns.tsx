"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Pencil,
  MapPin,
} from "lucide-react";

import { Store } from "../types";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function StatusBadge({
  status,
}: {
  status: Store["status"];
}) {
  switch (status) {
    case "ACTIVE":
      return (
        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
          Active
        </Badge>
      );

    case "INACTIVE":
      return (
        <Badge variant="destructive">
          Inactive
        </Badge>
      );

    case "TEMPORARILY_CLOSED":
      return (
        <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
          Temporarily Closed
        </Badge>
      );

    default:
      return null;
  }
}

export const columns: ColumnDef<Store>[] = [
  {
    accessorKey: "name",

    header: "Branch",

    cell: ({ row }) => {
      const store = row.original;

      return (
        <div>
          <p className="font-semibold">
            {store.name}
          </p>

          <p className="text-xs text-muted-foreground">
            {store.code}
          </p>
        </div>
      );
    },
  },

  {
    accessorKey: "manager",

    header: "Manager",
  },

  {
    accessorKey: "address",

    header: "Location",

    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-muted-foreground" />

        <span>{row.original.address}</span>
      </div>
    ),
  },

  {
    accessorKey: "employees",

    header: "Employees",
  },

  {
    accessorKey: "inventoryItems",

    header: "Inventory",
  },

  {
    accessorKey: "status",

    header: "Status",

    cell: ({ row }) => (
      <StatusBadge
        status={row.original.status}
      />
    ),
  },

  {
    id: "actions",

    enableHiding: false,

    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Pencil className="mr-2 h-4 w-4" />

              Edit Branch
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];