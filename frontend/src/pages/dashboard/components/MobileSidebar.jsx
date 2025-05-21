import React, { useEffect, useRef } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import logo from "/images/sidelogo.png";

// Your icon imports...
import dashboardIcon from "/images/Home.png";
import dashboardIconActive from "/images/homeactive.png";
import exploreIcon from "/images/explore.png";
import exploreIconActive from "/images/exploreactive.png";
import inventoryIcon from "/images/invent.png";
import inventoryIconActive from "/images/inventactive.png";
import sponsorshipIcon from "/images/spons.png";
import sponsorshipIconActive from "/images/sponsactive.png";
import matchIcon from "/images/live.png";
import matchIconActive from "/images/liveactive.png";
import aiIcon from "/images/dooda.png";
import settingsIcon from "/images/settings.png";
import settingsIconActive from "/images/settingsactive.png";
import profileIcon from "/images/profile.png";
import profileIconActive from "/images/profileactive.png";
// ... more icons

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setIsOpen]);

  const renderIcon = (src, alt, isActive, activeSrc = null) => (
    <img
      src={isActive && activeSrc ? activeSrc : src}
      alt={alt}
      className="w-5 h-5 object-contain"
    />
  );

  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        ref={sidebarRef}
        className="w-[260px] h-full bg-[#1E1E1E] text-white "
      >
        <div className="p-4 flex justify-between items-center">
          <img src={logo} alt="Sporta AI" className="h-6" />
          <button
            onClick={() => setIsOpen(false)}
            className="mt-2 cursor-pointer"
          >
            <img src="/images/menu2.png" alt="Close" className="w-5 h-5" />
          </button>
        </div>

        <Menu iconShape="circle" className="mt-4 p-4">
          <NavLink
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(
                  dashboardIcon,
                  "Dashboard",
                  isActive,
                  dashboardIconActive
                )}
                <span className="ml-4">Dashboard</span>
              </div>
            )}
          </NavLink>

          <NavLink
            to="/dashboard/explore"
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(
                  exploreIcon,
                  "Explore",
                  isActive,
                  exploreIconActive
                )}
                <span className="ml-4">Explore</span>
              </div>
            )}
          </NavLink>

          <NavLink
            to="/dashboard/inventory"
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(
                  inventoryIcon,
                  "Inventory",
                  isActive,
                  inventoryIconActive
                )}{" "}
                <span className="ml-4">Inventory</span>
              </div>
            )}
          </NavLink>
          <NavLink
            to="/dashboard/sponsorship"
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(
                  sponsorshipIcon,
                  "Sponsorship",
                  isActive,
                  sponsorshipIconActive
                )}{" "}
                <span className="ml-4">Sponsorship Hub</span>
              </div>
            )}
          </NavLink>

          <NavLink
            to="/dashboard/live-match"
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(matchIcon, "Live Match", isActive, matchIconActive)}{" "}
                <span className="ml-4">Live Match Analytics</span>
              </div>
            )}
          </NavLink>
          <NavLink
            to="/dashboard/ai"
            className={({ isActive }) =>
              `block mb-2 px-4 py-2 rounded-[100px] text-[16px] ${
                isActive
                  ? "bg-[#2A2A2A] text-white font-semibold"
                  : "text-gray-400 hover:bg-[#2A2A2A]"
              }`
            }
          >
            {({ isActive }) => (
              <div className="flex items-center">
                {renderIcon(aiIcon, "AI", isActive)}{" "}
                <span className="ml-4">Doola AI</span>
              </div>
            )}
          </NavLink>

          {/* Repeat NavLinks for Explore, Inventory, etc. */}
        </Menu>
      </div>

      {/* Overlay for outside click effect */}
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default MobileSidebar;
