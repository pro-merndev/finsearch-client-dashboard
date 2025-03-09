import { Box, SimpleGrid, Text } from "@mantine/core";
import MetricsCard, { MetricsCardProps } from "./_components/metrics-card";

const metrics: MetricsCardProps[] = [
  {
    title: "Ria firms",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # RIA Firms",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
  {
    title: "Plans",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # Plans",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
  {
    title: "Consultants",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # Consultants",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
  {
    title: "Ria Contacts",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # Ria Contacts",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
  {
    title: "Plan contacts",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # Plan contacts",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
  {
    title: "consultant contacts",
    linkText: "View all",
    linkHref: "#",
    metrics: [
      {
        label: "Total # consultant contacts",
        value: "2,345",
      },
      {
        label: "Updated Last 7 Days",
        value: "177",
      },
      {
        label: "Total Assets",
        value: "$16.4T",
      },
    ],
  },
];

const MetricsTab = () => {
  return (
    <Box>
      <Text component="h4" mt={24} fz={20} fw={700}>Metrics</Text>
      <SimpleGrid
        mt={16}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "md" }}
        verticalSpacing={{ base: "md", sm: "md" }}
      >
        {metrics.map((metric, i) => (
          <MetricsCard
            key={i}
            title={metric.title}
            linkText={metric.linkText}
            linkHref={metric.linkHref}
            metrics={metric.metrics}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MetricsTab;
