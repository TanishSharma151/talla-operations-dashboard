"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  Eye,
  MoreHorizontal,
  Truck,
  CircleCheckBig,
  PackageCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Dispatch } from "../types";

export const columns: ColumnDef<Dispatch>[] = [
  {
    accessorKey: "dispatchNumber",
    header: "Dispatch ID",
    cell: ({ row }) => (
      <span className="font-semibold">
        {row.original.dispatchNumber}
      </span>
    ),
  },

  {
    accessorKey: "requestNumber",
    header: "Request",
  },

  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.branch}
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.preparedBy}
        </p>
      </div>
    ),
  },

  {
    id: "items",
    header: "Items",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.items.length} Items
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.items
            .slice(0, 2)
            .map((item) => item.inventoryItem)
            .join(", ")}

          {row.original.items.length > 2 &&
            " ..."}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "courier",
    header: "Courier",
    cell: ({ row }) => (
      <div>
        <p>{row.original.courier}</p>

        <p className="text-xs text-muted-foreground">
          {row.original.trackingNumber}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const styles = {
        Preparing:
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",

        Packed:
          "bg-blue-100 text-blue-700 hover:bg-blue-100",

        Dispatched:
          "bg-purple-100 text-purple-700 hover:bg-purple-100",

        "In Transit":
          "bg-indigo-100 text-indigo-700 hover:bg-indigo-100",

        Delivered:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",

        Received:
          "bg-slate-200 text-slate-700 hover:bg-slate-200",
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
            <Eye className="mr-2 h-4 w-4" />
            View Dispatch
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Truck className="mr-2 h-4 w-4 text-blue-600" />
            Update Status
          </DropdownMenuItem>

          <DropdownMenuItem>
            <PackageCheck className="mr-2 h-4 w-4 text-emerald-600" />
            Mark Received
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600">
            Cancel Dispatch
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];