import { Outlet, useLocation } from "react-router-dom";
import SidebarMenu from "./components/SidebarMenu";
import DashboardNavbar from "./components/DashboardNavbar";
import { useState } from "react";
import BouncingIcon from "./components/BouncingIcon";
import MobileSidebar from "./components/MobileSidebar";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const hideSidebar = location.pathname.includes("/dashboard/players/");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex relative h-screen overflow-hidden">
      <div className="overflow-y-auto z-50">
        {!hideSidebar && (
          <SidebarMenu collapsed={collapsed} setCollapsed={setCollapsed} />
        )}
      </div>

      <MobileSidebar isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />

      <div
        className="flex-1 overflow-y-auto relative z-40 h-screen bg-[#121212] text-white"
        style={{
          backgroundImage: "url('/images/dashbg.png')",
          backgroundSize: "cover",
          backgroundPosition: "90% 0%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {isMobileOpen ? (
          <div className="absolute  inset-0 bg-black opacity-50">
            <DashboardNavbar
              collapsed={collapsed}
              setIsMobileOpen={setIsMobileOpen}
            />

            <div className="pt-[153px] px-[33px] pb-[50px]">
              <Outlet />
            </div>
          </div>
        ) : (
          <>
            <DashboardNavbar
              collapsed={collapsed}
              setIsMobileOpen={setIsMobileOpen}
            />
            <div className="pt-[153px] px-[33px] pb-[50px]">
              <Outlet />
            </div>{" "}
          </>
        )}

        <BouncingIcon />
      </div>
    </div>
  );
};

export default Dashboard;
