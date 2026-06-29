"use client";

import {
  AlertTriangle,
  Boxes,
  PackageCheck,
  PackageX,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { Consumable } from "../types";

type Props = {
  consumables: Consumable[];
};

export default function ConsumableStats({
  consumables,
}: Props) {
  const total = consumables.length;

  const healthy = consumables.filter(
    (item) => item.status === "Healthy"
  ).length;

  const lowStock = consumables.filter(
    (item) => item.status === "Low Stock"
  ).length;

  const outOfStock = consumables.filter(
    (item) => item.status === "Out of Stock"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Items"
        value={total}
        subtitle="Consumables"
        icon={Boxes}
      />

      <StatCard
        title="Healthy"
        value={healthy}
        subtitle="Sufficient stock"
        icon={PackageCheck}
      />

      <StatCard
        title="Low Stock"
        value={lowStock}
        subtitle="Needs reorder"
        icon={AlertTriangle}
      />

      <StatCard
        title="Out of Stock"
        value={outOfStock}
        subtitle="Immediate action"
        icon={PackageX}
      />
    </div>
  );
}