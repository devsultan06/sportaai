import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SportsSelection from "./SportSelection";
import GradientButton from "../../components/ui/GradientButton";

const Sport = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSport, setSelectedSport] = useState(null);


    useEffect(() => {
        document.title = "Sport | Sporta AI";
    }, []);

    const goRole = () => {
        navigate("/role");
    }

    return (
        <div className="relative bg-[#121212] py-[20px] ">

            <button
                onClick={() => navigate(-1)}
                className="absolute top-7 left-7 px-4 py-2 rounded-full 
                           hover:bg-white/20 transition-opacity duration-200"
            >
                <img src="/images/back.png" alt="Back" className="w-5 h-5" />
            </button>

            <div
                className="font-metrophobic bg-bottom  w-fit  bg-no-repeat min-h-screen flex justify-center items-center mx-auto"
                style={{
                    backgroundImage: `url("/images/bg2.png")`,
                    backgroundPosition: "100% -200%",
                }}
            >


                <div className=" rounded-[20px] bg-black/40 backdrop-blur-md">

                    <div

                        className="flex justify-center p-8 h-fit  "
                    >
                        <div className="text-white text-center bg-opacity-50 rounded-lg">
                            <div>
                                <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[60px] mt-[30px]" />
                            </div>
                            <h1 className="text-[#EAEAEA] text-[30px] font-bold mb-[5px] text-left">Choose a sport</h1>
                            <p className="w-[550px] ml-0 opacity-80 shadow-md text-left text-[#EAEAEA]">
                                Get real-time analytics with AI-driven insights—track injury risks, monitor performance, and make precise comparisons to elevate your game
                            </p>



                            <div className="relative w-full input-wrapper mt-[30px]">
                                <img
                                    src="/images/search.png"
                                    alt="Input Icon"
                                    className="absolute top-1/2 left-5 transform -translate-y-1/2 w-5 h-5 z-20 brightness-150"

                                />
                                <input
                                    type="text"
                                    placeholder="Search by..."
                                    className="w-full h-[50px] bg-white/10 text-white placeholder:text-gray-500 border-none focus:outline-none pl-[50px] rounded-[10px] px-4 pr-14 py-[10px] backdrop-blur-md relative z-10 text-[15px] opacity-80"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}

                                />



                            </div>

                            <SportsSelection searchQuery={searchQuery} selectedSport={selectedSport} setSelectedSport={setSelectedSport} />

                        </div>
                    </div>
                </div>

            </div>

            {/* "Go Forward" Icon */}
            {selectedSport !== null && (
                <div className="absolute top-[40%] right-[100px] transform -translate-y-1/2 transition-opacity duration-300">
                    <GradientButton text="Continue" icon="/images/continue.png" onClick={goRole} />
                </div>
            )}

        </div >

    );
};

export default Sport;
