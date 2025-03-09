import {
  Anchor,
  Box,
  Card,
  CloseButton,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { IconFile } from "@tabler/icons-react";

interface Document {
  title: string;
  filename: string;
  href: string;
}

interface LatestDocumentsProps {
  documents: Document[];
  onClose?: () => void;
}

export default function LatestDocumentsCard({
  documents = [],
  onClose = () => {},
}: LatestDocumentsProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
      className="max-w-md"
      h={400}
    >
      <Group justify="space-between" mb="md">
        <Text fw={600} size="md">
          LATEST DOCUMENTS
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
            <Stack gap="xs">
              <Text size="xs" c="dark" fw={600}>
                {doc.title}
              </Text>
              <Group gap="5">
                <IconFile size={18} color="red" />
                <Text size="xs" c="dark">
                  {doc.filename}
                </Text>
              </Group>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Card>
  );
}
