import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, resendActivationCode } from "../../../api/auth";
import { toast } from "react-toastify";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);

      const { email, password } = data;
      console.log("Login Data:", data);

      const result = await loginUser(email, password);
      console.log("Login successful:", result);
      toast.success("Login successful! Redirecting to Sport page...");

      setTimeout(() => {
        navigate("/sport");
      }, 4000);
    } catch (error) {
      const { email } = data;

      console.error("Login failed:", error.message);

      if (
        error.message ===
        "Account not verified. Redirecting to verification page — please check your email for the code."
      ) {
        await resendActivationCode(email);

        toast.error(error.message);

        setTimeout(() => {
          navigate("/verify");
        }, 4000);
      } else if (
        error.message === "Invalid email or password. Please try again."
      ) {
        toast.error("Invalid email or password. Please try again.");
      } else {
        toast.error(error.message || "Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading };
};

export default useLogin;
