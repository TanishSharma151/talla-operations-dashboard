export type Store =
  | "Head Office"
  | "Gandhi Nagar"
  | "Janipur"
  | "Kathua"
  | "Akhnoor"
  | "Udhampur"
  | "Lakhdta Bazaar";

export type AllotmentStatus =
  | "Active"
  | "Returned"
  | "Damaged"
  | "Lost";

export interface Allotment {
  id: string;

  employee: string;

  item: string;

  store: Store;

  quantity: number;

  allottedOn: string;

  returnedOn?: string;

  status: AllotmentStatus;
}