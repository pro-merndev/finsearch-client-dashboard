import { Anchor, Flex, Text } from "@mantine/core";
import { Link } from "react-router";

const HomeBannerHeader = () => {
  return (
    <Flex justify="space-between" align="center" w="100%" px={0}>
      <Text fw={700} fz="h4" c="dark">
        Watch our news videos
      </Text>
      <Anchor to="/news" c="#0D395C" fw={500} fz="lg" component={Link}>
        View All
      </Anchor>
    </Flex>
  );
};

export default HomeBannerHeader;
