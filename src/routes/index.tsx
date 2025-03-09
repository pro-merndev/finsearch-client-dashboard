import MainDashboardLayout from "@/layouts/main-dashboard";
import ContactDetails from "@/pages/contact-details";
import ErrorPage from "@/pages/error";
import FirmSearch from "@/pages/firm-search";
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
      {
        path: "/firm-search",
        element: <FirmSearch />,
      },
      {
        path: "/contact-details",
        // element: <DashboardLayout />,
        element: <ContactDetails />,
      },

    ],
  },
]);

export default router;
