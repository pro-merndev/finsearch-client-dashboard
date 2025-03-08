import { Button, Menu, rem } from "@mantine/core";
import { IconPlus, IconSettings } from "@tabler/icons-react";

export default function CustomizeButton() {
  const menuItems = [
    "Latest Documents",
    "Latest Mandates",
    "Latest Returns",
    "Latest News",
    "Tasks",
    "Favorites",
    "Saved Searches",
    "Manager Activity",
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
        {menuItems.map((item, index) => (
          <Menu.Item
            key={index}
            rightSection={
              <IconPlus size={16} stroke={1.5} style={{ color: "dark" }} />
            }
            fz={12}
          >
            {item}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
