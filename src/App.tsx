import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { RouterProvider } from "react-router";
import PopoverProviders from "./components/providers/popover-providers";
import router from "./routes";

export default function App() {
  return (
    <MantineProvider stylesTransform={emotionTransform}>
      <MantineEmotionProvider>
        <PopoverProviders>
          <RouterProvider router={router} />
        </PopoverProviders>
      </MantineEmotionProvider>
    </MantineProvider>
  );
}
