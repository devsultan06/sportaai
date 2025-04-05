import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/auth";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    setLoading(true);
    setSnackbarData({ open: false, message: "", severity: "error" });

    try {
      const { email, password, confirmPassword, fullName } = data;
      const payload = {
        full_name: fullName,
        email,
        password,
        re_password: confirmPassword,
      };

      const result = await registerUser(payload);

      console.log("Registration Successful:", result);
      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("otpCountdownStarted", "true"); 
      navigate("/verify");
    } catch (error) {
      console.error("Registration Error:", error.message);
      setSnackbarData({
        open: true,
        message: error.message,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, snackbarData, setSnackbarData };
};

export default useRegister;
