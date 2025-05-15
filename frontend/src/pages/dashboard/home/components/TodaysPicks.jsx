const todaysPicksData = [
  {
    number: 89,
    name: "RAPHINHA",
    type: ["Football", "Barcelona", "CF"],
    stats: {
      goals: 10,
      assists: 6,
      matches: 14,
    },
    image: "/images/pick2.png",
  },
  {
    number: 95,
    name: "EMERY",
    type: ["Football", "Barcelona", "Coach"],
    stats: {
      wins: 14,
      draws: 4,
      losses: 2,
    },
    image: "/images/pick1.png",
  },
  {
    number: 85,
    name: "BURNLEY",
    type: ["Football", "Barcelona", "Team"],
    stats: {
      wins: 14,
      draws: 4,
      losses: 2,
    },
    image: "/images/pick3.png",
  },
  {
    number: 89,
    name: "RAPHINHA",
    type: ["Football", "Barcelona", "CF"],
    stats: {
      goals: 10,
      assists: 6,
      matches: 14,
    },
    image: "/images/pick2.png",
  },
  {
    number: 95,
    name: "EMERY",
    type: ["Football", "Barcelona", "Coach"],
    stats: {
      wins: 14,
      draws: 4,
      losses: 2,
    },
    image: "/images/pick1.png",
  },
  {
    number: 85,
    name: "BURNLEY",
    type: ["Football", "Barcelona", "Team"],
    stats: {
      wins: 14,
      draws: 4,
      losses: 2,
    },
    image: "/images/pick3.png",
  },
  // Add remaining cards as needed...
];

export const TodaysPicks = () => (
  <div className="rounded-xl w-full mt-[32px] text-white">
    <h2 className="text-[16px] font-[600] mb-4">Todays Picks</h2>
    <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-4">
      {todaysPicksData.map((pick, i) => (
        <div
          key={i}
          className="relative z-10 w-full h-[300px] whitespace-nowrap rounded-xl pick p-2"
          style={{
            backgroundImage: `url(${pick.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "40% 90% ",
          }}
        >
          <div className="absolute top-2 pick-number right-2 bg-black bg-opacity-60 text-white today-name text-[19px] font-[400] px-[10px] py-[10px] rounded-full">
            {pick.number}
          </div>
          <img
            src="/images/vec.png"
            alt={pick.name}
            className="absolute opacity-100 z-10 bottom-[2px] h-[130px] left-[2px] right-[4px] w-[98.5%] "
          />
          <div className="bottom-0 mb-[16px] absolute z-30">
            <div className="mt-2 ">
              <h3 className="font-[400] lowercase today-name text-[21px]">
                {pick.name}
              </h3>
              <div className="flex flex-wrap gap-2 mt-1">
                {pick.type.map((label, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-[400] bg-[#2a2a2a] px-[6px] py-[2.286px] rounded-[28.571px]"
                  >
                    {label}
                  </span>
                ))}
              </div>{" "}
              <div className="flex flex-wrap gap-2 mt-2">
                {Object.entries(pick.stats).map(([key, value]) => (
                  <span
                    key={key}
                    className="text-[11px] font-[400] text-white bg-[#2A2A2A] px-[6px] py-[2.286px] rounded-[28.571px]"
                  >
                    <span className="stat-number">{value}</span> {key}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
