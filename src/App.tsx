import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router";
import router from "./routes";

export default function App() {
  return (
    <MantineProvider
      defaultColorScheme="light"
      classNamesPrefix="fin-searches"
      withCssVariables
      withGlobalClasses
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
