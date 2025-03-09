import { Button, Menu, rem } from "@mantine/core";
import { IconCheck, IconPlus, IconSettings } from "@tabler/icons-react";

interface CustomizeButtonProps {
  visibleItems: Record<string, boolean>;
  toggleVisibility: (item: any) => void;
}

export default function CustomizeButton({
  toggleVisibility,
  visibleItems,
}: CustomizeButtonProps) {
  const menuItems = [
    { label: "Latest Documents", key: "latestDocuments" },
    { label: "Latest Mandates", key: "latestMandates" },
    { label: "Latest Returns", key: "planReturns" },
    { label: "Latest News", key: "latestNews" },
    { label: "Tasks", key: "tasks" },
    { label: "Favorites", key: "favorites" },
    { label: "Saved Searches", key: "savedSearches" },
    { label: "Manager Activity", key: "managerActivity" },
  ];

  return (
    <Menu
      shadow="md"
      width={220}
      styles={{
        dropdown: {
          borderRadius: "5px",
        },
      }}
    >
      <Menu.Target>
        <Button
          variant="default"
          leftSection={<IconSettings size={16} />}
          rightSection={null}
          styles={{
            root: {
              backgroundColor: "white",
              border: "1px solid #e0e0e0",
              "&:hover": {
                backgroundColor: "#f8f9fa",
              },
            },
            section: {
              marginRight: rem(8),
            },
            label: {
              fontWeight: 500,
              fontSize: rem(14),
            },
          }}
        >
          Customize
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map((item) => (
          <Menu.Item
            key={item.key}
            rightSection={
              visibleItems[item.key] ? (
                <IconCheck size={16} stroke={1.5} style={{ color: "green" }} />
              ) : (
                <IconPlus size={16} stroke={1.5} style={{ color: "gray" }} />
              )
            }
            fz={12}
            onClick={() =>
              toggleVisibility(item.key as keyof typeof visibleItems)
            }
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
