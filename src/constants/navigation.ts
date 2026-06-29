import {
  Activity,
  Boxes,
  Building2,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Package2,
  Settings,
  ShieldCheck,
  Truck,
  UserCircle2,
  Users,
} from "lucide-react";

export const NAVIGATION = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Checklists & Jobs",
    href: "/checklists",
    icon: ClipboardList,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package2,
  },
  {
    title: "Requests",
    href: "/requests",
    icon: FileText,
  },
  {
    title: "Dispatches",
    href: "/dispatches",
    icon: Truck,
  },
  {
    title: "Allotments",
    href: "/allotments",
    icon: Boxes,
  },
  {
    title: "Branches",
    href: "/stores",
    icon: Building2,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Roles & Permissions",
    href: "/roles",
    icon: ShieldCheck,
  },
  {
    title: "Sessions",
    href: "/sessions",
    icon: Activity,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "My Account",
    href: "/account",
    icon: UserCircle2,
  },
] as const;