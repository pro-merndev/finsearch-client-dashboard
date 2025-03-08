import VideoPlayer from "@/components/common/video-player";
import { Box, SimpleGrid } from "@mantine/core";

const HomeBannerVideosGrid = () => {
  return (
    <SimpleGrid
      mt={16}
      cols={{ base: 1, sm: 2, lg: 3 }}
      spacing={{ base: 10, sm: "xl" }}
      verticalSpacing={{ base: "md", sm: "xl" }}
    >
      <Box>
        <VideoPlayer
          src="https://www.w3schools.com/tags/mov_bbb.mp4"
          width="100%"
          height="400px"
          title="Elephants Dream - Custom Height"
          date="Mar 8, 2025"
          poster="/dummy-poster.png"
        />
      </Box>
      <Box>
        <VideoPlayer
          src="https://www.w3schools.com/tags/mov_bbb.mp4"
          width="100%"
          height="400px"
          title="Elephants Dream - Custom Height"
          date="Mar 8, 2025"
          poster="/dummy-poster.png"
        />
      </Box>
      <Box>
        <VideoPlayer
          src="https://www.w3schools.com/tags/mov_bbb.mp4"
          width="100%"
          height="400px"
          title="Elephants Dream - Custom Height"
          date="Mar 8, 2025"
          poster="/dummy-poster.png"
        />
      </Box>
    </SimpleGrid>
  );
};

export default HomeBannerVideosGrid;
