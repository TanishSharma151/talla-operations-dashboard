"use client";

import {
  Package,
  PackageCheck,
  Truck,
  CircleCheckBig,
  Boxes,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { Dispatch } from "../types";

type Props = {
  dispatches: Dispatch[];
};

export default function DispatchStats({
  dispatches,
}: Props) {
  const total = dispatches.length;

  const preparing = dispatches.filter(
    (dispatch) =>
      dispatch.status === "Preparing"
  ).length;

  const packed = dispatches.filter(
    (dispatch) =>
      dispatch.status === "Packed"
  ).length;

  const inTransit = dispatches.filter(
    (dispatch) =>
      dispatch.status === "Dispatched" ||
      dispatch.status === "In Transit"
  ).length;

  const completed = dispatches.filter(
    (dispatch) =>
      dispatch.status === "Delivered" ||
      dispatch.status === "Received"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
      <StatCard
        title="Total Dispatches"
        value={total}
        subtitle="All dispatch records"
        icon={Boxes}
      />

      <StatCard
        title="Preparing"
        value={preparing}
        subtitle="Being packed"
        icon={Package}
      />

      <StatCard
        title="Packed"
        value={packed}
        subtitle="Ready for courier"
        icon={PackageCheck}
      />

      <StatCard
        title="In Transit"
        value={inTransit}
        subtitle="On the way"
        icon={Truck}
      />

      <StatCard
        title="Completed"
        value={completed}
        subtitle="Received by branch"
        icon={CircleCheckBig}
      />
    </div>
  );
}