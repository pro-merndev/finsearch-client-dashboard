import { Box, Divider, Collapse, Group, Text, TextInput, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const firmTypes = ["RIA", "Broker-Dealer", "Hybrid", "Bank", "Trust Company", "Family Office"]

const CollapsibleFirm = ({ isHidden }: { isHidden: string }) => {
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
          Firm
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
        <Text size="xs" fw={500} mb={8}>
          Firm Type
        </Text>
        <Stack gap={8}>
          {firmTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              size="xs"
              styles={{
                label: { fontSize: "12px" },
              }}
            />
          ))}
        </Stack>
        <Divider color="gray.2" my={10} />
        <Text size="xs" fw={500} mb={8}>
          Firm Name
        </Text>
        <TextInput
          size="xs"
          placeholder="Search firm name"
          styles={{
            input: {
              fontSize: "12px",
            },
          }}
        />
      </Collapse>
    </Box>
  )
}

export default CollapsibleFirm

