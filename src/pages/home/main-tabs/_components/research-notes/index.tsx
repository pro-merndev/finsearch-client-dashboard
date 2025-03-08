import { Anchor, Box, Group, Text } from "@mantine/core";
import { Link } from "react-router";
import ResearchTable from "./_components/research-note-card";

const ResearchNotesTab = () => {
  return (
    <Box>
      <Group justify="space-between" align="center" mt={24}>
        <Text component="h4" fz={20} fw={700}>
          Research Notes
        </Text>
        <Anchor to="#" c="#0D395C" fw={500} fz={20} component={Link}>
          View All
        </Anchor>
      </Group>
      <Box mt={16}>
        <ResearchTable
          items={[
            {
              firm: "Gateway Wealth Partners, LLC",
              firmLink: "#",
              date: "02/11/2025",
              subjectLine: "RESEARCH OVERVIEW",
              documentLink: "#",
            },
            {
              firm: "Carnegie Investment Counsel",
              firmLink: "#",
              date: "02/11/2025",
              subjectLine: "RESEARCH OVERVIEW",
              documentLink: "#",
            },
            {
              firm: "Osaic Advisory Services, LLC",
              firmLink: "#",
              date: "02/11/2025",
              subjectLine: "RESEARCH OVERVIEW",
              documentLink: "#",
            },
            {
              firm: "Cetera Investment Advisers LLC",
              firmLink: "#",
              date: "02/11/2025",
              subjectLine: "RESEARCH OVERVIEW",
              documentLink: "#",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default ResearchNotesTab;
