"use client";

import { useMemo, useState } from "react";

import { ArchiveCard } from "@/components/archive/archive-card";
import { ArchivePagination } from "@/components/archive/archive-pagination";
import { ContributeCard } from "@/components/archive/contribute-card";
import { FilterBar } from "@/components/archive/filter-bar";
import { ARCHIVE_ITEMS, type ArchiveCategory } from "@/lib/constants";

export function ArchiveGrid() {
  const [category, setCategory] = useState<ArchiveCategory>("All Records");

  const filteredItems = useMemo(() => {
    if (category === "All Records") return ARCHIVE_ITEMS;
    return ARCHIVE_ITEMS.filter((item) => item.category === category);
  }, [category]);

  return (
    <>
      <FilterBar onCategoryChange={setCategory} />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <ArchiveCard key={item.id} item={item} />
        ))}
        <ContributeCard />
      </div>

      <ArchivePagination />
    </>
  );
}
