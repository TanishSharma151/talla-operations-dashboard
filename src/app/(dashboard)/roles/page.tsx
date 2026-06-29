"use client";

import { useMemo, useState } from "react";

import RoleStats from "@/features/roles/components/role-stats";
import RoleToolbar from "@/features/roles/components/role-toolbar";
import RoleTable from "@/features/roles/components/role-table";

import { useRoles } from "@/features/roles/hooks/use-roles";

export default function RolesPage() {
  const { roles, loading } = useRoles();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return roles.filter((role) =>
      `${role.name}
       ${role.description}
       ${role.permissions.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [roles, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Roles & Permissions
        </h1>

        <p className="text-muted-foreground">
          Manage user roles and access permissions.
        </p>
      </div>

      <RoleStats roles={roles} />

      <RoleToolbar
        search={search}
        setSearch={setSearch}
      />

      <RoleTable roles={filtered} />
    </div>
  );
}