export type RequestStatus =
  | "Pending"
  | "Approved"
  | "Rejected"
  | "Partially Approved"
  | "Dispatched"
  | "Delivered";

export interface RequestItem {
  id: string;

  inventoryItem: string;

  quantity: number;

  unit: string;
}

export interface InventoryRequest {
  id: string;

  requestNumber: string;

  branch: string;

  requestedBy: string;

  requestedOn: string;

  status: RequestStatus;

  remarks?: string;

  items: RequestItem[];
}