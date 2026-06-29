"use client";

import { useMemo, useState } from "react";

import ConsumableStats from "@/features/consumables/components/consumable-stats";
import ConsumableTable from "@/features/consumables/components/consumable-table";
import ConsumableToolbar from "@/features/consumables/components/consumable-toolbar";

import { useConsumables } from "@/features/consumables/hooks/use-consumables";

export default function ConsumablesPage() {
  const {
    consumables,
    loading,
  } = useConsumables();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return consumables.filter((item) =>
      `${item.name}
       ${item.category}
       ${item.store}
       ${item.supplier}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [consumables, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold">
          Consumables
        </h1>

        <p className="text-muted-foreground">
          Manage pantry, office and housekeeping supplies.
        </p>
      </div>

      <ConsumableStats
        consumables={consumables}
      />

      <ConsumableToolbar
        search={search}
        setSearch={setSearch}
      />

      <ConsumableTable
        consumables={filtered}
      />
    </div>
  );
}