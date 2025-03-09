import { ActionIcon, Box, Button, Group, TextInput } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconChevronDown,
  IconFilter,
  IconPlayerPause,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";

const FilterInputs = () => {
  // Filter states
  const [minAUM, setMinAUM] = useState("200");
  const [maxAUM, setMaxAUM] = useState("500");

  // Handle clearing min AUM filter
  const clearMinAUM = () => {
    setMinAUM("");
  };

  // Handle clearing max AUM filter
  const clearMaxAUM = () => {
    setMaxAUM("");
  };

  // Common styles for rounded elements
  const roundedStyle = {
    // borderRadius: "20px",
    // backgroundColor: "#f1f3f5",
    color: "#868E96",
    border: "none",
  };

  return (
    <Group mb="md" align="flex-start">
      <Box style={{ width: "250px" }}>
        <TextInput
          readOnly
          value={minAUM ? `Min Total AUM (In Millions): ${minAUM}` : ""}
          placeholder="Min Total AUM (In Millions)"
          styles={{
            input: {
              borderRadius: "20px",
              backgroundColor: "#f1f3f5",
              color: "#212529",
              "&::placeholder": {
                color: "#495057",
              },
            },
          }}
          rightSection={
            minAUM ? (
              <ActionIcon onClick={clearMinAUM} variant="transparent">
                <IconX style={{ color: "#212529" }} size={16} />
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
          styles={{
            input: {
              borderRadius: "20px",
              backgroundColor: "#f1f3f5",
              color: "#212529",
              "&::placeholder": {
                color: "#495057",
              },
            },
          }}
          rightSection={
            maxAUM ? (
              <ActionIcon onClick={clearMaxAUM} variant="transparent">
                <IconX style={{ color: "#212529" }} size={16} />
              </ActionIcon>
            ) : null
          }
        />
      </Box>

      <Group ml="auto" gap="xs">
        <ActionIcon
          variant="default"
          size="lg"
          style={{
            ...roundedStyle,
            // borderRadius: "50%",
          }}
        >
          <IconArrowsMaximize size={20} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          style={{
            color: "#868E96",
            border: "none",
          }}
        >
          <IconPlayerPause size={20} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="lg"
          style={{
            border: "none",
            color: "#868E96",
          }}
        >
          <IconFilter size={20} />
        </ActionIcon>

        <Button
          rightSection={<IconChevronDown size={16} />}
          variant="default"
          styles={{
            root: {
              color: "#212529",
              border: "1px solid #dee2e6",
              "&:hover": {
                backgroundColor: "#e9ecef",
              },
            },
          }}
        >
          Export
        </Button>
      </Group>
    </Group>
  );
};

export default FilterInputs;
