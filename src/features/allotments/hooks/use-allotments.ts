"use client";

import { useState } from "react";

import { allotments as initialAllotments } from "../data/allotments";
import { Allotment } from "../types";

export function useAllotments() {
  const [allotments, setAllotments] =
    useState<Allotment[]>(initialAllotments);

  function addAllotment(
    allotment: Omit<Allotment, "id">
  ) {
    const newAllotment: Allotment = {
      id: crypto.randomUUID(),
      ...allotment,
    };

    setAllotments((prev) => [
      newAllotment,
      ...prev,
    ]);
  }

  function updateAllotment(
    updated: Allotment
  ) {
    setAllotments((prev) =>
      prev.map((item) =>
        item.id === updated.id
          ? updated
          : item
      )
    );
  }

  function deleteAllotment(id: string) {
    setAllotments((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  return {
    allotments,
    loading: false,
    addAllotment,
    updateAllotment,
    deleteAllotment,
  };
}