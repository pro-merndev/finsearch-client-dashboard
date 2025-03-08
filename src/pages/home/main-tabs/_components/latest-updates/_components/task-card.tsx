"use client";

import {
  Anchor,
  Box,
  Card,
  CloseButton,
  Group,
  Stack,
  Tabs,
  Text,
} from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";

interface Task {
  title: string;
  href?: string;
  type: "all" | "today" | "thisMonth";
  description: string;
}

interface TasksCardProps {
  tasks: Task[];
  onClose?: () => void;
}

export default function TasksCard({
  tasks,
  onClose = () => {},
}: TasksCardProps) {
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
          TASKS
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
          height: "calc(100% - 40px)",
        }}
      >
        <Tabs.List>
          {[
            { value: "all", label: "All" },
            { value: "today", label: "Today" },
            { value: "thisMonth", label: "This Month" },
          ].map((tab) => (
            <Tabs.Tab
              key={tab.value}
              value={tab.value}
              fz={10}
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
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {["all", "today", "thisMonth"].map((tab) => (
          <Tabs.Panel
            key={tab}
            value={tab}
            sx={{
              height: "100%",
              overflow: "auto",
            }}
          >
            <Stack mt="md" gap="xs">
              {tasks
                ?.filter((item) => tab === "all" || item.type === tab)
                .map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: "12px",
                      border: "1px solid #E0E0E0",
                      borderRadius: "8px",
                    }}
                  >
                    <Box
                      component={item.href ? "a" : "div"}
                      href={item.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Text size="xs" c="dark" fw={600}>
                        {item.title}
                      </Text>
                      <Group justify="space-between" align="flex-start">
                        <Text
                          size="xs"
                          c="dark"
                          sx={{
                            textDecoration: "underline",
                          }}
                        >
                          {item.description}
                        </Text>
                        <IconArrowUpRight size={16} />
                      </Group>
                    </Box>
                  </Box>
                ))}
            </Stack>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Card>
  );
}
