"use client";

import {
  Shield,
  Users,
  KeyRound,
  BadgeCheck,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";

import { Role } from "../types";

type Props = {
  roles: Role[];
};

export default function RoleStats({
  roles,
}: Props) {
  const totalRoles = roles.length;

  const totalUsers = roles.reduce(
    (sum, role) => sum + role.users,
    0
  );

  const totalPermissions = new Set(
    roles.flatMap((role) => role.permissions)
  ).size;

  const admins = roles.filter(
    (role) => role.name === "Administrator"
  ).length;

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Roles"
        value={totalRoles}
        subtitle="System roles"
        icon={Shield}
      />

      <StatCard
        title="Assigned Users"
        value={totalUsers}
        subtitle="Across all roles"
        icon={Users}
      />

      <StatCard
        title="Permissions"
        value={totalPermissions}
        subtitle="Available permissions"
        icon={KeyRound}
      />

      <StatCard
        title="Administrators"
        value={admins}
        subtitle="Full access roles"
        icon={BadgeCheck}
      />
    </div>
  );
}