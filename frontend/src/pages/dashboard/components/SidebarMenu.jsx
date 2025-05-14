import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import logo from "/images/sidelogo.png";

import dashboardIcon from "/images/home.png";
import dashboardIconActive from "/images/homeactive.png";
import exploreIcon from "/images/explore.png";
import exploreIconActive from "/images/exploreactive.png";
import inventoryIcon from "/images/invent.png";
import sponsorshipIcon from "/images/spons.png";
import sponsorshipIconActive from "/images/sponsactive.png";
import matchIcon from "/images/live.png";
import matchIconActive from "/images/liveactive.png";
import aiIcon from "/images/dooda.png";
import settingsIcon from "/images/settings.png";
import settingsIconActive from "/images/settingsactive.png";
import profileIcon from "/images/profile.png";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const renderIcon = (src, alt, isActive, activeSrc = null) => (
    <img
      src={isActive && activeSrc ? activeSrc : src}
      alt={alt}
      className="w-5 h-5 object-contain"
    />
  );

  const Tooltip = ({ message }) => (
    <div className=" bg-black text-white text-sm px-2 py-1">{message}</div>
  );

  return (
    <div className="h-screen bg-[#1E1E1E] font-metropolis  text-white">
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
          width: collapsed ? "80px" : "300px",
        }}
      >
        <div>
          <div
            className={`p-4 flex items-center  ${
              collapsed ? "justify-center" : "justify-between"
            }`}
          >
            {!collapsed && <img src={logo} alt="Sporta AI" className="h-6 " />}

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
                className="text-white mt-[10px] focus:outline-none"
              >
                <img src="/images/menu3.png" alt="Toggle" className="w-5 h-5" />
              </button>
            )}
          </div>

          <Menu iconShape="circle" className="mt-[30px] ">
            {!collapsed && (
              <div className="text-[18px] px-4 mb-[20px] text-[#8C8C8C] font-[600]">
                Overview
              </div>
            )}
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`relative flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  } group`} // Add group class here
                >
                  {renderIcon(
                    dashboardIcon,
                    "Dashboard",
                    isActive,
                    dashboardIconActive
                  )}

                  {/* Tooltip that shows only on hover when collapsed */}
                  {collapsed && (
                    <div className="absolute left-[2%] top-[70%] bg-[#2A2A2A] text-white text-sm px-2 py-2 rounded-md z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Dashboard
                    </div>
                  )}

                  {/* Show text when not collapsed */}
                  {!collapsed && <span className="ml-4">Dashboard</span>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/dashboard/explore"
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(
                    exploreIcon,
                    "Explore",
                    isActive,
                    exploreIconActive
                  )}
                  {!collapsed && <span className="ml-4">Explore</span>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/dashboard/inventory"
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(inventoryIcon, "Inventory", isActive)}{" "}
                  {!collapsed && <span className="ml-4">Inventory</span>}
                </div>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/sponsorship"
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(
                    sponsorshipIcon,
                    "Sponsorship",
                    isActive,
                    sponsorshipIconActive
                  )}{" "}
                  {!collapsed && <span className="ml-4">Sponsorship Hub</span>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/dashboard/live-match"
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] whitespace-nowrap transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(
                    matchIcon,
                    "Live Match",
                    isActive,
                    matchIconActive
                  )}{" "}
                  {!collapsed && (
                    <span className="ml-4">Live Match Analytics</span>
                  )}
                </div>
              )}
            </NavLink>
            <NavLink
              to="/dashboard/ai"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(aiIcon, "AI", isActive)}{" "}
                  {!collapsed && <span className="ml-4">Doola AI</span>}
                </div>
              )}
            </NavLink>
          </Menu>
        </div>

        <div className="mb-4 mt-[70px]">
          <Menu iconShape="circle">
            {!collapsed && (
              <div className="text-[18px] px-4 mb-[20px] text-[#8C8C8C] font-[600]">
                Settings
              </div>
            )}
            <NavLink
              to="/dashboard/settings"
              className={({ isActive }) =>
                `block mb-[16px] px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(
                    settingsIcon,
                    "Settings",
                    isActive,
                    settingsIconActive
                  )}{" "}
                  {!collapsed && <span className="ml-4">Settings</span>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-[100px] text-[16px] transition-colors duration-200 ${
                  !collapsed ? "mx-2 w-[90%]" : ""
                } ${
                  isActive
                    ? "bg-[#2A2A2A] text-white font-[600] letter-[-0.24px] leading-[18px]"
                    : "text-gray-400 font-[400] hover:bg-[#2A2A2A] hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <div
                  className={`flex px-4 py-2 rounded-[100px] transition-colors duration-200 ${
                    collapsed ? "justify-center" : "items-center"
                  }`}
                >
                  {renderIcon(profileIcon, "Profile", isActive)}{" "}
                  {!collapsed && <span className="ml-4">Profile</span>}
                </div>
              )}
            </NavLink>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
