import MainDashboardLayout from "@/layouts/main-dashboard";
import ErrorPage from "@/pages/error";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboardLayout />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);

export default router;
