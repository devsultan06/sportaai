const DashboardNavbar = ({ collapsed }) => {
  console.log("Collapsed state in Navbar:", collapsed);

  const sidebarWidth = !collapsed ? 300 : 80;
  return (
    <div
      className="fixed top-0 right-0 bg-[#1E1E1E] font-metropolis text-white px-[40px] py-[22px] flex items-center justify-between"
      style={{
        width: `calc(100% - ${sidebarWidth}px)`,
        left: `${sidebarWidth}px`,
      }}
    >
      {" "}
      <div className="flex items-center space-x-4">
        <div className="ml-4">
          <h2 className="text-[16px] font-[700] leading-[24px]">  
            Good morning Alex
          </h2>
          <p className="text-[14px] font-[400] leading-[24px] ready ">
            Ready for your analysis
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[21px] bg-[#2A2A2A] w-[250px] xl:w-[400px]  px-4 py-[14px] rounded-[24px]">
        <img src="/images/search.png" alt="Search" className="cursor-pointer" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none font-poppins border-none search text-[14px] font-[400] flex-1 "
        />
      </div>
      <div className="flex items-center gap-[18px]">
        <img
          src="/images/settings.png"
          alt="Settings"
          className="w-5 h-5 cursor-pointer"
        />
        <div className="relative rounded-full mr-[10px] flex items-center justify-center cursor-pointer transition duration-200">
          <img
            src="/images/notification.png"
            alt="Notifications"
            className="w-5 h-5 cursor-pointer"
          />
          <span className="absolute top-0 right-0 bg-white rounded-full w-2.5 h-2.5" />
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src="/images/profilepic.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
          <img
            src="/images/arrow-bottom.png"
            alt="Dropdown"
            className=" cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
