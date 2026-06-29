"use client";

import { useMemo, useState } from "react";

import SessionStats from "@/features/sessions/components/session-stats";
import SessionToolbar from "@/features/sessions/components/session-toolbar";
import SessionTable from "@/features/sessions/components/session-table";

import { useSessions } from "@/features/sessions/hooks/use-sessions";

export default function SessionsPage() {
  const {
    sessions,
    loading,
  } = useSessions();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return sessions.filter((session) =>
      `${session.user}
       ${session.role}
       ${session.device}
       ${session.browser}
       ${session.ipAddress}
       ${session.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [sessions, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Active Sessions
        </h1>

        <p className="text-muted-foreground">
          Monitor user logins and manage active sessions across the organization.
        </p>
      </div>

      <SessionStats sessions={sessions} />

      <SessionToolbar
        search={search}
        setSearch={setSearch}
      />

      <SessionTable
        sessions={filtered}
      />
    </div>
  );
}