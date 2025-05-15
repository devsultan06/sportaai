import PlayerCard from "./PlayerCard";

const players = [
  {
    name: "Raphinha",
    subText: "Raphael Dias Belloli",
    rating: 79,
    image: "/images/pick2.png",
  },
  {
    name: "Neymar",
    subText: "Neymar Da Silver Santos Jnr",
    rating: 58,
    image: "/images/pick4.png",
  },
  {
    name: "Osimen",
    subText: "Victor Osimen",
    rating: 34,
    image: "/images/pick5.png",
  },
];

const TopPlayers = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-[20px] font-[400]">Top players</h2>
        <a href="#" className="text-[20px] font-[400] text-white underline">
          view all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default TopPlayers;
