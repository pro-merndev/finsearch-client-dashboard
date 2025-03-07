import { Anchor, Flex, Text } from "@mantine/core";

const HomeBannerHeader = () => {
  return (
    <Flex justify="space-between" align="center" w="100%" px={0}>
      <Text fw={700} fz="h4" c="dark">
        Watch our news videos
      </Text>
      <Anchor href="/news" c="dark" fw={500} fz="lg">
        View All
      </Anchor>
    </Flex>
  );
};

export default HomeBannerHeader;
