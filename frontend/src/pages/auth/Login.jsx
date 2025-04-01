import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SocialAuth from "../../components/layouts/SocialAuth";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import { useEffect } from "react";

const Login = () => {
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
                className="flex justify-center w-full p-8 h-fit"
            >
                <div className="text-white text-center bg-opacity-50 rounded-lg">
                    <div>
                        <img src="/images/logo.png" alt="Logo" className="mx-auto mb-[60px] mt-[30px]" />
                    </div>
                    <h1 className="text-white text-[30px] font-bold mb-[5px]">Login to your account</h1>


                    <form className="flex w-[420px] max-600:w-[300px] flex-col items-start mt-[30px] mx-auto">
                        <TextField
                            label="Email address"
                            type="email"
                            placeholder="Enter email address"
                            icon="/images/envelope.png"
                        />

                        <TextField
                            label="Password"
                            type="password"
                            placeholder="Enter password"
                            icon="/images/Lock.png"
                        />

                        <div className="mt-[20px] w-full">
                            <GradientButton text="Login" />
                        </div>

                        <p className="text-white text-center mt-[20px] mx-auto opacity-70 text-[15px]">
                            <Link
                                to="/reset"
                                className="text-[#FFBB34] hover:underline cursor-pointer"
                            >
                                Forgot Passoword?
                            </Link>
                        </p>

                        <div className="flex justify-center w-full">
                            <SocialAuth type="login" />
                        </div>


                    </form>
                </div>
            </motion.div>
        </Background>
    );
};

export default Login;
