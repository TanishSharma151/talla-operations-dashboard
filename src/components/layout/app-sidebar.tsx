"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION } from "@/constants/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 border-r bg-white lg:flex lg:flex-col">
      <div className="border-b px-6 py-5">
        <h1 className="text-xl font-bold tracking-tight">
          Talla
          <span className="text-emerald-600">.</span>
        </h1>
        <p className="text-sm text-slate-500">
          Operations Suite
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {NAVIGATION.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.url;

          return (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                active
                  ? "bg-emerald-50 text-emerald-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="rounded-xl bg-slate-100 p-4">
          <p className="font-medium">Tanish</p>
          <p className="text-sm text-slate-500">
            Administrator
          </p>
        </div>
      </div>
    </aside>
  );
}