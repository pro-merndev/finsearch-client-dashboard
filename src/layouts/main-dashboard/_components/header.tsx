import Button from "@/components/ui/button";
import { Group, Paper, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router";

export default function Header() {
  const theme = useMantineTheme();
  console.log(theme.colors.blue[5]);

  return (
    <Group justify="space-between" align="center" h="100%">
      <Paper>
        <Text fw={700} size="xl" c="blue">
          fin
          <Text span>|searches</Text>
        </Text>
      </Paper>

      <Group ml="xl" className="text-sm" gap="xl">
        <Link to="#">Home</Link>
        <Link to="#">Mandates</Link>
        <Link to="#">Firms</Link>
        <Link to="#">Contacts</Link>
        <Link to="#">Conferences</Link>
        <Link to="#">News</Link>
        <Link to="#">Maps</Link>
        <Link to="#">Documents</Link>
        <Link to="#">Tasks</Link>
        <Link to="#">Resources</Link>
      </Group>

      <Group>
        <Button variant="outline">Log in</Button>
        <Button>Sign Up</Button>
      </Group>
    </Group>
  );
}
