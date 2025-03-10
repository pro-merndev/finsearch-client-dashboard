import { ActionIcon, Box, Button, Group, Menu, TextInput } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconChevronDown,
  IconFilter,
  IconPlayerPause,
  IconX,
} from "@tabler/icons-react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const Toolbar = ({ table }: { table: any }) => {
  // Handle clearing min AUM filter
  const clearMinAUM = () => {
    table.getColumn("totalAUM")?.setFilterValue((old: any) => ({
      ...old,
      min: "",
    }));
  };

  // Handle clearing max AUM filter
  const clearMaxAUM = () => {
    table.getColumn("totalAUM")?.setFilterValue((old: any) => ({
      ...old,
      max: "",
    }));
  };

  const exportData = (format: "csv" | "excel" | "pdf") => {
    const data = table.getRowModel().rows.map((row: any) => row.original);

    if (!data || data.length === 0) {
      console.error("No data available to export.");
      return;
    }

    if (format === "csv") {
      const headers = Object.keys(data[0]).join(",") + "\n";
      const csvContent =
        headers +
        data
          .map((row: any) =>
            Object.values(row)
              .map((value: any) =>
                typeof value === "object" ? JSON.stringify(value) : value
              )
              .join(",")
          )
          .join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "data.csv");
    } else if (format === "excel") {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "data.xlsx");
    } else if (format === "pdf") {
      const doc = new jsPDF();
      const headers = Object.keys(data[0]);
      const rows = data.map((row: any) =>
        headers.map((header) => row[header] ?? "")
      );
      autoTable(doc, { html: "#my-table" });
      autoTable(doc, {
        head: [headers],
        body: [rows],
      });
      doc.save("data.pdf");
    }
  };

  return (
    <div>
      <Group mb="md" align="flex-start">
        <Box style={{ width: "250px" }}>
          <TextInput
            readOnly
            value={
              (
                table.getColumn("totalAUM")?.getFilterValue() as {
                  min?: string;
                }
              )?.min || { min: "500" }
                ? `Min Total AUM (In Millions): ${
                    (
                      table.getColumn("totalAUM")?.getFilterValue() as {
                        min?: string;
                      }
                    )?.min || { min: "500" }.min
                  }`
                : ""
            }
            placeholder="Min Total AUM (In Millions)"
            styles={{
              input: {
                borderRadius: "20px",
                backgroundColor: "#f1f3f5",
                color: "#212529",
                "&::placeholder": {
                  color: "#495057",
                },
              },
            }}
            rightSection={
              (
                table.getColumn("totalAUM")?.getFilterValue() as {
                  min?: string;
                }
              )?.min || { min: "500" } ? (
                <ActionIcon onClick={clearMinAUM} variant="transparent">
                  <IconX style={{ color: "#212529" }} size={16} />
                </ActionIcon>
              ) : null
            }
          />
        </Box>

        <Box style={{ width: "250px" }}>
          <TextInput
            readOnly
            value={
              (
                table.getColumn("totalAUM")?.getFilterValue() as {
                  max?: string;
                }
              )?.max || { max: "1000" }
                ? `Max Total AUM (In Millions): ${
                    (
                      table.getColumn("totalAUM")?.getFilterValue() as {
                        max?: string;
                      }
                    )?.max || { max: "1000" }.max
                  }`
                : ""
            }
            placeholder="Max Total AUM (In Millions)"
            styles={{
              input: {
                borderRadius: "20px",
                backgroundColor: "#f1f3f5",
                color: "#212529",
                "&::placeholder": {
                  color: "#495057",
                },
              },
            }}
            rightSection={
              (
                table.getColumn("totalAUM")?.getFilterValue() as {
                  max?: string;
                }
              )?.max || { max: "1000" } ? (
                <ActionIcon onClick={clearMaxAUM} variant="transparent">
                  <IconX style={{ color: "#212529" }} size={16} />
                </ActionIcon>
              ) : null
            }
          />
        </Box>

        <Group ml="auto" gap="xs">
          <ActionIcon
            variant="default"
            size="lg"
            style={{
              color: "#868E96",
              border: "none",
            }}
            onClick={() => table.options.meta.toggleFullScreen()}
          >
            <IconArrowsMaximize size={20} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
            style={{
              color: "#868E96",
              border: "none",
            }}
          >
            <IconPlayerPause size={20} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
            style={{
              border: "none",
              color: "#868E96",
            }}
          >
            <IconFilter size={20} />
          </ActionIcon>

          <Menu position="bottom-end" shadow="md">
            <Menu.Target>
              <Button
                rightSection={<IconChevronDown size={16} />}
                variant="default"
                styles={{
                  root: {
                    color: "#212529",
                    border: "1px solid #dee2e6",
                    "&:hover": {
                      backgroundColor: "#e9ecef",
                    },
                  },
                }}
              >
                Export
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item onClick={() => exportData("csv")}>
                Export as CSV
              </Menu.Item>

              <Menu.Item onClick={() => exportData("excel")}>
                Export as Excel
              </Menu.Item>

              <Menu.Item onClick={() => exportData("pdf")}>
                Export as PDF
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </div>
  );
};

export default Toolbar;
