import { Box, Divider, Flex, Group, Text, UnstyledButton } from "@mantine/core";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { useState } from "react";
import CollapsibleFirm from "./_components/collapsible-firm";
import CollapsibleClient from "./_components/collapsible-client";
import CollapsibleLocation from "./_components/collapsible-location";
import CollapsibleServiceProviders from "./_components/collapsible-service-providers";
import CollapsibleCompensationType from "./_components/collapsible-compensation-type";
import CollapsibleAssetType from "./_components/collapsible-asset-type";
import CollapsibleService from "./_components/collapsible-service";
import classes from "./navbar-search.module.css";
import CollapsibleAUM from "./_components/collapsible-aum";

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navbarClasses = `${classes.navbar} ${
    expanded ? classes.expanded : classes.collapsed
  }`;

  const isHidden = expanded ? "" : "none";

  const handleClearFilters = () => {
    // Implement clear filters functionality
    console.log("Clearing all filters");
  };

  return (
    <nav className={navbarClasses}>
      <Group justify="space-between" align="center" mb="sm" mt={{ base: 20 }}>
        <Flex
          w={"75%"}
          justify="space-between"
          align="center"
          display={isHidden}
        >
          <Text c={"#000"} fw={600}>
            Filters
          </Text>
          <Text
            c="#155F98"
            fw={600}
            size="sm"
            style={{ cursor: "pointer" }}
            onClick={handleClearFilters}
          >
            Clear
          </Text>
        </Flex>
        <UnstyledButton
          w={expanded ? "15%" : "100%"}
          onClick={toggleSidebar}
          display="flex"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <IconLayoutSidebarLeftCollapse size={20} color="#98A2B3" />
        </UnstyledButton>
      </Group>
      <Divider color="gray.2" my="xs" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingBottom: "20px",
        }}
      >
        <CollapsibleAUM isHidden={isHidden} />
        <CollapsibleFirm isHidden={isHidden} />
        <CollapsibleClient isHidden={isHidden} />
        <CollapsibleLocation isHidden={isHidden} />
        <CollapsibleServiceProviders isHidden={isHidden} />
        <CollapsibleAssetType isHidden={isHidden} />
        <CollapsibleCompensationType isHidden={isHidden} />
        <CollapsibleService isHidden={isHidden} />
      </Box>
    </nav>
  );
}
