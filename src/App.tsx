import { MantineThemeProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router";
import router from "./routes";

export default function App() {
  return (
    <MantineThemeProvider>
      <RouterProvider router={router} />
    </MantineThemeProvider>
  );
}
