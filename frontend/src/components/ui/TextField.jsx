import { useState } from "react";

const TextField = ({ label, type, placeholder, icon }) => {
  const [inputType, setInputType] = useState(type || "text");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <div className="w-full mb-[20px]">
      <label className="block text-[#808080] mb-[5px] text-[15px] text-left">
        {label}
      </label>

      <div className="relative w-full input-wrapper">
        <input
          type={inputType}
          placeholder={placeholder}
          className="w-full h-[50px] bg-white/10 text-white placeholder:text-gray-500 border-none focus:outline-none rounded-[30px] px-4 pr-14 py-[10px] backdrop-blur-md relative z-10 text-[15px] opacity-80"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            if (
              !e.relatedTarget ||
              !e.relatedTarget.classList.contains("toggle-icon")
            ) {
              setIsFocused(false);
            }
          }}
        />

        <div className="absolute top-0 right-0 w-[70px] h-full rounded-r-[30px] bg-gradient-to-l from-[#2a2a2a] via-[#2a2a2a]/80 to-transparent pointer-events-none z-10"></div>

        {type === "password" ? (
          isFocused ? (
            <div
              className="absolute top-1/2 right-5 transform -translate-y-1/2 w-5 h-5 z-20 brightness-150 cursor-pointer toggle-icon"
              onMouseDown={togglePasswordVisibility}
              onTouchStart={togglePasswordVisibility}
            >
              <img
                src={
                  isPasswordVisible ? "/images/unview.png" : "/images/view.png"
                }
                alt="Toggle Password"
              />
            </div>
          ) : (
            <img
              src={icon}
              alt="Password Icon"
              className="absolute top-1/2 right-5 transform -translate-y-1/2 w-5 h-5 z-20 brightness-150"
            />
          )
        ) : (
          icon && (
            <img
              src={icon}
              alt="Input Icon"
              className="absolute top-1/2 right-5 transform -translate-y-1/2 w-5 h-5 z-20 brightness-150"
            />
          )
        )}
      </div>
    </div>
  );
};

export default TextField;
