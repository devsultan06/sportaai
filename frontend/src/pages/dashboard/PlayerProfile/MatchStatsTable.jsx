import { useState } from "react";

const MatchStatsTable = () => {
  const matches = [
    {
      date: "Aug 13 2025",
      location: "Camp Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 2,
      goals: 1,
      assists: 1,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    {
      date: "Aug 17 2024",
      location: "Rinald Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 10,
      goals: 5,
      assists: 4,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    {
      date: "Aug 14 2027",
      location: "Barca Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 5,
      goals: 3,
      assists: 8,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    {
      date: "Aug 13 2025",
      location: "Camp Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 2,
      goals: 1,
      assists: 1,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    {
      date: "Aug 17 2024",
      location: "Rinald Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 10,
      goals: 5,
      assists: 4,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    {
      date: "Aug 14 2027",
      location: "Barca Nou",
      homeAway: "H",
      teamFor: "BAR",
      teamForLogo: "/images/fcb.png",
      result: "3 : 0",
      teamAgainst: "BAR",
      teamAgainstLogo: "/images/bra.png",
      position: "CF",
      shots: 5,
      goals: 3,
      assists: 8,
      yellow: "-",
      red: "-",
      minutes: "87'",
    },
    // You can duplicate or map more matches here
  ];

  const [selectedMatches, setSelectedMatches] = useState([]);

  const handleSelect = (index) => {
    setSelectedMatches((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const clearSelection = () => {
    setSelectedMatches([]);
  };

  const canCompare = selectedMatches.length === 2;

  return (
    <div className="relative">
      {/* Selection Toolbar */}
      {selectedMatches.length > 0 && (
        <div className="flex items-center my-[24px] justify-between bg-gray-800 text-white rounded-t-[16px]">
          <button
            className="flex items-center font-poppins gap-2 text-[14px] font-[500] leading-[24px] bg-[#2A2A2A] px-4 py-2 rounded-[24px]"
            onClick={clearSelection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                d="M1.46387 8.53484L8.53587 1.46484M1.46387 1.46484L8.53587 8.53484"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            {selectedMatches.length} selected
          </button>
          <div className="flex gap-2">
            <button
              className={`py-[8px] px-[24px] text-[14px] font-[500] text-[#1A1A1A] flex justify-between gap-2 items-center text-sm rounded ${
                canCompare ? "compare" : "compare-dis cursor-not-allowed"
              }`}
              disabled={!canCompare}
            >
              <img src="/images/compare.png" alt="Compare" className="" />
              Compare Matches
            </button>
          </div>
        </div>
      )}
      <div className="bg-[#2B2B2A] font-metropolis my-[24px] text-white rounded-[24PX] min-h-[400px] overflow-x-auto p-[16px]">
        <table className="min-w-full table-auto text-sm text-left">
          <thead>
            <tr className="">
              <th className="px-4 py-3"></th>
              <th className="px-4 py-3 text-[14px] font-[400] opacity-80">
                Date
              </th>
              <th className="px-4 py-3 w-[345px] text-[14px] font-[400] opacity-80">
                Location
              </th>
              <th className="px-4 py-3 text-[14px] font-[500] opacity-80">
                H/A
              </th>
              <th className="px-4 py-3 text-[14px] font-[500] opacity-80">
                For
              </th>
              <th className="px-4 py-3 text-[14px] font-[500] opacity-80">
                Results
              </th>
              <th className="px-4 py-3 text-[14px] font-[500] opacity-80">
                Against
              </th>
              <th className="px-4 py-3">POS</th>
              <th className="px-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM8.5 3.96125L10.0494 2.89563C10.9365 3.25294 11.7156 3.8344 12.3106 4.58313L11.8106 6.26687C11.7981 6.26687 11.785 6.27313 11.7725 6.2775L10.3463 6.74062C10.3249 6.74754 10.304 6.7559 10.2838 6.76562L8.5 5.53875V3.96125ZM5.9525 2.89563L7.5 3.96125V5.53875L5.715 6.76813C5.69476 6.7584 5.67387 6.75004 5.6525 6.74312L4.22625 6.28C4.21375 6.27563 4.20063 6.2725 4.18813 6.26937L3.68813 4.58563C4.28368 3.83555 5.06399 3.25317 5.9525 2.89563ZM5.14 10.9637H3.36875C2.85027 10.1576 2.55303 9.22924 2.50688 8.27188L3.88188 7.21688C3.89372 7.22208 3.90582 7.22667 3.91813 7.23063L5.345 7.69438C5.36409 7.70011 5.3835 7.7047 5.40313 7.70813L6.0775 9.67188C6.06813 9.68312 6.05875 9.69438 6.05 9.70625L5.16875 10.9194C5.15839 10.9337 5.1488 10.9485 5.14 10.9637ZM9.41813 13.3125C8.48891 13.56 7.5111 13.56 6.58188 13.3125L5.95313 11.5375C5.96125 11.5275 5.97 11.5181 5.9775 11.5075L6.85938 10.2937C6.86972 10.2797 6.87931 10.2651 6.88813 10.25H9.11188C9.12069 10.2651 9.13029 10.2797 9.14063 10.2937L10.0225 11.5075C10.03 11.5181 10.0388 11.5275 10.0469 11.5375L9.41813 13.3125ZM10.86 10.9619C10.8512 10.9466 10.8416 10.9318 10.8313 10.9175L9.94938 9.70625C9.94063 9.69438 9.93125 9.68312 9.92188 9.67188L10.5963 7.70813C10.6159 7.7047 10.6353 7.70011 10.6544 7.69438L12.0813 7.23063C12.0936 7.22667 12.1057 7.22208 12.1175 7.21688L13.4925 8.27188C13.4464 9.22924 13.1491 10.1576 12.6306 10.9637L10.86 10.9619Z"
                    fill="white"
                  />
                </svg>
              </th>
              <th className="px-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.6249 10.7319C5.87571 9.47103 6.49477 8.31285 7.40381 7.4038C8.62369 6.1865 10.2767 5.50284 12 5.50284C12.1502 5.50284 12.2999 5.50804 12.4489 5.51833L12.4489 6.51796C11.5586 6.44605 10.6632 6.59097 9.8398 6.94153L9.49773 8.79062L10.6132 9.90608L12.4489 9.56654L12.4489 18.4845C12.2998 18.4948 12.1501 18.5 12 18.5C10.7144 18.5 9.45772 18.1188 8.3888 17.4046C7.31988 16.6903 6.48676 15.6752 5.99479 14.4874C5.50282 13.2997 5.3741 11.9928 5.6249 10.7319ZM8.79063 9.49772L6.94287 9.83846C6.56742 10.7196 6.42746 11.6831 6.53672 12.6346L8.08087 13.4717C8.08197 13.471 8.08307 13.4703 8.08418 13.4697C8.09421 13.4636 8.1046 13.4574 8.11534 13.4522L9.45133 12.7712C9.47133 12.761 9.49201 12.7521 9.5132 12.7447L9.90609 10.6132L8.79063 9.49772ZM10.8209 17.3705L12.0734 16.118C12.0688 16.101 12.0651 16.0837 12.0623 16.0663L11.8277 14.5854C11.8254 14.5708 11.8241 14.5562 11.8228 14.5416L9.95735 13.6299C9.94105 13.6413 9.92408 13.6518 9.90653 13.6613L8.56966 14.3423C8.55815 14.3482 8.54635 14.3535 8.5343 14.3582L8.30803 16.0765C9.01762 16.7208 9.88426 17.1671 10.8209 17.3705Z"
                    fill="white"
                  />
                </svg>
              </th>
              <th className="px-2 py-3 bg-yellow-500/20 text-yellow-300 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.41943 20.3638L4.13584 7.99997C4.02698 7.59009 4.08649 7.15268 4.30128 6.78397C4.51606 6.41526 4.86853 6.14546 5.28114 6.03391L14.6156 3.51042C15.0282 3.39888 15.4672 3.45473 15.8359 3.66569C16.2047 3.87665 16.473 4.22544 16.5818 4.63533L19.8654 16.9992C19.9743 17.4091 19.9148 17.8465 19.7 18.2152C19.4852 18.5839 19.1327 18.8537 18.7201 18.9652L9.38563 21.4887C8.97302 21.6003 8.53406 21.5444 8.16533 21.3335C7.79659 21.1225 7.52829 20.7737 7.41943 20.3638Z"
                    fill="#FFFF00"
                  />
                </svg>
              </th>
              <th className="px-2 py-3 bg-red-500/20 text-red-300 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.41894 20.3638L4.13535 7.99997C4.02649 7.59009 4.086 7.15268 4.30079 6.78397C4.51557 6.41526 4.86804 6.14546 5.28065 6.03391L14.6151 3.51042C15.0278 3.39888 15.4667 3.45473 15.8354 3.66569C16.2042 3.87665 16.4725 4.22544 16.5813 4.63533L19.8649 16.9992C19.9738 17.4091 19.9143 17.8465 19.6995 18.2152C19.4847 18.5839 19.1322 18.8537 18.7196 18.9652L9.38514 21.4887C8.97253 21.6003 8.53357 21.5444 8.16484 21.3335C7.79611 21.1225 7.5278 20.7737 7.41894 20.3638Z"
                    fill="#FF0000"
                  />
                </svg>
              </th>
              <th className="px-2 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 1C4.2 1 1 4.2 1 8C1 11.8 4.2 15 8 15C11.8 15 15 11.8 15 8C15 4.2 11.8 1 8 1ZM10.2935 11L7.5 8.205V3.5H8.5V7.791L11 10.293L10.2935 11Z"
                    fill="white"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {matches.map((match, index) => {
              const isSelected = selectedMatches.includes(index);
              return (
                <tr
                  key={index}
                  className={`cursor-pointer space-y-5 ${
                    isSelected ? "bg-[#2B2623] " : ""
                  } hover:bg-blue-800 transition`}
                  onClick={() => handleSelect(index)}
                >
                  {" "}
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelect(index)}
                      onClick={(e) => e.stopPropagation()}
                      className="cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2  text-[14px] font-[400] opacity-80">
                    {match.date}
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[400] opacity-80">
                    {match.location}
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[500] opacity-80">
                    {match.homeAway}
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[500] opacity-80 flex items-center gap-2">
                    {match.teamFor}
                    <img
                      src={match.teamForLogo}
                      alt="team"
                      className="w-5 h-5 rounded-full"
                    />
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[500] opacity-80">
                    {match.result}
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[500] opacity-80 flex items-center gap-2">
                    <img
                      src={match.teamAgainstLogo}
                      alt="team"
                      className="w-5 h-5 rounded-full"
                    />
                    {match.teamAgainst}
                  </td>
                  <td className="px-4 py-2 text-[14px] font-[500] opacity-80">
                    {match.position}
                  </td>
                  <td className="px-2 py-2 text-[14px] font-[500] opacity-80">
                    {match.shots}
                  </td>
                  <td className="px-2 py-2 text-[14px] font-[500] opacity-80">
                    {match.goals}
                  </td>
                  <td className="px-2 py-2 text-[14px] font-[500] opacity-80">
                    {match.yellow}
                  </td>
                  <td className="px-2 py-2 text-[14px] font-[500] opacity-80">
                    {match.red}
                  </td>
                  <td className="px-2 py-2 text-[14px] font-[500] opacity-80">
                    {match.minutes}
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchStatsTable;
