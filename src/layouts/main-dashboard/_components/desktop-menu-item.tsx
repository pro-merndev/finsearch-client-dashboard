import {
  Anchor,
  Grid,
  Group,
  Menu,
  Paper,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router";
import { IDesktopMenuItem } from "../_data/menu-links";

const DesktopMenuItem = ({ link }: { link: IDesktopMenuItem }) => {
  const theme = useMantineTheme();
  const hasMegaMenu = link.megaMenu && link.megaMenu.length > 0;

  const [openedMegaMenu, setOpenedMegaMenu] = useState(false);

  if (!hasMegaMenu) {
    return (
      <UnstyledButton
        key={link.label}
        component={Link}
        to={link.link}
        sx={{
          padding: "20px 15px",
          borderRadius: 10,
          ":hover": {
            backgroundColor: theme.colors.gray[0],
          },
        }}
      >
        <Text size="14px">{link.label}</Text>
      </UnstyledButton>
    );
  } else {
    return (
      <Menu
        shadow="md"
        width={550}
        opened={openedMegaMenu}
        onChange={setOpenedMegaMenu}
        trigger="click-hover"
      >
        <Menu.Target>
          <UnstyledButton
            key={link.label}
            sx={{
              padding: "20px 15px",
              borderRadius: 10,
              ":hover": {
                backgroundColor: theme.colors.gray[0],
              },
            }}
          >
            <Group gap={5}>
              <Text size="14px">{link.label}</Text>
              <IconChevronDown
                size={16}
                color={theme.primaryColor}
                style={{
                  transform: openedMegaMenu ? "rotate(180deg)" : "none",
                  transition: "transform 200ms ease",
                }}
              />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown p="0px">
          <Group py="16px" px="24px" justify="space-between">
            <Text fw={700} c="dark" fs="16px">
              {link.label}
            </Text>
            <Anchor to={link.link} size="sm" component={Link}>
              View all
            </Anchor>
          </Group>
          <Menu.Divider />
          <Paper py="16px" px="24px">
            <Grid>
              {link?.megaMenu &&
                link?.megaMenu.map((item, i) => (
                  <Grid.Col key={i} span={6}>
                    <UnstyledButton component={Link} to={item.link}>
                      <Text size="14px" c="dark" fw={700}>
                        {item.title}
                      </Text>
                      {item.description && (
                        <Text size="12px" c="gray" mt={6}>
                          {item.description}
                        </Text>
                      )}
                    </UnstyledButton>
                  </Grid.Col>
                ))}
            </Grid>
          </Paper>
        </Menu.Dropdown>
      </Menu>
    );
  }
};

export default DesktopMenuItem;
