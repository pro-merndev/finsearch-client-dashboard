import Button from "@/components/ui/button";
import {
  Burger,
  Drawer,
  Group,
  Paper,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { Link } from "react-router";

// Define the mock data for the mega menu
const mandatesData = [
  {
    title: "Mandates",
    description:
      "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
  },
  {
    title: "RFPs",
    description:
      "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
  },
  {
    title: "Manager Mandate Activity",
    description:
      "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
  },
  {
    title: "Mandate Documents",
    description:
      "Quis nunc lorem non tortor mattis velit. Erat felis lectus elit massa. Quam eu.",
  },
];

// Define the navigation links
const links = [
  { label: "Home", link: "#" },
  { label: "Mandates", link: "#", megaMenu: mandatesData },
  { label: "Firms", link: "#", megaMenu: [] },
  { label: "Contacts", link: "#", megaMenu: [] },
  { label: "Conferences", link: "#" },
  { label: "News", link: "#" },
  { label: "Maps", link: "#" },
  { label: "Documents", link: "#" },
  { label: "Tasks", link: "#" },
  { label: "Resources", link: "#" },
];

export default function Header() {
  const theme = useMantineTheme();
  const [opened, { close, toggle }] = useDisclosure(false);

  const desktopLinks = links.map((link) => {
    const hasMegaMenu = link.megaMenu && link.megaMenu.length > 0;

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
        <Group gap={5}>
          <Text size="14px">{link.label}</Text>
          {hasMegaMenu && (
            <IconChevronDown size={16} color={theme.primaryColor} />
          )}
        </Group>
      </UnstyledButton>
    );
  });

  const mobileLinks = links.map((link) => {
    const hasMegaMenu = link.megaMenu && link.megaMenu.length > 0;

    return (
      <UnstyledButton key={link.label} py="xs">
        <Group justify="space-between">
          <Text>{link.label}</Text>
          {hasMegaMenu && (
            <IconChevronDown size={16} color={theme.primaryColor} />
          )}
        </Group>
      </UnstyledButton>
    );
  });

  return (
    <Group justify="space-between" align="center" h="100%">
      <Paper>
        <Text fw={700} size="xl" c="blue">
          fin
          <Text span>|searches</Text>
        </Text>
      </Paper>

      <Group gap={0} visibleFrom="lg">
        {desktopLinks}
      </Group>

      <Group>
        <Button variant="outline" visibleFrom="lg">
          Log in
        </Button>
        <Button visibleFrom="lg">Sign Up</Button>
        <Burger opened={opened} onClick={toggle} hiddenFrom="lg" />
      </Group>
      <Drawer opened={opened} onClose={close} hiddenFrom="lg">
        <Stack>{mobileLinks}</Stack>
        <Group justify="center" mt="xl">
          <Button variant="outline" fullWidth>
            Log in
          </Button>
          <Button fullWidth>Sign up</Button>
        </Group>
      </Drawer>
    </Group>
  );
}
