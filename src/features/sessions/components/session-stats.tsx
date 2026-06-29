"use client";

import {
  Clock3,
  Monitor,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { Session } from "../types";

type Props = {
  sessions: Session[];
};

export default function SessionStats({
  sessions,
}: Props) {
  const total = sessions.length;

  const active = sessions.filter(
    (session) => session.status === "Active"
  ).length;

  const idle = sessions.filter(
    (session) => session.status === "Idle"
  ).length;

  const expired = sessions.filter(
    (session) => session.status === "Expired"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Sessions"
        value={total}
        subtitle="Tracked sessions"
        icon={Monitor}
      />

      <StatCard
        title="Active"
        value={active}
        subtitle="Currently online"
        icon={UserCheck}
      />

      <StatCard
        title="Idle"
        value={idle}
        subtitle="Inactive users"
        icon={Clock3}
      />

      <StatCard
        title="Expired"
        value={expired}
        subtitle="Logged out sessions"
        icon={ShieldCheck}
      />
    </div>
  );
}