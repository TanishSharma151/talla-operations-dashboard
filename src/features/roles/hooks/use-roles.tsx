"use client";

import { useState } from "react";

import { roles as initialRoles } from "../data/roles";
import { Role } from "../types";

export function useRoles() {
  const [roles, setRoles] =
    useState<Role[]>(initialRoles);

  function addRole(
    role: Omit<Role, "id">
  ) {
    const newRole: Role = {
      id: crypto.randomUUID(),
      ...role,
    };

    setRoles((prev) => [
      newRole,
      ...prev,
    ]);
  }

  function updateRole(updated: Role) {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === updated.id
          ? updated
          : role
      )
    );
  }

  function deleteRole(id: string) {
    setRoles((prev) =>
      prev.filter(
        (role) => role.id !== id
      )
    );
  }

  return {
    roles,
    loading: false,
    addRole,
    updateRole,
    deleteRole,
  };
}