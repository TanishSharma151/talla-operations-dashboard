import {
  CheckCircle2,
  ClipboardList,
  Clock3,
  Wrench,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import ChecklistGroup from "@/features/checklists/data/checklist-group";
import { checklistData } from "@/features/checklists/data/checklists";

import StoreFilter from "@/features/checklists/data/store-filter";
import TopTabs from "@/features/checklists/data/top-tabs";

export default function ChecklistPage() {
  const totalTasks = checklistData.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
            Operations
          </p>

          <h1 className="mt-1 text-4xl font-bold tracking-tight">
            Checklists & Jobs
          </h1>

          <p className="mt-2 text-slate-500">
            Monitor daily operations, maintenance and store activities.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Tasks"
          value={totalTasks}
          subtitle="Across all stores"
          icon={ClipboardList}
        />

        <StatCard
          title="Completed"
          value="84%"
          subtitle="Today's completion"
          icon={CheckCircle2}
        />

        <StatCard
          title="Pending"
          value="9"
          subtitle="Awaiting action"
          icon={Clock3}
        />

        <StatCard
          title="Maintenance"
          value="3"
          subtitle="Open requests"
          icon={Wrench}
        />
      </section>

      {/* Filters */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <StoreFilter />
          <TopTabs />
        </div>
      </section>

      {/* Checklist Groups */}
      <section className="space-y-6">
        {checklistData.map((group) => (
          <ChecklistGroup
            key={group.id}
            title={group.title}
            items={group.items}
          />
        ))}
      </section>
    </div>
  );
}