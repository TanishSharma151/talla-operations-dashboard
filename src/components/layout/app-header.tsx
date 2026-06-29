"use client";

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from "lucide-react";

import { usePathname } from "next/navigation";

import { NAVIGATION } from "@/constants/navigation";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function usePageTitle() {
  const pathname = usePathname();

  const match = NAVIGATION.find(
    (item) =>
      pathname === item.href ||
      (item.href !== "/dashboard" &&
        pathname.startsWith(item.href))
  );

  return match?.title ?? "Dashboard";
}

export function AppHeader() {
  const title = usePageTitle();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-[#E8E2D8] bg-[#FBF8F3]/95 px-6 backdrop-blur">
      {/* Left */}
      <div className="flex w-56 items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h1 className="text-2xl font-bold tracking-tight text-[#4A0E2E]">
          {title}
        </h1>
      </div>

      {/* Search */}
      <div className="mx-8 flex-1">
        <div className="relative max-w-2xl">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <Input
            placeholder="Search inventory, requests, users..."
            className="h-11 rounded-xl border-[#E8E2D8] bg-white pl-11 shadow-sm focus-visible:ring-[#6B103E]"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-xl border border-[#E8E2D8] bg-white hover:bg-[#F8F5F0]"
        >
          <Bell className="h-5 w-5 text-[#6B103E]" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#D4AF37]" />
        </Button>

        <button className="flex items-center gap-3 rounded-xl border border-[#E8E2D8] bg-white px-2 py-1.5 transition hover:bg-[#F8F5F0]">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-[#6B103E] font-semibold text-white">
              TM
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-[#4A0E2E]">
              Talla
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-slate-500 lg:block" />
        </button>
      </div>
    </header>
  );
}