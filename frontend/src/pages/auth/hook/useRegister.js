import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/auth";
import { toast } from "react-toastify";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    setLoading(true);

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
      toast.success("Registered successfully! Redirecting...");

      setTimeout(() => {
        navigate("/verify");
      }, 4000);
    } catch (error) {
      console.error("Registration Error:", error.message);
      toast.error(error.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading};
};

export default useRegister;
