import { Box, useMantineTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { ReactNode } from "react";
import { FullScreen, FullScreenHandle } from "react-full-screen";

function FullScreenProvider({
  children,
  handle,
}: {
  children: ReactNode;
  handle: FullScreenHandle;
}) {
  const theme = useMantineTheme();
  return (
    <FullScreen handle={handle}>
      <Box
        h="100vh"
        bg={handle.active ? theme.colors.gray[0] : undefined}
        p={handle.active ? 20 : 0}
      >
        {children}
      </Box>
    </FullScreen>
  );
}

export default FullScreenProvider;
