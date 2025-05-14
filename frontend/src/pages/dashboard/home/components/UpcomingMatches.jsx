export const UpcomingMatches = () => (
  <div className=" bg-white/10 backdrop-blur-md upcoming rounded-xl py-[17px] pr-[20px] pl-[19px] text-white ">
    <h2 className="text-[16px] font-[500] mb-[20px]">Upcoming matches</h2>
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="flex justify-between match py-[20px] px-[19px] mb-[16px]"
      >
        <span className="text-[#FAFAFA] text-[14px] font-[400]">Arsenal VS Chelsea</span>
        <span className="text-[#FAFAFA] text-[14px] font-[400]">20:00</span>
      </div>
    ))}
  </div>
);
