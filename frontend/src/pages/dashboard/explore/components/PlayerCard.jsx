import React from "react";

const PlayerCard = ({ name, subText, rating, image }) => {
  return (
    <div
      key={name}
      className="relative z-10 w-full h-[467px] whitespace-nowrap rounded-xl pick p-2"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100%", // or try 60%, 70%
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "40% 90% ",
      }}
    >
      <div className="absolute top-28  left-6 ">
        <p className="text-white text-[32px] lowercase today-name font-[400]">
          {rating}
        </p>
        <p className="font-metropolis text-[20px] -mt-[15px] font-[600]">CF</p>
      </div>
      <div className="absolute top-28  right-6  text-white today-name text-[19px] font-[400] px-[10px] py-[10px] rounded-full">
        <div>
          <img
            src="/images/fcb.png"
            alt="Player"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="/images/bra.png"
            alt="Player"
            className="w-8 h-8 -mt-[10px] rounded-full"
          />
        </div>
      </div>
      <img
        src="/images/vecla.png"
        alt={name}
        className="absolute opacity-100 z-10 bottom-[2px] h-[130px] left-[2px] right-[4px] w-[98.5%] "
      />

      <div className="bottom-0 mb-[16px] left-1/2 transform -translate-x-1/2 text-center absolute z-30">
        <div className="mt-2 ">
          <h3 className="font-[400] lowercase today-name text-[36px]">
            {name}
          </h3>

          <p className="text-[16px] font-[400] -mt-[15px]">{subText}</p>
          <p
          
            className="text-[10px] w-fit text-center mx-auto font-[400] bg-[#2a2a2a] px-[6px] py-[2.286px] rounded-[28.571px]"
          >
            Football
          </p>
          <button className="mt-3 cursor-pointer px-[16px] py-[4px] view text-white text-[16px] font-[400] transition">
            View full profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
