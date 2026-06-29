"use client";

import { useState } from "react";

import { consumables as initialConsumables } from "../data/consumables";
import { Consumable } from "../types";

export function useConsumables() {
  const [consumables, setConsumables] =
    useState<Consumable[]>(initialConsumables);

  function getStatus(
    quantity: number,
    minimumQuantity: number
  ): Consumable["status"] {
    if (quantity === 0) {
      return "Out of Stock";
    }

    if (quantity <= minimumQuantity) {
      return "Low Stock";
    }

    return "Healthy";
  }

  function addConsumable(
    item: Omit<
      Consumable,
      "id" | "status" | "lastUpdated"
    >
  ) {
    const newItem: Consumable = {
      ...item,
      id: crypto.randomUUID(),
      status: getStatus(
        item.quantity,
        item.minimumQuantity
      ),
      lastUpdated: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
    };

    setConsumables((prev) => [
      newItem,
      ...prev,
    ]);
  }

  function updateConsumable(
    updated: Consumable
  ) {
    updated.status = getStatus(
      updated.quantity,
      updated.minimumQuantity
    );

    setConsumables((prev) =>
      prev.map((item) =>
        item.id === updated.id
          ? updated
          : item
      )
    );
  }

  function deleteConsumable(id: string) {
    setConsumables((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return {
    consumables,
    loading: false,
    addConsumable,
    updateConsumable,
    deleteConsumable,
  };
}