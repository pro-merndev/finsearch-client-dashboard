import FilterLinesIcon from "@/components/icons/filter-lines-icon";
import {
  ActionIcon,
  Box,
  Flex,
  Group,
  Popover,
  Select,
  Table,
  Text,
} from "@mantine/core";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsHorizontal,
  IconArrowsUpDown,
  IconArrowUp,
  IconChevronsLeft,
  IconChevronsRight,
  IconClearAll,
  IconEye,
  IconEyeOff,
  IconGridDots,
} from "@tabler/icons-react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnOrderState,
  type ColumnResizeMode,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table";
import type React from "react";
import { useMemo, useRef, useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { columns } from "./_columns";
import { data } from "./_data";

// Reorderable header component
const DraggableColumnHeader = ({
  header,
  table,
  openPopover,
  closePopover,
  isPopoverOpen,
}: {
  header: any;
  table: any;
  openPopover: (id: string) => void;
  closePopover: () => void;
  isPopoverOpen: boolean;
}) => {
  const { getState, setColumnOrder } = table;
  const { columnOrder } = getState();
  const { column } = header;
  const popoverRef = useRef<HTMLDivElement>(null);

  const [, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn: any) => {
      const newColumnOrder = [...columnOrder];
      const currentIndex = newColumnOrder.indexOf(column.id);
      const draggedIndex = newColumnOrder.indexOf(draggedColumn.id);

      // Remove the dragged column and insert it at the current position
      newColumnOrder.splice(draggedIndex, 1);
      newColumnOrder.splice(currentIndex, 0, draggedColumn.id);

      setColumnOrder(newColumnOrder);
    },
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "column",
    item: () => column,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Handle sorting click
  const handleSortClick = (e: React.MouseEvent) => {
    if (column.getCanSort()) {
      e.stopPropagation(); // Prevent triggering drag when clicking sort
      column.toggleSorting();
    }
  };

  // Handle column visibility
  const toggleColumnVisibility = () => {
    table.setColumnVisibility((prev: any) => ({
      ...prev,
      [column.id]: !column.getIsVisible(),
    }));
    closePopover();
  };

  // Handle column sorting
  const sortColumn = (direction: "asc" | "desc" | false) => {
    column.toggleSorting(direction === "asc", false);
    closePopover();
  };

  // Reset column size
  const resetColumnSize = () => {
    column.resetSize();
    closePopover();
  };

  // Show all columns
  const showAllColumns = () => {
    table.setColumnVisibility({});
    closePopover();
  };

  return (
    <div
      ref={dropRef as any}
      style={{
        opacity: isDragging ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        ref={dragRef as any}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "grab",
        }}
      >
        <div
          onClick={handleSortClick}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: column.getCanSort() ? "pointer" : "default",
          }}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          <div style={{ marginLeft: 4 }}>
            <IconArrowsUpDown
              size={13}
              opacity={column.getIsSorted() ? 1 : 0.5}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <div style={{ cursor: "pointer" }}>
          <IconGridDots size={13} />
        </div>
        <div ref={popoverRef} style={{ cursor: "pointer" }}>
          <Popover
            opened={isPopoverOpen}
            onClose={closePopover}
            position="bottom-end"
            shadow="md"
            width={250}
            withinPortal
          >
            <Popover.Target>
              <div
                onClick={() =>
                  isPopoverOpen ? closePopover() : openPopover(column.id)
                }
              >
                <FilterLinesIcon size={16} />
              </div>
            </Popover.Target>
            <Popover.Dropdown p={0}>
              <div style={{ padding: "8px 0" }}>
                <PopoverButton
                  onClick={() => sortColumn(false)}
                  icon={<IconClearAll size={14} />}
                  text="Clear Sort"
                />
                <PopoverButton
                  onClick={() => sortColumn("asc")}
                  icon={<IconArrowUp size={14} />}
                  text={`Sort by ${column.id} ascending`}
                  isBold={column.getIsSorted() === "asc"}
                />
                <PopoverButton
                  onClick={() => sortColumn("desc")}
                  icon={<IconArrowDown size={14} />}
                  text={`Sort by ${column.id} descending`}
                  isBold={column.getIsSorted() === "desc"}
                />
                <PopoverButton
                  onClick={resetColumnSize}
                  icon={<IconArrowsHorizontal size={14} />}
                  text="Reset column size"
                />
                <PopoverButton
                  onClick={toggleColumnVisibility}
                  icon={<IconEyeOff size={14} />}
                  text={`Hide ${column.id} column`}
                />
                <PopoverButton
                  onClick={showAllColumns}
                  icon={<IconEye size={14} />}
                  text="Show all columns"
                />
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
    </div>
  );
};

const PopoverButton = ({
  onClick,
  icon,
  text,
  isBold,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  text: string;
  isBold?: boolean;
}) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      width: "100%",
      border: "none",
      background: "none",
      cursor: "pointer",
      textAlign: "left",
      fontWeight: isBold ? "bold" : "normal",
      fontSize: "14px",
    }}
  >
    {icon}
    <span>{text}</span>
  </button>
);

// Filter component
// const Filters = ({
//   minAUM,
//   setMinAUM,
//   maxAUM,
//   setMaxAUM,
//   openFullscreenModal,
//   exportData,
// }: {
//   minAUM: number | "";
//   setMinAUM: (value: number | "") => void;
//   maxAUM: number | "";
//   setMaxAUM: (value: number | "") => void;
//   openFullscreenModal: () => void;
//   exportData: (format: "csv" | "excel" | "pdf") => void;
// }) => {
//   const resetMinAUM = () => setMinAUM("");
//   const resetMaxAUM = () => setMaxAUM("");

//   return (
//     <Flex gap="md" mb="md" wrap="wrap">
//       <Box style={{ position: "relative", width: 220 }}>
//         <NumberInput
//           value={minAUM}
//           onChange={(value) => setMinAUM(value as number)}
//           label="Min Total AUM (In Millions)"
//           placeholder="Min AUM"
//           rightSection={
//             minAUM !== "" && (
//               <ActionIcon onClick={resetMinAUM} variant="transparent">
//                 <IconX size={16} />
//               </ActionIcon>
//             )
//           }
//         />
//       </Box>

//       <Box style={{ position: "relative", width: 220 }}>
//         <NumberInput
//           value={maxAUM}
//           onChange={(value) => setMaxAUM(value as number)}
//           label="Max Total AUM (In Millions)"
//           placeholder="Max AUM"
//           rightSection={
//             maxAUM !== "" && (
//               <ActionIcon onClick={resetMaxAUM} variant="transparent">
//                 <IconX size={16} />
//               </ActionIcon>
//             )
//           }
//         />
//       </Box>

//       <Box style={{ flex: 1 }} />

//       {/* Table actions */}
//       <Group>
//         <ActionIcon variant="light" onClick={openFullscreenModal}>
//           <IconArrowsMaximize size={20} />
//         </ActionIcon>

//         <ActionIcon variant="light">
//           <IconTable size={20} />
//         </ActionIcon>

//         <ActionIcon variant="light">
//           <IconFilter size={20} />
//         </ActionIcon>

//         <Menu position="bottom-end" shadow="md">
//           <Menu.Target>
//             <Button variant="light">
//               Export <IconChevronDown size={16} />
//             </Button>
//           </Menu.Target>
//           <Menu.Dropdown>
//             <Menu.Item onClick={() => exportData("csv")}>
//               Export as CSV
//             </Menu.Item>
//             <Menu.Item onClick={() => exportData("excel")}>
//               Export as Excel
//             </Menu.Item>
//             <Menu.Item onClick={() => exportData("pdf")}>
//               Export as PDF
//             </Menu.Item>
//           </Menu.Dropdown>
//         </Menu>
//       </Group>
//     </Flex>
//   );
// };

// Pagination component
const Pagination = ({ table }: { table: any }) => {
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

// Main DataTable component
export function FirmSearchTable() {
  // State
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [minAUM] = useState<number | "">(200);
  const [maxAUM] = useState<number | "">(500);
  const [globalFilter, setGlobalFilter] = useState("");
  // const [rowsPerPage, setRowsPerPage] = useState("25");
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  // Define columns

  // Initialize column order if not set
  if (columnOrder.length === 0) {
    setColumnOrder(columns.map((column) => (column as any).id));
  }

  // Filter data based on AUM range
  const filteredData = useMemo(() => {
    return data.filter((person) => {
      const minCondition = minAUM === "" || person.totalAUM >= minAUM;
      const maxCondition = maxAUM === "" || person.totalAUM <= maxAUM;
      return minCondition && maxCondition;
    });
  }, [data, minAUM, maxAUM]);

  // Create table instance
  const table = useReactTable({
    data: filteredData,
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

  // Export data function
  // const exportData = (format: "csv" | "excel" | "pdf") => {
  //   // In a real app, you would implement proper export functionality
  //   // This is a simplified example
  //   const exportFormats = {
  //     csv: "text/csv",
  //     excel:
  //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     pdf: "application/pdf",
  //   };

  //   notifications.show({
  //     title: "Export Started",
  //     message: `Exporting data as ${format.toUpperCase()}...`,
  //     color: "blue",
  //   });

  //   // Simulate export delay
  //   setTimeout(() => {
  //     notifications.show({
  //       title: "Export Complete",
  //       message: `Data has been exported as ${format.toUpperCase()}`,
  //       color: "green",
  //     });
  //   }, 1500);
  // };

  // Show fullscreen modal
  // const openFullscreenModal = () => {
  //   modals.open({
  //     title: "Client AUM Dashboard",
  //     size: "xl",
  //     fullScreen: true,
  //     children: (
  //       <Box p="md">
  //         <FirmSearchTable />
  //       </Box>
  //     ),
  //   });
  // };

  // Open popover
  const openPopover = (id: string) => {
    setOpenPopoverId(id);
  };

  // Close popover
  const closePopover = () => {
    setOpenPopoverId(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        {/* <Filters
          minAUM={minAUM}
          setMinAUM={setMinAUM}
          maxAUM={maxAUM}
          setMaxAUM={setMaxAUM}
          openFullscreenModal={openFullscreenModal}
          exportData={exportData}
        /> */}

        {/* Table */}
        <Box
          style={{
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            overflow: "auto",
            width: "100%",
          }}
        >
          <Table
            striped
            highlightOnHover
            withColumnBorders
            style={{
              width: "100%",
              borderCollapse: "separate",
              bordergap: 0,
              borderTop: "20px",
            }}
            sx={{
              "th, td": {
                borderRight: "1px solid #dee2e6",
                borderLeft: "1px solid #dee2e6",
              },
              "th:first-of-type, td:first-of-type": {
                borderLeft: "1px solid #dee2e6",
              },
              "th:last-of-type, td:last-of-type": {
                borderRight: "1px solid #dee2e6",
              },
            }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        position: "relative",
                        width: header.getSize(),
                        userSelect: "none",
                        padding: "12px 16px",
                        backgroundColor: "#f1f3f5",
                        borderBottom: "1px solid #dee2e6",
                      }}
                    >
                      <DraggableColumnHeader
                        header={header}
                        table={table}
                        openPopover={openPopover}
                        closePopover={closePopover}
                        isPopoverOpen={openPopoverId === header.column.id}
                      />

                      {/* Resizer */}
                      {header.column.getCanResize() && (
                        <div
                          className={`resizer ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            height: "100%",
                            width: "5px",
                            background: header.column.getIsResizing()
                              ? "#2196f3"
                              : "transparent",
                            cursor: "col-resize",
                            zIndex: 1,
                            touchAction: "none",
                          }}
                        />
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{
                        padding: "12px 16px",
                        borderBottom: "1px solid #dee2e6",
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>

        <Pagination table={table} />
      </Box>
    </DndProvider>
  );
}
