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

import { Role } from "../types";

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "name",
    header: "Role",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.name}
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.description}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "users",
    header: "Assigned Users",
    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.users}
      </Badge>
    ),
  },

  {
    accessorKey: "permissions",
    header: "Permissions",
    cell: ({ row }) => {
      const permissions =
        row.original.permissions;

      return (
        <div className="flex flex-wrap gap-1">
          {permissions
            .slice(0, 3)
            .map((permission) => (
              <Badge
                key={permission}
                variant="outline"
              >
                {permission}
              </Badge>
            ))}

          {permissions.length > 3 && (
            <Badge variant="secondary">
              +{permissions.length - 3}
            </Badge>
          )}
        </div>
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
            Edit Role
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Role
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];