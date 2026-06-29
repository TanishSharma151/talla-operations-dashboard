"use client";

import OverviewCards from "@/features/reports/components/overview-cards";
import ReportToolbar from "@/features/reports/components/report-toolbar";
import InventoryTrend from "@/features/reports/components/inventory-trend";
import BranchUtilization from "@/features/reports/components/branch-utilization";
import TopRequestedItems from "@/features/reports/components/top-requested-items";
import DispatchPerformance from "@/features/reports/components/dispatch-performance";
import LowStockForecast from "@/features/reports/components/low-stock-forecast";
import RecentActivity from "@/features/reports/components/recent-activity";

import { useReports } from "@/features/reports/hook/use-reports";

export default function ReportsPage() {
  const {
    loading,
    overview,
    inventoryTrend,
    branchUtilization,
    topRequestedItems,
    dispatchPerformance,
    forecast,
    activities,
  } = useReports();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Reports & Analytics
        </h1>

        <p className="text-muted-foreground">
          Analyze inventory utilization, requests, dispatches and operational performance across all branches.
        </p>
      </div>

      <ReportToolbar />

      <OverviewCards
        overview={overview}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <InventoryTrend
          data={inventoryTrend}
        />

        <DispatchPerformance
          data={dispatchPerformance}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <BranchUtilization
          data={branchUtilization}
        />

        <TopRequestedItems
          data={topRequestedItems}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <LowStockForecast
          data={forecast}
        />

        <RecentActivity
          data={activities}
        />
      </div>
    </div>
  );
}