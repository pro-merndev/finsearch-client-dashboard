import {
  Box,
  Divider,
  Flex,
  Group,
  Space,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import { useState } from "react";
import CollapsibleAUM from "./_components/collapsible-aum";
import CollapsibleFirm from "./_components/collapsible-firm";
import classes from "./navbar-search.module.css";

export function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navbarClasses = `${classes.navbar} ${
    expanded ? classes.expanded : classes.collapsed
  }`;

  const isHidden = expanded ? "" : "none";

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
          <Text c="#155F98"  fw={600} size="sm" style={{ cursor: "pointer" }}>
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
      <Box>
        <CollapsibleAUM isHidden={isHidden} />
        <Space h={"10"} />
        <CollapsibleFirm isHidden={isHidden} />
      </Box>
    </nav>
  );
}
