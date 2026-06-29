"use client";

import {
  Boxes,
  ClipboardList,
  PackageCheck,
  Store,
  TriangleAlert,
  Trophy,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

type Props = {
  overview: {
    totalRequests: number;
    totalDispatches: number;
    totalDelivered: number;
    activeBranches: number;
    lowStockItems: number;
    topRequestedItem: string;
  };
};

export default function OverviewCards({
  overview,
}: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      <StatCard
        title="Total Requests"
        value={overview.totalRequests}
        subtitle="Across all branches"
        icon={ClipboardList}
      />

      <StatCard
        title="Dispatches"
        value={overview.totalDispatches}
        subtitle="Created"
        icon={Boxes}
      />

      <StatCard
        title="Delivered"
        value={overview.totalDelivered}
        subtitle="Successfully delivered"
        icon={PackageCheck}
      />

      <StatCard
        title="Active Branches"
        value={overview.activeBranches}
        subtitle="Currently reporting"
        icon={Store}
      />

      <StatCard
        title="Critical Stock"
        value={overview.lowStockItems}
        subtitle="Needs replenishment"
        icon={TriangleAlert}
      />

      <StatCard
        title="Most Requested"
        value={overview.topRequestedItem}
        subtitle="Highest utilization"
        icon={Trophy}
      />
    </div>
  );
}