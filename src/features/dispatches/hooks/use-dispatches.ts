"use client";

import { useState } from "react";

import { dispatches as initialDispatches } from "../data/dispatches";
import { Dispatch } from "../types";

export function useDispatches() {
  const [dispatches, setDispatches] =
    useState<Dispatch[]>(initialDispatches);

  function addDispatch(
    dispatch: Omit<Dispatch, "id">
  ) {
    const newDispatch: Dispatch = {
      id: crypto.randomUUID(),
      ...dispatch,
    };

    setDispatches((prev) => [
      newDispatch,
      ...prev,
    ]);
  }

  function updateDispatch(
    updated: Dispatch
  ) {
    setDispatches((prev) =>
      prev.map((dispatch) =>
        dispatch.id === updated.id
          ? updated
          : dispatch
      )
    );
  }

  function deleteDispatch(id: string) {
    setDispatches((prev) =>
      prev.filter(
        (dispatch) =>
          dispatch.id !== id
      )
    );
  }

  return {
    dispatches,
    loading: false,
    addDispatch,
    updateDispatch,
    deleteDispatch,
  };
}