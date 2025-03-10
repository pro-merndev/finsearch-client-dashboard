import { ActionIcon, Flex, Group, Select, Text } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

export const Pagination = ({ table }: { table: any }) => {
  const handleRowsPerPageChange = (value: string) => {
    table.setPageSize(Number(value));
  };

  return (
    <Flex justify="center" align="center" mt="md" gap={10}>
      <Group gap="xs">
        <Text size="sm">Rows Per Page</Text>
        <Select
          value={table.getState().pagination.pageSize.toString()}
          onChange={(value) => handleRowsPerPageChange(value ?? "")}
          data={[
            { value: "10", label: "10" },
            { value: "25", label: "25" },
            { value: "50", label: "50" },
            { value: "100", label: "100" },
          ]}
          style={{ width: 70 }}
        />
      </Group>

      <Group>
        <ActionIcon
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          variant="default"
        >
          <IconChevronsLeft size={16} />
        </ActionIcon>
        <ActionIcon
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          variant="default"
        >
          <IconArrowLeft size={16} />
        </ActionIcon>

        <Text size="sm">
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}
          -
          {Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}{" "}
          of {table.getFilteredRowModel().rows.length}
        </Text>

        <ActionIcon
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          variant="default"
        >
          <IconArrowRight size={16} />
        </ActionIcon>
        <ActionIcon
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          variant="default"
        >
          <IconChevronsRight size={16} />
        </ActionIcon>
      </Group>
    </Flex>
  );
};
