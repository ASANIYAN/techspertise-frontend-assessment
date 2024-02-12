import { useState } from "react";
import Image from "next/image";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";

import SearchTab from "../search/SearchTab";
import Search from "../search/Search";

import filter_icon from "../../../public/assets/icons/filter_icon.svg";

import "./table.css";

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T, string>[];
  click?: (...args: any[]) => void;
}

const Table = <T extends object>({ data, columns, click }: TableProps<T>) => {
  // const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const fuzzyFilter = (
    row: { getValue: (arg0: any) => any },
    columnId: any,
    value: string,
    addMeta: (arg0: { itemRank: RankingInfo }) => void
  ) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      // columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    // onColumnFiltersChange: setColumnFilters,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <section>
      <section className="py-4 px-4 flex flex-wrap justify-center lg:justify-between space-y-3 lg:space-y-0">
        <SearchTab setGlobalFilter={setGlobalFilter} />
        <section className="flex gap-2.5 flex-wrap justify-center space-x-3 space-y-3 xs:space-y-0 items-center h-fit">
          <Search
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
          <section className="shadow-xs py-2.5 px-4 rounded-lg border border-gray-300 bg-white flex items-center gap-1 md:cursor-pointer">
            <Image
              src={filter_icon}
              className=""
              height={10}
              width={15}
              alt="filter_icon"
            />
            <span className="font-medium text-gray-700 text-sm"> Filters </span>
          </section>
        </section>
      </section>
      <section className="table-container w-screen shadow-sm">
        <table className="">
          <thead className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="table-head-row">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {click ? (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  onClick={(event) => click(event, row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>
    </section>
  );
};

export default Table;
