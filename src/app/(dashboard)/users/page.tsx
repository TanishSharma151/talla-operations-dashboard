"use client";

import { useMemo, useState } from "react";

import UserStats from "@/features/users/components/user-stats";
import UserTable from "@/features/users/components/user-table";
import UserToolbar from "@/features/users/components/user-toolbar";
import { useUsers } from "@/features/users/hooks/use-users";

export default function UsersPage() {
  const { users, loading } = useUsers();

  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users;

    const query = search.toLowerCase();

    return users.filter((user) =>
      [
        user.name,
        user.email,
        user.phone,
        user.role,
        user.store,
        user.status,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [users, search]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">Loading users...</p>
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Users
        </h1>

        <p className="text-slate-500">
          Manage employees, permissions and access.
        </p>
      </header>

      <UserStats users={users} />

      <UserToolbar
        search={search}
        setSearch={setSearch}
      />

      <UserTable users={filteredUsers} />
    </section>
  );
}