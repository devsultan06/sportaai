import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 860) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full nav max-w-4xl px-6 py-3 mt-[30px] flex justify-between items-center relative">
      <div className="logo opacity-90">
        <img src="/images/logonav.png" alt="Logo" className="w-32 mt-[-10px]" />
      </div>

      <nav className="space-x-6 text-[#FAFAFA] opacity-70 max-860:hidden">
        <a href="#" className="hover:text-[#FFBB34]">
          Features
        </a>
        <a href="#" className="hover:text-[#FFBB34]">
          About
        </a>
        <a href="#" className="hover:text-[#FFBB34]">
          Blog
        </a>
      </nav>

      <div className="w-[170px] max-860:hidden">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            bounceDamping: 10,
            bounceStiffness: 600,
          }}
          type="button"
          className="flex create w-full font-metropolisBold justify-center items-center gap-2 h-[50px] px-1 text-[#1A1A1A] text-[13px] font-bold rounded-[1000px] hover:opacity-90 transition-all"
        >
          Get the App Now
          <img
            src="/images/continue.png"
            alt="Button Icon"
            className="w-6 h-5"
          />
        </motion.button>
      </div>

      <div
        className="menu rounded-full p-3 hidden max-860:block cursor-pointer"
        onClick={toggleMenu}
      >
        <img src="/images/menu.png" alt="Menu Icon" className="" />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#1A1A1A] text-white flex flex-col pt-[200px] pl-[50px] z-[9999]"
          >
            <div
              className="absolute top-5 right-5 cursor-pointer"
              onClick={toggleMenu}
            >
              <img src="/images/cancel.png" alt="Close" className="w-6 h-6" />
            </div>

            <ul className="flex flex-col  mb-[50px] gap-[50px] px-[5px] text-lg font-bold">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFBB34]"
                  onClick={toggleMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFBB34]"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FFBB34]"
                  onClick={toggleMenu}
                >
                  Blog
                </a>
              </li>
            </ul>

            <div className="w-[170px]">
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                transition={{
                  bounceDamping: 10,
                  bounceStiffness: 600,
                }}
                type="button"
                className="flex create w-full font-metropolisBold justify-center items-center gap-2 h-[50px] px-1 text-[#1A1A1A] text-[13px] font-bold rounded-[1000px] hover:opacity-90 transition-all"
              >
                Get the App Now
                <img
                  src="/images/continue.png"
                  alt="Button Icon"
                  className="w-6 h-5"
                />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
