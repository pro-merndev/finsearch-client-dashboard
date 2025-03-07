import MainDashboardLayout from "@/layouts/main-dashboard";
import ErrorPage from "@/pages/error";
import HomePage from "@/pages/home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainDashboardLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
