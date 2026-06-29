"use client";

import {
  ClipboardList,
  CheckCircle2,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { Allotment } from "../types";

type Props = {
  allotments: Allotment[];
};

export default function AllotmentStats({
  allotments,
}: Props) {
  const total = allotments.length;

  const active = allotments.filter(
    (item) => item.status === "Active"
  ).length;

  const returned = allotments.filter(
    (item) => item.status === "Returned"
  ).length;

  const issues = allotments.filter(
    (item) =>
      item.status === "Damaged" ||
      item.status === "Lost"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Allotments"
        value={total}
        subtitle="Assigned assets"
        icon={ClipboardList}
      />

      <StatCard
        title="Active"
        value={active}
        subtitle="Currently allotted"
        icon={CheckCircle2}
      />

      <StatCard
        title="Returned"
        value={returned}
        subtitle="Assets returned"
        icon={RotateCcw}
      />

      <StatCard
        title="Issues"
        value={issues}
        subtitle="Lost / Damaged"
        icon={AlertTriangle}
      />
    </div>
  );
}