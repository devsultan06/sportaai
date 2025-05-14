import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import logo from "/images/sidelogo.png";

import dashboardIcon from "/images/Home.png";
import exploreIcon from "/images/explore.png";
import inventoryIcon from "/images/invent.png";
import sponsorshipIcon from "/images/spons.png";
import matchIcon from "/images/live.png";
import aiIcon from "/images/dooda.png";
import settingsIcon from "/images/settings.png";
import profileIcon from "/images/profile.png";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const renderIcon = (src, alt) => (
    <img src={src} alt={alt} className="w-5 h-5 object-contain" />
  );

  return (
    <div className="h-screen bg-[#1E1E1E] text-white">
      <Sidebar
        collapsed={collapsed}
        breakPoint="md"
        className="custom-sidebar"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderRight: "none",
          width: collapsed ? "80px" : "260px",
        }}
      >
        <div>
          <div
            className={`p-4 flex items-center  ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && <img src={logo} alt="Sporta AI" className="h-6" />}

            {!collapsed && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-white ml-4 pt-[10px] flex justify-center items-center focus:outline-none"
              >
                <img src="/images/menu2.png" alt="Toggle" className="w-5 h-5" />
              </button>
            )}

            {collapsed && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-white mt-[10px] ml-[10px]  focus:outline-none"
              >
                <img src="/images/menu3.png" alt="Toggle" className="w-5 h-5" />
              </button>
            )}
          </div>

          <Menu iconShape="circle" className="mt-[30px] px-[10px]">
            {!collapsed && (
              <div className="text-gray-500 text-xs px-4 mb-[20px] text-[#8C8C8C] font-metropolis font-[600]">
                Overview
              </div>
            )}
          
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(dashboardIcon, "Dashboard")}
                {!collapsed && <span className="ml-4">Dashboard</span>}
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/explore"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(exploreIcon, "Explore")}
                {!collapsed && <span className="ml-4">Explore</span>}
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/inventory"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(inventoryIcon, "Inventory")}
                {!collapsed && <span className="ml-4">Inventory</span>}
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/sponsorship"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(sponsorshipIcon, "Sponsorship")}
                {!collapsed && <span className="ml-4">Sponsorship Hub</span>}
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/live-match"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(matchIcon, "Live Match")}
                {!collapsed && (
                  <span className="ml-4">Live Match Analytics</span>
                )}
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/ai"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(aiIcon, "AI")}
                {!collapsed && <span className="ml-4">Doola AI</span>}
              </div>
            </NavLink>
          </Menu>
        </div>

        <div className="mb-4 mt-[70px]">
          <Menu iconShape="circle">
            {!collapsed && (
              <div className="text-gray-500 text-xs px-4">Settings</div>
            )}
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `block w-full mb-[25px] px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(settingsIcon, "Settings")}
                {!collapsed && <span className="ml-4">Settings</span>}
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `block w-full px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  isActive
                    ? "bg-[#2A2A2A] text-white"
                    : "text-gray-400 hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              <div
                className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                  collapsed ? "justify-center" : "items-center"
                }`}
              >
                {renderIcon(profileIcon, "Profile")}
                {!collapsed && <span className="ml-4">Profile</span>}
              </div>
            </NavLink>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
