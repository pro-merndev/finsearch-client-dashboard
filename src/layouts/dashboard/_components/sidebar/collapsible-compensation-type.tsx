"use client"

import { Box, Divider, Collapse, Group, Text, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const compensationTypes = [
  "Fee-Only",
  "Commission-Only",
  "Fee and Commission",
  "Fee-Based",
  "Salary",
  "Performance-Based",
]

const CollapsibleCompensationType = ({ isHidden }: { isHidden: string }) => {
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
          Compensation Type
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
        <Stack gap={8}>
          {compensationTypes.map((type) => (
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
      </Collapse>
    </Box>
  )
}

export default CollapsibleCompensationType

