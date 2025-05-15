import FilterBar from "./components/FilterBar";
import { useState } from "react";
import TopPlayers from "./components/TopPlayers";
import TopCoaches from "./components/TopCoaches";

const categories = ["All", "Coaches", "Players", "Teams"];

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [rating, setRating] = useState("Rating");
  return (
    <div className="font-metropolis">
      <FilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        rating={rating}
        setRating={setRating}
        categories={categories}
      />
      {(activeCategory === "All" || activeCategory === "Players") && (
        <TopPlayers />
      )}
      {(activeCategory === "All" || activeCategory === "Coaches") && (
        <TopCoaches />
      )}
    </div>
  );
};

export default Explore;
