import { useEffect } from "react";

const sportsOptions = [
  {
    id: 1,
    name: "Baseball",
    description: "America’s Pastime: Tradition, community, and timeless charm",
    logo: "/images/baseball.png",
  },
  {
    id: 2,
    name: "Football",
    description:
      "The Beautiful Game: Where passion meets artistry on the pitch",
    logo: "/images/football.png",
  },
  {
    id: 3,
    name: "Basketball",
    description:
      "Every Shot Counts: Precision, teamwork, and electrifying moments",
    logo: "/images/basketball.png",
  },
  {
    id: 4,
    name: "American Football",
    description: "Battle on the Gridiron: Power, strategy, and adrenaline",
    logo: "/images/baseball.png",
  },
  {
    id: 5,
    name: "Volley Ball",
    description:
      "Every Shot Counts: Precision, teamwork, and electrifying moments",
    logo: "/images/basketball.png",
  },
  {
    id: 6,
    name: "Wrestling",
    description: "Battle on the Gridiron: Power, strategy, and adrenaline",
    logo: "/images/baseball.png",
  },
];

const SportsSelection = ({ searchQuery, selectedSport, setSelectedSport }) => {
  useEffect(() => {
    const savedSport = sessionStorage.getItem("selectedSport");
    if (savedSport) {
      setSelectedSport(Number(savedSport));
    }
  }, []);

  const handleSelectSport = (sportId) => {
    setSelectedSport(sportId);
    sessionStorage.setItem("selectedSport", sportId.toString()); 
  };

  const filteredSports = sportsOptions.filter((sport) =>
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative flex flex-col gap-4 mt-[20px] opacity-70 pb-[50px]">
      {filteredSports.length > 0 ? (
        filteredSports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => handleSelectSport(sport.id)}
            className={`flex items-center backdrop-blur-md justify-between px-4 py-4 gap-[30px] w-full bg-[#2A2A2A] rounded-lg transition-all 
                        ${
                          selectedSport === sport.id
                            ? "bg-green-500 text-white"
                            : "bg-gray-800 text-gray-400"
                        }`}
          >
            <div className="flex items-center gap-3">
              <img src={sport.logo} alt={sport.name} className="w-10 h-10" />
              <div className="text-left sport">
                <h2 className="text-lg font-bold text-[#EAEAEA]">
                  {sport.name}
                </h2>
                <p className="text-[14px]">{sport.description}</p>
              </div>
            </div>
            <div
              className={`w-7 h-7 choose rounded-full border-2 flex items-center justify-center relative
                ${
                  selectedSport === sport.id
                    ? "border-white"
                    : "border-gray-500"
                }`}
            >
              {selectedSport === sport.id && (
                <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              )}
            </div>
          </button>
        ))
      ) : (
        <p className="text-center text-gray-500">No sports found</p>
      )}
    </div>
  );
};

export default SportsSelection;
