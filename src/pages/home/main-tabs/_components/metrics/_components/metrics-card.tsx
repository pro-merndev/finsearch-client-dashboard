import { Anchor, Box, Card, Divider, Group, Text } from "@mantine/core";
import { Link } from "react-router";

export interface MetricsCardProps {
  title: string;
  linkText: string;
  linkHref: string;
  metrics: [
    {
      label: string;
      value: string | number;
    },
    { label: string; value: string | number },
    { label: string; value: string | number }
  ];
}

export default function MetricsCard({
  title,
  linkText,
  linkHref,
  metrics,
}: MetricsCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder className="max-w-md">
      <Group justify="space-between" mb="md">
        <Text fw={600} size="xs">
          {title}
        </Text>
        <Anchor to={linkHref} c="blue" size="xs" component={Link}>
          {linkText}
        </Anchor>
      </Group>

      <Box>
        {metrics.map((metric, index) => (
          <div key={index}>
            <Group justify="space-between" py="md">
              <Text c="dimmed" size="xs">
                {metric.label}
              </Text>
              <Text size="xs">{metric.value}</Text>
            </Group>
            {index < metrics.length - 1 && <Divider />}
          </div>
        ))}
      </Box>
    </Card>
  );
}
