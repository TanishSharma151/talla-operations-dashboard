"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { User } from "../types";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-emerald-100 text-emerald-700">
              {user.avatar}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium text-slate-900">
              {user.name}
            </p>

            <p className="text-sm text-slate-500">
              {user.email}
            </p>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "phone",
    header: "Phone",
  },

  {
    accessorKey: "store",
    header: "Store",
  },

  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <Badge
        variant="secondary"
        className="font-medium"
      >
        {row.original.role}
      </Badge>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        className={
          row.original.status === "Active"
            ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
            : "bg-red-100 text-red-700 hover:bg-red-100"
        }
      >
        {row.original.status}
      </Badge>
    ),
  },

  {
    id: "actions",
    header: "",
    cell: ({ row }) => (
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
          <DropdownMenuItem
            onClick={() =>
              console.log("Edit", row.original.id)
            }
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-600 focus:text-red-600"
            onClick={() =>
              console.log("Delete", row.original.id)
            }
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];