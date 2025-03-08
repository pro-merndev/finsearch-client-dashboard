import {
  Anchor,
  Box,
  Card,
  CloseButton,
  Divider,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";

interface Document {
  title: string;
  href: string;
  performanceItems: {
    label: string;
    value: string;
  }[];
}

interface LatestDocumentsProps {
  documents: Document[];
  onClose?: () => void;
}

export default function PlanReturnsCard({
  documents = [],
  onClose = () => {},
}: LatestDocumentsProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="max-w-md"
      h={400}
    >
      <Group justify="space-between" mb="md">
        <Text fw={600} size="md">
          PLAN RETURNS
        </Text>
        <Group gap="xs">
          <Anchor href="#" size="sm" c="blue">
            View all
          </Anchor>
          <CloseButton size="sm" onClick={onClose} />
        </Group>
      </Group>

      <Stack
        gap="xs"
        sx={{
          height: "100%",
          overflow: "auto",
        }}
      >
        {documents.map((doc, index) => (
          <Box
            key={index}
            component="a"
            href={doc.href}
            sx={{
              padding: "12px",
              border: "1px solid #E0E0E0",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            <Text fw={600} size="xs"  c="dark">
              {doc.title}
            </Text>

            <Divider my="sm" />

            <Flex
              justify="space-between"
              align="center"
              wrap="wrap"
              gap="md"
           
            >
              {doc?.performanceItems?.map((item, index) => (
                <Group key={index} gap="xs">
                  <Text size="xs" c="dimmed">
                    {item.label}
                  </Text>
                  <Text size="xs" fw={500} c="dimmed">
                    {item.value}
                  </Text>
                </Group>
              ))}
            </Flex>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
