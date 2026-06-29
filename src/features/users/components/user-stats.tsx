import {
  Building2,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

import StatCard from "@/components/shared/stat-card";
import { User } from "../types";

type Props = {
  users: User[];
};

export default function UserStats({ users }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Users"
        value={users.length}
        subtitle="Registered"
        icon={Users}
      />

      <StatCard
        title="Stores"
        value="7"
        subtitle="Locations"
        icon={Building2}
      />

      <StatCard
        title="Roles"
        value="4"
        subtitle="Available"
        icon={ShieldCheck}
      />

      <StatCard
        title="Active"
        value={users.filter((u) => u.status === "Active").length}
        subtitle="Online"
        icon={UserCheck}
      />
    </div>
  );
}