"use client";

import { useMemo, useState } from "react";

import AllotmentStats from "@/features/allotments/components/allotment-stats";
import AllotmentTable from "@/features/allotments/components/allotment-table";
import AllotmentToolbar from "@/features/allotments/components/allotment-toolbar";

import { useAllotments } from "@/features/allotments/hooks/use-allotments";

export default function AllotmentsPage() {
  const {
    allotments,
    loading,
  } = useAllotments();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return allotments.filter((item) =>
      `${item.employee}
       ${item.item}
       ${item.store}
       ${item.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [allotments, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Allotments
        </h1>

        <p className="text-muted-foreground">
          Track company assets assigned to employees.
        </p>
      </div>

      <AllotmentStats
        allotments={allotments}
      />

      <AllotmentToolbar
        search={search}
        setSearch={setSearch}
      />

      <AllotmentTable
        allotments={filtered}
      />
    </div>
  );
}