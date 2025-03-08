import { Button, Card, Text } from "@mantine/core";

export default function ScheduleTrainingCard() {
  return (
    <Card
      padding="xl"
      radius="md"
      className="max-w-md w-full"
      styles={{
        root: {
          backgroundImage: `
            url('/meeting-schedule-bg.png'),
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)
          `,
          backgroundSize: "cover, 24px 24px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      h="100%"
    >
      <div className="relative z-10">
        <Text size="xl" fw={600} c="white" mb="md">
          Schedule a Training Session
        </Text>

        <Text size="sm" c="white" opacity={0.8} mb="xl" maw={400}>
          Id sed pharetra morbi in tempus dignissim imperdiet metus eget. Risus
          semper senectus orci neque nulla netus ultrices est ut. Varius semper.
        </Text>
      </div>
      <div>
        <Button variant="white" color="dark" size="md" radius="md">
          Schedule Meeting
        </Button>
      </div>
    </Card>
  );
}
