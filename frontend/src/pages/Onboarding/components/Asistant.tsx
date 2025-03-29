import { useNavigate } from "react-router-dom";
import GradientButton from "../../../components/ui/GradientButton";

const Assistant = ({ swiperRef }: { swiperRef: any }) => {
    const navigate = useNavigate();

    const goAuth = () => {
        navigate("/register");
    }

    return (


        <div

            className="flex max-860:flex-col max-860:gap-[30px] max-860:justify-center max-860:mx-auto justify-center items-center gap-[100px] w-full p-8 h-screen max-1075:h-fit"
        >
            <div className="relative opacity-70">
                <img
                    src="/images/chat.png"
                    alt="Smart Watch"
                    className="w-[400px] mix-blend-overlay"
                />
            </div>
            <div className="text-white text-center bg-opacity-50 rounded-lg">
                <div>
                    <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[100px]" />
                </div>

                <div className="slide mb-[30px]">
                    <button onClick={() => swiperRef?.slideTo(0)}></button>
                    <button onClick={() => swiperRef?.slideTo(1)}></button>
                    <button onClick={() => swiperRef?.slideTo(2)} className="active"></button>
                </div>

                <h1 className="text-white text-[30px] font-bold mb-[5px] w-[300px] mx-auto text-center">Meet Your AI Sports Assitant </h1>
                <p className="w-[280px] text-center mx-auto opacity-80 shadow-md my-[10px]">
                    Train smarter, track better, and push your limits with AI-driven insights
                </p>

                <div className="mt-[20px] w-[200px] mx-auto ">
                    <GradientButton text="Get Started" icon="/images/continue.png" onClick={goAuth} />
                </div>
            </div>
        </div>
    );
};

export default Assistant;
