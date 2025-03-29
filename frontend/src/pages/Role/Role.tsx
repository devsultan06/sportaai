import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SocialAuth from "../../components/layouts/SocialAuth";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import { useEffect } from "react";
import RoleSelection from "./RoleSelection";

const Role = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "Login | Sporta AI";
    }, []);

    return (
        <Background bgImage="/images/bg.png">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-7 left-7 px-4 py-2 rounded-full 
                           hover:bg-white/20 transition-opacity duration-200"
            >
                <img src="/images/back.png" alt="Back" className="w-5 h-5" />
            </button>

            <motion.div
                initial={{ x: "100vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "-100vw", opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex justify-center w-full p-8 h-screen max-1075:h-fit"
            >
                <div className="text-white text-center bg-opacity-50 rounded-lg">
                    <div>
                        <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[60px] mt-[30px]" />
                    </div>
                    <h1 className="text-white text-[30px] font-bold mb-[5px]">Select your role</h1>
                    <p className="w-[300px] text-center mx-auto opacity-80 shadow-md">
                        Tell us your role so we can show you the features that matters to you
                    </p>

                    <RoleSelection />
                </div>
            </motion.div>
        </Background>
    );
};

export default Role;
