import { createTheme, MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { ReactNode } from "react";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
const theme = createTheme({
  colors: {},

  headings: {
    fontFamily: "Roboto, sans-serif",
    // sizes: {
    //   h1: { fontSize: rem(36) },
    // },
  },
});

function MantineThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MantineProvider theme={theme} stylesTransform={emotionTransform}>
      <MantineEmotionProvider>{children}</MantineEmotionProvider>
    </MantineProvider>
  );
}

export default MantineThemeProvider;
