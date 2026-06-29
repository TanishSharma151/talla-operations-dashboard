"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  CheckCircle2,
  Eye,
  MoreHorizontal,
  Truck,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { InventoryRequest } from "../types";

export const columns: ColumnDef<InventoryRequest>[] = [
  {
    accessorKey: "requestNumber",
    header: "Request ID",
    cell: ({ row }) => (
      <span className="font-semibold">
        {row.original.requestNumber}
      </span>
    ),
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
          {row.original.requestedBy}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "requestedOn",
    header: "Requested On",
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
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const styles = {
        Pending:
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",

        Approved:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",

        "Partially Approved":
          "bg-blue-100 text-blue-700 hover:bg-blue-100",

        Rejected:
          "bg-red-100 text-red-700 hover:bg-red-100",

        Dispatched:
          "bg-purple-100 text-purple-700 hover:bg-purple-100",

        Delivered:
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
            View Request
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CheckCircle2 className="mr-2 h-4 w-4 text-emerald-600" />
            Approve
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Truck className="mr-2 h-4 w-4 text-blue-600" />
            Dispatch
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600">
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];