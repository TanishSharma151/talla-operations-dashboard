"use client";

import { useMemo, useState } from "react";

import RequestStats from "@/features/requests/components/request-stats";
import RequestToolbar from "@/features/requests/components/request-toolbar";
import RequestTable from "@/features/requests/components/request-table";

import { useRequests } from "@/features/requests/hooks/use-requests";

export default function RequestsPage() {
  const {
    requests,
    loading,
  } = useRequests();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return requests.filter((request) =>
      `${request.requestNumber}
       ${request.branch}
       ${request.requestedBy}
       ${request.status}
       ${request.items
         .map((item) => item.inventoryItem)
         .join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [requests, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Inventory Requests
        </h1>

        <p className="text-muted-foreground">
          Review, approve and track branch inventory requests.
        </p>
      </div>

      <RequestStats
        requests={requests}
      />

      <RequestToolbar
        search={search}
        setSearch={setSearch}
      />

      <RequestTable
        requests={filtered}
      />
    </div>
  );
}