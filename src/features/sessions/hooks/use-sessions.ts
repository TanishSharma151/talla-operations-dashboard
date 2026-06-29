"use client";

import { useState } from "react";

import { sessions as initialSessions } from "../data/sessions";
import { Session } from "../types";

export function useSessions() {
  const [sessions, setSessions] =
    useState<Session[]>(initialSessions);

  function addSession(
    session: Omit<Session, "id">
  ) {
    const newSession: Session = {
      id: crypto.randomUUID(),
      ...session,
    };

    setSessions((prev) => [
      newSession,
      ...prev,
    ]);
  }

  function updateSession(
    updated: Session
  ) {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === updated.id
          ? updated
          : session
      )
    );
  }

  function deleteSession(id: string) {
    setSessions((prev) =>
      prev.filter(
        (session) => session.id !== id
      )
    );
  }

  return {
    sessions,
    loading: false,
    addSession,
    updateSession,
    deleteSession,
  };
}