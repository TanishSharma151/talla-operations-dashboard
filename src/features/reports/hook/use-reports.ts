"use client";

import {
  activities,
  branchUtilization,
  dispatchPerformance,
  forecast,
  inventoryTrend,
  topRequestedItems,
} from "../data/reports";

export function useReports() {
  return {
    loading: false,

    inventoryTrend,

    branchUtilization,

    topRequestedItems,

    dispatchPerformance,

    forecast,

    activities,

    overview: {
      totalRequests: inventoryTrend.reduce(
        (sum, month) => sum + month.requests,
        0
      ),

      totalDispatches: dispatchPerformance.reduce(
        (sum, month) => sum + month.dispatched,
        0
      ),

      totalDelivered: dispatchPerformance.reduce(
        (sum, month) => sum + month.delivered,
        0
      ),

      activeBranches: branchUtilization.length,

      lowStockItems: forecast.filter(
        (item) => item.remainingDays <= 10
      ).length,

      topRequestedItem:
        topRequestedItems[0]?.item ?? "-",
    },
  };
}