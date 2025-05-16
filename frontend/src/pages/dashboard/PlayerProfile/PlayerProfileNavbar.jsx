import { useNavigate } from "react-router-dom";

const PlayerProfileNavbar = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed top-0 z-30 right-0 left-0 bg-[#1E1E1E] font-metropolis text-white px-[40px] py-[22px] flex items-center justify-between">
      {" "}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate(-1)}
          type="button"
          className="ml-4 flex items-center font-poppins gap-2 text-[14px] font-[500] leading-[24px] bg-[#2A2A2A] px-4 py-2 rounded-[24px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
          >
            <path
              d="M11.9999 3.99985H4.41394L6.70694 1.70685C6.79978 1.614 6.87343 1.50378 6.92368 1.38247C6.97393 1.26117 6.99979 1.13115 6.99979 0.999849C6.99979 0.868547 6.97393 0.738531 6.92368 0.617223C6.87343 0.495916 6.79978 0.385693 6.70694 0.292849C6.61409 0.200004 6.50387 0.126356 6.38256 0.0761089C6.26126 0.0258618 6.13124 -1.95655e-09 5.99994 0C5.86864 1.95655e-09 5.73862 0.0258618 5.61731 0.0761089C5.496 0.126356 5.38578 0.200004 5.29294 0.292849L0.585938 4.99985L5.29294 9.70685C5.38559 9.80004 5.49575 9.87398 5.61708 9.92445C5.73842 9.97491 5.86853 10.0009 5.99994 10.0009C6.13135 10.0009 6.26146 9.97491 6.38279 9.92445C6.50412 9.87398 6.61428 9.80004 6.70694 9.70685C6.89441 9.51932 6.99972 9.26501 6.99972 8.99985C6.99972 8.73468 6.89441 8.48038 6.70694 8.29285L4.41394 5.99985H11.9999C12.2652 5.99985 12.5195 5.89449 12.707 5.70696C12.8946 5.51942 12.9999 5.26507 12.9999 4.99985C12.9999 4.73463 12.8946 4.48028 12.707 4.29274C12.5195 4.10521 12.2652 3.99985 11.9999 3.99985Z"
              fill="white"
            />
          </svg>
          Back
        </button>
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
            className="w-9 h-9 rounded-full object-cover cursor-pointer"
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

export default PlayerProfileNavbar;
