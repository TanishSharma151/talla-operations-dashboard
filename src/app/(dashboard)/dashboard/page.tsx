import {
  Building2,
  PackageX,
  RefreshCcw,
  Users,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import StoreStatus from "@/features/dashboard/components/store-status";
import LowStock from "@/features/dashboard/components/low-stock";

export default function DashboardPage() {
  const today = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-[#3F1734]">
            Good Afternoon 👋
          </h1>

          <p className="mt-2 text-slate-500">
            {today} • Here's today's operational overview across all branches.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E8E2D8] bg-white px-6 py-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Overall Health
          </p>

          <p className="mt-2 text-3xl font-bold text-[#6B103E]">
            Excellent
          </p>

          <p className="mt-1 text-sm text-slate-500">
            All stores operating normally
          </p>
        </div>
      </section>

      {/* KPI Cards */}
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Stores Open"
          value="7 / 7"
          subtitle="All operational"
          icon={Building2}
        />

        <StatCard
          title="Out of Stock"
          value="0"
          subtitle="No critical items"
          icon={PackageX}
        />

        <StatCard
          title="Pending Orders"
          value="2"
          subtitle="Awaiting purchase"
          icon={RefreshCcw}
        />

        <StatCard
          title="Staff Present"
          value="18 / 20"
          subtitle="Across all stores"
          icon={Users}
        />
      </section>

      {/* Main Content */}
      <section className="grid gap-6 xl:grid-cols-2">
        <StoreStatus />
        <LowStock />
      </section>
    </div>
  );
}