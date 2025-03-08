import {
  Box,
  Divider,
  Collapse,
  Group,
  Text,
  TextInput,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";

interface RangeProps {
  label: string;
}

const Range = ({ label }: RangeProps) => {
  return (
    <Box my={8}>
      <Text size="xs" fw={500} mb={8}>
        {label}
      </Text>
      <Flex align="center" gap={8}>
        <TextInput
          w={"45%"}
          size="xs"
          placeholder="Min to"
          styles={{
            input: {
              fontSize: "12px",
              flex: 1,
            },
          }}
        />
        <Divider orientation="horizontal" size="xs" w={"10%"} />
        <TextInput
          w={"45%"}
          size="xs"
          placeholder="Max to"
          styles={{
            input: {
              fontSize: "12px",
              flex: 1,
            },
          }}
        />
      </Flex>
    </Box>
  );
};

const CollapsibleFirm = ({ isHidden }: { isHidden: string }) => {
  const [opened, { toggle }] = useDisclosure(false);

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
        <Divider color="gray.2" mt={10} />
        <CollapsibleFirm.Range label="Total Firm (In Millions)" />
        <CollapsibleFirm.Range label="High Net Worth Firm (In Millions)" />
        <CollapsibleFirm.Range label="Individual Firm (In Millions)" />
      </Collapse>
    </Box>
  );
};

CollapsibleFirm.Range = Range;

export default CollapsibleFirm;
