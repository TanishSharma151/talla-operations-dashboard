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

export const NAVIGATION = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Checklists & Jobs",
    url: "/checklists",
    icon: ClipboardList,
  },
  {
    title: "Utilization",
    url: "/utilization",
    icon: ChartColumn,
  },
  {
    title: "Allotments",
    url: "/allotments",
    icon: Boxes,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },
  {
    title: "Roles & Permissions",
    url: "/roles",
    icon: ShieldCheck,
  },
  {
    title: "Sessions",
    url: "/sessions",
    icon: Activity,
  },
  {
    title: "My Account",
    url: "/account",
    icon: UserCircle2,
  },
] as const;