const StatCards = () => {
  return (
    <div className="grid grid-cols-1 font-metropolis sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
      <div className="bg-[#2A2A2A] card rounded-[8px] px-[15px] py-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[14px] font-[400]">Total Teams</span>
          <div className="icon rounded-full p-2">
            <img src="/images/teams.png" alt="Team Icon" className="w-5 h-5" />
          </div>
        </div>
        <h2 className="text-[24px] font-[700] text-white mt-[4px]">15</h2>
        <div className="flex items-center mt-[11px] gap-1">
          <img src="/images/line.png" alt="Team Icon" className="w-4 h-4" />
          <p className="text-[#28A745] font-sora text-[13px] font-[400]">
            +0.56% <span className="text-white">Since last week</span>
          </p>
        </div>
      </div>

      <div className="bg-[#2A2A2A] card rounded-[8px] px-[15px] py-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[14px] font-[400]">
            Active Players
          </span>
          <div className="icon rounded-full p-2">
            <img
              src="/images/players.png"
              alt="Team Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
        <h2 className="text-[24px] font-[700] text-white mt-[4px]">87</h2>
        <div className="flex items-center mt-[11px] gap-1">
          <img src="/images/line.png" alt="Team Icon" className="w-4 h-4" />
          <p className="text-[#28A745] font-sora text-[13px] font-[400]">
            +0.56% <span className="text-white">Since last week</span>
          </p>
        </div>
      </div>

      <div className="bg-[#2A2A2A] card rounded-[8px] px-[15px] py-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[14px] font-[400]">
            AI Predictions
          </span>
          <div className="icon rounded-full p-2">
            <img
              src="/images/prediction.png"
              alt="Team Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
        <h2 className="text-[24px] font-[700] text-white mt-[4px]">93%</h2>
        <div className="flex items-center mt-[11px] gap-1">
          <img src="/images/danger.png" alt="Team Icon" className="w-4 h-4" />
          <p className="text-[#fff] font-sora text-[13px] font-[400]">
            Approaching threshold
          </p>
        </div>
      </div>

      <div className="bg-[#2A2A2A] card rounded-[8px] px-[15px] py-[20px]">
        <div className="flex items-center justify-between">
          <span className="text-white text-[14px] font-[400]">
            Recovery status
          </span>
          <div className="icon rounded-full p-2">
            <img
              src="/images/recovery.png"
              alt="Team Icon"
              className="w-5 h-5"
            />
          </div>
        </div>
        <h2 className="text-[24px] font-[700] text-white mt-[4px]">93%</h2>
        <div className="flex items-center mt-[11px] gap-1">
          <img src="/images/checked.png" alt="Team Icon" className="w-4 h-4" />
          <p className="text-[#fff] font-sora text-[13px] font-[400]">
            Optimal rest achieved{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
