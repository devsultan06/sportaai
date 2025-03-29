import GradientButton from "../../../components/ui/GradientButton";

const Watch = ({ swiperRef }: { swiperRef: any }) => {

    return (

        <div

            className="flex max-860:flex-col max-860:gap-[30px] max-860:justify-center max-860:mx-auto justify-center items-center gap-[80px] w-full p-8 h-screen max-1075:h-fit"
        >
            <div className="relative opacity-70">
                <img
                    src="/images/watch.png"
                    alt="Smart Watch"
                    className="w-[500px] mix-blend-screen"
                />
            </div>
            <div className="text-white text-center bg-opacity-50 rounded-lg">
                <div>
                    <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[100px]" />
                </div>
                <div className="slide mb-[30px]">
                    <button onClick={() => swiperRef?.slideTo(0)}></button>
                    <button onClick={() => swiperRef?.slideTo(1)} className="active"></button>
                    <button onClick={() => swiperRef?.slideTo(2)} ></button>
                </div>

                <h1 className="text-white text-[30px] font-bold mb-[5px] w-[300px] mx-auto text-center">Sync Your Smart Devices </h1>
                <p className="w-[250px] text-center mx-auto opacity-80 shadow-md my-[10px]">
                    Connect your devices and track performance in real time
                </p>

                <div className="mt-[20px] w-[200px] mx-auto ">
                    <GradientButton text="Continue" icon="/images/continue.png" onClick={() => swiperRef?.slideNext()} />
                </div>
            </div>
        </div>
    );
};

export default Watch;
