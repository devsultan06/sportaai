import { useParams } from "react-router-dom";
import PlayerProfileNavbar from "./PlayerProfileNavbar";
import FilterBarPlayer from "./FilterBarPlayer";
import { useState } from "react";
import MatchStatsTable from "./MatchStatsTable";

const playerData = {
  raphinha: {
    name: "Raphinha",
    fullName: "Raphael Dias Belloli",
    age: 29,
    height: "5.9",
    weight: 67,
    goalRate: "53%",
    injuryRate: "53%",
    playTime: "60’",
    assistRatio: "2:1",
    image: "/images/rap.png",
  },
  neymar: {
    name: "Neymar",
    fullName: "Neymar Da Silva Santos Jnr",
    age: 31,
    height: "5.9",
    weight: 68,
    goalRate: "70%",
    injuryRate: "30%",
    playTime: "75’",
    assistRatio: "1:1",
    image: "/images/pick4.png",
  },
  osimen: {
    name: "Osimen",
    fullName: "Victor Osimen",
    age: 26,
    height: "6.1",
    weight: 70,
    goalRate: "66%",
    injuryRate: "40%",
    playTime: "65’",
    assistRatio: "3:1",
    image: "/images/pick5.png",
  },
};

const categories = ["Matches", "Achievements", "Training schedule", "Injuries"];

const PlayerProfile = () => {
  const { id } = useParams();
  const player = playerData[id];

  if (!player) return <p className="text-black p-10">Player not found</p>;

  const [activeCategory, setActiveCategory] = useState("Matches");
  const [rating, setRating] = useState("Date");
  const [league, setLeague] = useState("Champions League");

  return (
    <div
      className="flex-1 font-metropolis overflow-y-auto relative z-50 h-screen bg-[#121212] text-white"
      style={{
        backgroundImage: "url('/images/dashbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "90% 0%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <PlayerProfileNavbar />

      <div className="pt-[153px] px-[33px] pb-[50px]">
        <div className=" grid font-metropolis grid-cols-1 xl:grid-cols-3 gap-6 text-white rounded-xl">
          <div className="col-span-1">
            <h2 className="text-[24px] font-[500] mb-[16px]">
              Player Analysis
            </h2>
            <div className="space-y-4 p-[16px] rounded-[24px] bg-white/10 backdrop-blur-md upcoming">
              <div className=" py-[8px] px-[16px] rounded-[16px] rate flex justify-between items-center">
                <span className="text-[18px] font-[400]">Goal Rate</span>{" "}
                <span className="text-[32px] font-[400] today-name">
                  {player.goalRate}
                </span>
              </div>
              <div className="py-[8px] px-[16px] rounded-[16px] rate flex justify-between items-center">
                <span className="text-[18px] font-[400]">Injury Rate</span>{" "}
                <span className="text-[32px] font-[400] today-name">
                  {player.injuryRate}
                </span>
              </div>
              <div className="py-[8px] px-[16px] rounded-[16px] rate flex justify-between items-center">
                <span className="text-[18px] font-[400]">Avg Play Time</span>{" "}
                <span className="text-[32px] font-[400] today-name">
                  {player.playTime}
                </span>
              </div>
              <div className="py-[8px] px-[16px] rounded-[16px] rate flex justify-between items-center">
                <span className="text-[18px] font-[400]">Goal to Assist</span>{" "}
                <span className="text-[32px] font-[400] today-name">
                  {player.assistRatio}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Player Image & Info */}
          <div className="col-span-2 bg-[#2a2a2a] px-[48px] pt-[89px] relative rounded-[12px]">
            <img
              src={player.image}
              alt={player.name}
              className="absolute right-32 z-50 -top-[85px] object-contain"
            />
            <div className="flex absolute right-[48px] bottom-[26px]">
              <img src="/images/bra.png" className="rounded-full" />
              <img src="/images/fcb.png" className="rounded-full -ml-[10px]" />
            </div>
            <div className="absolute -top-[80px] z-30 right-[15px]">
              <span className="today-name text-[240px] font-[400] text-[#4D4D4D]">
                9
              </span>
            </div>
            <div className="absolute top-[180px] z-30 right-[55px]">
              <span className="text-[36px] text-[#4D4D4D] font-[600]">LWF</span>
            </div>
            <div className="z-10 relative w-[200px]">
              <p className="text-[14px] opacity-80 font-[400] font-metropolis ">
                {player.fullName}
              </p>
              <h1 className="text-[48px] -mt-[10px] font-[400] today-name">
                {player.name}
              </h1>
              <div className="mt-[18px] space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <span className="text-[12px] font-[400] opacity-80">
                      Age
                    </span>
                    <span className="text-[32px] today-name font-[400]">
                      {player.age}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-[400] opacity-80">
                      Age
                    </span>
                    <span className="text-[32px] today-name font-[400]">
                      {player.age}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-[400] opacity-80">
                      Height
                    </span>
                    <span className="text-[32px] today-name font-[400]">
                      {player.height}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-[400] opacity-80">
                      Weight
                    </span>
                    <span className="text-[32px] today-name font-[400]">
                      {player.weight}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[48px]">
        <FilterBarPlayer
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          rating={rating}
          setRating={setRating}
          categories={categories}
          league={league}
          setLeague={setLeague}
        />

        <MatchStatsTable />
      </div>

      <div className="fixed bottom-6 right-9 z-50">
        <img src="/images/ai-icon.png" alt="AI Icon" className="w-[90%]" />
      </div>
    </div>
  );
};

export default PlayerProfile;
