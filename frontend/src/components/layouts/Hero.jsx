import React from "react";

const Hero = () => {
    return (
        <section className="text-center max-w-5xl px-6 py-12">
            <p className="text-[15px]  uppercase launching">Launching 2025</p>
            <h1 className="text-[58px] max-860:text-[25px] font-bold mt-2 leading-tight header-text">
                Real-Time SPORTS <br /> INSIGHTS, POWERED BY ai
            </h1>
            <p className=" mt-4  max-860:w-full text-lg header-para w-[600px] mx-auto text-center">
                Track performance, analyze data, and gain AI-driven insights—anytime, anywhere.
                Elevate your game with real-time analytics on both mobile and desktop.
            </p>
            <div className="flex justify-center mt-6 items-center gap-3 font-metropolisBold">
                <div className="w-[200px]">
                    <button
                        type="button"

                        className="flex create w-full justify-center items-center gap-2 h-[50px] px-3 text-[#1A1A1A] text-[13px] rounded-[1000px] hover:opacity-90 transition-all"
                    >
                        Get the App Now
                        <img src="/images/continue.png" alt="Button Icon" className="w-6 h-5" />
                    </button>
                </div>
                <div className="w-[200px]">
                    <button
                        type="button"
                        onClick={() => window.open(`${window.location.origin}/onboarding`, "_blank")}

                        className="flex second create w-full justify-center items-center gap-2 h-[50px] px-3  text-[13px] rounded-[1000px] hover:opacity-90 transition-all"
                    >
                        Explore on Desktop
                        <img src="/images/up.png" alt="Button Icon" className="w-8 h-8" />
                    </button>
                </div>
            </div>
            <div className="flex justify-center mt-10  max-860:w-[250px]  max-860:text-center  max-860:mx-auto">
                <img src="/images/iphone.png" alt="Mobile App" className="z-10" />
                <img src="/images/desktop.png" alt="Desktop App" className="-ml-[110px] mt-[80px] z-1" />
            </div>
        </section>
    );
};

export default Hero;
