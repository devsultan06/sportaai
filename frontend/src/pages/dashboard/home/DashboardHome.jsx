import { AIInsights } from "./components/AIInsights";
import { QuickAlerts } from "./components/QuickAlerts";
import StatCards from "./components/StatCards";
import { TodaysPicks } from "./components/TodaysPicks";
import { UpcomingMatches } from "./components/UpcomingMatches";

const DashboardHome = () => {
  return (
    <div>
      <StatCards />

      <div className="grid font-metropolis grid-cols-1 xl:grid-cols-3 gap-6 pt-[42px]">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
          
          >
            <UpcomingMatches />
            <AIInsights />
          </div>
          {/* Todays picks */}
          <TodaysPicks />
        </div>

        {/* Right Column (1/3) */}
        <div className="col-span-1">
          <QuickAlerts />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
