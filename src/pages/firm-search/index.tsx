import { Box, Flex, Text } from "@mantine/core";
import { Sidebar } from "./sidebar";
import { FirmSearchTable } from "./table";

const FirmSearch = () => {
  return (
    <main>
      <Flex direction={{ base: "row" }} justify={"space-between"} mb={20}>
        <Text size="xl" fw={"bolder"}>
          Firm Search
        </Text>
        <Text size="lg" c={"#495057"}>
          <Text span c={"#155F98"}>
            14,890
          </Text>{" "}
          Results
        </Text>
      </Flex>
      <Flex direction={{ base: "row" }} gap={{ base: "xl" }}>
        <Sidebar />
        <Box w={"100%"}>
          <FirmSearchTable />
        </Box>
      </Flex>
    </main>
  );
};

export default FirmSearch;
