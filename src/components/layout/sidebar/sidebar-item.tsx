"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export default function SidebarItem({
  title,
  href,
  icon: Icon,
}: Props) {
  const pathname = usePathname();

  const active =
    pathname === href ||
    (href !== "/dashboard" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-[#6B103E] text-white shadow-md"
          : "text-[#5E5E5E] hover:bg-[#F3E9EC] hover:text-[#6B103E]"
      }`}
    >
      <Icon
        className={`h-5 w-5 transition-all duration-200 ${
          active
            ? "scale-110 text-[#D4AF37]"
            : "text-[#7A7A7A] group-hover:scale-105 group-hover:text-[#6B103E]"
        }`}
      />

      <span className="flex-1 truncate">
        {title}
      </span>

      {active && (
        <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
      )}
    </Link>
  );
}