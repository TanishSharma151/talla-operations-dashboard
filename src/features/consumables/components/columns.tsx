"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Consumable } from "../types";

export const columns: ColumnDef<Consumable>[] = [
  {
    accessorKey: "name",
    header: "Item",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.name}
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.supplier}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.category}
      </Badge>
    ),
  },

  {
    accessorKey: "store",
    header: "Store",
  },

  {
    accessorKey: "quantity",
    header: "Qty",
    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.quantity} {row.original.unit}
      </span>
    ),
  },

  {
    accessorKey: "minimumQuantity",
    header: "Min Qty",
    cell: ({ row }) => (
      <span>
        {row.original.minimumQuantity}{" "}
        {row.original.unit}
      </span>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const styles = {
        Healthy:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
        "Low Stock":
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
        "Out of Stock":
          "bg-red-100 text-red-700 hover:bg-red-100",
        Ordered:
          "bg-blue-100 text-blue-700 hover:bg-blue-100",
      };

      return (
        <Badge className={styles[status]}>
          {status}
        </Badge>
      );
    },
  },

  {
    accessorKey: "lastUpdated",
    header: "Updated",
  },

  {
    id: "actions",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];