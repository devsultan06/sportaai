import { motion } from "framer-motion";
import { useEffect } from "react";
import Background from "../../components/ui/BackGround";
import Header from "../../components/layouts/Header";
import Hero from "../../components/layouts/Hero";

const Landing = () => {

    useEffect(() => {
        document.title = "Sporta AI";
    }, []);

    return (
        <Background bgImage="/images/bg3.png">
            <motion.div
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1, }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="flex flex-col justify-center items-center text-white h-fit max-860:px-2"
            >
                <Header />
                <Hero />
            </motion.div>
        </Background>
    );
};

export default Landing;
