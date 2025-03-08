import { Box, Group, SimpleGrid, Text } from "@mantine/core";
import CustomizeButton from "./_components/customize-button";
import FavoriteCard from "./_components/favorite-card";
import LatestDocumentsCard from "./_components/latest-document-card";
import LatestMandatesCard from "./_components/latest-mandates";
import LatestNewsCard from "./_components/latest-news-card";
import PlanReturnsCard from "./_components/plan-returns-card";
import TasksCard from "./_components/task-card";
import { useState, useEffect } from "react";

const LatestUpdatesTab = () => {
  const [visibleItems, setVisibleItems] = useState(() => {
    const saved = localStorage.getItem("visibleItems");
    return saved ? JSON.parse(saved) : {
      latestDocuments: true,
      latestMandates: true,
      planReturns: true,
      latestNews: true,
      tasks: true,
      favorites: true,
    };
  });
  const toggleVisibility = (item: keyof typeof visibleItems) => {
    setVisibleItems((prevState: typeof visibleItems) => {
      const newState = {
        ...prevState,
        [item]: !prevState[item],
      };
      localStorage.setItem("visibleItems", JSON.stringify(newState));
      return newState;
    });
  };

  useEffect(() => {
    localStorage.setItem("visibleItems", JSON.stringify(visibleItems));
  }, [visibleItems]);

  return (
    <Box>
      <Group justify="space-between" align="center" mt={24}>
        <Text component="h4" fz={20} fw={700}>
          Latest Updates
        </Text>
        <CustomizeButton
          toggleVisibility={toggleVisibility}
          visibleItems={visibleItems}
        />
      </Group>
      <SimpleGrid
        mt={16}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "md" }}
        verticalSpacing={{ base: "md", sm: "md" }}
      >
        {visibleItems.latestDocuments && (
          <LatestDocumentsCard
            onClose={() => toggleVisibility("latestDocuments")}
            documents={[
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
            ]}
          />
        )}
        {visibleItems.latestMandates && (
          <LatestMandatesCard
            onClose={() => toggleVisibility("latestMandates")}
            documents={[
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
              {
                title: "California Public Employee's Retirement System",
                filename: "Tech requirements.pdf",
                href: "#",
              },
            ]}
          />
        )}
        {visibleItems.planReturns && (
          <PlanReturnsCard
            onClose={() => toggleVisibility("planReturns")}
            documents={[
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                performanceItems: [
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                ],
              },
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                performanceItems: [
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                ],
              },
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                performanceItems: [
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                ],
              },
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                performanceItems: [
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                  { label: "QTD", value: "-1.97%" },
                ],
              },
            ]}
          />
        )}
        {visibleItems.latestNews && (
          <LatestNewsCard
            onClose={() => toggleVisibility("latestNews")}
            newsItems={[
              {
                title: "News Heading",
                date: "Feb 5, 2025",
                content:
                  "Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.",
                href: "#",
                type: "ria",
              },
              {
                title: "News Heading",
                date: "Feb 5, 2025",
                content:
                  "Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.",
                href: "#",
                type: "consultants",
              },
              {
                title: "News Heading",
                date: "Feb 5, 2025",
                content:
                  "Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.",
                href: "#",
                type: "managers",
              },
              {
                title: "News Heading",
                date: "Feb 5, 2025",
                content:
                  "Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus semper senectus orci neque nulla netus ultrices est ut. Varius semper.",
                href: "#",
                type: "managers",
              },
            ]}
          />
        )}
        {visibleItems.tasks && (
          <TasksCard
            onClose={() => toggleVisibility("tasks")}
            tasks={[
              {
                title: "California Public Employee's Retirement System",
                description: "Portfolio Manager Goverment CHaritable",
                href: "#",
                type: "today",
              },
              {
                title: "Ponte Corgo Government Charitable Nonprofit Foundation",
                description: "Portfolio Manager Goverment CHaritable",
                href: "#",
                type: "today",
              },
              {
                title: "California Public Employee's Retirement System",
                description: "Portfolio Manager Goverment CHaritable",
                href: "#",
                type: "thisMonth",
              },
            ]}
          />
        )}
        {visibleItems.favorites && (
          <FavoriteCard
            onClose={() => toggleVisibility("favorites")}
            items={[
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                type: "consultants",
              },
              {
                title: "Ponte Corgo Government Charitable Nonprofit Foundation",
                href: "#",
                type: "managers",
              },
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                type: "ria",
              },
              {
                title: "California Public Employee's Retirement System",
                href: "#",
                type: "plans",
              },
            ]}
          />
        )}
      </SimpleGrid>
    </Box>
  );
};

export default LatestUpdatesTab;
