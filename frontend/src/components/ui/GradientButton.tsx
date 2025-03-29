const GradientButton = ({
    text,
    icon,
    onClick,
    type = "button"
}: {
    text: string;
    icon?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="flex create w-full justify-center items-center gap-2 h-[50px] px-6 text-[#FCFCFC] text-[13px] font-bold rounded-[1000px] hover:opacity-90 transition-all"
        >
            {text}
            {icon && <img src={icon} alt="Button Icon" className="w-5 h-5" />}
        </button>
    );
};

export default GradientButton;
