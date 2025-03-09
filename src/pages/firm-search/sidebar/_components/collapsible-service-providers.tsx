"use client"

import { Box, Divider, Collapse, Group, Text, TextInput, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const providers = ["Custodian", "Broker", "Investment Manager", "Consultant", "Administrator", "Auditor"]

const CollapsibleServiceProviders = ({ isHidden }: { isHidden: string }) => {
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
          Service Providers
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
          Provider Type
        </Text>
        <Stack spacing={8}>
          {providers.map((provider) => (
            <Checkbox
              key={provider}
              label={provider}
              size="xs"
              styles={{
                label: { fontSize: "12px" },
              }}
            />
          ))}
        </Stack>
        <Divider color="gray.2" my={10} />
        <Text size="xs" fw={500} mb={8}>
          Provider Name
        </Text>
        <TextInput
          size="xs"
          placeholder="Search provider name"
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

export default CollapsibleServiceProviders

