import { Anchor, Avatar, Card, Group, Table, Text } from "@mantine/core";
import { IconBrandLinkedin } from "@tabler/icons-react";

interface PeopleMove {
  id: string;
  name: string;
  avatar: string;
  joinedFirm: string;
  firmLink: string;
  joinedDate: string;
  linkedinUrl: string;
}

interface PeopleMovesCardProps {
  moves: PeopleMove[];
}

export default function PeopleMovesCard({ moves }: PeopleMovesCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
      h="100%"
      sx={{
        overflow: "auto",
      }}
    >
      <Group justify="space-between">
        <Text fw={600} size="sm">
          PEOPLE MOVES
        </Text>
        <Group gap="xs">
          <Anchor href="#" size="sm" c="blue">
            View all
          </Anchor>
        </Group>
      </Group>

      <Table verticalSpacing="md" horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th fz="sm">Contact</Table.Th>
            <Table.Th fz="sm">Joined Firm</Table.Th>
            <Table.Th fz="sm">Joined Date</Table.Th>
            <Table.Th fz="sm">LinkedIn</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {moves.map((move) => (
            <Table.Tr key={move.id}>
              <Table.Td>
                <Group gap="sm">
                  <Avatar src={move.avatar} size="sm" radius="xl" />
                  <Text size="sm" c="darkblue">
                    {move.name}
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td>
                <Anchor href={move.firmLink} size="sm" c="blue">
                  {move.joinedFirm}
                </Anchor>
              </Table.Td>
              <Table.Td>
                <Text size="sm" c="dimmed">
                  {move.joinedDate}
                </Text>
              </Table.Td>
              <Table.Td>
                <Anchor
                  href={move.linkedinUrl}
                  c="blue"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <IconBrandLinkedin size={24} />
                </Anchor>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Card>
  );
}
