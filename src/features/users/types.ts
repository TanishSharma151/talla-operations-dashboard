export type UserRole =
  | "Admin"
  | "Manager"
  | "Store Manager"
  | "Sales";

export type UserStatus =
  | "Active"
  | "Inactive";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  store: string;
  role: UserRole;
  status: UserStatus;
  avatar: string;
}