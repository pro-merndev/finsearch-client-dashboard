import { Anchor, Box, Card, Divider, Group, Text } from "@mantine/core";

export interface TopPlansCardProps {
  schools: Array<{
    name: string;
    count: string;
    href?: string;
  }>;
}

export default function PopularSchoolsCard({
  schools,
}: Partial<TopPlansCardProps> = {}) {
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
      <Group justify="space-between" mb="md">
        <Group>
          <Text fw={600} size="xs">
            Top 5 MOST POPULAR SCHOOLS
          </Text>
        </Group>
      </Group>

      <Box>
        <Group justify="space-between" py="xs">
          <Text c="dimmed" fz={10} fw={500}>
            EDUCATION
          </Text>
          <Text c="dimmed" fz={10} fw={500}>
            COUNT
          </Text>
        </Group>
        <Divider />

        {schools &&
          schools.length > 0 &&
          schools?.map((school, index) => (
            <Box key={index}>
              <Group justify="space-between" py="md">
                <Anchor
                  href={school.href || "#"}
                  c="dimmed"
                  size="xs"
                  style={{ textDecoration: "none" }}
                  underline="never"
                >
                  {school.name}
                </Anchor>
                <Text size="xs" fw={500}>
                  {school.count}
                </Text>
              </Group>
              {index < schools.length - 1 && <Divider />}
            </Box>
          ))}
      </Box>
    </Card>
  );
}
