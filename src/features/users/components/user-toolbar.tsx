"use client";

import { Search } from "lucide-react";

import UserDialog from "@/features/users/components/user-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function UserToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search users..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Role" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="store-manager">
              Store Manager
            </SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Store" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Stores</SelectItem>
            <SelectItem value="head-office">
              Head Office
            </SelectItem>
            <SelectItem value="gandhi">
              Gandhi Nagar
            </SelectItem>
            <SelectItem value="janipur">
              Janipur
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-44">
            <SelectValue placeholder="Status" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <UserDialog /> 
    </div>
  );
}