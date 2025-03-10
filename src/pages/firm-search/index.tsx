import { Box, Flex, Text } from "@mantine/core";
import {
  ColumnOrderState,
  ColumnResizeMode,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { FirmSearchTable } from "./table";
import { columns } from "./table/_components/columns";
import { data } from "./table/_data";
import Toolbar from "./toolbar";

const FirmSearch = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [globalFilter, setGlobalFilter] = useState("");

  if (columnOrder.length === 0) {
    setColumnOrder(columns.map((column) => (column as any).id));
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnOrder,
      globalFilter,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    columnResizeMode,
    enableHiding: true,
  });
  return (
    <main>
      <Flex direction={{ base: "row" }} justify={"space-between"} mb={20}>
        <Text size="xl" fw={"bolder"}>
          Firm Search
        </Text>
        <Text size="lg" c={"#495057"}>
          <Text span c={"#155F98"}>
            14,890
          </Text>{" "}
          Results
        </Text>
      </Flex>
      <Flex direction={{ base: "row" }} gap={{ base: "lg" }}>
        <Sidebar />
        <Box bg={"#fff"} style={{ borderRadius: "5px" }} p={20} w={"100%"}>
          <Toolbar table={table} />
          <Box style={{ borderRadius: "20px" }}>
            <FirmSearchTable table={table} />
          </Box>
        </Box>
      </Flex>
    </main>
  );
};

export default FirmSearch;
