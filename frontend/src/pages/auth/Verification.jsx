import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import { verifyOtp } from "../../api/auth";

const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!email) {
      navigate("/register");
    } else {
      document.title = "Verify OTP | Sporta AI";
    }
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (value.match(/^[0-9]$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 3 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      setLoading(true);
      setError("");

      try {
        const result = await verifyOtp(email, enteredOtp);
        console.log("User verified successfully:", result);
        navigate("/login", { state: { email } });
      } catch (error) {
        console.error("Verification failed:", error);
        setError("Verification failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };
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
        className="flex justify-center w-full p-8 h-screen max-1075:h-fit"
      >
        <div className="text-white text-center bg-opacity-50 rounded-lg">
          <div>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mx-auto mb-[60px] mt-[30px]"
            />
          </div>
          <h1 className="text-white text-[30px] font-bold mb-[5px]">
            Enter the code
          </h1>
          <p className="w-[350px] text-center mx-auto opacity-80 shadow-md">
            We’ve sent a 4-digit code to your email, please enter it below to
            verify your identity.
          </p>

          <div className="flex code justify-center gap-4 mt-5">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  if (el) inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-[80px] h-[80px] text-center text-white opacity-80 text-xl border-2 border-gray-500 rounded-md bg-transparent appearance-none focus:outline-none focus:border-yellow-400 transition-all"
              />
            ))}
          </div>

          <p className="text-white opacity-70 text-center mx-auto text-[15px] my-[40px]">
            Didn't receive a code?
            <Link
              to="resend"
              className="text-[#FFBB34] hover:underline cursor-pointer"
            >
              {" "}
              Resend{" "}
            </Link>
          </p>

          <div className="mt-[20px] w-full">
            <GradientButton
              text="Verify and Proceed"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </motion.div>
    </Background>
  );
};

export default Verification;
