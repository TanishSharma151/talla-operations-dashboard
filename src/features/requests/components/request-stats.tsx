"use client";

import {
  Clock3,
  CheckCircle2,
  Truck,
  PackageCheck,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { InventoryRequest } from "../types";

type Props = {
  requests: InventoryRequest[];
};

export default function RequestStats({
  requests,
}: Props) {
  const total = requests.length;

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approved = requests.filter(
    (request) =>
      request.status === "Approved" ||
      request.status === "Partially Approved"
  ).length;

  const dispatched = requests.filter(
    (request) =>
      request.status === "Dispatched"
  ).length;

  const delivered = requests.filter(
    (request) =>
      request.status === "Delivered"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      <StatCard
        title="Total Requests"
        value={total}
        subtitle="All requests"
        icon={PackageCheck}
      />

      <StatCard
        title="Pending"
        value={pending}
        subtitle="Awaiting approval"
        icon={Clock3}
      />

      <StatCard
        title="Approved"
        value={approved}
        subtitle="Ready for dispatch"
        icon={CheckCircle2}
      />

      <StatCard
        title="Dispatched"
        value={dispatched}
        subtitle="In transit"
        icon={Truck}
      />

      <StatCard
        title="Delivered"
        value={delivered}
        subtitle="Completed"
        icon={PackageCheck}
      />
    </div>
  );
}