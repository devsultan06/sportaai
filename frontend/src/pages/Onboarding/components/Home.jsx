import GradientButton from "../../../components/ui/GradientButton";
import ImageGrid from "./ImageGallery";

const Home = ({ swiperRef }) => {

    return (


        <div className="flex max-860:flex-col max-860:gap-[30px] max-860:justify-center max-860:mx-auto justify-center items-center gap-[100px] w-full p-8 h-fit">
            <div className="relative opacity-70">
                <ImageGrid />
            </div>
            <div className="text-white text-center bg-opacity-50 rounded-lg">
                <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[100px]" />
                <div className="slide mb-[30px]">
                    <button  onClick={() => swiperRef && swiperRef.slideTo(0)} className="active"></button>
                    <button  onClick={() => swiperRef && swiperRef.slideTo(1)}></button>
                    <button  onClick={() => swiperRef && swiperRef.slideTo(2)}></button>
                </div>

                <h1 className="text-white text-[30px] font-bold mb-[5px] w-[300px] mx-auto text-center">
                    One App. Every Sport
                </h1>
                <p className="w-[380px] text-center mx-auto opacity-80 shadow-md my-[10px]">
                    Track performance across multiple sports—running, cycling, swimming, and more.
                </p>

                <div className="mt-[20px] w-[200px] mx-auto">
                    <GradientButton text="Continue" icon="/images/arrow3.png" onClick={() => swiperRef?.slideNext()} />
                </div>
            </div>
        </div>
    );
};

export default Home;
