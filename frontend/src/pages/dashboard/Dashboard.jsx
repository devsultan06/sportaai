import { Outlet } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";

const Dashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed position */}
      <div className="overflow-y-auto z-50">
        <SidebarMenu />
      </div>

      {/* Main content - Scrolls independently */}
      <div className="flex-1 overflow-y-auto relative z-10 h-screen bg-[#121212] text-white p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
