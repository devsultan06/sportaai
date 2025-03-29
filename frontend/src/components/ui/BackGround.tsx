const Background = ({ children, bgImage }: { children: React.ReactNode; bgImage: string }) => {
    return (
        <div
            className="font-metrophobic w-full min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }} // Dynamically set bg image
        >
            {children}
        </div>
    );
};

export default Background;
