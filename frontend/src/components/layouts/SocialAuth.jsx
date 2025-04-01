import { Link } from "react-router-dom";

const SocialAuth = ({ type }) => {

    return (
        <div className="flex flex-col items-center justify-center w-full mt-[20px] text-center space-y-4">
            <p className="text-white opacity-70 text-[15px]">
                {type === "signup" ? "Or sign up with" : "Or log in with"}
            </p>

            <div className="flex space-x-4">
                <button className="w-10 h-10 flex items-center google justify-center bg-[#2A2A2A] rounded-lg shadow-md">
                    <img src="/images/google.png" alt="Google" className="w-6 h-6" />
                </button>
                <button className="w-10 h-10 flex items-center apple justify-center bg-[#2A2A2A] rounded-lg shadow-md">
                    <img src="/images/apple.png" alt="Apple" className="w-6 h-6" />
                </button>
            </div>

            <p className="text-white opacity-70 text-[15px]">
                {type === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
                <Link
                    to={type === "signup" ? "/login" : "/register"}
                    className="text-[#FFBB34] hover:underline cursor-pointer"
                >
                    {type === "signup" ? "Login" : "Sign Up"}
                </Link>
            </p>

        </div>
    );
};

export default SocialAuth;
