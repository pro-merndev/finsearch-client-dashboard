import { ActionIcon, Box, Button, Group, TextInput } from "@mantine/core";
import { IconChevronDown, IconFilter, IconLayoutGrid, IconMaximize, IconX } from "@tabler/icons-react";
import { useState } from "react";

const FilterInputs = () => {

  // Filter states
  const [minAUM, setMinAUM] = useState("200")
  const [maxAUM, setMaxAUM] = useState("500")

  // Handle clearing min AUM filter
  const clearMinAUM = () => {
    setMinAUM("")
  }

  // Handle clearing max AUM filter
  const clearMaxAUM = () => {
    setMaxAUM("")
  }


  return (
    <Group mb="md" align="flex-start">
      <Box style={{ width: "250px" }}>
        <TextInput
          readOnly
          value={minAUM ? `Min Total AUM (In Millions): ${minAUM}` : ""}
          placeholder="Min Total AUM (In Millions)"
          rightSection={
            minAUM ? (
              <ActionIcon onClick={clearMinAUM} variant="transparent">
                <IconX size={16} />
              </ActionIcon>
            ) : null
          }
        />
      </Box>

      <Box style={{ width: "250px" }}>
        <TextInput
          readOnly
          value={maxAUM ? `Max Total AUM (In Millions): ${maxAUM}` : ""}
          placeholder="Max Total AUM (In Millions)"
          rightSection={
            maxAUM ? (
              <ActionIcon onClick={clearMaxAUM} variant="transparent">
                <IconX size={16} />
              </ActionIcon>
            ) : null
          }
        />
      </Box>

      <Group ml="auto" gap="xs">
        <ActionIcon variant="default" size="lg">
          <IconMaximize size={20} />
        </ActionIcon>

        <Group gap={0}>
          <ActionIcon
            variant="default"
            size="lg"
            style={{ borderRight: 0, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <IconLayoutGrid size={20} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
            style={{ borderLeft: 0, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <IconFilter size={20} />
          </ActionIcon>
        </Group>

        <Button rightSection={<IconChevronDown size={16} />} variant="default">
          Export
        </Button>
      </Group>
    </Group>
  );
};

export default FilterInputs;
