import { motion } from "framer-motion";

const BouncingIcon = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-9 z-50 cursor-pointer"
      animate={{
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <img
        src="/images/ai-icon.png"
        alt="AI Icon"
        className="w-[90%] opacity-100"
      />
    </motion.div>
  );
};

export default BouncingIcon;
