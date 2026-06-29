export type ConsumableCategory =
  | "Pantry"
  | "Housekeeping"
  | "Office"
  | "Packaging"
  | "Electrical"
  | "Miscellaneous";

export type ConsumableUnit =
  | "pcs"
  | "boxes"
  | "packs"
  | "bottles"
  | "kg"
  | "ltr"
  | "rolls";

export type ConsumableStatus =
  | "Healthy"
  | "Low Stock"
  | "Out of Stock"
  | "Ordered";


export type Store =
  | "Head Office"
  | "Gandhi Nagar"
  | "Janipur"
  | "Kathua"
  | "Akhnoor"
  | "Udhampur"
  | "Lakhdta Bazaar";

export interface Consumable {
  id: string;

  name: string;

  category: ConsumableCategory;

  store: Store;

  quantity: number;

  minimumQuantity: number;

  unit: ConsumableUnit;

  supplier: string;

  status: ConsumableStatus;

  lastUpdated: string;
}