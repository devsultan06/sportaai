import React, { useEffect, useRef } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import logo from "/images/sidelogo.png";

// Your icon imports...
import dashboardIcon from "/images/Home.png";
import dashboardIconActive from "/images/homeactive.png";
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
          <button onClick={() => setIsOpen(false)} className="mt-2">
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

          {/* Repeat NavLinks for Explore, Inventory, etc. */}
        </Menu>
      </div>

      {/* Overlay for outside click effect */}
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
};

export default MobileSidebar;
