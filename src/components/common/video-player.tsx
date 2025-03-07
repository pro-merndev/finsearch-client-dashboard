import {
  Card,
  Center,
  Flex,
  Group,
  Overlay,
  Progress,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import type React from "react";
import { useRef, useState, type CSSProperties } from "react";
import { ShareCircleIcon } from "../icons/share-circle-icon";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
  date?: string;
  style?: CSSProperties;
  className?: string;
}

export default function VideoPlayer({
  src = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  poster = "/placeholder.svg?height=400&width=600",
  width = "100%",
  height = "auto",
  title = "Watch our latest news videos",
  date = "Feb 3, 2025",
  style = {},
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const progressPercent = (current / duration) * 100;
      setProgress(progressPercent);
      setCurrentTime(formatTime(current));
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
        (e.clientX - progressBar.getBoundingClientRect().left) /
        progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  return (
    <Card
      style={{ width, height, ...style }}
      className={className}
      shadow="sm"
      radius="md"
      withBorder
      p={0}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
        }}
      />

      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)"
        opacity={1}
        zIndex={1}
      />

      <UnstyledButton
        style={{ position: "absolute", top: 16, right: 16, zIndex: 2 }}
      >
        <ShareCircleIcon />
      </UnstyledButton>

      <Center
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        <UnstyledButton onClick={togglePlay}>
          {isPlaying ? (
            <IconPlayerPause
              size={40}
              color="white"
              style={{
                padding: "5px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          ) : (
            <IconPlayerPlay
              size={40}
              color="white"
              style={{
                padding: "5px",
                borderRadius: "50%",
                border: "2px solid white",
              }}
            />
          )}
        </UnstyledButton>
      </Center>

      <Flex
        direction="column"
        gap={10}
        style={{
          position: "absolute",
          bottom: 16,
          zIndex: 2,
          width: "100%",
        }}
      >
        <Group style={{ padding: "0 16px" }}>
          <div>
            <Text size="xs" color="white" opacity={0.8}>
              {date}
            </Text>
            <Text size="md" fw={500} c="white">
              {title}
            </Text>
          </div>
        </Group>
        <Flex gap={10} style={{ padding: "0 16px" }} align="center">
          <Flex
            c="white"
            onClick={togglePlay}
            style={{
              cursor: "pointer",
            }}
          >
            {isPlaying ? (
              <IconPlayerPause size={16} />
            ) : (
              <IconPlayerPlay size={16} />
            )}
          </Flex>

          <div
            style={{
              flex: 1,
              cursor: "pointer",
            }}
            onClick={handleProgressClick}
          >
            <Progress
              value={progress}
              size="md"
              radius="xl"
              color="rgba(255, 255, 255, 1)"
              styles={{
                root: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
                section: { backgroundColor: "white" },
              }}
            />
          </div>
        </Flex>
        <Group
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <Text size="xs" color="white" opacity={0.8}>
            {currentTime}
          </Text>
          <Text size="xs" color="white" opacity={0.8}>
            {duration}
          </Text>
        </Group>
      </Flex>
    </Card>
  );
}
