"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get("capacity") ?? "all";

  const router = useRouter();
  const pathName = usePathname();

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex flex-wrap">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        <span className="hidden sm:inline">1&mdash;3 guests</span>
        <span className="sm:hidden">1-3</span>
      </Button>

      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        <span className="hidden sm:inline">4&mdash;7 guests</span>
        <span className="sm:hidden">4-7</span>
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        <span className="hidden sm:inline">8&mdash;12 guests</span>
        <span className="sm:hidden">8-12</span>
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-3 sm:px-5 py-2 hover:bg-primary-800 transition-colors text-sm sm:text-base flex-1 sm:flex-initial whitespace-nowrap ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
