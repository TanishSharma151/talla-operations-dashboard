"use client";

import { useCallback, useState } from "react";

import { users as initialUsers } from "../data/users";
import { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const addUser = useCallback(
    (user: Omit<User, "id" | "avatar">) => {
      const avatar = user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      const newUser: User = {
        id:
          typeof crypto !== "undefined" &&
          "randomUUID" in crypto
            ? crypto.randomUUID()
            : Date.now().toString(),

        avatar,

        ...user,
      };

      setUsers((prev) => [newUser, ...prev]);
    },
    []
  );

  const updateUser = useCallback((user: User) => {
    setUsers((prev) =>
      prev.map((item) =>
        item.id === user.id ? user : item
      )
    );
  }, []);

  const deleteUser = useCallback((id: string) => {
    setUsers((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }, []);

  const getUser = useCallback(
    (id: string) =>
      users.find((user) => user.id === id),
    [users]
  );

  return {
    loading: false,
    users,
    addUser,
    updateUser,
    deleteUser,
    getUser,
  };
}