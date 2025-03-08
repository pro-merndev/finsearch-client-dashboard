import { Box, Group, SimpleGrid, Text } from "@mantine/core";
import CustomizeButton from "./_components/customize-button";

const LatestUpdatesTab = () => {
  return (
    <Box>
      <Group justify="space-between" align="center" mt={24}>
        <Text component="h4" fz={20} fw={700}>
          Latest Updates
        </Text>
        <CustomizeButton />
      </Group>
      <SimpleGrid
        mt={16}
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "md" }}
        verticalSpacing={{ base: "md", sm: "md" }}
      >
        {/* TODO: Add latest updates */}
      </SimpleGrid>
    </Box>
  );
};

export default LatestUpdatesTab;
