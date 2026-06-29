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

import RequestDialog from "./request-dialog";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function RequestToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search requests..."
            className="pl-10"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-56">
            <SelectValue placeholder="Branch" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Branches
            </SelectItem>

            <SelectItem value="Head Office">
              Head Office
            </SelectItem>

            <SelectItem value="Gandhi Nagar">
              Gandhi Nagar
            </SelectItem>

            <SelectItem value="Janipur">
              Janipur
            </SelectItem>

            <SelectItem value="Kathua">
              Kathua
            </SelectItem>

            <SelectItem value="Akhnoor">
              Akhnoor
            </SelectItem>

            <SelectItem value="Udhampur">
              Udhampur
            </SelectItem>

            <SelectItem value="Lakhdta Bazaar">
              Lakhdta Bazaar
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-56">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Status
            </SelectItem>

            <SelectItem value="Pending">
              Pending
            </SelectItem>

            <SelectItem value="Approved">
              Approved
            </SelectItem>

            <SelectItem value="Partially Approved">
              Partially Approved
            </SelectItem>

            <SelectItem value="Rejected">
              Rejected
            </SelectItem>

            <SelectItem value="Dispatched">
              Dispatched
            </SelectItem>

            <SelectItem value="Delivered">
              Delivered
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <RequestDialog />
    </div>
  );
}