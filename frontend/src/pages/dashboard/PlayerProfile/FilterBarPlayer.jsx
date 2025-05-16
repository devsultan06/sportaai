import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const FilterBarPlayer = ({
  activeCategory,
  setActiveCategory,
  rating,
  setRating,
  categories,
  league,
  setLeague,
}) => {
  return (
    <div className=" block md:flex items-center justify-between rounded-xl text-white">
      <div className="flex space-x-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-[24px] font-poppins py-[8px] rounded-full text-[14px] font-[500] transition ${
              activeCategory === cat
                ? " filter text-[#2A2A2A]"
                : "bg-[#2A2A2A] text-WHITE hover:bg-[#2a2a2a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-[16PX]">
        <span className="text-[14px] font-[400] flex items-center">
          <img
            src="/images/league.png"
            alt="Search"
            className="cursor-pointer mr-[6px]"
          />
          League{" "}
        </span>

        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex justify-center w-full rounded-full bg-[#2A2A2A] px-4 py-2 text-[14px] font-[400] text-white hover:bg-[#1F1F1F]">
            {league}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className="ml-2 mt-[6px]"
            >
              <path
                d="M3.246 7.08703C3.20733 7.04936 3.042 6.90713 2.906 6.77464C2.05067 5.99789 0.650667 3.97159 0.223333 2.91102C0.154667 2.74996 0.00933333 2.34275 0 2.12518C0 1.91671 0.048 1.71797 0.145333 1.52833C0.281333 1.29193 0.495333 1.10229 0.748 0.998376C0.923333 0.931482 1.448 0.827569 1.45733 0.827569C2.03133 0.723656 2.964 0.666504 3.99467 0.666504C4.97667 0.666504 5.87133 0.723656 6.454 0.808735C6.46333 0.818477 7.11533 0.92239 7.33867 1.03604C7.74667 1.24452 8 1.65173 8 2.08751V2.12518C7.99 2.40899 7.73667 3.00584 7.72733 3.00584C7.29933 4.00925 5.968 5.9888 5.08333 6.78438C5.08333 6.78438 4.856 7.00844 4.714 7.10586C4.51 7.25783 4.25733 7.33317 4.00467 7.33317C3.72267 7.33317 3.46 7.24809 3.246 7.08703Z"
                fill="white"
              />
            </svg>{" "}
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-52 origin-top-right bg-[#1A1A1A]  rounded-md  focus:outline-none z-50">
            {["Champions League", "National League", "Laliga"].map((option) => (
              <MenuItem key={option}>
                {({ active }) => (
                  <button
                    onClick={() => setLeague(option)}
                    className={`${
                      active ? "bg-[#2a2a2a] " : ""
                    } block w-full text-left px-4 py-2 text-[14px] font-[400] text-white`}
                  >
                    {option}
                  </button>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>

      <div className="flex items-center space-x-[16PX]">
        <span className="text-[14px] font-[400] flex items-center">
          Sort by{" "}
          <img
            src="/images/filter.png"
            alt="Search"
            className="cursor-pointer ml-[8px]"
          />
        </span>

        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex justify-center w-full rounded-full bg-[#2A2A2A] px-4 py-2 text-[14px] font-[400] text-white hover:bg-[#1F1F1F]">
            {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              className="ml-2 mt-[6px]"
            >
              <path
                d="M3.246 7.08703C3.20733 7.04936 3.042 6.90713 2.906 6.77464C2.05067 5.99789 0.650667 3.97159 0.223333 2.91102C0.154667 2.74996 0.00933333 2.34275 0 2.12518C0 1.91671 0.048 1.71797 0.145333 1.52833C0.281333 1.29193 0.495333 1.10229 0.748 0.998376C0.923333 0.931482 1.448 0.827569 1.45733 0.827569C2.03133 0.723656 2.964 0.666504 3.99467 0.666504C4.97667 0.666504 5.87133 0.723656 6.454 0.808735C6.46333 0.818477 7.11533 0.92239 7.33867 1.03604C7.74667 1.24452 8 1.65173 8 2.08751V2.12518C7.99 2.40899 7.73667 3.00584 7.72733 3.00584C7.29933 4.00925 5.968 5.9888 5.08333 6.78438C5.08333 6.78438 4.856 7.00844 4.714 7.10586C4.51 7.25783 4.25733 7.33317 4.00467 7.33317C3.72267 7.33317 3.46 7.24809 3.246 7.08703Z"
                fill="white"
              />
            </svg>{" "}
          </MenuButton>
          <MenuItems className="absolute right-0 mt-2 w-32 origin-top-right bg-[#1A1A1A]  rounded-md  focus:outline-none z-50">
            {["Date", "Name", "Time"].map((option) => (
              <MenuItem key={option}>
                {({ active }) => (
                  <button
                    onClick={() => setRating(option)}
                    className={`${
                      active ? "bg-[#2a2a2a] " : ""
                    } block w-full text-left px-4 py-2 text-[14px] font-[400] text-white`}
                  >
                    {option}
                  </button>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
    </div>
  );
};

export default FilterBarPlayer;
