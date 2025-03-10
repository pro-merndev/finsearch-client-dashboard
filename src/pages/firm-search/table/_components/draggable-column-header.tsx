import FilterLinesIcon from "@/components/icons/filter-lines-icon";
import { Popover } from "@mantine/core";
import {
  IconArrowDown,
  IconArrowsHorizontal,
  IconArrowsUpDown,
  IconArrowUp,
  IconClearAll,
  IconEye,
  IconEyeOff,
  IconGridDots,
} from "@tabler/icons-react";
import { flexRender } from "@tanstack/react-table";
import type React from "react";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DraggablePopoverButton } from "./draggable-popover-button";

export const DraggableColumnHeader = ({
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

  const [{ isDragging }, dragRef, dragPreviewRef] = useDrag({
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
        ref={dragPreviewRef as any}
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
        <div
          ref={dragRef as any}
          style={{
            cursor: "grab",
            opacity: isDragging ? 0.5 : 1,
          }}
        >
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
                <DraggablePopoverButton
                  onClick={() => sortColumn(false)}
                  icon={<IconClearAll size={14} />}
                  text="Clear Sort"
                />
                <DraggablePopoverButton
                  onClick={() => sortColumn("asc")}
                  icon={<IconArrowUp size={14} />}
                  text={`Sort by ${column.id} ascending`}
                  isBold={column.getIsSorted() === "asc"}
                />
                <DraggablePopoverButton
                  onClick={() => sortColumn("desc")}
                  icon={<IconArrowDown size={14} />}
                  text={`Sort by ${column.id} descending`}
                  isBold={column.getIsSorted() === "desc"}
                />
                <DraggablePopoverButton
                  onClick={resetColumnSize}
                  icon={<IconArrowsHorizontal size={14} />}
                  text="Reset column size"
                />
                <DraggablePopoverButton
                  onClick={toggleColumnVisibility}
                  icon={<IconEyeOff size={14} />}
                  text={`Hide ${column.id} column`}
                />
                <DraggablePopoverButton
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
