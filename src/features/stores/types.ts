interface Store {
  id: string;

  code: string;

  name: string;

  manager: string;

  phone: string;

  email: string;

  address: string;

  openingTime: string;

  closingTime: string;

  employees: number;

  inventoryItems: number;

  status: "ACTIVE" | "INACTIVE" | "TEMPORARILY_CLOSED";

  createdAt: string;
}