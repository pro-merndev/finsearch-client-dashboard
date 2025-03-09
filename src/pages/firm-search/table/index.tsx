import type React from "react"

import { useState, useMemo, useRef } from "react"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  useReactTable,
  type SortingState,
  type ColumnResizeMode,
  type ColumnOrderState,
  type ColumnDef,
  type VisibilityState,
} from "@tanstack/react-table"
import { DndProvider, useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Select, Button, Group, Box, Table, Text, ActionIcon, Menu, NumberInput, Flex, Popover } from "@mantine/core"
import {
  IconArrowsMaximize,
  IconTable,
  IconFilter,
  IconChevronDown,
  IconArrowLeft,
  IconArrowRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDownload,
  IconX,
  IconArrowsUpDown,
  IconDots,
  IconAdjustmentsHorizontal,
  IconArrowUp,
  IconArrowDown,
  IconArrowsHorizontal,
  IconEyeOff,
  IconEye,
  IconClearAll,
} from "@tabler/icons-react"
import { modals } from "@mantine/modals"
import { notifications } from "@mantine/notifications"
import { useDisclosure } from "@mantine/hooks"

// Define the data type
interface Person {
  id: string
  firstName: string
  location: string
  totalAUM: number
  individualAUM: number
}

// Sample data
const data: Person[] = [
  { id: "1", firstName: "Roberta Roberts", location: "Saint Louis, MO", totalAUM: 489, individualAUM: 450 },
  { id: "2", firstName: "Elmer Spencer", location: "Saint Louis, MO", totalAUM: 532, individualAUM: 780 },
  { id: "3", firstName: "Marta McKenzie", location: "Saint Louis, MO", totalAUM: 415, individualAUM: 320 },
  { id: "4", firstName: "Roman Terry", location: "865 E Market Street", totalAUM: 678, individualAUM: 590 },
  { id: "5", firstName: "Sheri Raynor", location: "1366 Bartholome Haven", totalAUM: 250, individualAUM: 210 },
  { id: "6", firstName: "Hugh Corkery", location: "3273 Charles Street", totalAUM: 390, individualAUM: 850 },
  { id: "7", firstName: "Dolores Harvey", location: "463 Orchard Road", totalAUM: 512, individualAUM: 670 },
  // Generate more data for pagination demo
  ...Array.from({ length: 3232 }, (_, i) => ({
    id: `${i + 8}`,
    firstName: `Person ${i + 8}`,
    location: `Location ${i % 10}`,
    totalAUM: Math.floor(Math.random() * 800) + 200,
    individualAUM: Math.floor(Math.random() * 800) + 200,
  })),
]

// Column helper
const columnHelper = createColumnHelper<Person>()

// Reorderable header component
const DraggableColumnHeader = ({
  header,
  table,
}: {
  header: any
  table: any
}) => {
  const { getState, setColumnOrder } = table
  const { columnOrder } = getState()
  const { column } = header
  const [opened, { open, close }] = useDisclosure(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  const [, dropRef] = useDrop({
    accept: "column",
    drop: (draggedColumn: any) => {
      const newColumnOrder = [...columnOrder]
      const currentIndex = newColumnOrder.indexOf(column.id)
      const draggedIndex = newColumnOrder.indexOf(draggedColumn.id)

      // Remove the dragged column and insert it at the current position
      newColumnOrder.splice(draggedIndex, 1)
      newColumnOrder.splice(currentIndex, 0, draggedColumn.id)

      setColumnOrder(newColumnOrder)
    },
  })

  const [{ isDragging }, dragRef] = useDrag({
    type: "column",
    item: () => column,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  // Handle sorting click
  const handleSortClick = (e: React.MouseEvent) => {
    if (column.getCanSort()) {
      e.stopPropagation() // Prevent triggering drag when clicking sort
      column.toggleSorting()
    }
  }

  // Handle column visibility
  const toggleColumnVisibility = () => {
    table.toggleColumnVisibility(column.id, !column.getIsVisible())
    close()
  }

  // Handle column sorting
  const sortColumn = (direction: "asc" | "desc" | false) => {
    column.toggleSorting(direction === "asc", false)
    close()
  }

  // Reset column size
  const resetColumnSize = () => {
    column.resetSize()
    close()
  }

  // Show all columns
  const showAllColumns = () => {
    table.setColumnVisibility({})
    close()
  }

  return (
    <div
      ref={dropRef}
      style={{
        opacity: isDragging ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        ref={dragRef}
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
            <IconArrowsUpDown size={16} opacity={column.getIsSorted() ? 1 : 0.5} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        <div style={{ cursor: "pointer" }}>
          <IconDots size={16} style={{ opacity: 0.5 }} />
        </div>
        <div ref={popoverRef} style={{ cursor: "pointer" }}>
          <Popover opened={opened} onClose={close} position="bottom-end" shadow="md" width={250} withinPortal>
            <Popover.Target>
              <div onClick={open}>
                <IconAdjustmentsHorizontal size={16} style={{ opacity: 0.5 }} />
              </div>
            </Popover.Target>
            <Popover.Dropdown p={0}>
              <div style={{ padding: "8px 0" }}>
                <button
                  onClick={() => sortColumn(false)}
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
                    color: "#868e96",
                    opacity: column.getIsSorted() ? 1 : 0.6,
                  }}
                >
                  <IconClearAll size={16} />
                  <span>Clear Sort</span>
                </button>

                <button
                  onClick={() => sortColumn("asc")}
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
                    fontWeight: column.getIsSorted() === "asc" ? "bold" : "normal",
                  }}
                >
                  <IconArrowUp size={16} />
                  <span>Sort by {column.id} ascending</span>
                </button>

                <button
                  onClick={() => sortColumn("desc")}
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
                    fontWeight: column.getIsSorted() === "desc" ? "bold" : "normal",
                  }}
                >
                  <IconArrowDown size={16} />
                  <span>Sort by {column.id} Decending</span>
                </button>

                <button
                  onClick={resetColumnSize}
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
                    color: "#868e96",
                  }}
                >
                  <IconArrowsHorizontal size={16} />
                  <span>Reset column size</span>
                </button>

                <button
                  onClick={toggleColumnVisibility}
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
                  }}
                >
                  <IconEyeOff size={16} />
                  <span>Hide {column.id} column</span>
                </button>

                <button
                  onClick={showAllColumns}
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
                  }}
                >
                  <IconEye size={16} />
                  <span>Show all column</span>
                </button>
              </div>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
    </div>
  )
}

// Main DataTable component
export function FirmSearchTable() {
  // State
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange")
  const [minAUM, setMinAUM] = useState<number | "">(200)
  const [maxAUM, setMaxAUM] = useState<number | "">(500)
  const [globalFilter, setGlobalFilter] = useState("")
  const [rowsPerPage, setRowsPerPage] = useState("25")

  // Define columns
  const columns = useMemo<ColumnDef<Person>[]>(
    () => [
      columnHelper.accessor("firstName", {
        header: ({ column }) => <Text fw={600}>First Name</Text>,
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor("location", {
        header: ({ column }) => <Text fw={600}>Location</Text>,
        cell: (info) => info.getValue(),
        enableSorting: true,
      }),
      columnHelper.accessor("totalAUM", {
        header: ({ column }) => <Text fw={600}>Total AUM (Millions)</Text>,
        cell: (info) => `$${info.getValue()}M`,
        enableSorting: true,
        filterFn: (row, columnId, filterValue) => {
          const value = row.getValue(columnId) as number
          const [min, max] = filterValue as [number, number]
          return value >= min && value <= max
        },
      }),
      columnHelper.accessor("individualAUM", {
        header: ({ column }) => <Text fw={600}>Individual AUM (Millions)</Text>,
        cell: (info) => `$${info.getValue()}M`,
        enableSorting: true,
      }),
    ],
    [],
  )

  // Initialize column order if not set
  if (columnOrder.length === 0) {
    setColumnOrder(columns.map((column) => (column as any).id))
  }

  // Filter data based on AUM range
  const filteredData = useMemo(() => {
    return data.filter((person) => {
      const minCondition = minAUM === "" || person.totalAUM >= minAUM
      const maxCondition = maxAUM === "" || person.totalAUM <= maxAUM
      return minCondition && maxCondition
    })
  }, [data, minAUM, maxAUM])

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
  })

  // Update rows per page
  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(value)
    table.setPageSize(Number(value))
  }

  // Export data function
  const exportData = (format: "csv" | "excel" | "pdf") => {
    // In a real app, you would implement proper export functionality
    // This is a simplified example
    const exportFormats = {
      csv: "text/csv",
      excel: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      pdf: "application/pdf",
    }

    notifications.show({
      title: "Export Started",
      message: `Exporting data as ${format.toUpperCase()}...`,
      color: "blue",
    })

    // Simulate export delay
    setTimeout(() => {
      notifications.show({
        title: "Export Complete",
        message: `Data has been exported as ${format.toUpperCase()}`,
        color: "green",
      })
    }, 1500)
  }

  // Show fullscreen modal
  const openFullscreenModal = () => {
    modals.open({
      title: "Client AUM Dashboard",
      size: "xl",
      fullScreen: true,
      children: (
        <Box p="md">
          <DataTable />
        </Box>
      ),
    })
  }

  // Reset AUM filters
  const resetMinAUM = () => setMinAUM("")
  const resetMaxAUM = () => setMaxAUM("")

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        {/* Filters */}
        <Flex gap="md" mb="md" wrap="wrap">
          <Box style={{ position: "relative", width: 220 }}>
            <NumberInput
              value={minAUM}
              onChange={setMinAUM}
              label="Min Total AUM (In Millions)"
              placeholder="Min AUM"
              rightSection={
                minAUM !== "" && (
                  <ActionIcon onClick={resetMinAUM} variant="transparent">
                    <IconX size={16} />
                  </ActionIcon>
                )
              }
            />
          </Box>

          <Box style={{ position: "relative", width: 220 }}>
            <NumberInput
              value={maxAUM}
              onChange={setMaxAUM}
              label="Max Total AUM (In Millions)"
              placeholder="Max AUM"
              rightSection={
                maxAUM !== "" && (
                  <ActionIcon onClick={resetMaxAUM} variant="transparent">
                    <IconX size={16} />
                  </ActionIcon>
                )
              }
            />
          </Box>

          <Box style={{ flex: 1 }} />

          {/* Table actions */}
          <Group>
            <ActionIcon variant="light" onClick={openFullscreenModal}>
              <IconArrowsMaximize size={20} />
            </ActionIcon>

            <ActionIcon variant="light">
              <IconTable size={20} />
            </ActionIcon>

            <ActionIcon variant="light">
              <IconFilter size={20} />
            </ActionIcon>

            <Menu position="bottom-end" shadow="md">
              <Menu.Target>
                <Button variant="light" rightIcon={<IconChevronDown size={16} />}>
                  Export
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item icon={<IconDownload size={16} />} onClick={() => exportData("csv")}>
                  Export as CSV
                </Menu.Item>
                <Menu.Item icon={<IconDownload size={16} />} onClick={() => exportData("excel")}>
                  Export as Excel
                </Menu.Item>
                <Menu.Item icon={<IconDownload size={16} />} onClick={() => exportData("pdf")}>
                  Export as PDF
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Flex>

        {/* Table */}
        <Box style={{ overflow: "auto", width: "100%" }}>
          <Table
            striped
            highlightOnHover
            withBorder
            withColumnBorders
            style={{
              width: "100%",
              borderCollapse: "separate",
              bordergap: 0,
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
                      <DraggableColumnHeader header={header} table={table} />

                      {/* Resizer */}
                      {header.column.getCanResize() && (
                        <div
                          className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""}`}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                          style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            height: "100%",
                            width: "5px",
                            background: header.column.getIsResizing() ? "#2196f3" : "transparent",
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>

        {/* Pagination */}
        <Flex justify="space-between" align="center" mt="md">
          <Group gap="xs">
            <Text size="sm">Rows Per Page</Text>
            <Select
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
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
            <ActionIcon onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
              <IconChevronsLeft size={16} />
            </ActionIcon>
            <ActionIcon onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              <IconArrowLeft size={16} />
            </ActionIcon>

            <Text size="sm">
              {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}-
              {Math.min(
                (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                table.getFilteredRowModel().rows.length,
              )}{" "}
              of {table.getFilteredRowModel().rows.length}
            </Text>

            <ActionIcon onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              <IconArrowRight size={16} />
            </ActionIcon>
            <ActionIcon onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
              <IconChevronsRight size={16} />
            </ActionIcon>
          </Group>
        </Flex>

        <style jsx global>{`
          .resizer {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 5px;
            background: rgba(0, 0, 0, 0.1);
            cursor: col-resize;
            user-select: none;
            touch-action: none;
          }

          .resizer.isResizing {
            background: rgba(33, 150, 243, 0.5);
            opacity: 1;
          }

          @media (hover: hover) {
            .resizer {
              opacity: 0;
            }

            *:hover > .resizer {
              opacity: 1;
            }
          }
        `}</style>
      </Box>
    </DndProvider>
  )
}

