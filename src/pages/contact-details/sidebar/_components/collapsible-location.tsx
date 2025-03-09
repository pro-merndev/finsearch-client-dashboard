"use client"

import { Box, Divider, Collapse, Group, Text, TextInput, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
]

const CollapsibleLocation = ({ isHidden }: { isHidden: string }) => {
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
          Location
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
          State
        </Text>
        <TextInput
          size="xs"
          placeholder="Search states"
          mb={10}
          styles={{
            input: {
              fontSize: "12px",
            },
          }}
        />
        <Stack spacing={8} style={{ maxHeight: "150px", overflowY: "auto" }}>
          {states.map((state) => (
            <Checkbox
              key={state}
              label={state}
              size="xs"
              styles={{
                label: { fontSize: "12px" },
              }}
            />
          ))}
        </Stack>
        <Divider color="gray.2" my={10} />
        <Text size="xs" fw={500} mb={8}>
          City
        </Text>
        <TextInput
          size="xs"
          placeholder="Search cities"
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

export default CollapsibleLocation

