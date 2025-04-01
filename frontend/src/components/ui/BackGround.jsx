const Background = ({ children, bgImage }) => {
    return (
        <div
            className="font-metropolis w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }} 
        >
            {children}
        </div>
    );
};

export default Background;
