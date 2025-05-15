import CoachCard from "./CoachCard";

const coaches = [
  {
    name: "Raphinha",
    subText: "Raphael Dias Belloli",
    rating: 98,
    image: "/images/pick1.png",
  },
  {
    name: "Neymar",
    subText: "Neymar Da Silver Santos Jnr",
    rating: 49,
    image: "/images/pick6.png",
  },
  {
    name: "Osimen",
    subText: "Victor Osimen",
    rating: 59,
    image: "/images/pick7.png",
  },
];

const TopCoaches = () => {
  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-[20px] font-[400]">Top coaches</h2>
        <a href="#" className="text-[20px] font-[400] text-white underline">
          view all
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coaches.map((coach, index) => (
          <CoachCard key={index} {...coach} />
        ))}
      </div>
    </div>
  );
};

export default TopCoaches;
