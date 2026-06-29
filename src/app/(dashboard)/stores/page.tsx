"use client";

import { useMemo, useState } from "react";

import StoreStats from "@/features/stores/components/store-stats";
import StoreTable from "@/features/stores/components/store-table";
import StoreToolbar from "@/features/stores/components/store-toolbar";

import { useStores } from "@/features/stores/hooks/use-stores";

export default function StoresPage() {
  const {
    stores,
    stats,
    loading,
  } = useStores();

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return stores.filter((store) =>
      `${store.name}
       ${store.code}
       ${store.manager}
       ${store.phone}
       ${store.email}
       ${store.address}
       ${store.status}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [stores, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-[#4A0E2E]">
          Branches
        </h1>

        <p className="text-muted-foreground">
          Manage all jewellery branches, managers,
          operating hours and branch status.
        </p>
      </div>

      <StoreStats
        stats={stats}
      />

      <StoreToolbar
        search={search}
        setSearch={setSearch}
      />

      <StoreTable
        stores={filtered}
      />
    </div>
  );
}