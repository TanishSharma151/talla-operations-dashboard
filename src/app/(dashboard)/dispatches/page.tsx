"use client";

import { useMemo, useState } from "react";

import DispatchStats from "@/features/dispatches/components/dispatch-stats";
import DispatchToolbar from "@/features/dispatches/components/dispatch-toolbar";
import DispatchTable from "@/features/dispatches/components/dispatch-table";

import { useDispatches } from "@/features/dispatches/hooks/use-dispatches";

export default function DispatchesPage() {
  const {
    dispatches,
    loading,
  } = useDispatches();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return dispatches.filter((dispatch) =>
      `${dispatch.dispatchNumber}
       ${dispatch.requestNumber}
       ${dispatch.branch}
       ${dispatch.preparedBy}
       ${dispatch.courier}
       ${dispatch.trackingNumber}
       ${dispatch.status}
       ${dispatch.items
         .map((item) => item.inventoryItem)
         .join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [dispatches, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Dispatches
        </h1>

        <p className="text-muted-foreground">
          Track inventory dispatches from Head Office to branch locations.
        </p>
      </div>

      <DispatchStats
        dispatches={dispatches}
      />

      <DispatchToolbar
        search={search}
        setSearch={setSearch}
      />

      <DispatchTable
        dispatches={filtered}
      />
    </div>
  );
}