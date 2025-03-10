import DateRangePicker from "@/components/ui/date-range-picker"
import { Box, Collapse, Divider, Group, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"
import '@mantine/dates/styles.css';

const CollapsibleDateRange = ({ isHidden }: { isHidden: string }) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Box
      w={"100%"}
      style={{
        border: "1px solid #DEE2E6",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      mx="auto"
      display={isHidden}
      p={8}
    >
      <Group justify="space-between" align="center" onClick={toggle}>
        <Text size="xs" fw={500}>
          Updated On
        </Text>
        <IconChevronDown
          size="16"
          color="#868E96"
          style={{
            transform: opened ? "rotate(-180deg)" : "none",
            transition: "transform 200ms ease",
          }}
        />
      </Group>
      <Collapse in={opened}>
        <Divider color="gray.2" mt={10} mb={10} />
        <DateRangePicker />
      </Collapse>
    </Box>
  )
}

export default CollapsibleDateRange

