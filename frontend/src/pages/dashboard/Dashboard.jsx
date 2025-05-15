import { Outlet } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import DashboardNavbar from "./components/DashboardNavbar";
import { useState } from "react";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex relative h-screen overflow-hidden">
      <div className="overflow-y-auto z-50">
        <SidebarMenu collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div
        className="flex-1 overflow-y-auto relative z-50 h-screen bg-[#121212] text-white"
        style={{
          backgroundImage: "url('/images/dashbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "90% 0%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <DashboardNavbar collapsed={collapsed} />

        <div className="pt-[153px] px-[33px] pb-[50px]">
          <Outlet />
        </div>

        <div className="fixed bottom-6 right-9 z-50">
          <img src="/images/ai-icon.png" alt="AI Icon" className="w-[90%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
