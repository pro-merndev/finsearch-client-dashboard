import { Tabs } from "@mantine/core";
import ContactHighlightTab from "./_components/contact-highlights";
import LatestUpdatesTab from "./_components/latest-updates";
import MetricsTab from "./_components/metrics";
import ResearchNotesTab from "./_components/research-notes";
import TopFarmsTab from "./_components/top-farms";
import WebinarTrainingTab from "./_components/webinar-training";

export default function MainTabs() {
  const tabItems = [
    { value: "all", label: "All", component: <AllTabs /> },
    { value: "metrics", label: "Metrics", component: <MetricsTab /> },
    { value: "top-farms", label: "Top Farms", component: <TopFarmsTab /> },
    {
      value: "latest-updates",
      label: "Latest Updates",
      component: <LatestUpdatesTab />,
    },
    {
      value: "contact-highlights",
      label: "Contact Highlights",
      component: <ContactHighlightTab />,
    },
    {
      value: "research-notes",
      label: "Research Notes",
      component: <ResearchNotesTab />,
    },
    {
      value: "webinar-training",
      label: "Webinar & Training",
      component: <WebinarTrainingTab />,
    },
  ];

  return (
    <Tabs color="blue" defaultValue="all">
      <Tabs.List>
        {tabItems.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabItems.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} pt="xs">
          {tab.component}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}

function AllTabs() {
  return (
    <>
      <MetricsTab />
      <TopFarmsTab />
      <LatestUpdatesTab />
      <ContactHighlightTab />
      <ResearchNotesTab />
      <WebinarTrainingTab />
    </>
  );
}
