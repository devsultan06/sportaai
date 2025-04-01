import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full nav max-w-4xl px-6 py-3 mt-[30px] flex justify-between items-center">
      <div className="logo opacity-90">
        <img src="/images/logonav.png" alt="Logo" className="w-32 mt-[-10px]" />
      </div>
      <nav className=" space-x-6 text-[#FAFAFA] opacity-70 max-860:hidden">
        <a href="#" className=" hover:text-[#FFBB34]">Features</a>
        <a href="#" className=" hover:text-[#FFBB34]">About</a>
        <a href="#" className=" hover:text-[#FFBB34]">Blog</a>
      </nav>
      <div className="w-[170px]">
        <button
          type="button"

          className="flex create w-full font-metropolisBold justify-center items-center gap-2 h-[50px] px-1 text-[#1A1A1A] text-[13px] font-bold rounded-[1000px] hover:opacity-90 transition-all"
        >
          Get the App Now
          <img src="/images/continue.png" alt="Button Icon" className="w-6 h-5" />
        </button>
      </div>

    </header>
  );
};

export default Header;
