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

import { Allotment } from "../types";

export const columns: ColumnDef<Allotment>[] = [
  {
    accessorKey: "employee",
    header: "Employee",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.employee}
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.store}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "item",
    header: "Item",
  },

  {
    accessorKey: "quantity",
    header: "Qty",
    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.quantity}
      </span>
    ),
  },

  {
    accessorKey: "allottedOn",
    header: "Allotted On",
  },

  {
    accessorKey: "returnedOn",
    header: "Returned On",
    cell: ({ row }) => (
      <span>
        {row.original.returnedOn ?? "-"}
      </span>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const styles = {
        Active:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",
        Returned:
          "bg-blue-100 text-blue-700 hover:bg-blue-100",
        Damaged:
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",
        Lost:
          "bg-red-100 text-red-700 hover:bg-red-100",
      };

      return (
        <Badge className={styles[status]}>
          {status}
        </Badge>
      );
    },
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