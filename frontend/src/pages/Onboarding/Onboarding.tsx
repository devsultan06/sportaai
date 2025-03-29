// @ts-ignore
/* eslint-disable */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import "swiper/css/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../components/ui/BackGround";
import Home from "./components/Home";
import Watch from "./components/Watch";
import Assistant from "./components/Asistant";

const Onboarding = () => {
    const navigate = useNavigate();
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <Background bgImage="/images/bg.png">
            <button
                onClick={() => navigate("/register")}
                className="absolute top-7 right-7 text-white opacity-80 px-4 py-2 rounded-full 
                           hover:bg-white/20 transition-opacity duration-200 cursor-pointer z-50"
            >
                Skip
            </button>


            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={setSwiperRef}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="relative z-10"
            >
                <SwiperSlide>
                    <Home swiperRef={swiperRef} />
                </SwiperSlide>

                <SwiperSlide>
                    <Watch swiperRef={swiperRef} />
                </SwiperSlide>

                <SwiperSlide>
                    <Assistant swiperRef={swiperRef} />
                </SwiperSlide>
            </Swiper>
        </Background>
    );
};

export default Onboarding;

