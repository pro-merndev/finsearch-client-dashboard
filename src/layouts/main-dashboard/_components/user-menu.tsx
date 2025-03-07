import { Avatar, Group, Menu, UnstyledButton } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";

const UserMenu = ({ handleSignout }: { handleSignout: () => void }) => {
  const [openedMegaMenu, setOpenedMegaMenu] = useState(false);
  return (
    <>
      <Menu
        shadow="md"
        opened={openedMegaMenu}
        onChange={setOpenedMegaMenu}
        trigger="click"
        width={200}
      >
        <Menu.Target>
          <UnstyledButton>
            <Group gap={2}>
              <Avatar
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
                radius="xl"
              />
              <IconChevronDown
                size={16}
                style={{
                  transform: openedMegaMenu ? "rotate(180deg)" : "none",
                  transition: "transform 200ms ease",
                }}
              />
            </Group>
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item onClick={handleSignout}>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default UserMenu;
