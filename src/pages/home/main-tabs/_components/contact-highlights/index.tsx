import { Box, Grid, Text } from "@mantine/core";
import PeopleMovesCard from "./_components/people-moves-card";
import PopularSchoolsCard from "./_components/popular-schools-card";

const ContactHighlightTab = () => {
  return (
    <Box>
      <Text component="h4" mt={24} fz={20} fw={700}>
        Contact Highlights
      </Text>
      <Grid mt={16}>
        <Grid.Col span={8} visibleFrom="md">
          <PeopleMovesCard
            moves={[
              {
                id: "1",
                name: "Jill Jailbreaker",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Gateway Wealth Partners, LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "2",
                name: "Henry Silkeater",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Carnegie Investment Counsel",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "3",
                name: "Jill Jailbreaker",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Osaic Advisory Services, LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "4",
                name: "Bill Horsefighter",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Cetera Investment Advisers LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={12} hiddenFrom="md">
          <PeopleMovesCard
            moves={[
              {
                id: "1",
                name: "Jill Jailbreaker",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Gateway Wealth Partners, LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "2",
                name: "Henry Silkeater",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Carnegie Investment Counsel",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "3",
                name: "Jill Jailbreaker",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Osaic Advisory Services, LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
              {
                id: "4",
                name: "Bill Horsefighter",
                avatar: "/placeholder.svg?height=32&width=32",
                joinedFirm: "Cetera Investment Advisers LLC",
                firmLink: "#",
                joinedDate: "02/11/2025",
                linkedinUrl: "#",
              },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={4} visibleFrom="md">
          <PopularSchoolsCard
            schools={[
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
            ]}
          />
        </Grid.Col>
        <Grid.Col span={12} hiddenFrom="md">
          <PopularSchoolsCard
            schools={[
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
              {
                name: "University of California",
                count: "10",
                href: "#",
              },
            ]}
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default ContactHighlightTab;
