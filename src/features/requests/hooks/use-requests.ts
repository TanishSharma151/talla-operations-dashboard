"use client";

import { useState } from "react";

import { requests as initialRequests } from "../data/requests";
import { InventoryRequest } from "../types";

export function useRequests() {
  const [requests, setRequests] =
    useState<InventoryRequest[]>(initialRequests);

  function addRequest(
    request: Omit<InventoryRequest, "id">
  ) {
    const newRequest: InventoryRequest = {
      id: crypto.randomUUID(),
      ...request,
    };

    setRequests((prev) => [
      newRequest,
      ...prev,
    ]);
  }

  function updateRequest(
    updated: InventoryRequest
  ) {
    setRequests((prev) =>
      prev.map((request) =>
        request.id === updated.id
          ? updated
          : request
      )
    );
  }

  function deleteRequest(id: string) {
    setRequests((prev) =>
      prev.filter(
        (request) => request.id !== id
      )
    );
  }

  return {
    requests,
    loading: false,
    addRequest,
    updateRequest,
    deleteRequest,
  };
}