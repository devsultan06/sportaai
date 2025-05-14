export const AIInsights = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl text-white py-[17px] pr-[20px] pl-[19px]">
    <h2 className="text-lg font-semibold mb-4">AI Insights</h2>
    <div className="flex flex-col">
      <InsightItem
        title="Performance Trend"
        desc="Players efficiency increased"
        image="/images/recovery.png"
      />
      <InsightItem
        title="Statistical Analysis"
        desc="Team possession shows positive correlation"
        image="/images/graphline.png"
      />
      <InsightItem
        title="Team Dynamics"
        desc="Lineup prediction for next match"
        image="/images/teams2.png"
      />
    </div>
  </div>
);

const InsightItem = ({ title, desc, image }) => (
  <div className="flex match py-[12px] px-[16px] mb-[16px] items-center justify-between bg-[#2a2a2a] rounded-md">
    <div className="flex items-start gap-2">
      <img src={image} alt="Arrow Icon" className="w-[24px] h-[24px]" />
      <div>
        <h3 className="text-[14px] font-[400] mb-[2px] text-[#FAFAFA]">
          {title}
        </h3>
        <p className="text-[10px] font-[400] text-[#FAFAFA]">
          {desc}
        </p>
      </div>
    </div>

    <div className="">
      <img src="/images/left.png" alt="Arrow Icon" className="" />
    </div>
  </div>
);
