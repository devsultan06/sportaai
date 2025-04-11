import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resendActivationCode, verifyOtp } from "../../../api/auth";
import { toast } from "react-toastify";

const useOtpVerification = () => {
  const email = localStorage.getItem("registeredEmail");
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(60);

  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setInterval(() => {
        setResendCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendCountdown]);

  useEffect(() => {
    const countdownStarted = localStorage.getItem("otpCountdownStarted");
    if (countdownStarted === "true") {
      setResendCountdown(60);
      localStorage.removeItem("otpCountdownStarted");
    }
  }, []);

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

      try {
        const result = await verifyOtp(email, enteredOtp);
        console.log("User verified successfully:", result);
        localStorage.setItem("verifiedEmail", email);
        localStorage.removeItem("registeredEmail");
        toast.success("User verified successfully: Redirecting...");

        setTimeout(() => {
          navigate("/login");
        }, 4000);
      } catch (error) {
        console.error("Verification failed:", error);
        toast.error(error.message || "Verification failed");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      toast.error("Email not found. Please restart registration.");
      return;
    }

    setResendLoading(true);

    try {
      const response = await resendActivationCode(email);
      setResendCountdown(60);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to resend code.");
    } finally {
      setResendLoading(false);
    }
  };

  return {
    otp,
    setOtp,
    inputRefs,
    loading,
    resendLoading,
    resendCountdown,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendCode,
  };
};

export default useOtpVerification;
