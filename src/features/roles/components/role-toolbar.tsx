"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import RoleDialog from "./role-dialog";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function RoleToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search roles..."
            className="pl-10"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-56">
            <SelectValue placeholder="Permission" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Permissions
            </SelectItem>

            <SelectItem value="Dashboard">
              Dashboard
            </SelectItem>

            <SelectItem value="Users">
              Users
            </SelectItem>

            <SelectItem value="Consumables">
              Consumables
            </SelectItem>

            <SelectItem value="Allotments">
              Allotments
            </SelectItem>

            <SelectItem value="Checklists">
              Checklists
            </SelectItem>

            <SelectItem value="Reports">
              Reports
            </SelectItem>

            <SelectItem value="Settings">
              Settings
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <RoleDialog />
    </div>
  );
}