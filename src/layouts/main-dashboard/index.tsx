import { Outlet } from "react-router";
import Header from "./_components/header";


const MainDashboardLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainDashboardLayout;
