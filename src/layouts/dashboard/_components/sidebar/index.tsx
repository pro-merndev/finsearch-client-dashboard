import { Box, Divider, Flex, Group, Text, UnstyledButton } from "@mantine/core"
import { IconLayoutSidebarLeftCollapse } from "@tabler/icons-react"
import { useState } from "react"
import CollapsibleFirm from "./collapsible-firm"
import CollapsibleClient from "./collapsible-client"
import CollapsibleLocation from "./collapsible-location"
import CollapsibleServiceProviders from "./collapsible-service-providers"
import CollapsibleAssetType from "./collapsible-asset-type"
import CollapsibleCompensationType from "./collapsible-compensation-type"
import CollapsibleService from "./collapsible-service"
import classes from "./navbar-search.module.css"
import CollapsibleAUM from "./collapsible-aum"

function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  const navbarClasses = `${classes.navbar} ${expanded ? classes.expanded : classes.collapsed}`

  const isHidden = expanded ? "" : "none"

  const handleClearFilters = () => {
    // Implement clear filters functionality
    console.log("Clearing all filters")
  }

  return (
    <nav className={navbarClasses}>
      <Group justify="space-between" align="center" mb="sm" mt={{ base: 20 }}>
        <Flex w={"75%"} justify="space-between" align="center" display={isHidden}>
          <Text c={"#000"} fw={600}>
            Filters
          </Text>
          <Text c="#155F98" fw={600} size="sm" style={{ cursor: "pointer" }} onClick={handleClearFilters}>
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
      <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
  )
}

export default Sidebar