import { Box, Table } from "@mantine/core";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DraggableColumnHeader } from "./_components/draggable-column-header";
import { Pagination } from "./_components/pagination";

export function FirmSearchTable({ table }: { table: any }) {
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);

  const openPopover = (id: string) => {
    setOpenPopoverId(id);
  };

  const closePopover = () => {
    setOpenPopoverId(null);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
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
              {table.getHeaderGroups().map((headerGroup: any) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header: any) => (
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
              {table.getRowModel().rows.map((row: any) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell: any) => (
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
