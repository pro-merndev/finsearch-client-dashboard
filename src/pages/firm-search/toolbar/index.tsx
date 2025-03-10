import { ActionIcon, Box, Button, Group, Menu, TextInput } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconChevronDown,
  IconFilter,
  IconPlayerPause,
  IconX,
} from "@tabler/icons-react";

const Toolbar = ({
  table,
}: {
  table: any;
}) => {
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

  // Handle exporting data
  const exportData = (format: "csv" | "excel" | "pdf") => {
    console.log(`Exporting data in ${format} format`);
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
