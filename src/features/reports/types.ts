export interface OverviewMetric {
  title: string;

  value: number | string;

  subtitle: string;
}

export interface InventoryTrend {
  month: string;

  requests: number;

  dispatched: number;

  consumed: number;
}

export interface BranchUtilization {
  branch: string;

  coffee: number;

  tea: number;

  sugar: number;

  paper: number;
}

export interface RequestedItem {
  item: string;

  quantity: number;
}

export interface DispatchPerformance {
  month: string;

  dispatched: number;

  delivered: number;
}

export interface Forecast {
  item: string;

  remainingDays: number;

  stock: number;
}

export interface Activity {
  id: string;

  title: string;

  branch: string;

  time: string;
}