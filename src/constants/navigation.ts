import {
  Activity,
  Boxes,
 ChartColumn,
  ClipboardList,
  LayoutDashboard,
  ShieldCheck,
  UserCircle2,
  Users,
} from "lucide-react";

export const navigation = [
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
    title: "Utilization",
    href: "/utilization",
    icon: ChartColumn,
  },
  {
    title: "Allotments",
    href: "/allotments",
    icon: Boxes,
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
    title: "My Account",
    href: "/account",
    icon: UserCircle2,
  },
] as const;