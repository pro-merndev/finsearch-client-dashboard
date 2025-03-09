"use client"

import { Box, Divider, Collapse, Group, Text, TextInput, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const clientTypes = ["Individual", "Institution", "Retirement Plan", "Foundation", "Endowment"]

const CollapsibleClient = ({ isHidden }: { isHidden: string }) => {
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
          Client
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
          Client Type
        </Text>
        <Stack gap={8}>
          {clientTypes.map((type) => (
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
          Client Name
        </Text>
        <TextInput
          size="xs"
          placeholder="Search client name"
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

export default CollapsibleClient

