import { motion } from "framer-motion";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import SocialAuth from "../../components/layouts/SocialAuth";
import { useEffect } from "react";

const Register = () => {
    useEffect(() => {
        document.title = "Register | Sporta AI"; 
    }, []);
    return (
        <Background bgImage="/images/bg.png">
            <motion.div
                initial={{ x: "-100vw", opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                exit={{ x: "-100vw", opacity: 0 }} 
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="flex justify-center w-full p-8"
            >
                <div className="text-white text-center bg-opacity-50 rounded-lg">
                    <h1 className="text-white text-[30px] font-bold">Create account</h1>
                    <p className="w-[300px] text-center mx-auto opacity-80 shadow-md">
                        Enter personal details to create a new account now
                    </p>

                    <form className="flex w-[420px] max-600:w-[300px] flex-col items-start mt-[30px] mx-auto">
                        <TextField label="Full Name" type="text" placeholder="Enter full name" icon="/images/User.png" />
                        <TextField label="Email address" type="email" placeholder="Enter email address" icon="/images/envelope.png" />
                        <TextField label="Password" type="password" placeholder="Enter password" icon="/images/Lock.png" />
                        <TextField label="Confirm Password" type="password" placeholder="Confirm Password" icon="/images/Lock.png" />

                        <div className="mt-[20px] w-full">
                            <GradientButton text="Create account" icon="/images/User-plus.png" />
                        </div>

                        <div className="flex justify-center w-full">
                            <SocialAuth type="signup" />
                        </div>
                    </form>
                </div>
            </motion.div>
        </Background>
    );
};

export default Register;
