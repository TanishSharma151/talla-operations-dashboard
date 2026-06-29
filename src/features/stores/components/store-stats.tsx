"use client";

import {
  Building2,
  Package,
  Users,
  CircleOff,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

type Props = {
  stats: {
    total: number;
    active: number;
    inactive: number;
    temporarilyClosed: number;
    totalEmployees: number;
    totalInventory: number;
  };
};

export default function StoreStats({
  stats,
}: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Active Branches"
        value={stats.active}
        subtitle={`${stats.total} Total Branches`}
        icon={Building2}
      />

      <StatCard
        title="Employees"
        value={stats.totalEmployees}
        subtitle="Across all branches"
        icon={Users}
      />

      <StatCard
        title="Inventory Items"
        value={stats.totalInventory}
        subtitle="Currently assigned"
        icon={Package}
      />

      <StatCard
        title="Inactive Branches"
        value={
          stats.inactive +
          stats.temporarilyClosed
        }
        subtitle="Require attention"
        icon={CircleOff}
      />
    </div>
  );
}