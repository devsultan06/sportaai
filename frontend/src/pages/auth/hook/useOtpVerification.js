import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resendActivationCode, verifyOtp } from "../../../api/auth";

const useOtpVerification = () => {
  const email = localStorage.getItem("registeredEmail");
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(300); // 5 mins
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: "",
    severity: "error",
  });

  useEffect(() => {
    if (!email) {
      const storedEmail = localStorage.getItem("verifiedEmail");
      if (storedEmail) {
        navigate("/login");
      } else {
        navigate("/register");
      }
    }
  }, [navigate, email]);

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
      setResendCountdown(300);
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
      setSnackbarData({ open: false, message: "", severity: "error" });

      try {
        const result = await verifyOtp(email, enteredOtp);
        console.log("User verified successfully:", result);
        localStorage.setItem("verifiedEmail", email);
        localStorage.removeItem("registeredEmail");
        navigate("/login");
      } catch (error) {
        console.error("Verification failed:", error);

        setSnackbarData({
          open: true,
          message: error.message || "Verification failed",
          severity: "error",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      setSnackbarData({
        open: true,
        message: "Email not found. Please restart registration.",
        severity: "error",
      });
      return;
    }

    setResendLoading(true);
    setSnackbarData({ open: false, message: "", severity: "error" });

    try {
      const response = await resendActivationCode(email);
      setSnackbarData({
        open: true,
        message: response.message,
        severity: response.success ? "success" : "error",
      });
    } catch (error) {
      setSnackbarData({
        open: true,
        message: error.message,
        severity: "error",
      });
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
    snackbarData,
    resendCountdown,
    setSnackbarData,
    handleChange,
    handleKeyDown,
    handleSubmit,
    handleResendCode,
  };
};

export default useOtpVerification;
