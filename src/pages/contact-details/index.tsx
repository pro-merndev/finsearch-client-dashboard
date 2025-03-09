import { Box, Flex } from "@mantine/core";
import AdvisorHeader from "./advisor-header";
import { FirmSearchTable } from "./table";
import { ContactSidebar } from "./sidebar";

const ContactDetails = () => {
  return (
    <main>
      <Flex direction={{ base: "row" }} justify={"space-between"} mb={20}>
        <AdvisorHeader />
      </Flex>
      <Flex direction={{ base: "row" }} gap={{ base: "lg" }}>
        <ContactSidebar />
        <Box bg={"#fff"} style={{ borderRadius: "5px" }} p={20} w={"100%"}>
          <Box style={{ borderRadius: "20px" }}>
            <FirmSearchTable />
          </Box>
        </Box>
      </Flex>
    </main>
  );
};

export default ContactDetails;
