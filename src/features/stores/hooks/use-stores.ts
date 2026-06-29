"use client";

import { useMemo, useState } from "react";

import { stores as initialStores } from "../data/stores";
import { Store } from "../types";

export function useStores() {
  const [stores, setStores] =
    useState<Store[]>(initialStores);

  const stats = useMemo(() => {
    const active = stores.filter(
      (store) => store.status === "ACTIVE"
    ).length;

    const inactive = stores.filter(
      (store) => store.status === "INACTIVE"
    ).length;

    const temporarilyClosed = stores.filter(
      (store) =>
        store.status ===
        "TEMPORARILY_CLOSED"
    ).length;

    const totalEmployees = stores.reduce(
      (sum, store) => sum + store.employees,
      0
    );

    const totalInventory = stores.reduce(
      (sum, store) => sum + store.inventoryItems,
      0
    );

    return {
      total: stores.length,
      active,
      inactive,
      temporarilyClosed,
      totalEmployees,
      totalInventory,
    };
  }, [stores]);

  function addStore(store: Store) {
    setStores((prev) => [...prev, store]);
  }

  function updateStore(updated: Store) {
    setStores((prev) =>
      prev.map((store) =>
        store.id === updated.id
          ? updated
          : store
      )
    );
  }

  function deleteStore(id: string) {
    setStores((prev) =>
      prev.filter((store) => store.id !== id)
    );
  }

  return {
    loading: false,

    stores,

    stats,

    addStore,

    updateStore,

    deleteStore,
  };
}