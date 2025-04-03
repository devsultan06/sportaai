import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner"; // Import the Oval spinner

const GradientButton = ({ text, icon, loading, onClick, type = "button" }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        bounceDamping: 10,
        bounceStiffness: 600,
      }}
      type={type}
      onClick={onClick}
      className="flex create w-full font-metropolisBold justify-center items-center gap-2 h-[50px] px-6 text-[#FCFCFC] text-[13px] font-bold rounded-[1000px] hover:opacity-90 transition-all"
    >
      {loading ? (
        <Oval
          visible={true}
          height="30"
          width="30"
          color="#fff"
          ariaLabel="oval-loading"
        />
      ) : (
        <>
          {text}
          {icon && <img src={icon} alt="Button Icon" className="w-6 h-5" />}
        </>
      )}
    </motion.button>
  );
};

export default GradientButton;
