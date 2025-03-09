import { Box, Flex, Text, Group, Anchor } from "@mantine/core"
import { IconBriefcase } from "@tabler/icons-react"
import classes from "./advisor-header.module.css"


export default function AdvisorHeader() {
  return (
    <Box className={classes.headerContainer} sx={{
        width: "100%" 
    }}>
      <Flex justify="space-between" align="flex-end">
        <Box>
          <Text className={classes.advisorName}>Aaron Alexander Foppe</Text>
          <Flex align="center" gap={8} mt={4}>
            <IconBriefcase size={18} color="#6c757d" stroke={1.5} />
            <Text size="sm" color="dimmed">
              Financial Advisor at{" "}
              <Anchor href="#" className={classes.companyLink}>
                Edward Jones
              </Anchor>
            </Text>
          </Flex>
        </Box>

        <Group className={classes.tabsContainer}>
          <Box className={`${classes.tab} ${classes.activeTab}`}>Bio & Job History</Box>
          <Box className={classes.tab}>News & Updates</Box>
          <Box className={classes.tab}>Plans</Box>
        </Group>
      </Flex>
    </Box>
  )
}

