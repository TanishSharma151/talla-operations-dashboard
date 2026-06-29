import {
  Activity,
  BranchUtilization,
  DispatchPerformance,
  Forecast,
  InventoryTrend,
  RequestedItem,
} from "../types";

export const inventoryTrend: InventoryTrend[] = [
  {
    month: "Jan",
    requests: 52,
    dispatched: 48,
    consumed: 45,
  },
  {
    month: "Feb",
    requests: 61,
    dispatched: 59,
    consumed: 55,
  },
  {
    month: "Mar",
    requests: 74,
    dispatched: 70,
    consumed: 66,
  },
  {
    month: "Apr",
    requests: 68,
    dispatched: 64,
    consumed: 61,
  },
  {
    month: "May",
    requests: 82,
    dispatched: 78,
    consumed: 73,
  },
  {
    month: "Jun",
    requests: 95,
    dispatched: 91,
    consumed: 88,
  },
];

export const branchUtilization: BranchUtilization[] = [
  {
    branch: "Head Office",
    coffee: 42,
    tea: 24,
    sugar: 38,
    paper: 65,
  },
  {
    branch: "Gandhi Nagar",
    coffee: 28,
    tea: 16,
    sugar: 22,
    paper: 40,
  },
  {
    branch: "Janipur",
    coffee: 24,
    tea: 15,
    sugar: 18,
    paper: 36,
  },
  {
    branch: "Kathua",
    coffee: 18,
    tea: 10,
    sugar: 15,
    paper: 28,
  },
  {
    branch: "Akhnoor",
    coffee: 15,
    tea: 8,
    sugar: 12,
    paper: 24,
  },
];

export const topRequestedItems: RequestedItem[] = [
  {
    item: "Coffee Beans",
    quantity: 142,
  },
  {
    item: "Printer Paper",
    quantity: 126,
  },
  {
    item: "Sugar",
    quantity: 118,
  },
  {
    item: "Tea Bags",
    quantity: 96,
  },
  {
    item: "Packing Tape",
    quantity: 84,
  },
  {
    item: "Bubble Wrap",
    quantity: 76,
  },
];

export const dispatchPerformance: DispatchPerformance[] = [
  {
    month: "Jan",
    dispatched: 45,
    delivered: 43,
  },
  {
    month: "Feb",
    dispatched: 54,
    delivered: 52,
  },
  {
    month: "Mar",
    dispatched: 63,
    delivered: 60,
  },
  {
    month: "Apr",
    dispatched: 72,
    delivered: 69,
  },
  {
    month: "May",
    dispatched: 79,
    delivered: 77,
  },
  {
    month: "Jun",
    dispatched: 88,
    delivered: 86,
  },
];

export const forecast: Forecast[] = [
  {
    item: "Coffee Beans",
    remainingDays: 6,
    stock: 18,
  },
  {
    item: "Sugar",
    remainingDays: 9,
    stock: 32,
  },
  {
    item: "Printer Paper",
    remainingDays: 12,
    stock: 45,
  },
  {
    item: "Tea Bags",
    remainingDays: 14,
    stock: 54,
  },
  {
    item: "Hand Wash",
    remainingDays: 18,
    stock: 28,
  },
];

export const activities: Activity[] = [
  {
    id: "1",
    title: "Request Approved",
    branch: "Gandhi Nagar",
    time: "10 mins ago",
  },
  {
    id: "2",
    title: "Dispatch Created",
    branch: "Janipur",
    time: "25 mins ago",
  },
  {
    id: "3",
    title: "Inventory Updated",
    branch: "Head Office",
    time: "40 mins ago",
  },
  {
    id: "4",
    title: "Dispatch Delivered",
    branch: "Kathua",
    time: "1 hour ago",
  },
  {
    id: "5",
    title: "Request Submitted",
    branch: "Udhampur",
    time: "2 hours ago",
  },
];