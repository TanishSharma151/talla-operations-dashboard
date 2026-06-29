export type DispatchStatus =
  | "Preparing"
  | "Packed"
  | "Dispatched"
  | "In Transit"
  | "Delivered"
  | "Received";

export interface DispatchItem {
  id: string;

  inventoryItem: string;

  requestedQuantity: number;

  dispatchedQuantity: number;

  unit: string;
}

export interface Dispatch {
  id: string;

  dispatchNumber: string;

  requestNumber: string;

  branch: string;

  preparedBy: string;

  dispatchedOn: string;

  courier: string;

  trackingNumber: string;

  status: DispatchStatus;

  remarks?: string;

  items: DispatchItem[];
}