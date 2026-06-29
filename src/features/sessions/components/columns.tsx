"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  MoreHorizontal,
  LogOut,
  Eye,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Session } from "../types";

export const columns: ColumnDef<Session>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => (
      <div>
        <p className="font-medium">
          {row.original.user}
        </p>

        <p className="text-xs text-muted-foreground">
          {row.original.role}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "device",
    header: "Device",
    cell: ({ row }) => (
      <div>
        <p>{row.original.device}</p>

        <p className="text-xs text-muted-foreground">
          {row.original.browser}
        </p>
      </div>
    ),
  },

  {
    accessorKey: "ipAddress",
    header: "IP Address",
  },

  {
    accessorKey: "loginTime",
    header: "Login Time",
  },

  {
    accessorKey: "lastActivity",
    header: "Last Activity",
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const styles = {
        Active:
          "bg-emerald-100 text-emerald-700 hover:bg-emerald-100",

        Idle:
          "bg-yellow-100 text-yellow-700 hover:bg-yellow-100",

        Expired:
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
            <Eye className="mr-2 h-4 w-4" />
            View Details
          </DropdownMenuItem>

          <DropdownMenuItem className="text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Terminate Session
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];