import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/auth";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarData, setSnackbarData] = useState({
    open: false,
    message: "",
    severity: "error",
  });
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      setSnackbarData({ open: false, message: "", severity: "error" });

      const { email, password } = data;
      console.log("Login Data:", data);

      const result = await loginUser(email, password);
      console.log("Login successful:", result);

      navigate("/sport");
    } catch (error) {
      console.error("Login failed:", error.message);

      setSnackbarData({
        open: true,
        message: error.message,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, snackbarData, setSnackbarData };
};

export default useLogin;
