import { motion } from "framer-motion";

const images = [
    "/images/onb2.png", "/images/onb1.png", "/images/onb3.png",
    "/images/onb4.png", "/images/onb5.png", "/images/onb6.png",
    "/images/onb7.png", "/images/onb8.png", "/images/onb9.png",
    "/images/onb10.png", "/images/onb11.png", "/images/onb12.png",
];

const ImageGrid = () => {
    const rows = [];
    for (let i = 0; i < images.length; i += 3) {
        rows.push(images.slice(i, i + 3));
    }

    return (
        <div className="w-[450px] space-y-4">
            {rows.map((row, rowIndex) => (
                <motion.div
                    key={rowIndex}
                    className="grid grid-cols-3 gap-2"
                    initial={{ x: rowIndex % 2 === 0 ? -100 : 100, opacity: 0 }}
                    animate={{ x: [-100, 0, -window.innerWidth], opacity: [1, 1, 0] }}
                    transition={{ 
                        delay: 1 + rowIndex * 2, 
                        duration: 6, 
                        ease: "easeInOut", 
                        repeat: Infinity 
                    }}
                >
                    {row.map((src, index) => (
                        <img key={index} src={src} alt={`Sport ${index}`} className="w-full h-auto rounded-lg opacity-80" />
                    ))}
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;
