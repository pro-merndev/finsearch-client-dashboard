import { Stack } from "@mantine/core";
import { IconChevronUp, IconSelector } from "@tabler/icons-react";
import sortBy from "lodash/sortBy";
import {
  DataTable,
  DataTableSortStatus,
  useDataTableColumns,
} from "mantine-datatable";
import { useEffect, useState } from "react";
import { columns } from "./_columns";
import { tableRecords, TableRecordsType } from "./_data";
const PAGE_SIZES = [5, 10, 15];


export function FirmSearchTable() {

  const key = "draggable-example";
  const [sortStatus, setSortStatus] = useState<
    DataTableSortStatus<TableRecordsType>
  >({
    columnAccessor: "name",
    direction: "asc",
  });

  const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  const [page, setPage] = useState(1);
  const [records, setRecords] = useState(sortBy(tableRecords, "name").slice(0, pageSize));

  useEffect(() => {
    const from = (page - 1) * pageSize;
    const to = from + pageSize;
    setRecords(tableRecords.slice(from, to));
  }, [page, pageSize]);

  // const [records, setRecords] = useState(sortBy(tableRecords, "name"));
  const [withTableBorder, setWithTableBorder] = useState<boolean>(true);
  const [withColumnBorders, setWithColumnBorders] = useState<boolean>(true);

  useEffect(() => {
    const data = sortBy(
      tableRecords,
      sortStatus.columnAccessor
    ) as TableRecordsType[];
    setRecords(sortStatus.direction === "desc" ? data.reverse() : data);
  }, [sortStatus]);


  const { effectiveColumns, resetColumnsOrder, resetColumnsWidth } =
    useDataTableColumns<TableRecordsType>({
      key,
      columns: columns,
    });

  return (
    <Stack>
      <DataTable
        style={{
          border: "1px solid #DEE2E6",
          borderRadius: "5px",
        }}
        styles={{
          header: {
            backgroundColor: "#F1F3F5",
            borderRadius: "5px",
          },
        }}
        withTableBorder={withTableBorder}
        withColumnBorders={withColumnBorders}
        borderRadius="lg"
        striped
        highlightOnHover
        records={records}
        storeColumnsKey={key}
        columns={effectiveColumns}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        sortIcons={{
          sorted: <IconChevronUp size={14} />,
          unsorted: <IconSelector size={14} />,
        }}
        totalRecords={tableRecords.length}
        paginationActiveBackgroundColor="grape"
        recordsPerPage={pageSize}
        page={page}
        onPageChange={(p) => setPage(p)}
        recordsPerPageOptions={PAGE_SIZES}
        onRecordsPerPageChange={setPageSize}
      />
    </Stack>
  );
}
