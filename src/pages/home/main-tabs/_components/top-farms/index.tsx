import { Box, SimpleGrid, Text } from "@mantine/core";
import FarmsCard, { TopPlansCardProps } from "./_components/farms-card";

const topFarms: TopPlansCardProps[] = [
  {
    title: "Top 5 RIA FIRMS",
    linkText: "View all",
    linkHref: "#",
    filterOptions: ["$50 Billion+", "$20 Billion+", "$10 Billion+"],
    defaultFilter: "$50 Billion+",
    firms: [
      {
        name: "Merrill Lynch, Pierce, Fenner & Smith Incorporated",
        aum: "$1.27T",
        href: "#",
      },
      { name: "Captrust", aum: "$2.4T", href: "#" },
      { name: "Ubs Financial Services Inc.", aum: "$623B", href: "#" },
      { name: "Edward Jones", aum: "$290B", href: "#" },
      {
        name: "Ameriprise Financial Services, LLC",
        aum: "$16.4T",
        href: "#",
      },
    ],
  },
  {
    title: "TOP 5 PLANS",
    linkText: "View all",
    linkHref: "#",
    filterOptions: ["$50 Billion+", "$20 Billion+", "$10 Billion+"],
    defaultFilter: "$50 Billion+",
    firms: [
      {
        name: "Merrill Lynch, Pierce, Fenner & Smith Incorporated",
        aum: "$1.27T",
        href: "#",
      },
      { name: "Captrust", aum: "$2.4T", href: "#" },
      { name: "Ubs Financial Services Inc.", aum: "$623B", href: "#" },
      { name: "Edward Jones", aum: "$290B", href: "#" },
      {
        name: "Ameriprise Financial Services, LLC",
        aum: "$16.4T",
        href: "#",
      },
    ],
  },
  {
    title: "TOP 5 CONSULTANTS",
    linkText: "View all",
    linkHref: "#",
    filterOptions: ["$50 Billion+", "$20 Billion+", "$10 Billion+"],
    defaultFilter: "$50 Billion+",
    firms: [
      {
        name: "Merrill Lynch, Pierce, Fenner & Smith Incorporated",
        aum: "$1.27T",
        href: "#",
      },
      { name: "Captrust", aum: "$2.4T", href: "#" },
      { name: "Ubs Financial Services Inc.", aum: "$623B", href: "#" },
      { name: "Edward Jones", aum: "$290B", href: "#" },
      {
        name: "Ameriprise Financial Services, LLC",
        aum: "$16.4T",
        href: "#",
      },
    ],
  },
];

const TopFarmsTab = () => {
  return (
    <Box>
      <Text component="h4" mt={24} fz={20} fw={700}>
        Top Firms
      </Text>
      <SimpleGrid
        mt={16}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "md" }}
        verticalSpacing={{ base: "md", sm: "md" }}
      >
        {topFarms.map((topFarm, i) => (
          <FarmsCard key={i} {...topFarm} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TopFarmsTab;
