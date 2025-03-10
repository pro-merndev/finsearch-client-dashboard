import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RouterProvider } from "react-router";
import MantineThemeProvider from "./providers/mantine-theme-provider";
import router from "./routes";

export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <MantineThemeProvider>
        <RouterProvider router={router} />
      </MantineThemeProvider>
    </DndProvider>
  );
}
