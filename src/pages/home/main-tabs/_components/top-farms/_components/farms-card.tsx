"use client";

import { Anchor, Box, Card, Divider, Group, Select, Text } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export interface TopPlansCardProps {
  title: string;
  linkText: string;
  linkHref: string;
  filterOptions: string[];
  defaultFilter: string;
  firms: Array<{
    name: string;
    aum: string;
    href?: string;
  }>;
}

export default function FarmsCard({
  title,
  linkText,
  linkHref = "#",
  filterOptions,
  defaultFilter,
  firms,
}: Partial<TopPlansCardProps> = {}) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder className="max-w-md">
      <Group justify="space-between" mb="md">
        <Group>
          <Text fw={600} size="xs">
            {title}
          </Text>
          <Select
            data={filterOptions}
            defaultValue={defaultFilter}
            size="xs"
            styles={{
              input: {
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                fontSize: "12px",
                height: "30px",
                minHeight: "30px",
                width: "124px",
              },
            }}
            rightSection={<IconChevronDown size={16} />}
          />
        </Group>
        <Group>
          <Anchor href={linkHref} c="blue" size="xs">
            {linkText}
          </Anchor>
        </Group>
      </Group>

      <Box>
        <Group justify="space-between" py="xs">
          <Text c="dimmed" fz={10} fw={500}>
            FIRM
          </Text>
          <Text c="dimmed" fz={10} fw={500}>
            AUM
          </Text>
        </Group>
        <Divider />

        {firms &&
          firms.length > 0 &&
          firms?.map((firm, index) => (
            <Box key={index}>
              <Group justify="space-between" py="md">
                <Anchor
                  href={firm.href || "#"}
                  c="dimmed"
                  size="xs"
                  style={{ textDecoration: "none" }}
                  underline="never"
                >
                  {firm.name}
                </Anchor>
                <Text size="xs" fw={500}>
                  {firm.aum}
                </Text>
              </Group>
              {index < firms.length - 1 && <Divider />}
            </Box>
          ))}
      </Box>
    </Card>
  );
}
