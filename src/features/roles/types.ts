export type Permission =
  | "Dashboard"
  | "Users"
  | "Consumables"
  | "Allotments"
  | "Checklists"
  | "Reports"
  | "Settings";

export interface Role {
  id: string;

  name: string;

  description: string;

  users: number;

  permissions: Permission[];
}