import { Text } from "@mantine/core";
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table";

const columnHelper = createColumnHelper<any>();

export const columns: ColumnDef<any>[] = [
  columnHelper.accessor("firstName", {
    header: () => (
      <Text sx={{ fontSize: "14px" }} fw={600}>
        First Name
      </Text>
    ),
    cell: (info) => info.getValue() || "John",
    enableSorting: true,
    footer: (info) => info.column.id,
    enableHiding: true,
    minSize: 200,
    size: 200
  }),
  columnHelper.accessor("location", {
    header: () => (
      <Text sx={{ fontSize: "14px" }} fw={600}>
        Location
      </Text>
    ),
    cell: (info) => info.getValue() || "New York",
    enableSorting: true,
    footer: (info) => info.column.id,
    enableHiding: true,
    minSize: 200,
    size: 200
  }),
  columnHelper.accessor("totalAUM", {
    header: () => (
      <Text sx={{ fontSize: "14px" }} fw={600}>
        Total AUM (Millions)
      </Text>
    ),
    cell: (info) => `$${info.getValue() || 100}M`,
    enableSorting: true,
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number;
      const [min, max] = filterValue as [number, number];
      return value >= min && value <= max;
    },
    enableHiding: true,
    minSize: 200,
    size: 200
  }),
  columnHelper.accessor("individualAUM", {
    header: () => (
      <Text sx={{ fontSize: "14px" }} fw={600}>
        Individual AUM (Millions)
      </Text>
    ),
    cell: (info) => `$${info.getValue() || 50}M`,
    enableSorting: true,
    enableHiding: true,
    minSize: 200,
    size: 200
  }),
];
