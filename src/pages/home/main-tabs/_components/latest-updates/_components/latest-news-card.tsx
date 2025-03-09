import {
  Anchor,
  Box,
  Card,
  CloseButton,
  Divider,
  Group,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";

interface NewsItem {
  title: string;
  date: string;
  content: string;
  href?: string;
  type: "all" | "consultants" | "managers" | "ria" | "plans";
}

interface LatestNewsCardProps {
  newsItems: NewsItem[];
  onClose?: () => void;
}

export default function LatestNewsCard({
  newsItems,
  onClose = () => {},
}: LatestNewsCardProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
      className="max-w-md"
      h={400}
    >
      <Group justify="space-between">
        <Text fw={600} size="md">
          LATEST NEWS
        </Text>
        <Group gap="xs">
          <Anchor href="#" size="sm" c="blue">
            View all
          </Anchor>
          <CloseButton size="sm" onClick={onClose} />
        </Group>
      </Group>

      <Tabs
        defaultValue="all"
        sx={{
          height: "calc(100% - 40px)", // Adjust height to account for header
        }}
      >
        <Tabs.List>
          {["all", "consultants", "managers", "ria", "plans"].map((tab) => (
            <Tabs.Tab
              key={tab}
              fz={10}
              value={tab}
              styles={{
                tab: {
                  fontWeight: 500,
                  "&[data-active]": {
                    borderBottomColor: "#1c7ed6",
                    color: "#1c7ed6",
                  },
                },
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {["all", "consultants", "managers", "ria", "plans"].map((tab) => (
          <Tabs.Panel
            key={tab}
            value={tab}
            sx={{
              height: "100%", // Adjust height to account for tab list
              overflow: "auto",
            }}
          >
            <Stack mt="md" gap="xs">
              {newsItems
                ?.filter((item) => tab === "all" || item.type === tab)
                .map((item, index) => (
                  <Box key={index}>
                    <Box
                      component={item.href ? "a" : "div"}
                      href={item.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Text fw={600} size="sm" c="dark">
                        {item.title}
                      </Text>
                      <Text size="xs" c="dimmed" mb={8}>
                        {item.date}
                      </Text>
                      <Text size="xs" c="dimmed" lineClamp={2}>
                        {item.content}
                      </Text>
                    </Box>
                    {index < newsItems.length - 1 && <Divider mt="md" />}
                  </Box>
                ))}
            </Stack>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Card>
  );
}
