import VideoPlayer from "@/components/common/video-player";
import { Box, Grid, Text } from "@mantine/core";
import ScheduleTrainingCard from "./_component/schedule-meeting-card";

const WebinarTrainingTab = () => {
  return (
    <Box>
      <Grid>
        <Grid.Col span={7} visibleFrom="md">
          <Text component="h4" mt={24} fz={20} fw={700}>
            Watch Our Latest Webinar Replay
          </Text>
          <Box mt={16} h="100%">
            <VideoPlayer
              src="https://www.w3schools.com/tags/mov_bbb.mp4"
              width="100%"
              style={{
                height: "100%",
              }}
              title="Elephants Dream - Custom Height"
              date="Mar 8, 2025"
              poster="/dummy-poster.png"
              hideShare
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={12} hiddenFrom="md">
          <Text component="h4" mt={24} fz={20} fw={700}>
            Watch Our Latest Webinar Replay
          </Text>
          <Box mt={16} h="100%">
            <VideoPlayer
              src="https://www.w3schools.com/tags/mov_bbb.mp4"
              width="100%"
              style={{
                height: "100%",
              }}
              title="Elephants Dream - Custom Height"
              date="Mar 8, 2025"
              poster="/dummy-poster.png"
              hideShare
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={5} visibleFrom="md">
          <Text component="h4" mt={24} fz={20} fw={700}>
            Schedule a Training Session
          </Text>
          <Box mt={16} h="100%">
            <ScheduleTrainingCard />
          </Box>
        </Grid.Col>
        <Grid.Col span={12}  hiddenFrom="md" mt={80}>
          <Text component="h4" mt={24} fz={20} fw={700}>
            Schedule a Training Session
          </Text>
          <Box mt={16} h="100%">
            <ScheduleTrainingCard />
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default WebinarTrainingTab;
