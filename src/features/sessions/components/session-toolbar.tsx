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

import SessionDialog from "./session-dialog";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SessionToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search sessions..."
            className="pl-10"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Status
            </SelectItem>

            <SelectItem value="Active">
              Active
            </SelectItem>

            <SelectItem value="Idle">
              Idle
            </SelectItem>

            <SelectItem value="Expired">
              Expired
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-44">
            <SelectValue placeholder="Browser" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Browsers
            </SelectItem>

            <SelectItem value="Chrome">
              Chrome
            </SelectItem>

            <SelectItem value="Edge">
              Edge
            </SelectItem>

            <SelectItem value="Firefox">
              Firefox
            </SelectItem>

            <SelectItem value="Safari">
              Safari
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <SessionDialog />
    </div>
  );
}