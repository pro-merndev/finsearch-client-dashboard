import { Box, Flex, Text } from "@mantine/core";
import { Sidebar } from "./sidebar";
import { FirmSearchTable } from "./table";
import FilterInputs from "./table/_components/filter-inputs";

const ContactDetails = () => {
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
      <Flex direction={{ base: "row" }} gap={{ base: "lg" }}>
        <Sidebar />
        <Box bg={"#fff"} style={{ borderRadius: "5px" }} p={20} w={"100%"}>
          <FilterInputs />
          <Box style={{ borderRadius: "20px" }}>
            <FirmSearchTable />
          </Box>
        </Box>
      </Flex>
    </main>
  );
};

export default ContactDetails;
