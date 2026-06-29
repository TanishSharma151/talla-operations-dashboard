import { Role } from "../types";

export const roles: Role[] = [
  {
    id: "1",
    name: "Administrator",
    description: "Full access to the entire system.",
    users: 2,
    permissions: [
      "Dashboard",
      "Users",
      "Consumables",
      "Allotments",
      "Checklists",
      "Reports",
      "Settings",
    ],
  },
  {
    id: "2",
    name: "Store Manager",
    description: "Manages daily showroom operations.",
    users: 7,
    permissions: [
      "Dashboard",
      "Users",
      "Consumables",
      "Allotments",
      "Checklists",
    ],
  },
  {
    id: "3",
    name: "Inventory Manager",
    description: "Handles inventory and consumables.",
    users: 3,
    permissions: [
      "Dashboard",
      "Consumables",
      "Allotments",
      "Reports",
    ],
  },
  {
    id: "4",
    name: "Sales Executive",
    description: "Daily sales and customer operations.",
    users: 14,
    permissions: [
      "Dashboard",
      "Checklists",
    ],
  },
  {
    id: "5",
    name: "Cashier",
    description: "Billing and payment handling.",
    users: 4,
    permissions: [
      "Dashboard",
    ],
  },
  {
    id: "6",
    name: "HR",
    description: "Employee and attendance management.",
    users: 2,
    permissions: [
      "Dashboard",
      "Users",
    ],
  },
  {
    id: "7",
    name: "Auditor",
    description: "Read-only access for audits.",
    users: 1,
    permissions: [
      "Dashboard",
      "Reports",
    ],
  },
];