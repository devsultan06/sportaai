import { alerts } from "../../../../data/alerts";

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

    {alerts.map((alert, i) => (
      <div key={i} className="alert-item bg-[#1f1f1f] p-4 ">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-start gap-3">
              <div>
                <img src="/images/club.png" alt="Alert Icon" className="" />
              </div>
              <div>
                <p className="text-[14px] w-[90%] font-[400] text-white">
                  {alert.message}
                </p>
                <div className="flex items-center gap-2 mt-[12px]">
                  <button className="review text-white px-3 py-[4px] rounded-[8px] text-[14px] font-[400]">
                    View
                  </button>
                  <button className="resolve text-white px-3 py-[4px] rounded-[8px] text-[14px] font-[400]">
                    Resolve
                  </button>
                </div>
                <p className="text-[13px] font-[500] ago  mt-[12px]">
                  {alert.time}
                </p>
              </div>
            </div>
          </div>

          <img src={alert.icon} alt="Arrow Icon" className="cursor-pointer" />
        </div>
      </div>
    ))}
  </div>
);
