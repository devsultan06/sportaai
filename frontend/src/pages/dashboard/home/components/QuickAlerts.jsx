export const QuickAlerts = () => (
  <div className=" rounded-xl  text-white">
    <div className="flex justify-between items-center alert-box py-[16px] rounded-t-md  px-[24px]">
      <h2 className="text-[16px] font-[600]">
        Quick alerts{" "}
        <span className=" bg-white rounded-[15px]  text-[#1a1a1a] text-[15px] font-[500] font-inter pt-[6px] px-[12px] pb-[7px]  ml-1">
          2
        </span>
      </h2>
      <div className="flex items-center gap-2">
        <button className="text-[13px] font-[500] font-inter read hover:underline">
          Mark all as read
        </button>

        <img src="/images/dots.png" alt="Team Icon" className="" />
      </div>
    </div>

    {[...Array(3)].map((_, i) => (
      <div key={i} className="alert-item">
        <p className="text-[14px] w-[80%] font-[400] font-metropolis text-[#FFf]">
          Coach Williams team has a 70% injury risk this month
        </p>
        <div className="flex items-center gap-2 mt-2">
          <button className="bg-blue-600 px-3 py-1 rounded text-sm">
            Review
          </button>
          <button className="bg-gray-700 px-3 py-1 rounded text-sm">
            Resolve
          </button>
          <span className="text-red-500 text-lg ml-auto">⚠️</span>
        </div>
        <p className=" text-[13px] font-[500] mt-1 ago">8 min ago</p>
      </div>
    ))}
  </div>
);
